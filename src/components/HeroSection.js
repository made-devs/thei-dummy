'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <header className="relative h-[85vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.webp"
          alt="Construction Site"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#0a0a0a]/90 via-[#0a0a0a]/80 to-[#0a0a0a]"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div className="flex flex-col justify-center animate-fade-in-up">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-0.5 bg-[#FFC107]"></span>
            <span className="text-[#FFC107] uppercase text-xs font-bold tracking-widest font-sans">
              Premium Heavy Duty Units
            </span>
          </div>
          <h2 className="text-6xl md:text-8xl font-display font-bold text-white leading-[0.9] mb-6">
            BUILT FOR <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FFC107] to-white">
              TOUGH JOBS.
            </span>
          </h2>
          <p className="text-gray-400 max-w-md mb-8 text-lg leading-relaxed border-l-2 border-white/20 pl-4 font-sans">
            Solusi alat berat terintegrasi dengan standar kualitas TJM.
            Excavator, Loader, dan Dozer siap kerja dengan dukungan purna jual
            terbaik.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-[#FFC107] text-black px-8 py-4 font-display font-bold text-lg tracking-wider hover:bg-white transition-colors [clip-path:polygon(0_0,100%_0,90%_100%,0%_100%)] shadow-[0_0_20px_rgba(255,193,7,0.3)]">
              LIHAT UNIT
            </button>
            <button className="border border-white/20 text-white px-8 py-4 font-display font-bold text-lg tracking-wider hover:bg-white/10 transition-colors">
              DOWNLOAD KATALOG
            </button>
          </div>
        </div>

        {/* Right: Quick Spec Visual */}
        <div className="hidden md:flex justify-end items-end relative">
          <div className="bg-[#1a1a1a]/90 backdrop-blur-md p-6 border border-white/10 w-80 hover:scale-105 transition-transform duration-500 cursor-pointer group">
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#FFC107]"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 border border-[#FFC107]"></div>

            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-white font-display text-2xl group-hover:text-[#FFC107] transition-colors">
                  PC200-8
                </h3>
                <p className="text-gray-500 text-xs uppercase font-sans">
                  Hydraulic Excavator
                </p>
              </div>
              <span className="bg-green-900/50 border border-green-800 text-green-400 text-[10px] px-2 py-1 rounded font-bold tracking-wider">
                READY
              </span>
            </div>
            <div className="space-y-3 font-sans">
              <div className="flex justify-between text-sm border-b border-white/5 pb-2">
                <span className="text-gray-500">Year</span>
                <span className="text-white">2021</span>
              </div>
              <div className="flex justify-between text-sm border-b border-white/5 pb-2">
                <span className="text-gray-500">Hours</span>
                <span className="text-white">4,200 HM</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Location</span>
                <span className="text-white">Jakarta Yard</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
