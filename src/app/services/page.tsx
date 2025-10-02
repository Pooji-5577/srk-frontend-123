import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GraduationCap, Users, Lightbulb, BookOpen, Award, Target } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: <GraduationCap className="w-10 h-10 md:w-12 md:h-12 text-blue-600" />,
      title: "Academic Support",
      description: "Comprehensive academic assistance for students from high schools and colleges, focusing on innovative learning approaches."
    },
    {
      icon: <Users className="w-10 h-10 md:w-12 md:h-12 text-green-600" />,
      title: "Training Programs",
      description: "Specialized training programs designed to enhance skills and knowledge across various disciplines and fields."
    },
    {
      icon: <Lightbulb className="w-10 h-10 md:w-12 md:h-12 text-orange-600" />,
      title: "Innovation Support",
      description: "Supporting innovative thoughts and ideas of students, helping them develop creative solutions and projects."
    },
    {
      icon: <BookOpen className="w-10 h-10 md:w-12 md:h-12 text-blue-600" />,
      title: "Extension Services",
      description: "Educational extension services reaching out to rural and urban communities to promote learning and development."
    },
    {
      icon: <Award className="w-10 h-10 md:w-12 md:h-12 text-green-600" />,
      title: "Consultancy",
      description: "Professional consultancy services in education, research, and development for institutions and individuals."
    },
    {
      icon: <Target className="w-10 h-10 md:w-12 md:h-12 text-orange-600" />,
      title: "Research & Development",
      description: "Conducting research and development activities to advance educational methodologies and practices."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-green-500 to-orange-500 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">Our Services</h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 px-4">
            Comprehensive educational services for students and communities
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 via-green-600 to-orange-600 bg-clip-text text-transparent mb-3 md:mb-4 px-4">
              What We Offer
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              We provide comprehensive educational services to support students and promote community development
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                <div className="flex justify-center mb-3 md:mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4 text-center">{service.title}</h3>
                <p className="text-sm md:text-base text-gray-600 text-center leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Need Our Services?</h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 px-4">Get in touch with us to learn more about how we can help</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <a
              href="/contact"
              className="w-full sm:w-auto bg-white text-blue-600 font-bold py-3 px-6 md:px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 text-center"
            >
              Contact Us
            </a>
            <a
              href="/join-us"
              className="w-full sm:w-auto bg-orange-500 text-white font-bold py-3 px-6 md:px-8 rounded-lg hover:bg-orange-600 transition-colors duration-300 text-center"
            >
              Join Our Mission
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}