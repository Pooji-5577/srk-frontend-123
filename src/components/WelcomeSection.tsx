export default function WelcomeSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold bg-gradient-to-r from-blue-600 via-green-600 to-orange-600 bg-clip-text text-transparent mb-6">
              Welcome to Sai Radha Krishna Educational Society
            </h2>
            <div className="prose prose-lg text-gray-600 leading-relaxed">
              <p>
                Sai Radha Krishna Educational Society is a non-profitable society established in 2014 
                with the main objective of supporting the innovative thoughts of students of various 
                disciplines. We are committed to providing academic support to intelligent students 
                from both rural and urban areas who are studying in high schools and colleges, 
                especially those from economically disadvantaged backgrounds.
              </p>
              <p className="mt-4">
                Our society works towards holistic rural development through comprehensive training 
                programs, education initiatives, extension services, consultancy, and research and 
                development activities. We believe in nurturing young talents and helping them reach 
                their full potential in their areas of interest.
              </p>
              <p className="mt-4">
                Under the visionary leadership of our founder, we continue to make a meaningful 
                impact in the lives of students and communities, promoting education as the 
                foundation for social and economic progress.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Placeholder for founder image */}
              <div className="w-80 h-96 bg-gradient-to-br from-primary-100 via-orange-100 to-magenta-100 rounded-lg shadow-lg flex items-center justify-center border-4 border-gradient-to-r border-orange-200">
                <div className="text-center text-primary-700">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-orange-400 to-primary-500 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  <p className="text-lg font-semibold text-primary-700">Sri Gadiyaram</p>
                  <p className="text-lg font-semibold text-primary-700">Radha Krishna Murthy</p>
                  <p className="text-sm text-orange-600 mt-2 font-medium">Founder</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-400 rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-magenta-400 rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-primary-400 rounded-full opacity-80 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}