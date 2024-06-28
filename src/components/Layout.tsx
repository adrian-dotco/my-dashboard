import React from 'react';
import { signOut } from 'next-auth/react';
import Link from 'next/link';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <nav className="mt-5">
          <Link href="/" passHref>
            <span className="block py-2 px-4 text-gray-700 hover:bg-gray-200">Dashboard</span>
          </Link>
          <Link href="/profile" passHref>
            <span className="block py-2 px-4 text-gray-700 hover:bg-gray-200">Profile</span>
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
  ) as JSX.Element;
};

export default Layout;