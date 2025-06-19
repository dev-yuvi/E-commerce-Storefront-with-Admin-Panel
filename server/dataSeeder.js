const mongoose=require("mongoose");
const dotenv=require("dotenv");


const Product=require("./models/Product");
const products=require("./data/products.json");

dotenv.config();


mongoose.connect(process.env.MONGO_URI)
.then(async()=>{
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("Sample products seeded ✅");
    process.exit();
})
.catch((err)=>{
    console.error("DB Seed Error:",err);
    process.exit(1);
});