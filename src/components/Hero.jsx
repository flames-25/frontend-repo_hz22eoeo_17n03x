import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden bg-white" id="home">
      {/* Spline Canvas */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/igThmltzmqv5hkWo/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient so the 3D scene stays visible and clickable */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            Discover BMW in Hyderabad
          </h1>
          <p className="mt-4 text-gray-600 text-base md:text-lg">
            Explore the latest lineup, compare specifications, and book a test drive with authorized dealers across the city.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#models"
              className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-white text-sm font-medium hover:bg-gray-900 transition"
            >
              Browse Models
            </a>
            <a
              href="#dealers"
              className="pointer-events-auto inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50 transition"
            >
              Find Dealers
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
