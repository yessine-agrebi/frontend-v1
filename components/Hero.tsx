import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <div className="bg-white h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 text-center">
        Connect with Knowledgeable <span className='text-yellow-300'>Tutors</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-10 text-center">
        Elevate your learning experience with expert tutors in various subjects.
      </p>
      <button className="bg-yellow-300 text-black px-8 py-3 rounded-full text-lg md:text-xl hover:bg-yellow-200 border-2 border-black">
        <Link href="/user/login">Get Started</Link>
      </button>
    </div>
  );
};

export default Hero;
