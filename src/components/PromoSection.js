'use client';

import Image from 'next/image';
import { Calendar, Tag, ArrowRight } from 'lucide-react';

export default function PromoSection() {
  const promos = [
    {
      title: 'YEAR-END SALE',
      subtitle: 'Diskon hingga 20% untuk unit pilihan',
      description:
        'Promo khusus akhir tahun untuk excavator kelas 20-30 ton. Stock terbatas!',
      validUntil: '31 Desember 2025',
      image: '/promo1.webp',
      tag: 'HOT DEAL',
      color: 'yellow',
    },
    {
      title: 'TRADE-IN PROGRAM',
      subtitle: 'Tukar tambah unit lama Anda',
      description:
        'Dapatkan nilai tukar terbaik untuk unit lama. Upgrade ke teknologi terbaru dengan mudah.',
      validUntil: 'Berlaku Selamanya',
      image: '/promo2.webp',
      tag: 'BEST VALUE',
      color: 'green',
    },
  ];

  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-[#FFC107]/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="text-[#FFC107] font-display text-sm tracking-[0.2em] uppercase mb-3 flex items-center justify-center gap-2">
            <Tag size={16} />
            Special Offers
          </h3>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
            PROMO HIGHLIGHT
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto font-sans">
            Jangan lewatkan penawaran terbaik kami untuk upgrade armada heavy
            equipment Anda
          </p>
        </div>

        {/* Promo Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {promos.map((promo, idx) => (
            <div
              key={idx}
              className="group relative bg-[#111] border border-white/10 overflow-hidden hover:border-[#FFC107]/50 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={promo.image}
                  alt={promo.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#111] via-[#111]/50 to-transparent"></div>

                {/* Tag Badge */}
                <div
                  className={`absolute top-4 right-4 px-4 py-1 text-xs font-bold tracking-wider ${
                    promo.color === 'yellow'
                      ? 'bg-[#FFC107] text-black'
                      : 'bg-green-500 text-white'
                  }`}
                >
                  {promo.tag}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-3xl font-display font-bold text-white mb-2 group-hover:text-[#FFC107] transition-colors">
                  {promo.title}
                </h3>
                <p className="text-[#FFC107] text-sm font-bold mb-4 uppercase tracking-wide">
                  {promo.subtitle}
                </p>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed font-sans">
                  {promo.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Calendar size={16} className="text-[#FFC107]" />
                    <span className="font-sans">{promo.validUntil}</span>
                  </div>
                  <button className="flex items-center gap-2 text-white font-display text-sm font-bold hover:text-[#FFC107] transition-colors group/btn">
                    DETAIL
                    <ArrowRight
                      size={16}
                      className="group-hover/btn:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-[#FFC107] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
