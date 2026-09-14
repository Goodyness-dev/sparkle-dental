import React from 'react';
import { AMENITIES_AVAILABLE, PAYMENT_METHODS } from '../../data/amenitiesData';
import { BUSINESS_INFO } from '../../data/businessData';

export default function AmenitiesSection({ onOpenWizard }) {
  return (
    <section id="amenities" className="py-20 sm:py-28 bg-[#fbfbfb] dark:bg-[#0a0a0a] transition-colors" aria-labelledby="amenities-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-bold text-neutral-600 dark:text-neutral-400 uppercase tracking-widest mb-3">
            <span>Patient Comfort & Technology</span>
          </div>
          <h2 id="amenities-heading" className="text-3xl sm:text-5xl font-black tracking-tight text-neutral-950 dark:text-white uppercase leading-tight">
            Designed Around Your Comfort.
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 mt-4 text-base sm:text-lg leading-relaxed font-medium">
            We've eliminated dental stress with state-of-the-art gentle protocols, clear financing, and weekend accessibility in Kutztown.
          </p>
        </div>

        {/* Bento Grid: Amenities & Patient Perks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {AMENITIES_AVAILABLE.slice(0, 6).map((item, idx) => (
            <div
              key={item.name}
              className="card-thick-hover p-8 rounded-3xl group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-neutral-950 dark:text-lime group-hover:scale-110 transition-transform mb-6">
                  {/* Semantic Sparkle Star SVG */}
                  <svg className="w-6 h-6 fill-current text-lime-dark dark:text-lime" viewBox="0 0 24 24">
                    <path d="M12 2l2.4 7.2h7.6l-6.1 4.5 2.3 7.3-6.2-4.6-6.2 4.6 2.3-7.3-6.1-4.5h7.6z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-black text-neutral-950 dark:text-white tracking-tight mb-2">
                  {item.name}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between text-xs font-bold text-neutral-400">
                <span>Feature #{idx + 1}</span>
                <span className="text-lime-dark dark:text-lime font-black">Verified Comfort</span>
              </div>
            </div>
          ))}
        </div>

        {/* High-Impact Promotions Banner */}
        <div className="rounded-3xl bg-neutral-950 dark:bg-neutral-900 text-white p-8 sm:p-12 shadow-thick border-2 border-neutral-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-lime/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="px-3.5 py-1.5 rounded-full bg-lime text-neutral-950 font-black text-xs uppercase tracking-wider">
                Special Patient Promotions
              </span>
              <h3 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
                New Patient Exam & Professional Bleaching Special
              </h3>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                Welcome to Sparkle Dental! Get a comprehensive digital exam, low-radiation diagnostic x-rays, and ask about our take-home teeth whitening kit special bundled with your new patient visit.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-xs font-bold text-neutral-300">
                <span className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-lime" />
                  <span>CareCredit 0% APR Options</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>PPO Insurance Direct Billing</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <button
                onClick={() => onOpenWizard('New Patient Exam')}
                className="w-full py-4 rounded-full bg-lime hover:bg-lime-hover text-neutral-950 font-black text-base transition-all shadow-glow-lime active:scale-95 text-center"
              >
                Claim Promotion & Book
              </button>
              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="w-full py-3.5 rounded-full border border-neutral-700 hover:border-neutral-500 text-white font-bold text-center text-sm transition"
              >
                Questions? Call {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
