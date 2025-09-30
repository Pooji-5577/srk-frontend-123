import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';
import SRKELogo from './SRKELogo';

export default function Header() {
  return (
    <header className="bg-white shadow-md relative z-10">
      {/* Top contact bar */}
      <div className="bg-gradient-to-r from-accent-500 to-accent-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>9550315713</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+91 93816 44227</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>srketirupati@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4">
            <SRKELogo className="w-20 h-16" />
            <div>
              <p className="text-sm font-semibold text-gray-700 mt-0.5">Sai Radha Krishna Educational Society</p>
              <p className="text-xs text-gray-500 italic">Where Thinking Begins</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Navigation Bar - ALWAYS VISIBLE */}
      <div className="bg-blue-600 w-full">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-center space-x-8 py-4">
            <Link
              href="/"
              style={{ color: 'white', display: 'block', visibility: 'visible' }}
              className="!text-white font-bold text-base hover:text-orange-300 transition-colors duration-200 px-3 py-2 rounded hover:bg-blue-700"
            >
              HOME
            </Link>
            <Link
              href="/about"
              style={{ color: 'white', display: 'block', visibility: 'visible' }}
              className="!text-white font-bold text-base hover:text-orange-300 transition-colors duration-200 px-3 py-2 rounded hover:bg-blue-700"
            >
              ABOUT US
            </Link>
            <Link
              href="/services"
              style={{ color: 'white', display: 'block', visibility: 'visible' }}
              className="!text-white font-bold text-base hover:text-orange-300 transition-colors duration-200 px-3 py-2 rounded hover:bg-blue-700"
            >
              SERVICES
            </Link>
            <Link
              href="/join-us"
              style={{ color: 'white', display: 'block', visibility: 'visible' }}
              className="!text-white font-bold text-base hover:text-orange-300 transition-colors duration-200 px-3 py-2 rounded hover:bg-blue-700"
            >
              JOIN US
            </Link>
            <Link
              href="/links"
              style={{ color: 'white', display: 'block', visibility: 'visible' }}
              className="!text-white font-bold text-base hover:text-orange-300 transition-colors duration-200 px-3 py-2 rounded hover:bg-blue-700"
            >
              LINKS
            </Link>
            <Link
              href="/gallery"
              style={{ color: 'white', display: 'block', visibility: 'visible' }}
              className="!text-white font-bold text-base hover:text-orange-300 transition-colors duration-200 px-3 py-2 rounded hover:bg-blue-700"
            >
              GALLERY
            </Link>
            <Link
              href="/contact"
              style={{ color: 'white', display: 'block', visibility: 'visible' }}
              className="!text-white font-bold text-base hover:text-orange-300 transition-colors duration-200 px-3 py-2 rounded hover:bg-blue-700"
            >
              CONTACT US
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}