/**
 * Authentication Options and Configuration
 *
 * This module contains the authentication options and configuration for NextAuth.js.
 * It sets up various authentication providers, such as Google, GitHub, and Credentials (local).
 * Additionally, it defines an authorization function for the Credentials provider to handle local user authentication.
 * The authentication options and configuration are exported and used in the main NextAuth.js configuration file.
 */

import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/google';
import bcrypt from 'bcrypt';
import NextAuth from 'next-auth';

import prisma from '@/app/libs/prismadb';

/**
 * Authentication Options and Configuration
 *
 * The `authOptions` object defines the authentication configuration for NextAuth.js.
 *
 * @property {PrismaAdapter} adapter - The PrismaAdapter instance to handle user authentication and session management with Prisma.
 * @property {Array} providers - An array of authentication providers used for user login (Google, GitHub, Credentials).
 * @property {Object} pages - Custom pages for authentication (signIn, signOut, error).
 * @property {boolean} debug - Whether to enable debug mode in development.
 * @property {Object} session - Session configuration options (strategy).
 * @property {string} secret - The secret used to sign and encrypt cookies (NEXTAUTH_SECRET environment variable).
 */

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials, req) {
        // Custom authorization function for the Credentials provider
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Email and password do not match');
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });
        if (!user || !user?.hashedPassword) {
          throw new Error('Invalid credentials or user does not exist!');
        }
        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );
        if (!isCorrectPassword) {
          throw new Error('Invalid Password');
        }
        return user;
      },
    }),
  ],
  pages: {
    signIn: '/', // Custom sign-in page
  },
  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth;
