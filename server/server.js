const express=require("express");
const cors=require("cors");
const dotenv=require("dotenv");
dotenv.config();

const ConnectDB=require("./config/db")
ConnectDB();
const app=express();
app.use(cors());
app.use(express.json());

app.use('/api/auth',require('./routes/authRoutes'));
app.use('/api/products',require('./routes/productRoutes'));
app.use('/api',require('./routes/productRoutes'));
app.use('/api/orders',require("./routes/orderRoutes"));
app.use('/api/payment',require('./routes/paymentRoutes'));
const PORT=process.env.PORT||5000;


app.listen(PORT,()=>console.log(`The server Connected To The ${PORT}`))
