import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { FiThermometer } from "react-icons/fi";  // Biochemistry
import { FaTint, FaDna } from "react-icons/fa";  // Hematology & Cytology
import { GiMicroscope } from "react-icons/gi";   // Histology
import { motion } from "framer-motion";

export default function Genoo() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", description: "" });

  const openModal = (title: string, description: string) => {
    setModalContent({ title, description });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

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
            <Link href="/about" className="hover:text-blue-600">About Us</Link>
            <Link href="/team" className="hover:text-blue-600">Our Team</Link>
            <Link href="/book" className="hover:text-blue-600">Book a Test</Link>
          </div>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-gray-100 shadow-md p-4 space-y-2 fixed top-16 w-full z-40">
            <Link href="/" className="block hover:text-blue-600">Home</Link>
            <Link href="/about" className="block hover:text-blue-600">About Us</Link>
            <Link href="/team" className="block hover:text-blue-600">Our Team</Link>
            <Link href="/book" className="block hover:text-blue-600">Book a Test</Link>
          </div>
        )}

        <div className="h-20" />

        {/* Hero Section */}
        <header className="relative py-20 text-center text-white" style={{ backgroundImage: "url('https://www.shutterstock.com/image-photo/lab-technician-assistant-analyzing-blood-600nw-2523595607.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10">
            <h1 className="text-4xl font-bold mb-4">Welcome to GENO Labs</h1>
            <p className="text-xl">Offering Biochemistry, Hematology, Histology and Cytology Diagnostic Services</p>
          </div>
        </header>

        {/* Services Section */}
        <section id="services" className="py-12 px-6">
          <h2 className="text-3xl font-semibold text-center mb-10">Our Services</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div className="p-4 border rounded-xl shadow bg-blue-50">
              <FiThermometer className="text-3xl text-blue-500 mb-2" />
              <h3 className="text-xl font-bold mb-2">Biochemistry</h3>
              <p>We perform metabolic, electrolyte, and organ-specific panels to support diagnosis and monitoring of a wide range of conditions.</p>
              <button onClick={() => openModal("Biochemistry", "Includes tests like liver/kidney panels, electrolytes, glucose, and enzyme analysis. Our lab uses advanced chemistry analyzers for accuracy.")} className="mt-2 text-blue-600 underline">See More</button>
            </motion.div>

            <motion.div className="p-4 border rounded-xl shadow bg-red-50">
              <FaTint className="text-3xl text-red-500 mb-2" />
              <h3 className="text-xl font-bold mb-2">Hematology</h3>
              <p>We provide full blood counts, ESR, reticulocyte counts, and coagulation studies to diagnose blood disorders and monitor therapy.</p>
              <button onClick={() => openModal("Hematology", "Our services support diagnosis of anemia, leukemia, thrombocytopenia, and clotting disorders using state-of-the-art hematology analyzers.")} className="mt-2 text-red-600 underline">See More</button>
            </motion.div>

            <motion.div className="p-4 border rounded-xl shadow bg-purple-50">
              <GiMicroscope className="text-3xl text-purple-500 mb-2" />
              <h3 className="text-xl font-bold mb-2">Histology</h3>
              <p>Microscopic evaluation of tissues. We process biopsies and surgical specimens to aid cancer and inflammation diagnosis.</p>
              <button onClick={() => openModal("Histology", "Includes tissue processing, microtomy, and H&E staining. Special stains and IHC also available for deeper analysis.")} className="mt-2 text-purple-600 underline">See More</button>
            </motion.div>

            <motion.div className="p-4 border rounded-xl shadow bg-green-50">
              <FaDna className="text-3xl text-green-500 mb-2" />
              <h3 className="text-xl font-bold mb-2">Cytology</h3>
              <p>We perform FNACs, Pap smears, and fluid cytology to screen and diagnose malignancies and infections at cellular level.</p>
              <button onClick={() => openModal("Cytology", "Our cytology team provides conventional and liquid-based Pap smears, FNAC reporting, and body fluid cytology.")} className="mt-2 text-green-600 underline">See More</button>
            </motion.div>
          </div>

          {modalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={closeModal}>
              <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full" onClick={(e) => e.stopPropagation()}>
                <h2 className="text-2xl font-bold mb-2">{modalContent.title}</h2>
                <p className="mb-4">{modalContent.description}</p>
                <button onClick={closeModal} className="text-red-600 underline">Close</button>
              </div>
            </div>
          )}
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
}

