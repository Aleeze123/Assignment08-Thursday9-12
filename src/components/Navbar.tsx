"use client"; 
import { useState } from "react"; 
import Link from "next/link"; 
import Image from 'next/image'; 

const Navbar = () => { 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => { 
    setIsMenuOpen((prev) => !prev); 
  };

  return (
    <>
      <nav className="bg-black shadow-md fixed top-0 w-full z-50">
        <div className="container mx-auto flex items-center justify-between h-12 px-4 md:px-8">
          <Link href="/" passHref>
            <div className="flex items-center cursor-pointer">
              <Image src="/logo.webp" alt="Logo" width={120} height={120} className="mr-2" />
            </div>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" passHref>
              <div className="flex items-center text-white hover:text-darkblue transition duration-300 cursor-pointer">
                Home
              </div>
            </Link>
            <Link href="/Blogs" passHref>
              <div className="flex items-center text-white hover:text-darkblue transition duration-300 cursor-pointer">
                Blogs
              </div>
            </Link>
            <Link href="/About" passHref>
              <div className="flex items-center text-white hover:text-darkblue transition duration-300 cursor-pointer">
                About
              </div>
            </Link>
            <Link href="/Contact" passHref>
              <div className="flex items-center text-white hover:text-darkblue transition duration-300 cursor-pointer">
                Contact
              </div>
            </Link>
          </div>
          <div className="md:hidden"> 
            <button 
              id="menu-button" 
              aria-label="Toggle menu" 
              className={`transition-transform duration-300 transform ${isMenuOpen ? 'rotate-180' : 'rotate-0'}`} 
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <span className="text-white text-2xl">✖</span>
              ) : (
                <span className="text-white text-2xl">☰</span>
              )}
            </button>
          </div>
        </div>
      </nav>

      <div 
        className={`fixed inset-y-0 left-0 w-1/2 bg-black bg-opacity-95 z-40 flex flex-col items-start justify-center transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}
      >
        <nav className="space-y-6 mt-12 pl-6">
          <Link href="/" legacyBehavior>
            <a 
              className="flex items-center text-white text-lg hover:text-darkblue transition duration-300" 
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
          </Link>
          <Link href="/Blogs" legacyBehavior>
            <a 
              className="flex items-center text-white text-lg hover:text-darkblue transition duration-300" 
              onClick={() => setIsMenuOpen(false)}
            >
              Blogs
            </a>
          </Link>
          <Link href="/About" legacyBehavior>
            <a 
              className="flex items-center text-white text-lg hover:text-darkblue transition duration-300" 
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
          </Link>
          <Link href="/Contact" legacyBehavior>
            <a 
              className="flex items-center text-white text-lg hover:text-darkblue transition duration-300" 
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
