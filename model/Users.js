const mongoose=require("mongoose");
var passportLocalMongoose=require("passport-local-mongoose");
const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        //required:true
    }
});

UserSchema.plugin(passportLocalMongoose);

module.exports=mongoose.model("User",UserSchema);