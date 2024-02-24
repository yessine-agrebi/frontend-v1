'use client';
import Api, { postApi } from '@/API/Api';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const LoginTutor = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = async () => {
    await Api.post('/auth/tutor/authenticate', { email, password })
    .then(() => router.push('/'))
    .catch((err) => console.error(err));

  };

  return (
    <div className="bg-white p-8 max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">Login to TutorZone</h2>
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
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleLogin}
        >
          Login
        </button>
        <p className="mt-4">
          Don't have an account?{' '}
          <a href="register" className="text-blue-500 hover:underline">
            Register here
          </a>
        </p>
      </form>
    </div>
  );
};

export default LoginTutor;
