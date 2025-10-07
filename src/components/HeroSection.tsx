'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Hero slideshow images - Using paths from public folder
  // Images are now in: frontend/public/hero/
  const heroImages = [
    '/hero/slide1.jpg',  // IMG-20201106-WA0007.jpg
    '/hero/slide2.jpg',  // IMG-20201106-WA0006.jpg
  ];

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroImages.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-green-500 to-orange-500 text-white overflow-hidden h-screen">
      {/* Image Slideshow */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Using Next.js Image component for optimized loading */}
            <Image
              src={image}
              alt={`SRKE Educational Society - Slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
              onError={() => {
                console.error(`Failed to load image: ${image}`);
              }}
            />
          </div>
        ))}
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Previous Button */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 backdrop-blur-sm text-white p-2 md:p-3 rounded-full transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 backdrop-blur-sm text-white p-2 md:p-3 rounded-full transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white w-6 md:w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-end pb-16 md:pb-24 z-10">
        <div className="w-full max-w-4xl mx-auto text-center">
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center px-4">
            <Link
              href="/donate"
              className="w-full sm:w-auto text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl sm:min-w-[200px] text-center"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', padding: '10px 20px', borderRadius: '5px', border: '1px solid white' }}
            >
              Make a Donation
            </Link>
            <Link
              href="/join-us"
              className="w-full sm:w-auto text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg text-base md:text-lg transition-all duration-300 transform hover:scale-105 sm:min-w-[200px] text-center"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', padding: '10px 20px', borderRadius: '5px', border: '1px solid white' }}
            >
              Join Our Mission
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}