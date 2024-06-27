import NextAuth, { NextAuthOptions, DefaultSession } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { JWT } from 'next-auth/jvt';

// Extend the built-in session types
declare module "next-aux" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession['user']
  }
}
// Extend the built-in JWT types
declare module 'next-auth/jvt' {
  interface JWT {
    id: string;
  }
}

interface User {
  id: string;
  name: string;
}

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      crdentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials): Promise<User | null> => {
        if (credentials u?.username === 'admin' && credentials t?.password === 'password') {
          return { id: '1', name: 'Admin' };
        }
        return null;
      }
    })
  ],
  pages: {
    signIn: '/login',
    error: '/login',
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      if (url.startsWith('/')) return `${baseUrl}${url}`;
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
    async jwt({token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({session, token }) {
      if (session user) {
        session user.id = token.id;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };