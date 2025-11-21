'use client';

import { Star, Quote } from 'lucide-react';

export default function TestimonialSection() {
  const testimonials = [
    {
      name: 'Budi Santoso',
      position: 'Project Manager',
      company: 'PT Konstruksi Jaya',
      avatar: 'BS',
      rating: 5,
      text: 'Pelayanan APEX sangat profesional. Unit excavator yang kami beli kondisinya seperti baru dan sudah beroperasi 6 bulan tanpa kendala. Support after-sales nya juga excellent!',
    },
    {
      name: 'Ahmad Fauzi',
      position: 'Owner',
      company: 'CV Tambang Makmur',
      avatar: 'AF',
      rating: 5,
      text: 'Harga kompetitif dengan kualitas terjamin TJM. Proses trade-in unit lama sangat mudah dan transparan. Highly recommended untuk yang cari heavy equipment berkualitas.',
    },
    {
      name: 'Siti Nurhaliza',
      position: 'Fleet Manager',
      company: 'PT Agro Sawit Nusantara',
      avatar: 'SN',
      rating: 5,
      text: 'Sudah 3 tahun pakai unit dari APEX untuk operasional perkebunan. Service berkala selalu on-time, sparepart ready stock. Partnership yang sangat reliable.',
    },
  ];

  return (
    <section className="py-24 bg-[#111] border-y border-white/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-[#FFC107] rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-[#FFC107] rotate-12"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="text-[#FFC107] font-display text-sm tracking-[0.2em] uppercase mb-3 flex items-center justify-center gap-2">
            <Quote size={16} />
            Client Reviews
          </h3>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
            APA KATA MEREKA
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto font-sans">
            Kepercayaan klien adalah prioritas kami. Simak pengalaman partner
            yang telah bekerja sama dengan APEX.
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-[#0a0a0a] border border-white/10 p-8 hover:border-[#FFC107]/30 transition-all duration-300 group relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#FFC107] flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote size={32} className="text-black" />
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-[#FFC107] text-[#FFC107]"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6 font-sans italic">
                {testimonial.text}
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                {/* Avatar */}
                <div className="w-12 h-12 bg-[#FFC107] flex items-center justify-center font-display font-bold text-black text-lg rounded-full shrink-0">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-white font-display font-bold text-base">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-xs font-sans">
                    {testimonial.position}
                  </p>
                  <p className="text-[#FFC107] text-xs font-sans mt-0.5">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bottom */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm mb-4 font-sans">
            Bergabunglah dengan 500+ perusahaan yang mempercayai APEX
          </p>
          <button className="bg-[#FFC107] text-black px-8 py-3 font-display font-bold text-sm tracking-wider hover:bg-white transition-colors [clip-path:polygon(0_0,100%_0,95%_100%,0%_100%)]">
            LIHAT SEMUA TESTIMONI
          </button>
        </div>
      </div>
    </section>
  );
}
