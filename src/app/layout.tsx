import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import Footer from '@/infrastructure/components/Footer';
import Header from '@/infrastructure/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Blog',
  description: 'A blog about stuff',
};

type Props = {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="container max-w-7xl md:mx-auto px-4 xl:px-0">
          {children}
        </main>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-G2TC1M5SJE" />
      <GoogleTagManager gtmId="GTM-XYZ" />
    </html>
  );
}
