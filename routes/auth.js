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
        //random username.. will fix it later
        c="tan100";
        var newUser=new User({name:req.body.name,username:c});
        // waiting for this to register
        const registeredUser = await User.register(newUser,req.body.password)
        res.redirect('/')
        // logging just to ensure the user is saved
        console.log(newUser)
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
  



router.get("/logout",function(req,res){
	req.logout();
	res.redirect("/")
});


module.exports = router;