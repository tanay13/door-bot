require('dotenv').config()
const express = require('express')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const path = require ('path');
const User = require('./model/Users')
const Owner = require('./model/owner')
//REQUIRING ROUTES
// var carRoutes     =require("./routes/car"),
var groceryRoutes =require("./routes/grocery");
var laptopRoutes  =require("./routes/laptop");


const app = express()
const db = process.env.DB_CONNECT
app.use(express.json())
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname, '/public')))

//Connnect Mongo
mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true})
  .then(()=>console.log("db connected"))
  .catch(err=>console.log(err))


let Tokens = []

const posts=[
    {
        username:"Tanay",
        title:'1'
    },
    {
        username:"Tan",
        title:'2'
    }
]

app.get('/userreg',(req,res)=>{
    // res.render('userreg')
})


app.post("/userreg",(req,res)=>{
    const {name,password}=req.body
        //Validation passed
        User.findOne({name:name})
        .then(user=>{
            if(user){
                //User exists
               console.log("already present")
   
            }else{
                const newUser=new User({
                    name,
                    password
                    
                })

                // save user
                
                newUser.save()
                .then(user=>{
                   
                    console.log("saved")
                    User.find({})
                    .then((user)=>{
                        //console.log(user)
                    })
                })
                .catch(err=>console.log(err))
            }
        })

              
})

// ---------------------------------------------------------------

// LOGIN ROUTE 
app.post('/login',(req,res)=>{
    //Authenticate user
    const name = req.body.name

    const password = req.body.password

    User.findOne({name:name})
    .then(user=>{
        if(user==null){
            return res.status(400).send("cannot find user")
        }
        else{
            try{
                if(req.body.password === user.password){
                    // res.send("Success")
                    const accessToken = jwt.sign(name, process.env.ACCESS_TOKEN_SECRET)
                    // const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
                    
                    Tokens.push(accessToken)
                    console.log(Tokens)
                    res.json({accessToken:accessToken})
                }
                else{
                    res.send("not allowed")
                }
            }
            catch{
                res.status(500).send()
            }
            
        
        }
    })
    
    


})

// --------------------logout----------------------------------------------------

app.delete('/logout',(req,res)=>{
    tok = req.body.token
    Tokens = Tokens.filter(token=>token!==tok)
    res.sendStatus(204)
})


app.use("/laptop",laptopRoutes);
app.use("/grocery",groceryRoutes);
// app.use("/car",carRoutes);

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/posts',authenticateToken,(req,res)=>{
    res.json(posts)
})


function authenticateToken(req,res,next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(Tokens.includes(token)){
        if(token ==null) return res.sendStatus(401)
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err,user)=>{
            if(err) return res.sendStatus(403)
            req.user = user
            next()
        })
    }

    
}  

app.listen(3000,()=>console.log(`server running on Port 3000`))




