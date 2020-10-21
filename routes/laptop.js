var express=require("express");
var router=express.Router();
var Owner=require("../model/owner");
var middleware=require("../middleware");

//Index Route
router.get("/",function(req,res){
	//get campgrounds from DB
	Owner.find({category:"Laptop"},function(err,allLaptop){
		if(err){
			console.log(err);
		}else{
			res.render("laptoppage",{Owner:allLaptop});
		}
	});
	
});
//SHOW - show more info 
router.get("/:id",middleware.isLoggedIn,function(req,res){
		
		Owner.findById(req.params.id,function(err,foundLaptop){
			if(err){
				console.log(err);
			}else{	
				res.render("lapdesc",{Owner:foundLaptop});
			}
			
		});
		
	});

module.exports=router;