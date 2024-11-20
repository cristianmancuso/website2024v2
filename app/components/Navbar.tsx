"use client"; // Indica que este es un Client Component

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md md:border md:border-white bg-slate-950 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="flex shrink-0">
            <a aria-current="page" className="flex items-center" href="#Welcome">
              <Image
                src="/blanco.png" 
                alt="Logo"
                width={40} 
                height={40}
                className="h-7 w-auto drop-shadow-md hover:opacity-80 transition-opacity duration-300"
              />
            </a>
          </div>
          <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
            <Link href="#Welcome" className="inline-block  rounded-lg px-2 py-1  text-white transition-all  hover:scale-105">Home</Link>
            <Link href="#Skill" className="inline-block rounded-lg px-2 py-1  text-white transition-all  hover:scale-105">Skills</Link>
            <Link href="/#Education" className="inline-block rounded-lg px-2 py-1 text-white transition-all  hover:scale-105">Education</Link>
            <Link href="/#About" className="inline-block rounded-lg px-2 py-1 text-white transition-all  hover:scale-105">About Me</Link>
            <Link href="#Logo" className="inline-block rounded-lg px-2 py-1 text-white transition-all hover:scale-105">Portfolio</Link>
          
            <Link href="/#Contacto" className="inline-block rounded-lg px-2 py-1  text-white transition-all  hover:scale-105 ">Contact Me</Link>
          </div>
          {/* Botón para móviles */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              <svg className="w-8 h-8 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menú desplegable para móviles */}
      {isOpen && (
        <div className="md:hidden bg-slate-950 text-white  shadow backdrop-blur-lg z-50 transition-opacity duration-300">
          <Link href="/" className="block px-6 py-3 transition-all duration-300">Home</Link>
          <Link href="#Skill" className="block px-6 py-3 transition-all duration-300">Skills</Link>
          <Link href="#Education" className="block px-6 py-3 transition-all duration-300">Education</Link>
          <Link href="/#About" className="block px-6 py-3  transition-all duration-300">About Me</Link>
          <Link href="/#Logo" className="block px-6 py-3  transition-all duration-300">Portfolio</Link>
          <Link href="/#Contacto" className="block px-6 py-3 transition-all duration-300">Contact Me</Link>
        </div>
      )}
    </header>
  );
}


