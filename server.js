require('dotenv').config()
const express = require('express')
const bodyParser=require("body-parser")
const bcrypt = require('bcrypt')
const mongoose = require('mongoose');
const path = require ('path');
const passport  =require("passport");
const LocalStrategy=require("passport-local");
const flash    =require("connect-flash");
const User = require('./model/Users')
const Owner = require('./model/owner');
var middleware=require("./middleware");
const authRoutes   =require("./routes/auth");
//REQUIRING ROUTES
// var carRoutes     =require("./routes/car"),
var groceryRoutes =require("./routes/grocery");
var laptopRoutes  =require("./routes/laptop");


const app = express()
app.use(flash());    
const db = process.env.DB_CONNECT
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname, '/public')))

//PASSPORT CONFIG
app.use(require("express-session")({
	secret:"Hey There!!!!!",
	resave:false,
	saveUninitialized:false
	
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use(function(req,res,next){     //to add currentUser to every route
	res.locals.currentUser=req.user;
	next();
});


//Connnect Mongo
mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true})
  .then(()=>console.log("db connected"))
  .catch(err=>console.log(err))


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

app.post("/new",middleware.isLoggedIn,function(req,res){

	//get data from form and add to campgrounds array
	var name=req.body.Shopname;
	var timing=req.body.timing;
	var image=req.body.imagePath;
	var desc=req.body.description;
    var address = req.body.address;
    var category = req.body.category;
	var newOwner={Shopname:name,timing:timing,imagePath:image,description:desc,address:address,category:category}
	//create new campground and save to database
	Owner.create(newOwner,function(err,newlyCreated){
		if(err){
			console.log(err);
			
		}else{
			console.log(newlyCreated);
			res.redirect("/");
		}
	});
	//redirect back to campgrounds page
	
});



app.listen(3000,()=>console.log(`server running on Port 3000`))




