'use client'
import Link from "next/link";
import {useState} from "react";
import Head from "next/head";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="p-4 h-20 flex items-center">
      <div className="container max-w-7xl mx-auto flex items-center justify-between gap-10">
        <div className="flex items-center">
          <span>Untitled Blog</span>
        </div>
        <nav className="hidden md:flex space-x-4 mr-auto font-semibold text-gray-600 gap-10">
          <Link className="block hover:text-gray-500" href="/">
            Home
          </Link>
          <Link className="block hover:text-gray-500" href="/blog">
            Blog
          </Link>
          <Link className="block hover:text-gray-500" href="#">
            Some Url
          </Link>
          <Link className="block hover:text-gray-500" href="#">
            Some other Url
          </Link>
        </nav>
        <div className="block md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12h16"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 18h16"></path>
            </svg>
          </button>
          {menuOpen && (
            <div className="absolute top-20 right-0 w-screen h-full bg-white z-10 flex flex-col items-center gap-8 mb-20 p-6">
              <Link onClick={() => setMenuOpen(false)} className="block hover:text-gray-500" href="/">
                Home
              </Link>
              <Link onClick={() => setMenuOpen(false)} className="block hover:text-gray-500" href="/blog">
                Blog
              </Link>
              <Link onClick={() => setMenuOpen(false)} className="block hover:text-gray-500" href="#">
                Some Url
              </Link>
              <Link onClick={() => setMenuOpen(false)} className="block hover:text-gray-500" href="#">
                Some other Url
              </Link>
              <Link onClick={() => setMenuOpen(false)} className="bg-purple-600 text-white rounded-md hover:bg-purple-700 py-2.5 px-4 focus:outline-none" href="/form">
                Contact us
              </Link>
            </div>
          )}
        </div>
        <Link className="hidden md:block bg-purple-600 text-white rounded-md hover:bg-purple-700 py-2.5 px-4 focus:outline-none" href="/form">
          Contact us
        </Link>
      </div>
    </header>
  )
}
