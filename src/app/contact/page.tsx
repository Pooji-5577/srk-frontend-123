'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactForm)
      });

      if (response.ok) {
        setSubmitMessage('Thank you for your message! We will get back to you soon.');
        setContactForm({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        setSubmitMessage('There was an error sending your message. Please try again.');
      }
    } catch {
      setSubmitMessage('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-green-500 to-orange-500 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">Contact Us</h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 px-4">
            Get in touch with Sai Radha Krishna Educational Society
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6 md:mb-8">Get In Touch</h2>
            
            <div className="space-y-4 md:space-y-6">
              {/* Phone Numbers */}
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="bg-blue-100 p-2 md:p-3 rounded-lg flex-shrink-0">
                  <Phone className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 md:mb-2 text-sm md:text-base">Phone Numbers</h3>
                  <p className="text-gray-600 text-sm md:text-base">9550315713</p>
                  <p className="text-gray-600 text-sm md:text-base">+91 93816 44227</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="bg-green-100 p-2 md:p-3 rounded-lg flex-shrink-0">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 md:mb-2 text-sm md:text-base">Email Address</h3>
                  <p className="text-gray-600 text-sm md:text-base break-all">srketirupati@gmail.com</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="bg-orange-100 p-2 md:p-3 rounded-lg flex-shrink-0">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 md:mb-2 text-sm md:text-base">Our Address</h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    SAI RADHA KRISHNA EDUCATIONAL SOCIETY<br />
                    20-4-33, KOTHAPALL VILLAGE<br />
                    TIRUPATHI<br />
                    CHITTOOR DT, ANDHRA PRADESH-517501
                  </p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="bg-purple-100 p-2 md:p-3 rounded-lg flex-shrink-0">
                  <Clock className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 md:mb-2 text-sm md:text-base">Office Hours</h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Monday - Friday: 9:00 AM - 5:00 PM<br />
                    Saturday: 9:00 AM - 1:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-6 md:mt-8">
              <div className="bg-gray-200 h-48 md:h-64 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2" />
                  <p className="text-sm md:text-base">Interactive Map</p>
                  <p className="text-xs md:text-sm">Kothapall Village, Tirupathi</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-green-600 mb-4 md:mb-6 flex items-center">
              <Send className="w-6 h-6 md:w-8 md:h-8 mr-2 md:mr-3" />
              Send us a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={contactForm.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 md:px-4 md:py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors text-sm md:text-base"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={contactForm.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 md:px-4 md:py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors text-sm md:text-base"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={contactForm.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 md:px-4 md:py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors text-sm md:text-base"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={contactForm.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-3 py-2 md:px-4 md:py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors resize-none text-sm md:text-base"
                  placeholder="Enter your message here..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white font-bold py-3 md:py-4 px-4 md:px-6 rounded-lg text-base md:text-lg hover:from-blue-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>

              {/* Submit Message */}
              {submitMessage && (
                <div className={`p-3 md:p-4 rounded-lg mt-4 text-sm md:text-base ${
                  submitMessage.includes('Thank you') 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}