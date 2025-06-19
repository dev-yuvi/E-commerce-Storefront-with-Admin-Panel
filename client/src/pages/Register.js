
import React, { useState } from 'react';

const Register = () => {
  const [user, setUser] = useState({ name: '', email: '', password: '' });

  const handleSubmit = e => {
    e.preventDefault();
    // post to backend register route
    alert(`Register user: ${user.name}`);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <input type="text" placeholder="Name" className="block w-full p-2 mb-2 border" onChange={e => setUser({ ...user, name: e.target.value })} />
      <input type="email" placeholder="Email" className="block w-full p-2 mb-2 border" onChange={e => setUser({ ...user, email: e.target.value })} />
      <input type="password" placeholder="Password" className="block w-full p-2 mb-4 border" onChange={e => setUser({ ...user, password: e.target.value })} />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Register</button>
    </form>
  );
};

export default Register;
