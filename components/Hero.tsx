import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <div className='flex h-screen flex-col items-center justify-center'>
      <h1 className='mb-6 flex flex-col items-center justify-center gap-3 text-wrap text-center text-4xl font-bold md:text-6xl'>
        Connect with Knowledgeable{' '}
        <span>
          <span className='text-yellow-300'>Tutors</span> and{' '}
          <span className='text-yellow-300'>Teachers</span>
        </span>
      </h1>
      <p className='mb-10 text-center text-lg text-gray-600 md:text-xl'>
        Elevate your learning experience with expert tutors and teachers in
        various subjects.
      </p>
      <Button className=''>
        <Link href='/auth/signin'>Get Started</Link>
      </Button>
    </div>
  );
};

export default Hero;
