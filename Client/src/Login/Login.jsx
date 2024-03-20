import React, { useState } from 'react';
import { useNavigate, useRoutes } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);


  const handleLogin = () => {
    // Handle login logic here (e.g., send login request to server)
    console.log('Logging in with:', { username, password });
  };


  const navigate = useNavigate();
  const handleToggleRegistrationForm = () => {
    navigate('/registation')
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">{'Login'}</h2>
        <div>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username</label>
              <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
              <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500" />
            </div>
            <button onClick={handleLogin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">Login</button>
            <p className="text-center mt-4">Don't have an account? <button onClick={handleToggleRegistrationForm} className="text-blue-500 underline">Register</button></p>
          </div>
      </div>
    </div>
  );
};

export default LoginPage;
