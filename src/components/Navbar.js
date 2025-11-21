'use client';

import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

export default function Navbar({ isScrolled }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-[#FFC107] flex items-center justify-center text-black font-display font-bold text-2xl [clip-path:polygon(0_0,100%_0,90%_100%,0%_100%)] group-hover:skew-x-6 transition-transform duration-300">
            A
          </div>
          <div>
            <h1 className="font-display font-bold text-2xl leading-none tracking-tighter text-white">
              APEX
            </h1>
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
              Heavy Equipment
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm uppercase tracking-wide text-gray-400 font-sans">
          {[
            'Home',
            'Inventory',
            'Services',
            'Promo',
            'Gallery',
            'About TJM',
          ].map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-white transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFC107] transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          {/* Wrapper sebagai Border */}
          <div className="bg-[#FFC107] p-px [clip-path:polygon(0_0,100%_0,90%_100%,0%_100%)] hover:bg-[#FFC107] transition-colors duration-300">
            {/* Button sebagai Konten */}
            <button className="flex items-center gap-2 bg-black text-[#FFC107] px-6 py-2 font-display font-bold tracking-wide hover:bg-[#FFC107] hover:text-black transition-all duration-300 [clip-path:polygon(0_0,100%_0,90%_100%,0%_100%)] text-sm h-full w-full">
              <Phone size={14} /> HUBUNGI SALES
            </button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#111] border-t border-white/10 absolute w-full left-0 top-20 p-6 flex flex-col gap-4 shadow-2xl">
          {['Inventory', 'Services', 'Financing', 'About TJM'].map((item) => (
            <a
              key={item}
              href="#"
              className="text-gray-300 hover:text-[#FFC107] font-display text-xl uppercase tracking-wide border-b border-white/5 pb-2"
            >
              {item}
            </a>
          ))}
          <button className="w-full bg-[#FFC107] text-black py-3 font-bold font-display uppercase mt-2">
            Hubungi Sales
          </button>
        </div>
      )}
    </nav>
  );
}
