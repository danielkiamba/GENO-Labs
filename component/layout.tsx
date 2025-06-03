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
        <footer className="bg-gray-900 text-white px-6 py-10">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    <div>
      <h4 className="font-semibold text-lg mb-2">GENO Labs</h4>
      <p>Advancing diagnostics in Kenya through excellence in lab medicine.</p>
    </div>

    <div>
      <h4 className="font-semibold text-lg mb-2">Quick Links</h4>
      <ul className="space-y-1">
        <li><Link href="/" className="hover:underline">Home</Link></li>
        <li><Link href="/about" className="hover:underline">About Us</Link></li>
        <li><Link href="/team" className="hover:underline">Our Team</Link></li>
        <li><Link href="/book" className="hover:underline">Book a Test</Link></li>
      </ul>
    </div>

    <div>
      <h4 className="font-semibold text-lg mb-2">Contact</h4>
      <p>Email: contact@genolabs.co.ke</p>
      <p>Phone: +254 712 345678</p>
      <p>Nairobi, Kenya</p>
    </div>
  </div>

  {/* Map Embed */}
  <div className="mt-10">
    <h4 className="text-lg font-semibold mb-4 text-center">Find Us</h4>
    <div className="w-full h-64">
      <iframe
        title="Geno Labs Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8242758404526!2d36.76815057477612!3d-1.2790072356178022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f197f307b02fd%3A0xce5866289d9a257e!2sBurger%20King%20-%20Lavington!5e0!3m2!1sen!2ske!4v1748977366340!5m2!1sen!2ske"
        width="100%"
        height="100%"
        loading="lazy"
        allowFullScreen={true}
        className="rounded shadow border-0"
      ></iframe>
    </div>
  </div>

  <div className="text-center text-sm mt-8 border-t border-gray-700 pt-4">
    &copy; {new Date().getFullYear()} GENO Labs. All rights reserved.
  </div>
</footer>
      </div>
    </>
  );
};

export default Layout;
