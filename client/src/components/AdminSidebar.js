import React from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => (
  <aside className="w-64 bg-gray-100 h-full p-4">
    <h2 className="text-xl font-semibold mb-4">Admin Panel</h2>
    <ul className="space-y-2">
      <li><Link to="/admin" className="block p-2 hover:bg-gray-200 rounded">Dashboard</Link></li>
      <li><Link to="/admin/products" className="block p-2 hover:bg-gray-200 rounded">Manage Products</Link></li>
      <li><Link to="/admin/orders" className="block p-2 hover:bg-gray-200 rounded">Manage Orders</Link></li>
    </ul>
  </aside>
);

export default AdminSidebar;
