require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser=require("body-parser")
const bcrypt = require('bcrypt')
const mongoose = require('mongoose');
const path = require ('path');
const passport  =require("passport");
const LocalStrategy=require("passport-local");
const flash    =require("connect-flash");
const User = require('./model/Users')
const Owner = require('./model/owner');
const session = require('express-session');
const Mongostore = require('connect-mongo')(session);
var middleware=require("./middleware");
const authRoutes   =require("./routes/auth");
var mbxgeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const token = process.env.MAPBOX_TOKEN
const geocoder = mbxgeocoding({accessToken:token})

//REQUIRING ROUTES
// var carRoutes     =require("./routes/car"),
var groceryRoutes =require("./routes/grocery");
var laptopRoutes  =require("./routes/laptop");

app.use(flash());    
const db = process.env.DB_CONNECT
//Connnect Mongo
mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true})
  .then(()=>console.log("db connected"))
  .catch(err=>console.log(err))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname, '/public')))

const store = new Mongostore({
	url:db,
	secret:"Hey There!!!!!",
	touchAfter:24*3600
});

store.on("error",function(e){
	console.log("SESSION STORE ERROR",e)

})

//PASSPORT CONFIG
app.use(session({
	store,
	secret:"Hey There!!!!!",
	resave:false,
	saveUninitialized:false
	
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



 //to add currentUser to every route
app.use(function(req,res,next){    
	res.locals.currentUser=req.user;
	res.locals.error=req.flash("error");
	res.locals.success=req.flash("success");
	next();
});



app.use("/laptop",laptopRoutes);
app.use(authRoutes);
app.use("/grocery",groceryRoutes);
// app.use("/car",carRoutes);

app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/new',middleware.isLoggedIn,(req,res)=>{
    res.render('new')
})

app.post("/new",async(req,res)=>{
	const geoData = await geocoder.forwardGeocode({
		query:req.body.address,
		limit:1
	}).send()
	//get data from form and add to campgrounds array
	var name=req.body.Shopname;
	var timing=req.body.timing;
	var image=req.body.imagePath;
	var desc=req.body.description;
    var address = req.body.address;
	var category = req.body.category;
	var geometry = geoData.body.features[0].geometry
	var author={
		id:req.user._id,
		username:req.user.username
	}
	var newOwner={Shopname:name,timing:timing,imagePath:image,description:desc,address:address,category:category,geometry:geometry,author:author}
	//create new campground and save to database
	Owner.create(newOwner,function(err,newlyCreated){
		if(err){
			console.log(err);
			
		}else{
			console.log(newlyCreated);
			res.redirect("/");
		}
	});
	
	
});


const port = process.env.PORT || 3000

app.listen(port,()=>console.log(`server running on Port ${port}`))

