
import React, { useEffect, useState } from 'react';
import AdminSidebar from '../components/AdminSidebar';

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products').then(res => res.json()).then(setProducts);
  }, []);

  return (
    <div className="flex">
      <AdminSidebar />
      <div className="p-6 flex-1">
        <h2 className="text-xl font-bold mb-4">Manage Products</h2>
        <ul>
          {products.map(p => (
            <li key={p._id} className="border p-2 mb-2 flex justify-between">
              <span>{p.name}</span>
              <button className="text-red-600">Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ManageProducts;
