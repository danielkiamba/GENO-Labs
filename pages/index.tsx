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
            <p className="text-xl">Offering Biochemistry, Hematology, and Cytology Diagnostic Services</p>
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
        <footer className="bg-gray-800 text-white text-center py-6 mt-auto">
          <p>&copy; {new Date().getFullYear()} GENO Labs. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}


