import React from 'react';
import { Car, MapPin, Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-black grid place-items-center text-white">
              <Car className="h-5 w-5" />
            </div>
            <div>
              <p className="text-lg font-semibold tracking-tight">BMW Experience</p>
              <p className="text-xs text-gray-500 flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" /> Hyderabad, Telangana
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#models" className="text-gray-700 hover:text-black transition">Models</a>
            <a href="#dealers" className="text-gray-700 hover:text-black transition">Dealers</a>
            <a href="#contact" className="text-gray-700 hover:text-black transition">Contact</a>
          </nav>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-black text-white px-4 py-2 text-sm font-medium hover:bg-gray-900 transition"
          >
            <Phone className="h-4 w-4" />
            Book Test Drive
          </a>
        </div>
      </div>
    </header>
  );
}
