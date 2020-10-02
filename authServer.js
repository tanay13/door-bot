require('dotenv').config()
const express = require('express')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = require('./model/Users')
const app = express()

app.use(express.json())
const db = process.env.DB_CONNECT
//Connnect Mongo
mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true})
  .then(()=>console.log("db connected"))
  .catch(err=>console.log(err))



app.post('/token',(req,res)=>{
    const refreshToken = req.body.token
    
    if(refreshToken == null) return res.sendStatus(401)
    if(!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET,(err,user)=>{
        if(err) return res.sendStatus(403)
        const accessToken = generateAccessToken({name:user.name})
        res.json({accessToken:accessToken})
        
    })
    // console.log(refreshTokens)
})




// function generateAccessToken(user){
//     return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
// }





























// const users = [

// ]
// app.get('/users',(req,res)=>{
//     res.json(users)
// })

// app.post('/users',async(req,res)=>{

//   
app.listen(4000,()=>console.log(`server running on Port 4000`))