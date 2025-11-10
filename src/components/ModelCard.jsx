import React from 'react';
import { Zap, Fuel, Gauge } from 'lucide-react';

export default function ModelCard({ model }) {
  return (
    <div className="group rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition overflow-hidden">
      <div className="aspect-video w-full bg-gray-100">
        <img
          src={model.image}
          alt={model.name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-lg font-semibold tracking-tight">{model.name}</h3>
            <p className="text-sm text-gray-500">Starting at {model.price}</p>
          </div>
          <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">{model.fuel}</span>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-gray-600">
          <div className="flex items-center gap-1.5"><Zap className="h-4 w-4" /> {model.power}</div>
          <div className="flex items-center gap-1.5"><Fuel className="h-4 w-4" /> {model.mileage}</div>
          <div className="flex items-center gap-1.5"><Gauge className="h-4 w-4" /> {model.type}</div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <a
            href={`mailto:sales@bmw-hyd.example?subject=Enquiry%20-%20${encodeURIComponent(model.name)}&body=Hi%20Team%2C%0D%0AI'm%20interested%20in%20the%20${encodeURIComponent(model.name)}.%20Please%20share%20on-road%20price%20and%20availability%20in%20Hyderabad.`}
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium hover:bg-gray-50"
          >
            Enquire
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg bg-black px-3 py-2 text-sm font-medium text-white hover:bg-gray-900"
          >
            Book Test Drive
          </a>
        </div>
      </div>
    </div>
  );
}
