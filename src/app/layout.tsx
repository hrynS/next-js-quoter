import { Navbar } from '@/components';
import { NAV_ITEMS_TO_HREF } from '@/constants';
import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sofiia`s quoter',
  description: 'See a random quote from the best books',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar routes={NAV_ITEMS_TO_HREF} />
        <main className="p-6">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
