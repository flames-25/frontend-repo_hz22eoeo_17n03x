import React, { useState } from 'react';

export default function Footer() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <footer id="contact" className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-bold tracking-tight">Request a Callback</h3>
            <p className="mt-2 text-gray-600">Share your details and our Hyderabad BMW team will reach out to schedule a test drive and share on-road pricing.</p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="e.g., Arjun Reddy"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  pattern="[0-9]{10}"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="10-digit mobile"
                />
                <p className="text-xs text-gray-500 mt-1">We will use your number only for scheduling a test drive.</p>
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-black text-white py-2.5 font-medium hover:bg-gray-900"
              >
                {submitted ? 'Submitted' : 'Request Callback'}
              </button>
              {submitted && (
                <p className="text-sm text-green-600">Thanks {name.split(' ')[0] || 'there'}! Our team will call you shortly at {phone}.</p>
              )}
            </form>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6 bg-gray-50">
            <h4 className="font-semibold">Disclaimer</h4>
            <p className="mt-2 text-sm text-gray-600">
              Prices are indicative ex-showroom Hyderabad and subject to change. Specifications may vary by variant.
              Please contact your nearest authorized BMW dealer for the most accurate on-road pricing and offers.
            </p>
            <div className="mt-6 text-xs text-gray-500">
              © {new Date().getFullYear()} BMW Experience — Hyderabad, Telangana
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
