import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Twitter, Youtube } from 'lucide-react';
import SRKELogo from './SRKELogo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
        <footer className="bg-gradient-to-r from-blue-800 via-green-800 to-orange-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-4">
              <SRKELogo className="w-12 h-12" />
              <div>
                <h3 className="font-heading font-bold text-xl text-primary-400">SRKE</h3>
                <h4 className="font-heading font-semibold text-lg text-purple-300">SOCIETY</h4>
                <p className="text-sm text-primary-300">Sai Radha Krishna Educational Society</p>
              </div>
            </div>
            <p className="text-primary-200 leading-relaxed mb-4">
              A non-profitable society established in 2014, dedicated to supporting innovative 
              thoughts of students and providing academic support to rural and urban communities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gradient-to-r from-primary-600 to-orange-500 hover:from-primary-500 hover:to-orange-400 p-2 rounded-lg transition-all duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gradient-to-r from-purple-600 to-accent-500 hover:from-purple-500 hover:to-accent-400 p-2 rounded-lg transition-all duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gradient-to-r from-logoRed-500 to-green-500 hover:from-logoRed-400 hover:to-green-400 p-2 rounded-lg transition-all duration-200">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-primary-200 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-primary-200 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-primary-200 hover:text-white transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-primary-200 hover:text-white transition-colors duration-200">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-200 hover:text-white transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-0.5" />
                <p className="text-primary-200 text-sm">
                  Tirupati, Andhra Pradesh, India
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <div className="text-primary-200 text-sm">
                  <p>9550315713</p>
                  <p>+91 93816 44227</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400" />
                <p className="text-primary-200 text-sm">srketirupati@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-800 mt-8 pt-8 text-center">
          <p className="text-primary-300 text-sm">
            Copyright © {currentYear} Sai Radha Krishna Educational Society. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}