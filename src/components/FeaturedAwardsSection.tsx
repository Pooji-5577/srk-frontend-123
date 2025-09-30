import Link from 'next/link';
import Image from 'next/image';
import { Award, Heart, UserPlus } from 'lucide-react';

export default function FeaturedAwardsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Dr. A.P.J. Abdul Kalam Awards */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg p-8 text-white h-full flex flex-col justify-center text-center">
              <Award className="w-12 h-12 mx-auto mb-4 text-accent-300" />
              <h3 className="text-2xl font-heading font-bold mb-4">
                Dr. A.P.J. Abdul Kalam Awards
              </h3>
              <p className="text-primary-100 leading-relaxed">
                Recognizing excellence in education and inspiring young minds to achieve greatness 
                in their chosen fields of study.
              </p>
              <Link 
                href="/awards" 
                className="inline-block mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Join Us & Donate Cards */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {/* Join Us Card */}
            <div className="bg-gradient-to-br from-orange-500 to-logoRed-500 rounded-lg p-8 text-white text-center h-full flex flex-col justify-center">
              <UserPlus className="w-12 h-12 mx-auto mb-4 text-orange-100" />
              <h3 className="text-2xl font-heading font-bold mb-4">
                Join With Us
              </h3>
              <p className="text-orange-100 leading-relaxed mb-6">
                Provide academic support to the poor and help us build a better future for students in need.
              </p>
              <Link 
                href="/join-us" 
                className="inline-block bg-white text-orange-700 font-semibold py-3 px-6 rounded-lg hover:bg-orange-50 transition-colors duration-200"
              >
                Join Our Mission
              </Link>
            </div>

            {/* Donate Card */}
            <div className="bg-gradient-to-br from-accent-500 to-purple-500 rounded-lg p-8 text-white text-center h-full flex flex-col justify-center">
              <Heart className="w-12 h-12 mx-auto mb-4 text-accent-100" />
              <h3 className="text-2xl font-heading font-bold mb-4">
                Make a Donation
              </h3>
              <p className="text-accent-100 leading-relaxed mb-6">
                Support our cause today and help us provide education opportunities to deserving students.
              </p>
              <Link 
                href="/donate" 
                className="inline-block bg-white text-purple-700 font-semibold py-3 px-6 rounded-lg hover:bg-purple-50 transition-colors duration-200"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary-500 mb-2">500+</div>
              <p className="text-gray-600 font-medium">Students Supported</p>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-orange-500 mb-2">50+</div>
              <p className="text-gray-600 font-medium">Rural Communities</p>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-accent-500 mb-2">10+</div>
              <p className="text-gray-600 font-medium">Years of Service</p>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-green-500 mb-2">100+</div>
              <p className="text-gray-600 font-medium">Volunteers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}