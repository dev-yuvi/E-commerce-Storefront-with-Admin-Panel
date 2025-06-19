const Product=require("../models/Product");


// Get Product
exports.getProducts=async(req,res)=>{
   const query= req.query.keyword?{name:{
        $regex:req.query.keyword,
        $options:'i'
    }}:{}
    const products=await Product.find(query);
    res.json({products});
}
// Get Single Product
exports.singleProduct=async(req,res,next)=>{
    
    try {
        
    const product=await Product.findById(req.params.id);
         res.json({
         product
    })
    } catch (error) {
        res.status(404).json({
            sucess:false,
            messege:"The Product can not in the database"
        })
    }
   
}

// Add Product
exports.addProducts=async(req,res)=>{
    const product=await Product.create(req.body);
    res.status(201).json({product});
}