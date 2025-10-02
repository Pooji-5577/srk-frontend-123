import { GraduationCap, Users, Lightbulb } from 'lucide-react';

export default function AimsObjectivesSection() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-blue-50 via-green-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold bg-gradient-to-r from-blue-600 via-green-600 to-orange-600 bg-clip-text text-transparent mb-3 md:mb-4">
            Our Aims & Objectives
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            We are dedicated to supporting education and fostering rural development through comprehensive programs and initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Objective 1 */}
          <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <div className="bg-primary-100 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <GraduationCap className="w-7 h-7 md:w-8 md:h-8 text-primary-500" />
            </div>
            <h3 className="text-lg md:text-xl font-heading font-bold text-gray-800 mb-3 md:mb-4">
              Academic Support
            </h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Academic support to the intelligent students of rural and urban areas who are 
              studying in high schools and colleges, especially the poor.
            </p>
          </div>

          {/* Objective 2 */}
          <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <div className="bg-orange-100 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <Users className="w-7 h-7 md:w-8 md:h-8 text-orange-500" />
            </div>
            <h3 className="text-lg md:text-xl font-heading font-bold text-gray-800 mb-3 md:mb-4">
              Rural Development
            </h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              To work for holistic rural development through training, education, extension, 
              consultancy, research and development.
            </p>
          </div>

          {/* Objective 3 */}
          <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <div className="bg-green-100 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <Lightbulb className="w-7 h-7 md:w-8 md:h-8 text-green-500" />
            </div>
            <h3 className="text-lg md:text-xl font-heading font-bold text-gray-800 mb-3 md:mb-4">
              Talent Promotion
            </h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              To promote young talents in the concerned area of their interests and help 
              them achieve their full potential.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}