export default function WelcomeSection() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold bg-gradient-to-r from-blue-600 via-green-600 to-orange-600 bg-clip-text text-transparent mb-4 md:mb-6">
              Welcome to Sai Radha Krishna Educational Society
            </h2>
            <div className="prose prose-sm sm:prose-base lg:prose-lg text-gray-600 leading-relaxed">
              <p className="mb-3 md:mb-4">
                Sai Radha Krishna Educational Society is a non-profitable society established in 2014 
                with the main objective of supporting the innovative thoughts of students of various 
                disciplines. We are committed to providing academic support to intelligent students 
                from both rural and urban areas who are studying in high schools and colleges, 
                especially those from economically disadvantaged backgrounds.
              </p>
              <p className="mb-3 md:mb-4">
                Our society works towards holistic rural development through comprehensive training 
                programs, education initiatives, extension services, consultancy, and research and 
                development activities. We believe in nurturing young talents and helping them reach 
                their full potential in their areas of interest.
              </p>
              <p>
                Under the visionary leadership of our founder, we continue to make a meaningful 
                impact in the lives of students and communities, promoting education as the 
                foundation for social and economic progress.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none">
              {/* Placeholder for founder image */}
              <div className="w-full aspect-[4/5] max-w-80 mx-auto bg-gradient-to-br from-primary-100 via-orange-100 to-magenta-100 rounded-lg shadow-lg flex items-center justify-center border-4 border-gradient-to-r border-orange-200">
                <div className="text-center text-primary-700 p-4">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 bg-gradient-to-br from-orange-400 to-primary-500 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  <p className="text-base sm:text-lg font-semibold text-primary-700">Sri Gadiyaram</p>
                  <p className="text-base sm:text-lg font-semibold text-primary-700">Radha Krishna Murthy</p>
                  <p className="text-xs sm:text-sm text-orange-600 mt-2 font-medium">Founder</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-6 h-6 md:w-8 md:h-8 bg-orange-400 rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-5 h-5 md:w-6 md:h-6 bg-magenta-400 rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute top-1/2 -left-4 md:-left-8 w-3 h-3 md:w-4 md:h-4 bg-primary-400 rounded-full opacity-80 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}