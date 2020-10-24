var express=require("express");
var router=express.Router();
var Owner=require("../model/owner");
var middleware=require("../middleware");

//Index Route
router.get("/",function(req,res){
	//get shop from DB
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
//DESTROY Shop
router.post("/:id",function(req,res){
	Owner.findByIdAndRemove(req.params.id,function(err){
		if(err){
			res.redirect("/grocery");
		}else{
			res.redirect("/grocery");
		}
	})
});


module.exports=router;