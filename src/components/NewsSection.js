'use client';

import Image from 'next/image';
import { Calendar, ArrowRight, Newspaper } from 'lucide-react';

export default function NewsSection() {
  const news = [
    {
      id: 1,
      title: 'APEX Launching Program Sewa Alat Berat Jangka Panjang',
      excerpt:
        'Solusi baru untuk perusahaan yang membutuhkan fleksibilitas tanpa komitmen pembelian unit. Sistem rental dengan maintenance included.',
      image: '/promo2.webp',
      date: '15 November 2025',
      category: 'Product Launch',
    },
    {
      id: 2,
      title: 'Ekspansi Workshop di 5 Kota Besar Indonesia',
      excerpt:
        'APEX membuka service center di Surabaya, Makassar, Balikpapan, Palembang, dan Medan untuk support after-sales lebih cepat.',
      image: '/news2.webp',
      date: '8 November 2025',
      category: 'Company News',
    },
    {
      id: 3,
      title: 'Partnership dengan Komatsu untuk Unit Hybrid',
      excerpt:
        'Kerjasama eksklusif menghadirkan excavator hybrid yang lebih ramah lingkungan dan hemat bahan bakar hingga 30%.',
      image: '/promo1.webp',
      date: '1 November 2025',
      category: 'Partnership',
    },
  ];

  return (
    <section className="py-24 bg-[#111] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h3 className="text-[#FFC107] font-display text-sm tracking-[0.2em] uppercase mb-3 flex items-center gap-2">
              <Newspaper size={16} />
              Latest Updates
            </h3>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              BERITA & ARTIKEL
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 text-sm text-gray-400 hover:text-[#FFC107] transition-colors group font-sans pb-1 border-b border-transparent hover:border-[#FFC107]"
          >
            Lihat Semua Berita{' '}
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, idx) => (
            <article
              key={item.id}
              className="group bg-[#0a0a0a] border border-white/10 overflow-hidden hover:border-[#FFC107]/50 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover  group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black to-transparent opacity-60"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-[#FFC107] text-black px-3 py-1 text-xs font-bold tracking-wider">
                  {item.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Date */}
                <div className="flex items-center gap-2 text-gray-500 text-xs mb-3 font-sans">
                  <Calendar size={14} className="text-[#FFC107]" />
                  {item.date}
                </div>

                {/* Title */}
                <h3 className="text-white font-display font-bold text-xl mb-3 leading-tight group-hover:text-[#FFC107] transition-colors line-clamp-2">
                  {item.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4 font-sans line-clamp-3">
                  {item.excerpt}
                </p>

                {/* Read More Link */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-white text-sm font-display font-bold hover:text-[#FFC107] transition-colors group/link"
                >
                  BACA SELENGKAPNYA
                  <ArrowRight
                    size={16}
                    className="group-hover/link:translate-x-1 transition-transform"
                  />
                </a>
              </div>

              {/* Bottom Accent Line */}
              <div className="h-1 w-0 bg-[#FFC107] group-hover:w-full transition-all duration-500"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
