var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../model/Users");


// Register Route

router.get('/userreg', (req, res) => {
    res.render('register')
})


router.post("/userreg", async(req, res) => {
    try{       
        var newUser=new User({name:req.body.name,username:req.body.username});
        // waiting for this to register
        const registeredUser = await User.register(newUser,req.body.password)
        // res.status(201).send(newUser)
        res.redirect('/')
        // logging just to ensure the user is saved
        
    }
    catch(e){
        //throwing errors
        console.log(e)
    }
	
})


// LOGIN ROUTE 

router.get("/login", (req, res) => {
    res.render("login")
})
router.post('/login',passport.authenticate('local', {
      failureRedirect: '/login',
    }),(req, res)=>{
        res.redirect('/')
  
  });
  
//Logout Route


router.get("/logout",function(req,res){
	req.logout();
	res.redirect("/")
});


module.exports = router;