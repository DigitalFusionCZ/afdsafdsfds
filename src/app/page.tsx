'use client';

import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-[#F4F1E8] text-[#333] font-sans">
      <Head>
        <title>Kavárna U Kódu - Nejlepší káva v Praze</title>
        <link rel="icon" href="https://www.google.com/s2/favicons?domain=google.com&sz=128" />
      </Head>

      <header className="relative bg-[#659DBD] text-white p-6 shadow-md">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-3xl font-bold text-[#F4F1E8]">Testovací Kavárna "U Kódu"</div>
          <div className="hidden md:flex space-x-8">
            <a href="#hero" className="hover:text-[#8D8741] transition-colors duration-300">Úvod</a>
            <a href="#contact" className="hover:text-[#8D8741] transition-colors duration-300">Kontakt</a>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </nav>
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#659DBD] shadow-lg py-4 z-50">
            <a href="#hero" onClick={toggleMenu} className="block px-6 py-3 text-white hover:bg-[#8D8741] transition-colors duration-300">Úvod</a>
            <a href="#contact" onClick={toggleMenu} className="block px-6 py-3 text-white hover:bg-[#8D8741] transition-colors duration-300">Kontakt</a>
          </div>
        )}
      </header>

      <main>
        <section id="hero" className="relative h-screen flex items-center justify-center text-center bg-gray-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-70" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}></div>
          <div className="relative z-10 p-8 max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#F4F1E8]">Nejlepší káva pro vaše bugy.</h1>
            <p className="text-lg md:text-xl leading-relaxed text-gray-300">
              Jsme moderní kavárna v srdci Prahy, která nabízí nejen skvělou kávu, ale i klidné prostředí pro práci a setkávání. Naše specialita je "debuggovací doppio".
            </p>
          </div>
        </section>

        <section id="contact" className="py-20 bg-[#fbfaf8] text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-[#659DBD] mb-12">Kontaktujte Nás</h2>
            <div className="grid md:grid-cols-3 gap-12 max-w-3xl mx-auto">
              <div className="bg-white rounded-lg p-8 shadow-md flex flex-col items-center justify-center border-t-4 border-[#8D8741]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 text-[#659DBD] mb-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <p className="text-xl font-semibold mb-2">Email</p>
                <p className="text-gray-700">test@kavarna.cz</p>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-md flex flex-col items-center justify-center border-t-4 border-[#8D8741]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 text-[#659DBD] mb-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.391c0-.414-.254-.787-.659-.936a11.364 11.364 0 0 1-4.401-1.276 1.125 1.125 0 0 0-1.091.213l-.53 1.06a3 3 0 0 1-3.417.88l-1.62-1.62a3 3 0 0 1-.88-3.417l1.06-.529a1.125 1.125 0 0 0 .213-1.091A11.364 11.364 0 0 1 7.5 4.509a1.125 1.125 0 0 0-1.091-.213l-1.06.53a3 3 0 0 1-3.417-.88L2.25 6.75Z" />
                </svg>
                <p className="text-xl font-semibold mb-2">Telefon</p>
                <p className="text-gray-700">+420 777 123 456</p>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-md flex flex-col items-center justify-center border-t-4 border-[#8D8741]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 text-[#659DBD] mb-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <p className="text-xl font-semibold mb-2">Adresa</p>
                <p className="text-gray-700 text-center">Bugfixová 1, 110 00 Praha 1</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#8D8741] text-white py-6 text-center text-sm">
        <div className="container mx-auto">
          Vytvořeno s láskou od <a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#F4F1E8]">Digital Fusion</a>
        </div>
      </footer>
    </div>
  );
}