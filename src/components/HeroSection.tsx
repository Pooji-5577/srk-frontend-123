import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-green-500 to-orange-500 text-white">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-25"></div>
      
      {/* Background pattern or image could go here */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSI0Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Quote */}
          <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold mb-6 md:mb-8 leading-tight px-2">
            &ldquo;I measure the progress of a community by the degree of progress which women have achieved.&rdquo;
          </blockquote>
          
          {/* Attribution */}
          <p className="text-lg sm:text-xl md:text-2xl text-primary-100 mb-8 md:mb-12 font-medium">
            - B. R. Ambedkar
          </p>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center px-4">
            <Link
              href="/donate"
              className="w-full sm:w-auto bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl sm:min-w-[200px] text-center"
            >
              Make a Donation
            </Link>
            <Link
              href="/join-us"
              className="w-full sm:w-auto bg-secondary-500 hover:bg-secondary-600 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg text-base md:text-lg transition-all duration-300 transform hover:scale-105 sm:min-w-[200px] text-center"
            >
              Join Our Mission
            </Link>
          </div>
          
          {/* Scroll indicator - Hidden on mobile */}
          <div className="mt-12 md:mt-16 animate-bounce hidden sm:block">
            <svg className="w-6 h-6 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}