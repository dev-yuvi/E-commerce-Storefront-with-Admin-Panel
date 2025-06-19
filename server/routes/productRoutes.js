const express=require("express");
const{getProducts,addProducts,singleProduct}=require("../controllers/productController")
const{authMiddleware}=require("../middleware/authMiddleware")
const router=express.Router();

router.get('/',getProducts);
router.route("/product/:id").get(singleProduct);
router.post('/',authMiddleware,addProducts);


module.exports=router;