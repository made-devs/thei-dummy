'use client';

import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black pt-16 pb-8 border-t border-white/10 font-sans">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-[#FFC107] flex items-center justify-center font-bold text-black font-display rounded-sm">
              A
            </div>
            <h2 className="font-display font-bold text-2xl text-white">
              APEX HEAVY EQUIPMENT
            </h2>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed max-w-sm mb-6">
            Partner terpercaya untuk kebutuhan alat berat konstruksi, tambang,
            dan perkebunan. Bagian resmi dari ekosistem TJM Group.
          </p>
          <div className="flex gap-4">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded bg-[#1a1a1a] flex items-center justify-center text-gray-400 hover:bg-[#FFC107] hover:text-black transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-white font-display font-bold text-lg mb-4 uppercase tracking-wider">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-gray-500">
            {[
              'Inventory Ready',
              'Layanan Service',
              'Spareparts',
              'Hubungi Kami',
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-[#FFC107] transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-display font-bold text-lg mb-4 uppercase tracking-wider">
            Contact
          </h3>
          <ul className="space-y-4 text-sm text-gray-500">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-1 text-[#FFC107] shrink-0" />
              <span>
                Jl. Industri Raya No. 88,
                <br />
                Bekasi, Jawa Barat, Indonesia
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-[#FFC107] shrink-0" />
              <span>+62 21 8899 7766</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-[#FFC107] shrink-0" />
              <span>apex@heavyequipment.co.id</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
        <p>&copy; 2025 Apex Heavy Equipment. All rights reserved.</p>
        <p>
          Part of{' '}
          <span className="text-gray-400 font-bold">
            TJM Heavy Equipment Group
          </span>
        </p>
      </div>
    </footer>
  );
}
