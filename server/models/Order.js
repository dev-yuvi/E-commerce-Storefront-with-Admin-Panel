const mongoose=require("mongoose");


const orderSchema=mongoose.Schema({
    userId:mongoose.Schema.Types.ObjectId,
    items:[{productId:mongoose.Schema.Types.ObjectId,quantity:Number}],
    totalAmount:Number,
    paymentStatus:String,
    orderStatus:String,
    createdAt:{type:Date,default:Date.now}
});


const orderModel=mongoose.model('order',orderSchema);


module.exports=orderModel;