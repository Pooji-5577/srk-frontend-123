'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Camera, Filter, Calendar, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Complete gallery with all 20 images from Supabase storage
  const galleryImages = [
    { id: 1, filename: 'sr021.jpg', category: 'Events', title: 'SRKE Special Event', description: 'Important educational event organized by SRKE Educational Society' },
    { id: 2, filename: 'ng6.JPG', category: 'Activities', title: 'Educational Activity 2', description: 'Students participating in educational activities' },
    { id: 3, filename: 'ng2.JPG', category: 'Activities', title: 'Educational Activity 3', description: 'Learning session with community members' },
    { id: 4, filename: 'ng3.JPG', category: 'Activities', title: 'Educational Activity 4', description: 'Skill development workshop for local youth' },
    { id: 5, filename: 'ng4.JPG', category: 'Activities', title: 'Educational Activity 5', description: 'Community engagement activities by SRKE' },
    { id: 6, filename: 'ng5.JPG', category: 'Activities', title: 'Educational Activity 6', description: 'Interactive learning session' },
    { id: 7, filename: 'ng7.JPG', category: 'Activities', title: 'Educational Activity 7', description: 'Community development program' },
    { id: 8, filename: 'ng8.JPG', category: 'Activities', title: 'Educational Activity 8', description: 'Educational outreach initiative' },
    { id: 9, filename: 'ng9.JPG', category: 'Activities', title: 'Educational Activity 9', description: 'Rural education program' },
    { id: 10, filename: 'ng10.JPG', category: 'Activities', title: 'Educational Activity 10', description: 'Community learning session' },
    { id: 11, filename: 'ng11.JPG', category: 'Activities', title: 'Educational Activity 11', description: 'Skills training workshop' },
    { id: 12, filename: 'ng12.JPG', category: 'Activities', title: 'Educational Activity 12', description: 'Educational awareness program' },
    { id: 13, filename: 'ng13.JPG', category: 'Activities', title: 'Educational Activity 13', description: 'Community education initiative' },
    { id: 14, filename: 'ng14.JPG', category: 'Activities', title: 'Educational Activity 14', description: 'Student engagement activity' },
    { id: 15, filename: 'ng15.JPG', category: 'Activities', title: 'Educational Activity 15', description: 'Learning and development session' },
    { id: 16, filename: 'ng16.JPG', category: 'Activities', title: 'Educational Activity 16', description: 'Educational support program' },
    { id: 17, filename: 'ng17.JPG', category: 'Activities', title: 'Educational Activity 17', description: 'Community capacity building' },
    { id: 18, filename: 'ng18.JPG', category: 'Activities', title: 'Educational Activity 18', description: 'Educational mentorship program' },
    { id: 19, filename: 'ng19.JPG', category: 'Activities', title: 'Educational Activity 19', description: 'Student support initiative' },
    { id: 20, filename: 'ng20.JPG', category: 'Activities', title: 'Educational Activity 20', description: 'Community educational program' }
  ].map(img => ({
    ...img,
    url: `https://twlzzpvwmnwdrcuiiysw.supabase.co/storage/v1/object/public/srk/gallery/${img.filename}`,
    fallback: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMDAgMTUwQzE3Mi4zODYgMTUwIDE1MCAyMjcuNjE0IDE1MCAyNTVDMTUwIDI4Mi4zODYgMTcyLjM4NiAzMDUgMjAwIDMwNUMyMjcuNjE0IDMwNSAyNTAgMjgyLjM4NiAyNTAgMjU1QzI1MCAyMjcuNjE0IDIyNy42MTQgMTUwIDIwMCAxNTBaIiBmaWxsPSIjOUI5QjlCIi8+CjxwYXRoIGQ9Ik0xNzUgMjI1QzE3NS4wMDEgMjE2LjE2MyAxNzguNTg1IDIwNy42NzEgMTg0LjkzIDIwMS4zMjZDMTkxLjI3NSAxOTQuOTgxIDE5OS43NjcgMTkxLjM5NyAyMDggMTkxLjM5N0MyMTYuMjMzIDE5MS4zOTcgMjI0LjcyNSAxOTQuOTgxIDIzMS4wNyAyMDEuMzI2QzIzNy40MTUgMjA3LjY3MSAyNDAuOTk5IDIxNi4xNjMgMjQxIDIyNUgxNzVaIiBmaWxsPSIjOUI5QjlCIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMzQwIiBmaWxsPSIjOUI5QjlCIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTZweCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+U1JLRSBHYWxsZXJ5PC90ZXh0Pgo8L3N2Zz4K'
  }));

  const categories = ['All', 'Events', 'Activities'];
  const filteredItems = selectedCategory === 'All' ? galleryImages : galleryImages.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20 pb-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Camera className="w-16 h-16 mx-auto mb-6 text-blue-200" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                SRKE Educational Gallery
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Capturing moments of learning, growth, and community engagement
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-blue-500 px-4 py-2 rounded-full flex items-center gap-2">
                  <Camera className="w-4 h-4" />
                  {galleryImages.length} Photos
                </span>
                <span className="bg-green-500 px-4 py-2 rounded-full">Educational Activities</span>
                <span className="bg-orange-500 px-4 py-2 rounded-full">Community Events</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Section */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <Filter className="w-4 h-4" />
                {category}
                <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full ml-2">
                  {category === 'All' ? galleryImages.length : galleryImages.filter(item => item.category === category).length}
                </span>
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={item.url}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = item.fallback;
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.category === 'Events' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'
                    }`}>
                      {item.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>2024</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>SRKE Campus</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <Camera className="w-16 h-16 mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-semibold text-gray-500 mb-2">No images found</h3>
              <p className="text-gray-400">Try selecting a different category filter.</p>
            </div>
          )}
        </div>

        {/* Info Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 mt-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Gallery Images from Supabase Storage</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our gallery showcases vibrant educational activities of SRKE Educational Society. 
              All {galleryImages.length} images are stored in Supabase storage bucket 'srk' with automatic optimization.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <span>Supabase Storage</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span>Next.js Optimization</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                <span>Automatic Fallbacks</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}