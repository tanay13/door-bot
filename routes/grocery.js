var express=require("express");
var router=express.Router();
var Owner=require("../model/owner");


//Index Route
router.get("/",function(req,res){
	//get campgrounds from DB
	Owner.find({category:"Grocery"},function(err,allgrocery){
		if(err){
			console.log(err);
		}else{
			res.render("grocerypage",{Owner:allgrocery});
		}
	});
	
});
//SHOW - show more info 
router.get("/:id",function(req,res){
		
		Owner.findById(req.params.id,function(err,foundgrocery){
			if(err){
				console.log(err);
			}else{	
				res.render("grocerydesc",{Owner:foundgrocery});
			}
			
		});
		
	});

module.exports=router;