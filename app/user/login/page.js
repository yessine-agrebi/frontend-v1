'use client';
import Api from '@/API/Api';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = async () => {
    await Api.post('/auth/authenticate', { email, password })
    .then(() => {
      toast.success('Logged in successfully');
      router.push('/tutors')})
    .catch((err) => console.error(err));

  };

  return (
    <div className="bg-white p-8 max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">Login to <span className='text-yellow-300'>TutorZone</span></h2>
      <form>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold mb-1">Email</label>
          <input
            type="email"
            id="email"
            className="w-full border p-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-semibold mb-1">Password</label>
          <input
            type="password"
            id="password"
            className="w-full border p-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="bg-yellow-300 text-black px-4 py-2 rounded hover:bg-yellow-200 text-lg border-2 border-black"
          onClick={handleLogin}
        >
          Login
        </button>
        <p className="mt-4">
          Don't have an account?{' '}
          <a href="register" className="text-gray-300 hover:underline">
            Register here
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
