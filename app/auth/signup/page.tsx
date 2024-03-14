'use client';
import Api from '@/API/Api';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { SignUpFormInputs } from '@/types';
import { Loader2 } from 'lucide-react';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { SiFacebook } from 'react-icons/si';
const SignUp = () => {
  const user = useRef<SignUpFormInputs>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const onSignUp = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    Api.post('/auth/signup', user.current)
      .then(async (res) => {
        console.log(res);
        const result = await signIn('credentials', {
          email: user.current.email,
          password: user.current.password,
          redirect: true,
          callbackUrl: '/tutors',
        });
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <div className='mt-5 flex items-center justify-center'>
      <Card className='w-full md:w-1/3'>
        <CardHeader className='flex flex-col gap-4'>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription className='flex items-center gap-3'>
            Already have an account?
            <Link className='underline' href='/auth/signin'>
              Sign In
            </Link>
          </CardDescription>
          <Button variant='outline' className='mt-4 py-5'>
            <FcGoogle className='mr-2' size={20} />
            Continue with Google
          </Button>
          <Button variant='outline' className='mt-4 py-5'>
            <SiFacebook className='mr-2' size={20} />
            Continue with Facebook
          </Button>
          <div className='mx-7 flex items-center justify-center gap-4'>
            <Separator className='my-4 w-1/2' />
            Or
            <Separator className='my-4 w-1/2' />
          </div>
        </CardHeader>
        <CardContent>
          <form className='flex flex-col gap-4'>
            <Label htmlFor='firstName'>First Name</Label>
            <Input
              type='text'
              name='firstName'
              placeholder='First Name'
              required
              onChange={(e) => (user.current.firstName = e.target.value)}
            />
            <Label htmlFor='lestName'>Last Name</Label>
            <Input
              type='text'
              name='lastName'
              placeholder='Last Name'
              required
              onChange={(e) => (user.current.lastName = e.target.value)}
            />
            <Label htmlFor='email'>Email</Label>
            <Input
              type='email'
              name='email'
              placeholder='Email'
              required
              onChange={(e) => (user.current.email = e.target.value)}
            />
            <Label htmlFor='password'>Password</Label>
            <Input
              type='password'
              name='password'
              placeholder='Password'
              required
              onChange={(e) => (user.current.password = e.target.value)}
            />
            <Button type='submit' onClick={onSignUp}>
              {loading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
              Sign Up
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
