import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ModelCard from "./components/ModelCard";
import Dealers from "./components/Dealers";
import Footer from "./components/Footer";

const models = [
  {
    name: "BMW 2 Series Gran Coupé",
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=1600&auto=format&fit=crop",
    price: "₹43.90 Lakh",
    fuel: "Petrol/Diesel",
    power: "Up to 190 hp",
  },
  {
    name: "BMW 3 Series",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1600&auto=format&fit=crop",
    price: "₹72.90 Lakh",
    fuel: "Petrol",
    power: "Up to 255 hp",
  },
  {
    name: "BMW X1",
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=1600&auto=format&fit=crop",
    price: "₹49.50 Lakh",
    fuel: "Petrol/Diesel",
    power: "Up to 192 hp",
  },
  {
    name: "BMW X3",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop",
    price: "₹68.50 Lakh",
    fuel: "Diesel",
    power: "Up to 190 hp",
  },
  {
    name: "BMW 5 Series",
    image: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=1600&auto=format&fit=crop",
    price: "₹65.00 Lakh",
    fuel: "Petrol",
    power: "Up to 255 hp",
  },
  {
    name: "BMW 7 Series",
    image: "https://images.unsplash.com/photo-1627936354732-ffbe552799d8?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCTVclMjA3JTIwU2VyaWVzfGVufDB8MHx8fDE3NjI3NjExNjB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
    price: "₹1.70 Crore",
    fuel: "Petrol",
    power: "Up to 375 hp",
  },
  {
    name: "BMW iX (Electric)",
    image: "https://images.unsplash.com/photo-1687362438620-b2f0c0faddb0?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCTVclMjBpWCUyMCUyOEVsZWN0cmljJTI5fGVufDB8MHx8fDE3NjI3NjExNjF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
    price: "₹1.21 Crore",
    fuel: "Electric",
    power: "xDrive40",
  },
  {
    name: "BMW M4 Competition",
    image: "https://images.unsplash.com/photo-1728060838342-cb9744a27d1b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCTVclMjBNNCUyMENvbXBldGl0aW9ufGVufDB8MHx8fDE3NjI3NjExNjF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
    price: "₹1.48 Crore",
    fuel: "Petrol",
    power: "510 hp",
  },
];

export default function App() {
  const handleEnquire = (modelName) => {
    const msg = `I'd like to know more about the ${modelName} in Hyderabad.`;
    window.location.href = `mailto:sales@bmw-hyd.com?subject=Enquiry%20-%20${encodeURIComponent(modelName)}&body=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />

      <main id="models" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-500">Available Now</p>
              <h2 className="text-2xl md:text-3xl font-semibold">BMW Models in Hyderabad</h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {models.map((m) => (
              <ModelCard
                key={m.name}
                name={m.name}
                image={m.image}
                price={m.price}
                fuel={m.fuel}
                power={m.power}
                onEnquire={() => handleEnquire(m.name)}
              />
            ))}
          </div>
        </div>
      </main>

      <Dealers />
      <Footer />
    </div>
  );
}
