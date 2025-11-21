'use client';

import Image from 'next/image';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2000"
          alt="Contact Us"
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#0a0a0a] via-[#0a0a0a]/95 to-[#0a0a0a]/80"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: CTA Content */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-12 h-0.5 bg-[#FFC107]"></span>
              <span className="text-[#FFC107] uppercase text-xs font-bold tracking-widest font-sans">
                Ready to Start?
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-display font-bold text-white leading-tight mb-6">
              BUTUH KONSULTASI
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FFC107] to-white">
                ALAT BERAT?
              </span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-8 font-sans max-w-lg">
              Tim sales kami siap membantu menemukan solusi heavy equipment yang
              tepat untuk kebutuhan proyek Anda. Konsultasi gratis dan survey
              lapangan tersedia.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <div className="bg-[#FFC107] p-0.5 [clip-path:polygon(0_0,100%_0,95%_100%,0%_100%)]">
                <button className="bg-[#FFC107] text-black px-8 py-4 font-display font-bold text-lg tracking-wider hover:bg-white transition-colors flex items-center gap-3 [clip-path:polygon(0_0,100%_0,95%_100%,0%_100%)] group">
                  <Phone size={20} />
                  HUBUNGI SALES
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>

              <button className="border-2 border-white/20 text-white px-8 py-4 font-display font-bold text-lg tracking-wider hover:bg-white/10 hover:border-white/40 transition-all">
                JADWALKAN KUNJUNGAN
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div>
                <h4 className="text-[#FFC107] font-display font-bold text-3xl mb-1">
                  500+
                </h4>
                <p className="text-gray-500 text-sm font-sans">Happy Clients</p>
              </div>
              <div>
                <h4 className="text-[#FFC107] font-display font-bold text-3xl mb-1">
                  1000+
                </h4>
                <p className="text-gray-500 text-sm font-sans">Units Sold</p>
              </div>
              <div>
                <h4 className="text-[#FFC107] font-display font-bold text-3xl mb-1">
                  24/7
                </h4>
                <p className="text-gray-500 text-sm font-sans">Support</p>
              </div>
            </div>
          </div>

          {/* Right: Contact Info Cards */}
          <div className="space-y-4">
            {[
              {
                icon: Phone,
                title: 'Telepon',
                info: '+62 21 8899 7766',
                subinfo: 'Senin - Sabtu, 08:00 - 17:00 WIB',
              },
              {
                icon: Mail,
                title: 'Email',
                info: 'apex@heavyequipment.co.id',
                subinfo: 'Response dalam 1x24 jam',
              },
              {
                icon: MapPin,
                title: 'Kantor Pusat',
                info: 'Jl. Industri Raya No. 88',
                subinfo: 'Bekasi, Jawa Barat 17530',
              },
            ].map((contact, idx) => (
              <div
                key={idx}
                className="bg-[#111] border border-white/10 p-6 hover:border-[#FFC107]/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1a1a1a] text-[#FFC107] flex items-center justify-center rounded group-hover:bg-[#FFC107] group-hover:text-black transition-colors shrink-0">
                    <contact.icon size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-gray-400 text-xs uppercase tracking-wider mb-1 font-sans">
                      {contact.title}
                    </h4>
                    <p className="text-white font-display font-bold text-lg mb-1">
                      {contact.info}
                    </p>
                    <p className="text-gray-500 text-sm font-sans">
                      {contact.subinfo}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* WhatsApp Quick Action */}
            <div className="bg-green-900/20 border border-green-800/50 p-6 hover:bg-green-900/30 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-green-400 font-display font-bold text-lg mb-1">
                    WhatsApp Business
                  </h4>
                  <p className="text-gray-400 text-sm font-sans">
                    Chat langsung dengan sales
                  </p>
                </div>
                <ArrowRight
                  size={24}
                  className="text-green-400 group-hover:translate-x-1 transition-transform"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFC107] opacity-5 blur-3xl rounded-full"></div>
      <div className="absolute top-20 right-20 w-32 h-32 border-2 border-[#FFC107] opacity-10 rotate-45"></div>
    </section>
  );
}
