import { Car, Phone, MapPin } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-black text-white grid place-items-center">
            <Car className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-500">BMW Experience</p>
            <h1 className="text-base font-semibold">Hyderabad, Telangana</h1>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#models" className="text-slate-700 hover:text-black">Models</a>
          <a href="#dealers" className="text-slate-700 hover:text-black">Dealerships</a>
          <a href="#contact" className="text-slate-700 hover:text-black">Contact</a>
        </nav>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-black text-white px-4 py-2 text-sm shadow-sm hover:bg-slate-900"
        >
          <Phone className="h-4 w-4" />
          Book a Test Drive
        </a>
      </div>
      <div className="md:hidden px-4 pb-3 text-sm text-slate-600 flex items-center gap-2">
        <MapPin className="h-4 w-4" /> Hyderabad
      </div>
    </header>
  );
}
