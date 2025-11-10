import React from 'react';
import { MapPin, Phone } from 'lucide-react';

const dealers = [
  {
    name: 'BMW Kun Exclusive — Banjara Hills',
    address: '8-2-120/86/9/A/1, Road No. 2, Banjara Hills, Hyderabad, Telangana 500034',
    phone: '+91 40 1234 5678',
    map: 'https://maps.google.com/?q=BMW+Kun+Exclusive+Banjara+Hills',
  },
  {
    name: 'BMW KUN — Hitec City',
    address: 'Survey No. 64, Hitec City Main Rd, Madhapur, Hyderabad, Telangana 500081',
    phone: '+91 40 2345 6789',
    map: 'https://maps.google.com/?q=BMW+KUN+Hitec+City',
  },
  {
    name: 'BMW Navnit — Kukatpally',
    address: 'NH65, Kukatpally Housing Board Colony, Kukatpally, Hyderabad, Telangana 500072',
    phone: '+91 40 3456 7890',
    map: 'https://maps.google.com/?q=BMW+Navnit+Kukatpally',
  },
];

export default function Dealers() {
  return (
    <section id="dealers" className="py-14 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Authorized BMW Dealers in Hyderabad</h2>
            <p className="text-gray-600 mt-1">Connect with your nearest showroom for bookings and service support.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dealers.map((d) => (
            <div key={d.name} className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="font-semibold text-lg">{d.name}</h3>
              <p className="mt-2 text-sm text-gray-600 flex gap-2"><MapPin className="h-4 w-4 mt-0.5" /> {d.address}</p>
              <p className="mt-2 text-sm text-gray-600 flex gap-2"><Phone className="h-4 w-4" /> {d.phone}</p>
              <div className="mt-4">
                <a href={d.map} target="_blank" rel="noreferrer" className="text-sm font-medium text-blue-600 hover:underline">Open in Google Maps</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
