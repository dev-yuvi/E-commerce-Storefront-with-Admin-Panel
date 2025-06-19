import React from 'react';
import AdminSidebar from '../components/AdminSidebar';

const AdminDashboard = () => {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-1 p-6">
        <h2 className="text-xl font-bold">Welcome Admin</h2>
        <p>Use the sidebar to manage products and orders.</p>
      </div>
    </div>
  );
};

export default AdminDashboard;
