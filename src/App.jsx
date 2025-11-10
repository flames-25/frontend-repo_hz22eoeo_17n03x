import React, { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ModelCard from './components/ModelCard';
import Dealers from './components/Dealers';
import Footer from './components/Footer';

const ALL_MODELS = [
  {
    name: 'BMW 2 Series Gran Coupe',
    price: '₹ 43.5L',
    fuel: 'Petrol',
    power: '190 hp',
    mileage: '14–18 km/l',
    type: 'Sedan',
    image: 'https://images.unsplash.com/photo-1653751749083-63c81f5f3d00?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCTVclMjAzJTIwU2VyaWVzfGVufDB8MHx8fDE3NjI3NjE0NDV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    name: 'BMW 3 Series',
    price: '₹ 72.9L',
    fuel: 'Petrol',
    power: '258 hp',
    mileage: '13–16 km/l',
    type: 'Sedan',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'BMW 5 Series',
    price: '₹ 89.9L',
    fuel: 'Petrol',
    power: '255 hp',
    mileage: '12–15 km/l',
    type: 'Sedan',
    image: 'https://images.unsplash.com/photo-1627936354732-ffbe552799d8?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCTVclMjA3JTIwU2VyaWVzfGVufDB8MHx8fDE3NjI3NjExNjB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    name: 'BMW 7 Series',
    price: '₹ 1.8Cr',
    fuel: 'Petrol',
    power: '375 hp',
    mileage: '9–12 km/l',
    type: 'Sedan',
    image: 'https://images.unsplash.com/photo-1677517859847-0e750bfd13a9?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCTVclMjBYMXxlbnwwfDB8fHwxNzYyNzYxNDQ2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    name: 'BMW X1',
    price: '₹ 49.5L',
    fuel: 'Diesel',
    power: '150 hp',
    mileage: '16–20 km/l',
    type: 'SUV',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'BMW X3',
    price: '₹ 68.5L',
    fuel: 'Diesel',
    power: '190 hp',
    mileage: '14–18 km/l',
    type: 'SUV',
    image: 'https://images.unsplash.com/photo-1727994832515-7888b6edd884?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCTVclMjBpNHxlbnwwfDB8fHwxNzYyNzYxNDQ2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    name: 'BMW i4',
    price: '₹ 72.5L',
    fuel: 'Electric',
    power: '335 hp',
    mileage: '590 km range',
    type: 'Electric',
    image: 'https://images.unsplash.com/photo-1642189673400-2c5f1253af27?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCTVclMjBpWHxlbnwwfDB8fHwxNzYyNzYxNDQ3fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    name: 'BMW iX',
    price: '₹ 1.2Cr',
    fuel: 'Electric',
    power: '516 hp',
    mileage: '425 km range',
    type: 'Electric',
    image: 'https://images.unsplash.com/photo-1653751749083-63c81f5f3d00?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCTVclMjAzJTIwU2VyaWVzfGVufDB8MHx8fDE3NjI3NjE0NDV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
];

const FILTERS = ['All', 'Sedan', 'SUV', 'Electric'];

export default function App() {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ALL_MODELS.filter((m) => {
      const byQuery = !q || m.name.toLowerCase().includes(q);
      const byType = activeFilter === 'All' || m.type === activeFilter;
      return byQuery && byType;
    });
  }, [query, activeFilter]);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />

      <main id="models" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Explore Models</h2>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="flex rounded-full border border-gray-300 overflow-hidden w-full sm:w-80">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search models (e.g., X1, 3 Series)"
                className="w-full px-4 py-2 focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`rounded-full px-4 py-2 text-sm border transition ${
                    activeFilter === f
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((m) => (
            <ModelCard key={m.name} model={m} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-10 text-center text-gray-500">No models match your search.</div>
        )}
      </main>

      <Dealers />
      <Footer />
    </div>
  );
}
