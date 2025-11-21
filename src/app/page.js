'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FilterBar from '@/components/FilterBar';
import CategorySection from '@/components/CategorySection';
import PromoSection from '@/components/PromoSection';
import TrustSection from '@/components/TrustSection';
import TestimonialSection from '@/components/TestimonialSection';
import GallerySection from '@/components/GallerySection';
import NewsSection from '@/components/NewsSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] font-sans selection:bg-[#FFC107] selection:text-black overflow-x-hidden">
      {/* Top Bar */}
      <div className="bg-[#FFC107] text-black py-1 text-[10px] md:text-xs font-bold tracking-wider text-center font-sans">
        PART OF TJM HEAVY EQUIPMENT (THEI) GROUP
      </div>

      <Navbar isScrolled={isScrolled} />
      <HeroSection />
      <FilterBar />
      <CategorySection />
      <PromoSection />
      <TrustSection />
      <TestimonialSection />
      <GallerySection />
      <NewsSection />
      <CtaSection />
      <Footer />
    </div>
  );
}

