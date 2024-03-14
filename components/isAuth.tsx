'use client';
import { useEffect } from 'react';
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function isAuth(Component: any) {
  return function IsAuth(props: any) {
    const { data: session } = useSession();

    useEffect(() => {
      setTimeout(() => {
        if (!session?.user) {
          redirect('/auth/signin');
        }
      }, 500);
    }, [session?.user]);

    if (session && !session?.user && !session?.backendTokens) {
      return null;
    }

    return <Component {...props} />;
  };
}
