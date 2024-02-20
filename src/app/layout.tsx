import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {ReactNode} from "react";
import Footer from "@/infrastructure/components/Footer";
import Header from "@/infrastructure/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog",
  description: "A blog about stuff",
};

type Props = {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header />
        <main className="container md:mx-auto px-4 md:px-16">
          {children}
        </main>
      <Footer />
      </body>
    </html>
  );
}
