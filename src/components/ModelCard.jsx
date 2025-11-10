export default function ModelCard({ name, image, price, fuel, power, onEnquire }) {
  return (
    <div className="group rounded-2xl border border-black/5 bg-white shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="aspect-[16/9] w-full overflow-hidden">
        <img src={image} alt={name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-slate-600 mt-1">Starting at {price}</p>
        <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-600">
          <span className="rounded-full bg-slate-100 px-2 py-1">{fuel}</span>
          <span className="rounded-full bg-slate-100 px-2 py-1">{power}</span>
        </div>
        <div className="mt-4 flex gap-2">
          <button onClick={onEnquire} className="flex-1 rounded-full bg-black text-white px-3 py-2 text-sm hover:bg-slate-900">Enquire</button>
          <a href="#dealers" className="rounded-full border border-slate-200 px-3 py-2 text-sm hover:bg-slate-50">Test Drive</a>
        </div>
      </div>
    </div>
  );
}
