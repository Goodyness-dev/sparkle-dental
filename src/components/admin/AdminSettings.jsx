import React, { useState } from 'react';
import { BUSINESS_INFO } from '../../data/businessData';

export default function AdminSettings() {
  const [saved, setSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h2 className="text-xl font-black text-white">Clinic Settings & Alerts</h2>
        <p className="text-xs text-neutral-400">Manage office notifications, contact channels, and doctor credentials.</p>
      </div>

      <div className="card-thick p-6 sm:p-8 rounded-3xl bg-neutral-900 border border-neutral-800 space-y-6">
        <form onSubmit={handleSave} className="space-y-4 text-xs">
          <div>
            <label className="block text-neutral-400 font-bold uppercase mb-1">Practice Name</label>
            <input
              type="text"
              defaultValue={BUSINESS_INFO.name}
              className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-3 text-white outline-none focus:border-lime"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-neutral-400 font-bold uppercase mb-1">Clinic Phone</label>
              <input
                type="text"
                defaultValue={BUSINESS_INFO.phone}
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-3 text-white outline-none focus:border-lime"
              />
            </div>
            <div>
              <label className="block text-neutral-400 font-bold uppercase mb-1">Clinic Email</label>
              <input
                type="email"
                defaultValue={BUSINESS_INFO.email}
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-3 text-white outline-none focus:border-lime"
              />
            </div>
          </div>

          <div>
            <label className="block text-neutral-400 font-bold uppercase mb-1">Physical Address</label>
            <input
              type="text"
              defaultValue={BUSINESS_INFO.address.formatted}
              className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-3 text-white outline-none focus:border-lime"
            />
          </div>

          <div>
            <label className="block text-neutral-400 font-bold uppercase mb-1">Lead Clinician</label>
            <input
              type="text"
              defaultValue={BUSINESS_INFO.owner.name}
              className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-3 text-white outline-none focus:border-lime"
            />
          </div>

          {saved && (
            <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-800 text-emerald-300 font-bold text-center">
              ✓ Clinic settings saved successfully!
            </div>
          )}

          <div className="pt-2">
            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-lime hover:bg-lime-hover text-neutral-950 font-black uppercase tracking-wider transition shadow-glow-lime"
            >
              Save Clinic Information
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
