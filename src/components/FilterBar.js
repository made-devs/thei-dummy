'use client';

import { Search } from 'lucide-react';

export default function FilterBar() {
  return (
    <div className="relative -mt-20 z-20 max-w-7xl mx-auto px-6">
      <div className="bg-[#111] border border-white/10 p-6 shadow-2xl shadow-black relative overflow-hidden">
        {/* Yellow accent line top */}
        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-[#FFC107] to-transparent"></div>

        <form
          className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end"
          onSubmit={(e) => e.preventDefault()}
        >
          {[
            {
              label: 'Category',
              options: [
                'All Categories',
                'Excavator',
                'Bulldozer',
                'Wheel Loader',
              ],
            },
            {
              label: 'Brand',
              options: [
                'All Brands',
                'Komatsu',
                'Caterpillar',
                'Kobelco',
                'Hitachi',
              ],
            },
            { label: 'Min Year', options: ['2015', '2018', '2020', '2022'] },
          ].map((field, idx) => (
            <div key={idx}>
              <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 font-sans">
                {field.label}
              </label>
              <div className="relative">
                <select className="w-full bg-[#0a0a0a] text-white border border-white/10 p-3 focus:border-[#FFC107] outline-none font-display tracking-wide appearance-none cursor-pointer hover:border-white/30 transition-colors">
                  {field.options.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}

          <button
            type="button"
            className="h-12 bg-white text-black font-display font-bold uppercase tracking-wider hover:bg-[#FFC107] transition-colors flex items-center justify-center gap-2 group"
          >
            <Search
              size={16}
              className="group-hover:scale-110 transition-transform"
            />{' '}
            Cari Unit
          </button>
        </form>
      </div>
    </div>
  );
}
