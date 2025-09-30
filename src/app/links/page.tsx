import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ExternalLink, BookOpen, GraduationCap, Users, Award, Globe } from 'lucide-react';

export default function LinksPage() {
  const linkCategories = [
    {
      title: "Educational Resources - SRKE Recommended",
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      links: [
        {
          name: "NPTEL (mtls/videos)",
          url: "https://www.nptel.iitm.ac.in",
          description: "National Programme on Technology Enhanced Learning - Video lectures and courses"
        },
        {
          name: "Valual labs",
          url: "https://www.vlabs.ac.in",
          description: "Virtual Labs - Interactive online laboratory experiments"
        },
        {
          name: "Abdulkalam",
          url: "https://www.abdulkalam.com",
          description: "Official website dedicated to Dr. A.P.J. Abdul Kalam"
        },
        {
          name: "Jobs/other mtls (sakshieducation)",
          url: "https://www.sakshieducation.com",
          description: "Educational resources, job notifications, and career guidance"
        }
      ]
    },
    {
      title: "Government Educational Resources",
      icon: <GraduationCap className="w-8 h-8 text-green-600" />,
      links: [
        {
          name: "Ministry of Education, India",
          url: "https://www.education.gov.in/",
          description: "Official website of the Ministry of Education, Government of India"
        },
        {
          name: "NCERT - National Council of Educational Research and Training",
          url: "https://ncert.nic.in/",
          description: "Educational resources and curriculum development"
        },
        {
          name: "UGC - University Grants Commission",
          url: "https://www.ugc.ac.in/",
          description: "Higher education regulations and guidelines"
        },
        {
          name: "SWAYAM - Online Learning Platform",
          url: "https://swayam.gov.in/",
          description: "Free online courses and educational content"
        }
      ]
    },
    {
      title: "Research & Development",
      icon: <Users className="w-8 h-8 text-purple-600" />,
      links: [
        {
          name: "CSIR - Council of Scientific and Industrial Research",
          url: "https://www.csir.res.in/",
          description: "Premier research organization in India"
        },
        {
          name: "DST - Department of Science & Technology",
          url: "https://dst.gov.in/",
          description: "Science and technology development initiatives"
        },
        {
          name: "ISRO - Indian Space Research Organisation",
          url: "https://www.isro.gov.in/",
          description: "Space research and satellite technology"
        }
      ]
    },
    {
      title: "Student Scholarships",
      icon: <Award className="w-8 h-8 text-orange-600" />,
      links: [
        {
          name: "National Scholarship Portal",
          url: "https://scholarships.gov.in/",
          description: "Central government scholarships for students"
        },
        {
          name: "Andhra Pradesh Scholarships",
          url: "https://apsche.ap.gov.in/",
          description: "State government scholarship schemes"
        },
        {
          name: "PM Scholarship Scheme",
          url: "https://ksb.gov.in/",
          description: "Prime Minister's scholarship for higher education"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20 pb-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Educational Links & Resources
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Curated collection of educational websites, resources, and platforms recommended by SRKE Educational Society
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-blue-500 px-4 py-2 rounded-full">Educational Resources</span>
                <span className="bg-green-500 px-4 py-2 rounded-full">Government Portals</span>
                <span className="bg-purple-500 px-4 py-2 rounded-full">Research Organizations</span>
                <span className="bg-orange-500 px-4 py-2 rounded-full">Scholarships</span>
              </div>
            </div>
          </div>
        </div>

        {/* Links Categories */}
        <div className="container mx-auto px-4 py-16">
          <div className="space-y-16">
            {linkCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-gray-50 to-white p-6 border-b border-gray-200">
                  <div className="flex items-center gap-4">
                    {category.icon}
                    <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {category.links.map((link, linkIndex) => (
                      <div key={linkIndex} className="group">
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block p-6 bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-lg hover:shadow-md transition-all duration-300 hover:border-blue-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-white"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                {link.name}
                              </h3>
                              <p className="text-gray-600 text-sm leading-relaxed">
                                {link.description}
                              </p>
                              <div className="mt-3 flex items-center text-blue-600 text-sm font-medium">
                                <span>Visit Website</span>
                                <ExternalLink className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8">
            <div className="max-w-4xl mx-auto text-center">
              <Globe className="w-12 h-12 mx-auto mb-4 text-blue-200" />
              <h2 className="text-2xl font-bold mb-4">Need More Resources?</h2>
              <p className="text-blue-100 mb-6 leading-relaxed">
                SRKE Educational Society continuously updates this collection of educational links. 
                If you know of valuable educational resources that should be included, please contact us.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Suggest a Resource
                </a>
                <a
                  href="/about"
                  className="border border-blue-300 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  About SRKE
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}