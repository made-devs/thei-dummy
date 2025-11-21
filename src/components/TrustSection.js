'use client';

import { CheckCircle, Wrench, Coins } from 'lucide-react';

export default function TrustSection() {
  const features = [
    {
      icon: CheckCircle,
      title: 'Certified by TJM',
      desc: 'Setiap unit telah melewati inspeksi 120-titik oleh mekanik senior TJM Heavy Equipment.',
    },
    {
      icon: Wrench,
      title: 'Full Service Support',
      desc: 'Dukungan sparepart dan teknisi siap panggil ke lokasi proyek di seluruh Indonesia.',
    },
    {
      icon: Coins,
      title: 'Flexible Financing',
      desc: 'Opsi pembayaran fleksibel dan kerjasama dengan leasing terpercaya.',
    },
  ];

  return (
    <section className="py-20 bg-[#111] border-y border-white/5 relative overflow-hidden">
      {/* Background Text Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-display font-bold text-white opacity-[0.02] pointer-events-none whitespace-nowrap select-none">
        THEI TRUST
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="p-8 border border-white/5 bg-[#0a0a0a] hover:border-[#FFC107]/30 transition-colors group hover:-translate-y-1 duration-300"
            >
              <div className="w-12 h-12 bg-[#1a1a1a] text-[#FFC107] flex items-center justify-center rounded mb-6 group-hover:bg-[#FFC107] group-hover:text-black transition-colors">
                <item.icon size={24} />
              </div>
              <h4 className="text-white font-display font-bold text-xl mb-3">
                {item.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed font-sans">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
