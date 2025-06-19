
import React, { useEffect, useState } from 'react';
import AdminSidebar from '../components/AdminSidebar';

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('/api/orders').then(res => res.json()).then(setOrders);
  }, []);

  return (
    <div className="flex">
      <AdminSidebar />
      <div className="p-6 flex-1">
        <h2 className="text-xl font-bold mb-4">Manage Orders</h2>
        {orders.map(order => (
          <div key={order._id} className="border p-4 mb-2">
            <p><strong>User:</strong> {order.user}</p>
            <p><strong>Total:</strong> ₹{order.total}</p>
            <p><strong>Status:</strong> {order.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageOrders;
