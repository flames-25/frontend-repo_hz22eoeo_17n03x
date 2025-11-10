import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6cgXyDutDWv4h4sx/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <p className="text-xs uppercase tracking-widest text-white/80">BMW Hyderabad</p>
          <h2 className="text-3xl md:text-5xl font-semibold text-white drop-shadow">Experience Sheer Driving Pleasure</h2>
          <p className="mt-4 text-white/80">Explore the latest BMW lineup available in Hyderabad, compare variants, and book your test drive at your nearest dealership.</p>
          <div className="mt-6 flex gap-3">
            <a href="#models" className="px-5 py-2.5 rounded-full bg-white text-black text-sm font-medium shadow hover:bg-slate-100">Browse Models</a>
            <a href="#dealers" className="px-5 py-2.5 rounded-full bg-white/10 text-white border border-white/30 text-sm font-medium hover:bg-white/20">Find Dealers</a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
    </section>
  );
}
