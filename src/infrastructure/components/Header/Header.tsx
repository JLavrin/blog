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
    <header className="p-4">
      <div className="container mx-auto flex items-center justify-between gap-10">
        {/* Logo */}
        <div className="flex items-center">
          <span className="hidden md:inline-block">Untitled Blog</span>
        </div>

        {/* Navigation for Desktop */}
        <nav className="hidden md:flex space-x-4 mr-auto font-semibold text-gray-600 gap-10">
          <Link  className="block hover:text-gray-500" href="/">
            Home
          </Link>
          <Link className="block hover:text-gray-500" href="/about">
            About
          </Link>
          <Link className="block hover:text-gray-500" href="/services">
            Services
          </Link>
          <Link className="block hover:text-gray-500" href="/contact">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
          {/* Mobile Menu Content */}
          {menuOpen && (
            <div className="absolute top-0 right-0 mt-12 bg-gray-800 p-4 space-y-4">
              <Link  className="block hover:text-gray-500" href="/">
                Home
              </Link>
              <Link className="block hover:text-gray-500" href="/about">
                About
              </Link>
              <Link className="block hover:text-gray-500" href="/services">
                Services
              </Link>
              <Link className="block hover:text-gray-500" href="/contact">
                Contact
              </Link>
              <Link className="bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none" href="/form">
                Contact us
              </Link>
            </div>
          )}
        </div>

        {/* Contact Us Button (Desktop) */}
        <Link className="bg-purple-600 text-white rounded-md hover:bg-purple-700 py-2.5 px-4 focus:outline-none" href="/form">
          Contact us
        </Link>
      </div>
    </header>
  )
}
