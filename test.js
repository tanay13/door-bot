require('dotenv').config()
var mongoose = require('mongoose')
const User = require('./model/Users')
const Owner = require('./model/owner')



const db = process.env.DB_CONNECT
//Connnect Mongo
mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true})
  .then(()=>console.log("db connected"))
  .catch(err=>console.log(err))

 User.find({})
 .then((user)=>{
     console.log(user)
 })
