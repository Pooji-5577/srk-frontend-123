'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Copy, CheckCircle, CreditCard, Building2, MapPin } from 'lucide-react';

export default function DonatePage() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [donationForm, setDonationForm] = useState({
    name: '',
    email: '',
    phone: '',
    amount: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const bankingDetails = {
    bankName: 'KARUR VYSYA BANK',
    branch: 'K. T ROAD, TIRUPATHI, CHITTOOR DT, ANDHRA PRADESH-517501',
    beneficiaryName: 'SAI RADHA KRISHNA EDUCATIONAL SOCIETY',
    accountNumber: '1440115000006242',
    ifscCode: 'KVBL0001440',
    swiftCode: 'KVBLINBBIND',
    accountType: 'Current',
    chequeInFavour: 'SAI RADHA KRISHNA EDUCATIONAL SOCIETY'
  };

  const address = {
    name: 'SAI RADHA KRISHNA EDUCATIONAL SOCIETY',
    line1: '20-4-33, KOTHAPALL VILLAGE',
    line2: 'TIRUPATHI',
    line3: 'CHITTOOR DT, ANDHRA PRADESH-517501'
  };

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setDonationForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDonationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('http://localhost:5000/api/donations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...donationForm,
          donationType: 'GENERAL'
        })
      });

      if (response.ok) {
        setSubmitMessage('Thank you for your donation intent! Please use the banking details below to complete your donation.');
        setDonationForm({
          name: '',
          email: '',
          phone: '',
          amount: '',
          message: ''
        });
      } else {
        setSubmitMessage('There was an error processing your request. Please try again.');
      }
    } catch {
      setSubmitMessage('There was an error processing your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-green-500 to-orange-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Make a Donation</h1>
          <p className="text-xl md:text-2xl mb-8">
            Support education and make a difference in students&apos; lives
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Banking Details Section */}
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-3xl font-bold text-blue-600 mb-6 flex items-center">
              <CreditCard className="w-8 h-8 mr-3" />
              Donation
            </h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-6">For Online Payment</h3>
            
            <div className="space-y-4">
              {/* Bank Name */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <label className="block text-sm font-medium text-gray-600 mb-1">Bank Name:</label>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-800">{bankingDetails.bankName}</span>
                  <button
                    onClick={() => copyToClipboard(bankingDetails.bankName, 'bankName')}
                    className="text-blue-600 hover:text-blue-800 p-1"
                    title="Copy to clipboard"
                  >
                    {copiedField === 'bankName' ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Branch */}
              <div className="bg-green-50 p-4 rounded-lg">
                <label className="block text-sm font-medium text-gray-600 mb-1">Branch:</label>
                <div className="flex justify-between items-start">
                  <span className="font-medium text-gray-800 flex-1 pr-2">{bankingDetails.branch}</span>
                  <button
                    onClick={() => copyToClipboard(bankingDetails.branch, 'branch')}
                    className="text-green-600 hover:text-green-800 p-1 flex-shrink-0"
                    title="Copy to clipboard"
                  >
                    {copiedField === 'branch' ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Beneficiary Name */}
              <div className="bg-orange-50 p-4 rounded-lg">
                <label className="block text-sm font-medium text-gray-600 mb-1">Beneficiary Name:</label>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-800">{bankingDetails.beneficiaryName}</span>
                  <button
                    onClick={() => copyToClipboard(bankingDetails.beneficiaryName, 'beneficiary')}
                    className="text-orange-600 hover:text-orange-800 p-1"
                    title="Copy to clipboard"
                  >
                    {copiedField === 'beneficiary' ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Account Number */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <label className="block text-sm font-medium text-gray-600 mb-1">Account NO:</label>
                <div className="flex justify-between items-center">
                  <span className="font-mono font-bold text-lg text-gray-800">{bankingDetails.accountNumber}</span>
                  <button
                    onClick={() => copyToClipboard(bankingDetails.accountNumber, 'account')}
                    className="text-blue-600 hover:text-blue-800 p-1"
                    title="Copy to clipboard"
                  >
                    {copiedField === 'account' ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* IFSC Code */}
              <div className="bg-green-50 p-4 rounded-lg">
                <label className="block text-sm font-medium text-gray-600 mb-1">IFSC CODE:</label>
                <div className="flex justify-between items-center">
                  <span className="font-mono font-bold text-lg text-gray-800">{bankingDetails.ifscCode}</span>
                  <button
                    onClick={() => copyToClipboard(bankingDetails.ifscCode, 'ifsc')}
                    className="text-green-600 hover:text-green-800 p-1"
                    title="Copy to clipboard"
                  >
                    {copiedField === 'ifsc' ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* SWIFT Code */}
              <div className="bg-orange-50 p-4 rounded-lg">
                <label className="block text-sm font-medium text-gray-600 mb-1">SWIFT CODE:</label>
                <div className="flex justify-between items-center">
                  <span className="font-mono font-bold text-lg text-gray-800">{bankingDetails.swiftCode}</span>
                  <button
                    onClick={() => copyToClipboard(bankingDetails.swiftCode, 'swift')}
                    className="text-orange-600 hover:text-orange-800 p-1"
                    title="Copy to clipboard"
                  >
                    {copiedField === 'swift' ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Account Type */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <label className="block text-sm font-medium text-gray-600 mb-1">Type of Account:</label>
                <span className="font-semibold text-gray-800">{bankingDetails.accountType}</span>
              </div>

              {/* Cheque Information */}
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p className="text-sm text-gray-700">
                  <strong>Cheque/Draft will be made in favour of:</strong><br />
                  &ldquo;{bankingDetails.chequeInFavour}&rdquo;
                </p>
              </div>
            </div>

            {/* Address Section */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <MapPin className="w-6 h-6 mr-2" />
                ADDRESS
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="space-y-2">
                  <p className="font-bold text-gray-800">{address.name}</p>
                  <p className="text-gray-700">{address.line1}</p>
                  <p className="text-gray-700">{address.line2}</p>
                  <p className="text-gray-700">{address.line3}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Donation Intent Form */}
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-3xl font-bold text-green-600 mb-6 flex items-center">
              <Building2 className="w-8 h-8 mr-3" />
              Donation Intent
            </h2>
            
            <p className="text-gray-600 mb-6">
              Fill out this form to let us know about your donation. We&apos;ll keep a record and send you acknowledgment.
            </p>

            <form onSubmit={handleDonationSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={donationForm.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
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
                  value={donationForm.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
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
                  value={donationForm.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Amount */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Donation Amount (₹) *
                </label>
                <input
                  type="number"
                  name="amount"
                  value={donationForm.amount}
                  onChange={handleInputChange}
                  required
                  min="1"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                  placeholder="Enter donation amount"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={donationForm.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors resize-none"
                  placeholder="Any message or specific purpose for donation"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white font-bold py-4 px-6 rounded-lg text-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'SUBMITTING...' : 'SUBMIT DONATION INTENT'}
              </button>

              {/* Submit Message */}
              {submitMessage && (
                <div className={`p-4 rounded-lg mt-4 ${submitMessage.includes('Thank you') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
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