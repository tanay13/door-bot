var Owner=require("../model/Users");

// all the middlewares

var middlewareObj={};
	middlewareObj.Ownership=function(req,res,next){
		if(req.isAuthenticated()){
	Owner.findById(req.params.id,function(err,foundshop){
		if(err){
			req.flash("error","Shop not found");
			res.redirect("back");
		}else{
			
			if(foundshop.author.id.equals(req.user._id)){
				next();
				
			}else{
				req.flash("error","You don't have permission to do that");
			
				res.redirect("back");
			}
			
		}
		
	});
		
	}else{
		req.flash("error","You don't have permission to do that");
		res.redirect("back");
		
	}
    
}
	

middlewareObj.isLoggedIn=function(req,res,next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect("/login");
	
}

module.exports=middlewareObj