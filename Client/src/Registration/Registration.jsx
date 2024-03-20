import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();
    const handleToggleRegistrationForm = () => {
      navigate('/login')
    };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className='w-full max-w-md bg-white p-8 rounded-lg shadow-md'>
        <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username</label>
              <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone Number</label>
              <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
              <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500" />
            </div>
            <button onClick={()=>{}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">Register</button>
            <p className="text-center mt-4">Already have an account? <button onClick={handleToggleRegistrationForm} className="text-blue-500 underline">Login</button></p>
        </div>
            
          </div>
  )
}

export default Registration