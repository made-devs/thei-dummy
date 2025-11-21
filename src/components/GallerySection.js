'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Camera, ExternalLink } from 'lucide-react';

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = ['All', 'Excavator', 'Bulldozer', 'Loader', 'In Action'];

  const galleryItems = [
    {
      id: 1,
      image: '/excavator.webp',
      title: 'Komatsu PC200-8',
      category: 'Excavator',
      location: 'Project Site Jakarta',
    },
    {
      id: 2,
      image: '/bulldozer.webp',
      title: 'CAT D6R Bulldozer',
      category: 'Bulldozer',
      location: 'Mining Operation',
    },
    {
      id: 3,
      image: '/loader.webp',
      title: 'Komatsu WA320 Loader',
      category: 'Loader',
      location: 'Warehouse Yard',
    },
    {
      id: 4,
      image: '/gallery1.webp',
      title: 'Heavy Duty Operations',
      category: 'In Action',
      location: 'Construction Site',
    },
    {
      id: 5,
      image: '/gallery2.webp',
      title: 'Kobelco SK200',
      category: 'Excavator',
      location: 'Ready Stock',
    },
    {
      id: 6,
      image: '/gallery3.webp',
      title: 'Fleet Inspection',
      category: 'In Action',
      location: 'THEI Service Center',
    },
  ];

  const filteredGallery =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category.toLowerCase() === activeCategory.toLowerCase()
        );

  return (
    <section className="py-24 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h3 className="text-[#FFC107] font-display text-sm tracking-[0.2em] uppercase mb-3 flex items-center justify-center gap-2">
            <Camera size={16} />
            Our Portfolio
          </h3>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
            GALLERY
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto font-sans">
            Dokumentasi unit berkualitas dan proyek yang telah kami tangani
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category.toLowerCase())}
              className={`px-6 py-2 font-display text-sm font-bold tracking-wide transition-all duration-300 ${
                activeCategory === category.toLowerCase()
                  ? 'bg-[#FFC107] text-black'
                  : 'bg-[#1a1a1a] text-gray-400 hover:text-white border border-white/10 hover:border-[#FFC107]/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredGallery.map((item, idx) => (
            <div
              key={item.id}
              className="group relative aspect-4/3 bg-[#1a1a1a] overflow-hidden border border-white/10 hover:border-[#FFC107]/50 transition-all duration-500"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover  group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity"></div>

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#FFC107] text-xs font-bold uppercase tracking-wider">
                    {item.category}
                  </span>
                  <ExternalLink size={16} className="text-white" />
                </div>
                <h4 className="text-white font-display font-bold text-xl mb-1">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm font-sans">
                  {item.location}
                </p>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-40 border-t-[#FFC107] border-l-40 border-l-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="border border-white/20 text-white px-8 py-3 font-display font-bold tracking-wider hover:bg-white/10 transition-colors">
            LIHAT SEMUA GALERI
          </button>
        </div>
      </div>
    </section>
  );
}
