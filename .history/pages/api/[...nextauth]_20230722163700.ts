import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { AuthOptions } from 'next-auth';
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import GithubProvider from "next-auth/providers/google"


import prisma from '@/app/libs/prismadb';


export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma)
    providers: [
        G
    ]
}