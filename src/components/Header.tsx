'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, Menu, X } from 'lucide-react';
import SRKELogo from './SRKELogo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm relative z-50">
      {/* Top contact bar - Hidden on mobile */}
      <div className="bg-gradient-to-r from-accent-500 to-accent-600 text-white py-1.5 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6 flex-wrap">
            <div className="flex items-center space-x-2">
              <Phone className="w-3.5 h-3.5" />
              <span className="text-xs">9550315713</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-3.5 h-3.5" />
              <span className="text-xs">+91 93816 44227</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-3.5 h-3.5" />
              <span className="text-xs">srketirupati@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header with logo and navigation in single row */}
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center gap-12">
          {/* Left side: Logo and Title Group */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <SRKELogo className="w-14 h-12" />
            <div className="flex flex-col">
              <p className="text-sm font-bold text-gray-800 leading-tight">
                Sai Radha Krishna
              </p>
              <p className="text-sm font-bold text-gray-800 leading-tight">
                Educational Society
              </p>
            </div>
          </Link>

          {/* Right side: Navigation Links - Desktop */}
          <nav className="hidden lg:flex items-center gap-6 ml-auto">
            <Link
              href="/"
              className="relative text-gray-700 font-medium text-sm hover:text-blue-600 transition-colors duration-300 px-2 py-2 group"
            >
              <span className="relative z-10">HOME</span>
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
            </Link>
            <Link
              href="/about"
              className="relative text-gray-700 font-medium text-sm hover:text-blue-600 transition-colors duration-300 px-2 py-2 group"
            >
              <span className="relative z-10">ABOUT US</span>
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
            </Link>
            <Link
              href="/services"
              className="relative text-gray-700 font-medium text-sm hover:text-blue-600 transition-colors duration-300 px-2 py-2 group"
            >
              <span className="relative z-10">SERVICES</span>
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
            </Link>
            <Link
              href="/join-us"
              className="relative text-gray-700 font-medium text-sm hover:text-blue-600 transition-colors duration-300 px-2 py-2 group"
            >
              <span className="relative z-10">JOIN US</span>
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
            </Link>
            <Link
              href="/links"
              className="relative text-gray-700 font-medium text-sm hover:text-blue-600 transition-colors duration-300 px-2 py-2 group"
            >
              <span className="relative z-10">LINKS</span>
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
            </Link>
            <Link
              href="/gallery"
              className="relative text-gray-700 font-medium text-sm hover:text-blue-600 transition-colors duration-300 px-2 py-2 group"
            >
              <span className="relative z-10">GALLERY</span>
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
            </Link>
            <Link
              href="/contact"
              className="relative text-gray-700 font-medium text-sm hover:text-blue-600 transition-colors duration-300 px-2 py-2 group"
            >
              <span className="relative z-10">CONTACT US</span>
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
            </Link>
          </nav>

          {/* Hamburger Menu Button - Visible on mobile/tablet */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-blue-600 hover:text-blue-700 focus:outline-none p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Navigation Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeMenu}
      >
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-4">
            <button
              onClick={closeMenu}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
            <nav className="mt-12 space-y-2">
              <Link
                href="/"
                onClick={closeMenu}
                className="block text-gray-800 font-bold text-base hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200 px-4 py-3 rounded"
              >
                HOME
              </Link>
              <Link
                href="/about"
                onClick={closeMenu}
                className="block text-gray-800 font-bold text-base hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200 px-4 py-3 rounded"
              >
                ABOUT US
              </Link>
              <Link
                href="/services"
                onClick={closeMenu}
                className="block text-gray-800 font-bold text-base hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200 px-4 py-3 rounded"
              >
                SERVICES
              </Link>
              <Link
                href="/join-us"
                onClick={closeMenu}
                className="block text-gray-800 font-bold text-base hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200 px-4 py-3 rounded"
              >
                JOIN US
              </Link>
              <Link
                href="/links"
                onClick={closeMenu}
                className="block text-gray-800 font-bold text-base hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200 px-4 py-3 rounded"
              >
                LINKS
              </Link>
              <Link
                href="/gallery"
                onClick={closeMenu}
                className="block text-gray-800 font-bold text-base hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200 px-4 py-3 rounded"
              >
                GALLERY
              </Link>
              <Link
                href="/contact"
                onClick={closeMenu}
                className="block text-gray-800 font-bold text-base hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200 px-4 py-3 rounded"
              >
                CONTACT US
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}