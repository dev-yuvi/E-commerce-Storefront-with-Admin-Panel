const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    name:String,
    email:{type:String,unique:true},
    password:String,
    role:{type:String,enum:['user','admin'],default:'user'}
});


userModel=mongoose.model('user',userSchema);

module.exports=userModel;