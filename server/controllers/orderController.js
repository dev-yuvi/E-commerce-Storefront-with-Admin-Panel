const Order=require("../models/Order");



exports.createOrder = async (req, res) => {
  const order = await Order.create({ ...req.body, userId: req.user.userId });
  res.status(201).json(order);
};

exports.getOrders=async (req,res)=>{
  const orders= await Order.find();
  res.json(orders);
}