import { MapPin, Phone } from "lucide-react";

const dealers = [
  {
    name: "BMW Kun Exclusive",
    address: "Survey No. 64, Gachibowli, Hyderabad, Telangana 500032",
    phone: "+91 40 1234 5678",
    map: "https://maps.google.com/?q=BMW+Kun+Exclusive+Hyderabad",
  },
  {
    name: "BMW Krishna Automobiles",
    address: "Road No. 2, Banjara Hills, Hyderabad, Telangana 500034",
    phone: "+91 40 8765 4321",
    map: "https://maps.google.com/?q=BMW+Banjara+Hills+Hyderabad",
  },
];

export default function Dealers() {
  return (
    <section id="dealers" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-500">Authorised Dealerships</p>
            <h2 className="text-2xl md:text-3xl font-semibold">Find BMW in Hyderabad</h2>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {dealers.map((d) => (
            <div key={d.name} className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold">{d.name}</h3>
              <p className="mt-1 text-sm text-slate-600 flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5" /> {d.address}</p>
              <p className="mt-2 text-sm text-slate-600 flex items-center gap-2"><Phone className="h-4 w-4" /> {d.phone}</p>
              <div className="mt-4">
                <a href={d.map} target="_blank" rel="noreferrer" className="text-sm text-blue-600 hover:underline">View on Google Maps</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
