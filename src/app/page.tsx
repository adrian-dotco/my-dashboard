'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!session) {
    return null;
  }

  return (
    <div>
      <h1>Welcome to your Dashboard, {session.user?.name}!</h1>
      <div>
        <h1>My Dashboard</h1>
        <p>Welcome to your simple dashboard!</p>
        <p>This is a new line for Vercel deployment.</p>
      </div>
    </div>
  );
}