'use client';
import React from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { MessageSquareText } from 'lucide-react';
import { FaStar } from 'react-icons/fa6';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { useSession } from 'next-auth/react';
import { useQuery } from '@tanstack/react-query';
import Api from '@/API/Api';
import { Tutor } from '@/types';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
const Tutors = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const { data, isLoading, isError } = useQuery({
    queryKey: ['tutors'],
    queryFn: async () => {
      if (status === 'authenticated') {
        const { data } = await Api.get('/tutors', {
          headers: {
            Authorization: `Bearer ${session?.backendTokens.accessToken}`,
          },
        });
        return data;
      } else {
        return { message: 'Not authenticated' };
      }
    },
    enabled: status === 'authenticated',
  });
  return (
    <div className='mt-4'>
      <Head>
        <title>Tutors</title>
        <meta property='og:title' content='My page title' key='title' />
      </Head>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error...</p>}
      <h1 className='text-lg font-bold'>
        {data ? `${Object.keys(data).length} Tutors available` : ''}
      </h1>
      <div className='mt-3 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {data?.map((tutor: Tutor) => (
          <Card
            className='overflow-hidden rounded-lg shadow-md'
            key={tutor.userId}
          >
            <CardHeader>
              <CardTitle className='flex items-center justify-between'>
                <div className='flex items-center justify-start gap-2'>
                  <Avatar>
                    <AvatarImage src='https://github.com/shadcn.png' />
                    <AvatarFallback>YA</AvatarFallback>
                  </Avatar>
                  <p className='text-sm md:text-lg'>{`${tutor.firstName} ${tutor.lastName}`}</p>
                </div>
                <div className='flex items-center justify-start gap-3'>
                  <div className='flex flex-col items-center gap-1 text-justify'>
                    <p className='text-sm md:text-lg md:font-extrabold'>
                      <FaStar size={25} /> {tutor.rating}
                    </p>
                    <span className='text-sm font-light text-gray-400'>
                      9 reviews
                    </span>
                  </div>
                  <div className='flex flex-col items-center gap-1 text-justify'>
                    <p className='text-sm md:text-lg md:font-extrabold'>
                      TND {tutor.price}
                    </p>
                    <span className='text-sm font-light text-gray-400'>
                      1h lesson
                    </span>
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className=''>
                <p>
                  <span className='font-semibold'>Speciality:</span>{' '}
                  {tutor.speciality.name}
                </p>
                <p>
                  <span className='font-semibold'>Experience:</span>{' '}
                  {tutor.experience} Years
                </p>
                <p>{tutor.description}</p>
              </div>
            </CardContent>
            <CardFooter className='flex items-center justify-between'>
              <div className='flex items-center justify-center gap-3'>
                <Button>
                  <MessageSquareText />
                </Button>

                <Button onClick={() => router.push(`/tutors/${tutor.userId}`)}>
                  View Details
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Tutors;
