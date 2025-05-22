import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Genoo Lab</title>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      </Head>
      <div className="min-h-screen flex flex-col bg-white text-black">
        {/* Navbar */}
        <nav className="bg-gray-100 shadow-md p-4 flex justify-between items-center fixed top-0 w-full z-50">
          <Link href="/" className="text-2xl font-bold">GENO Labs</Link>
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <a href="/#services" className="hover:text-blue-600">Services</a>
            <a href="/#gallery" className="hover:text-blue-600">Gallery</a>
            <a href="/#contact" className="hover:text-blue-600">Contact</a>
            <Link href="/about" className="hover:text-blue-600">About Us</Link>
            <Link href="/team" className="hover:text-blue-600">Our Team</Link>
            <Link href="/book" className="hover:text-blue-600">Book a Test</Link>
          </div>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-gray-100 shadow-md p-4 space-y-2 fixed top-16 w-full z-40">
            <Link href="/" className="block hover:text-blue-600">Home</Link>
            {/* <a href="/#services" className="block hover:text-blue-600">Services</a>
            <a href="/#gallery" className="block hover:text-blue-600">Gallery</a>
            <a href="/#contact" className="block hover:text-blue-600">Contact</a> */}
            <Link href="/about" className="block hover:text-blue-600">About Us</Link>
            <Link href="/team" className="block hover:text-blue-600">Our Team</Link>
            <Link href="/book" className="block hover:text-blue-600">Book a Test</Link>
          </div>
        )}

        {/* Spacer for fixed navbar */}
        <div className="h-20" />

        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white text-center py-6">
          <p>&copy; {new Date().getFullYear()} Genoo Laboratory. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default Layout;
