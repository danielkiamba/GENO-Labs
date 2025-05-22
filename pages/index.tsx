import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { FiThermometer } from "react-icons/fi";  // Biochemistry
import { FaTint, FaDna } from "react-icons/fa";  // Hematology & Cytology
import { GiMicroscope } from "react-icons/gi";   // Histology


export default function Genoo() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>GENO Labs</title>
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
            {/* <a href="/#services" className="hover:text-blue-600">Services</a>
            <a href="/#gallery" className="hover:text-blue-600">Gallery</a> */}
            {/* <a href="/#contact" className="hover:text-blue-600">Contact</a> */
            <Link href="/about" className="hover:text-blue-600">About Us</Link>}
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

        {/* Hero Section */}
        <header
  className="relative py-20 text-center text-white"
  style={{
    backgroundImage: "url('https://www.shutterstock.com/image-photo/lab-technician-assistant-analyzing-blood-600nw-2523595607.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  <div className="relative z-10">
    <h1 className="text-4xl font-bold mb-4">Welcome to GENO Labs</h1>
    <p className="text-xl">
      Offering Biochemistry, Hematology, and Cytology Diagnostic Services
    </p>
  </div>
</header>


        {/* Services */}
        {
        
        <section id="services" className="py-12 px-6">
  <h2 className="text-3xl font-semibold text-center mb-10">Our Services</h2>

  {/* Mobile View: Stack All */}
  <div className="md:hidden grid grid-cols-1 gap-6">
    <div className="p-4 border rounded-xl shadow bg-blue-50">
    <FiThermometer className="text-3xl text-blue-500 mb-2" />
      <h3 className="text-xl font-bold mb-2">Biochemistry</h3>
      <p>Comprehensive biochemical tests using cutting-edge technology for accurate diagnosis.</p>
    </div>
    <div className="p-4 border rounded-xl shadow bg-red-50">
    <FaTint className="text-3xl text-red-500 mb-2" />
      <h3 className="text-xl font-bold mb-2">Hematology</h3>
      <p>Specialized tests including CBC, ESR, and coagulation profiles for blood disorders.</p>
    </div>
    <div className="p-4 border rounded-xl shadow bg-purple-50">
    <GiMicroscope className="text-3xl text-purple-500 mb-2" />
      <h3 className="text-xl font-bold mb-2">Histology</h3>
      <p>Microscopic examination of tissues to support diagnosis of diseases, especially cancer.</p>
    </div>
    <div className="p-4 border rounded-xl shadow bg-green-50">
    <FaDna className="text-3xl text-green-500 mb-2" />
      <h3 className="text-xl font-bold mb-2">Cytology</h3>
      <p>Expert cytological evaluations including Pap smears and FNAC for cellular abnormalities.</p>
    </div>
  </div>

  {/* Desktop View: Biochemistry & Histology fixed, Hematology/Cytology slide */}
  <div className="hidden md:grid md:grid-cols-4 gap-6 items-start">
    <div className="p-4 border rounded-xl shadow col-span-1 min-h-[200px] bg-blue-50">
    <FiThermometer className="text-3xl text-blue-500 mb-2" />
      <h3 className="text-xl font-bold mb-2 ">Biochemistry</h3>
      <p>Comprehensive biochemical tests using cutting-edge technology for accurate diagnosis.</p>
    </div>

    <div className="p-4 border rounded-xl shadow col-span-1 min-h-[200px] bg-purple-50">
    <GiMicroscope className="text-3xl text-purple-500 mb-2" />
      <h3 className="text-xl font-bold mb-2">Histology</h3>
      <p>Microscopic examination of tissues to support diagnosis of diseases, especially cancer.</p>
    </div>

    {/* Slider for Hematology/Cytology */}
    <div className="col-span-2 relative overflow-hidden h-full ">
      <div className="flex w-[200%] animate-slide md:space-x-6">
        <div className="w-1/2 p-4 border rounded-xl shadow bg-white shrink-0 min-h-[200px] bg-red-50">
        <FaTint className="text-3xl text-red-500 mb-2" />
          <h3 className="text-xl font-bold mb-2">Hematology</h3>
          <p>Specialized tests including CBC, ESR, and coagulation profiles for blood disorders.</p>
        </div>
        <div className="w-1/2 p-4 border rounded-xl shadow bg-white shrink-0 min-h-[200px] bg-green-50">
        <FaDna className="text-3xl text-green-500 mb-2" />
          <h3 className="text-xl font-bold mb-2">Cytology</h3>
          <p>Expert cytological evaluations including Pap smears and FNAC for cellular abnormalities.</p>
        </div>
      </div>
    </div>
  </div>
</section>

        
        }

        {/* Gallery */}
        <section id="gallery" className="py-12 px-6 bg-gray-50">
          <h2 className="text-3xl font-semibold text-center mb-10">Lab Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <img src="https://www.shutterstock.com/image-photo/lab-technician-assistant-analyzing-blood-600nw-2523595607.jpg" alt="Lab 1" className="rounded-xl shadow object-cover h-48 w-full" />
            <img src="https://www.cgdev.org/sites/default/files/2022-11/Africa-Lab-Blog-Cover.jpeg" alt="Lab 2" className="rounded-xl shadow object-cover h-48 w-full" />
            <img src="https://static.vecteezy.com/system/resources/previews/004/790/208/large_2x/medical-laboratory-a-glass-plate-with-blood-in-the-hand-in-a-medical-glove-on-a-blue-background-the-concept-of-laboratory-research-photo.jpg" alt="Lab 3" className="rounded-xl shadow object-cover h-48 w-full" />
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-12 px-6">
          <h2 className="text-3xl font-semibold text-center mb-10">Contact Us</h2>
          <form className="max-w-xl mx-auto space-y-4">
            <input placeholder="Your Name" className="w-full p-2 border rounded" />
            <input placeholder="Your Email" className="w-full p-2 border rounded" />
            <textarea placeholder="Your Message" className="w-full p-2 border rounded" />
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send Message</button>
          </form>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white text-center py-6 mt-auto">
          <p>&copy; {new Date().getFullYear()} GENO Labs. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}


