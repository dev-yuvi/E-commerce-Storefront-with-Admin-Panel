const mongoose=require("mongoose");


const productSchema=mongoose.Schema({
    name:String,
    description:String,
    price:Number,
    category:String,
    images:[String],
    seller:String,
    stock:Number,
    rating:Number

});

productModel=mongoose.model('product',productSchema);


module.exports=productModel;