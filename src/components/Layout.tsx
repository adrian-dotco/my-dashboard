import React from 'react';
import { signOut } from 'next-auth/react';
import Link from 'next/link';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <nav className="mt-5">
          <Link href="/" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
            Dashboard
          </Link>
          <Link href="/profile" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
            Profile
          </Link>
          <button 
            onClick={() => signOut()} 
            className="block w-full text-left py-2 px-4 text-gray-700 hover:bg-gray-200"
          >
            Sign Out
          </button>
        </nav>
      </aside>
      <main className="flex-1 p-10">
        {children}
      </main>
    </div>
  );
};

export default Layout;