import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, Target, BookOpen } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-green-500 to-orange-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl md:text-2xl mb-8">
            Learn more about Sai Radha Krishna Educational Society
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Mission Statement */}
            <div className="bg-white rounded-lg shadow-xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                &ldquo;I measure the progress of a community by the degree of progress which women have achieved.&rdquo;
                <span className="block mt-4 text-blue-600 font-semibold">- B. R. Ambedkar</span>
              </p>
            </div>

            {/* About Content */}
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <BookOpen className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-800">Our Story</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Sai Radha Krishna Educational Society is a non-profitable society established in 2014 
                  with the main objective of supporting the innovative thoughts of students of various 
                  disciplines. We are committed to providing academic support to intelligent students 
                  from both rural and urban areas who are studying in high schools and colleges, 
                  especially those from economically disadvantaged backgrounds.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-orange-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Our society works towards holistic rural development through comprehensive training 
                  programs, education initiatives, extension services, consultancy, and research and 
                  development activities. We believe in nurturing young talents and helping them reach 
                  their full potential in their areas of interest.
                </p>
              </div>
            </div>

            {/* Leadership */}
            <div className="bg-white rounded-lg shadow-xl p-8">
              <div className="flex items-center mb-6">
                <Users className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Our Leadership</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Under the visionary leadership of our founder, we continue to make a meaningful 
                impact in the lives of students and communities, promoting education as the 
                foundation for social and economic progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}