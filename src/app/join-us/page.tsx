'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function JoinUsPage() {
  const [formData, setFormData] = useState({
    type: 'Students',
    name: '',
    email: '',
    contactNo: '',
    qualification: '',
    specialization: '',
    collegeName: '',
    address: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTypeChange = (type: string) => {
    setFormData(prev => ({
      ...prev,
      type
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('http://localhost:5000/api/join-us', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage('✅ Thank you for joining us! We will contact you soon.');
        setFormData({
          type: 'Students',
          name: '',
          email: '',
          contactNo: '',
          qualification: '',
          specialization: '',
          collegeName: '',
          address: ''
        });
      } else {
        setSubmitMessage(`❌ Error: ${data.message || data.error || 'Please check your information and try again.'}`);
      }
    } catch (error) {
      console.error('Join Us form error:', error);
      setSubmitMessage('❌ Network error: Please check if the backend server is running and try again.');
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">Join Our Mission</h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 px-4">
            Be part of our educational journey and make a difference in the community
          </p>
        </div>
      </section>

      {/* Join Us Form */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6 md:mb-8 text-center">Join Us</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              {/* Type Selection */}
              <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-3 sm:space-y-0 mb-4 md:mb-6">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="type"
                    value="Students"
                    checked={formData.type === 'Students'}
                    onChange={() => handleTypeChange('Students')}
                    className="w-4 h-4 text-blue-600"
                  />
                  <span className="text-base md:text-lg font-medium text-gray-700">Students</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="type"
                    value="Faculty/Others"
                    checked={formData.type === 'Faculty/Others'}
                    onChange={() => handleTypeChange('Faculty/Others')}
                    className="w-4 h-4 text-blue-600"
                  />
                  <span className="text-base md:text-lg font-medium text-gray-700">Faculty/Others</span>
                </label>
              </div>

              {/* Name */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 items-start md:items-center">
                <label className="text-base md:text-lg font-medium text-gray-700">Name</label>
                <div className="md:col-span-2">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 md:px-4 md:py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors text-sm md:text-base"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 items-start md:items-center">
                <label className="text-base md:text-lg font-medium text-gray-700">Email address</label>
                <div className="md:col-span-2">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 md:px-4 md:py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors text-sm md:text-base"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              {/* Contact No */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 items-start md:items-center">
                <label className="text-base md:text-lg font-medium text-gray-700">Contact No</label>
                <div className="md:col-span-2">
                  <input
                    type="tel"
                    name="contactNo"
                    value={formData.contactNo}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 md:px-4 md:py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors text-sm md:text-base"
                    placeholder="Enter your contact number"
                  />
                </div>
              </div>

              {/* Qualification/Studying */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 items-start md:items-center">
                <label className="text-base md:text-lg font-medium text-gray-700">Qualification / Studying</label>
                <div className="md:col-span-2">
                  <select
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 md:px-4 md:py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors bg-white text-sm md:text-base"
                  >
                    <option value="">----- Select a Qualification / Studying-----</option>
                    <option value="High School">High School</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Bachelor's Degree">Bachelor&apos;s Degree</option>
                    <option value="Master's Degree">Master&apos;s Degree</option>
                    <option value="PhD">PhD</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Certificate Course">Certificate Course</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Specialization */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 items-start md:items-center">
                <label className="text-base md:text-lg font-medium text-gray-700">Specialization</label>
                <div className="md:col-span-2">
                  <input
                    type="text"
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 md:px-4 md:py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors text-sm md:text-base"
                    placeholder="Enter your field of specialization"
                  />
                </div>
              </div>

              {/* College Name */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 items-start md:items-center">
                <label className="text-base md:text-lg font-medium text-gray-700">College Name</label>
                <div className="md:col-span-2">
                  <input
                    type="text"
                    name="collegeName"
                    value={formData.collegeName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 md:px-4 md:py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors text-sm md:text-base"
                    placeholder="Enter your college/institution name"
                  />
                </div>
              </div>

              {/* Address */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 items-start">
                <label className="text-base md:text-lg font-medium text-gray-700">Address</label>
                <div className="md:col-span-2">
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 md:px-4 md:py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors resize-none text-sm md:text-base"
                    placeholder="Enter your complete address"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4 md:pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-green-600 text-white font-bold py-3 md:py-4 px-8 md:px-12 rounded-lg text-base md:text-lg hover:from-blue-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
                </button>
              </div>

              {/* Submit Message */}
              {submitMessage && (
                <div className={`text-center p-3 md:p-4 rounded-lg mt-4 text-sm md:text-base ${submitMessage.includes('Thank you') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}