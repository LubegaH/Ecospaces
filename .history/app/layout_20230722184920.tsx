import './globals.css';
import { Nunito } from 'next/font/google';
import React from 'react';
import Navbar from '@/app/components/nabar/Navbar';
import ClientOnly from '@/app/components/ClientOnly';
import RegisterModel from '@/app/components/modals/RegisterModel';
import Modal from '@/app/components/modals/Modal';
import ToasterProvider from './providers/ToasterProvider';
import LoginModel from './components/modals/LoginModel';
import getCurrentUser from './actions/getCurrentUser';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata = {
  title: 'Ecospaces',
  description: 'The quickest way to find lodges',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser;
  return (
    <html lang='en'>
      <body className={nunito.className}>
        <ClientOnly>
          {/*<Modal title={'Hello World'} isOpen actionLabel="Sign In"/>*/}
          <ToasterProvider />
          <RegisterModel />
          <LoginModel />
          <Navbar currentUser={currentUser} />
        </ClientOnly>

        {children}
      </body>
    </html>
  );
}
