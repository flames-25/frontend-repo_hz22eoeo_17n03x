export default function Footer() {
  return (
    <footer className="py-10 border-t border-black/5 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-500">BMW Experience Hyderabad</p>
            <h3 className="text-lg font-semibold">Sheer Driving Pleasure</h3>
            <p className="mt-1 text-sm text-slate-600">For enquiries and test drives, contact your nearest authorised dealer.</p>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); alert('Thanks! A BMW representative will contact you shortly.'); }}
            className="w-full md:w-auto flex flex-col sm:flex-row gap-3"
          >
            <input
              type="text"
              required
              placeholder="Your name"
              className="w-full sm:w-56 rounded-full border border-slate-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black/10"
            />
            <input
              type="tel"
              required
              placeholder="Phone number"
              className="w-full sm:w-56 rounded-full border border-slate-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black/10"
            />
            <button className="rounded-full bg-black text-white px-5 py-2 text-sm hover:bg-slate-900">Request Callback</button>
          </form>
        </div>
        <p className="mt-8 text-xs text-slate-500">Disclaimer: This is a showcase experience site for BMW models available in Hyderabad. Specifications and prices are indicative and may vary by dealership.</p>
      </div>
    </footer>
  );
}
