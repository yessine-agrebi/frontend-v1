'use client';
import Api, { postApi } from '@/API/Api';
import React, { useState } from 'react';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    const response = await Api.post('/auth/register', { firstName, lastName, email, password });
    console.log('User:', response.data);
  };

  return (
    <div className="bg-white p-8 max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">Create an Account</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-sm font-semibold mb-1">First Name</label>
          <input
            type="text"
            id="firstName"
            className="w-full border p-2 rounded"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-sm font-semibold mb-1">Last Name</label>
          <input
            type="text"
            id="lastName"
            className="w-full border p-2 rounded"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
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
          onClick={handleRegister}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
