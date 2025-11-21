'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function CategorySection() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <h3 className="text-[#FFC107] font-display text-sm tracking-[0.2em] uppercase mb-2 flex items-center gap-2">
              <span className="w-4 h-px bg-[#FFC107]"></span> Our Fleet
            </h3>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              EXPLORE CATEGORIES
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 text-sm text-gray-400 hover:text-[#FFC107] transition-colors group font-sans pb-1 border-b border-transparent hover:border-[#FFC107]"
          >
            Lihat Semua Kategori{' '}
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
          {/* Big Card: Excavator */}
          <div className="md:col-span-2 md:row-span-2 group relative bg-[#1a1a1a] overflow-hidden border border-white/5 hover:border-[#FFC107]/50 transition-all duration-500">
            <Image
              src="/excavator.webp"
              alt="Excavator"
              fill
              className="object-cover opacity-50 group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-60 transition-opacity"></div>

            <div className="absolute bottom-0 left-0 p-8 w-full z-10">
              <div className="text-[#FFC107] text-6xl mb-2 opacity-10 font-display font-bold absolute top-6 right-6 select-none">
                01
              </div>
              <h3 className="text-3xl font-display font-bold text-white uppercase mb-2">
                Excavators
              </h3>
              <p className="text-gray-400 text-sm max-w-xs opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 font-sans">
                Tersedia kelas 10 ton hingga 50 ton. Komatsu PC200, CAT 320,
                Kobelco SK200.
              </p>
              <div className="mt-4 w-12 h-1 bg-[#FFC107] group-hover:w-24 transition-all duration-300"></div>
            </div>
          </div>

          {/* Medium Card: Bulldozer */}
          <div className="md:col-span-2 group relative bg-[#1a1a1a] overflow-hidden border border-white/5 hover:border-[#FFC107]/50 transition-all duration-500">
            <Image
              src="/bulldozer.webp"
              alt="Bulldozer"
              fill
              className="object-cover opacity-50 group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 z-10">
              <div className="text-[#FFC107] text-4xl mb-1 opacity-10 font-display font-bold absolute top-4 right-4 select-none">
                02
              </div>
              <h3 className="text-2xl font-display font-bold text-white uppercase">
                Bulldozers
              </h3>
              <p className="text-xs text-gray-400 mt-1 font-sans">
                D85ESS, D6R, D65P
              </p>
            </div>
          </div>

          {/* Small Card: Loader */}
          <div className="group relative bg-[#1a1a1a] overflow-hidden border border-white/5 hover:border-[#FFC107]/50 transition-all duration-500 min-h-[200px] md:min-h-0">
            <Image
              src="/loader.webp"
              alt="Loader"
              fill
              className="object-cover opacity-50 group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 z-10">
              <div className="text-[#FFC107] text-4xl mb-1 opacity-10 font-display font-bold absolute top-4 right-4 select-none">
                03
              </div>
              <h3 className="text-xl font-display font-bold text-white uppercase">
                Loaders
              </h3>
            </div>
          </div>

          {/* Small Card: Parts/Others */}
          <div className="group relative bg-[#FFC107] flex flex-col items-center justify-center text-center p-6 cursor-pointer hover:bg-white transition-colors duration-300">
            <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center mb-3 group-hover:border-[#FFC107] group-hover:bg-[#FFC107] transition-all">
              <ArrowRight size={20} className="text-black" />
            </div>
            <h3 className="font-display font-bold text-black text-lg uppercase leading-tight">
              Spareparts & <br />
              Attachment
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
