
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async e => {
    e.preventDefault();
    // add real auth logic
    alert(`Login with ${email}`);
  };

  return (
    <form onSubmit={handleLogin} className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="block w-full p-2 mb-2 border" placeholder="Email" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="block w-full p-2 mb-4 border" placeholder="Password" />
      <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">Login</button>
    </form>
  );
};

export default Login;
