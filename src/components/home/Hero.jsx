import React, { useState } from 'react';
import { BUSINESS_INFO, isOpenNow } from '../../data/businessData';

export default function Hero({ onOpenWizard }) {
  const [selectedBadge, setSelectedBadge] = useState('New Patient');
  const openStatus = isOpenNow();

  const tags = [
    { label: 'Zero-Anxiety Care', sub: 'Gentle local anesthesia', pos: 'top-12 left-4 sm:left-12' },
    { label: 'Same-Day Crowns', sub: 'Precision ceramic fit', pos: 'top-20 right-4 sm:right-16' },
    { label: '5.0 Star Rating', sub: 'Berks County verified', pos: 'bottom-28 left-6 sm:left-24' },
    { label: 'PPO & Medicare HMO', sub: 'Direct insurance filing', pos: 'bottom-24 right-6 sm:right-20' },
  ];

  return (
    <section className="relative pt-8 sm:pt-14 pb-16 sm:pb-24 overflow-hidden bg-dotted-grid" aria-label="Sparkle Dental Hero">
      {/* Background Soft Atmospheric Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[350px] bg-gradient-to-b from-lime/20 via-emerald-100/20 to-transparent dark:from-lime/10 dark:via-emerald-950/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Top Headline (Deconstructed from Reference Image) */}
        <div className="text-center max-w-4xl mx-auto space-y-3 sm:space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs sm:text-sm font-semibold text-neutral-700 dark:text-neutral-300 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-lime animate-ping" />
            <span>Discover your Kutztown dental sanctuary</span>
            <span className="text-neutral-300 dark:text-neutral-700">|</span>
            <span className={`text-xs font-bold ${openStatus ? 'text-emerald-600 dark:text-emerald-400' : 'text-neutral-500'}`}>
              {openStatus ? 'Open Now' : 'Mon & Wed 8-5 • 1st Sat'}
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-neutral-950 dark:text-white uppercase leading-[0.92]">
            PERFECT <span className="underline decoration-lime decoration-wavy decoration-from-font underline-offset-8">SMILE</span>
          </h1>

          <p className="text-base sm:text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto font-medium leading-relaxed pt-1">
            Personalized, anxiety-free general and restorative dentistry led by{' '}
            <strong className="text-neutral-900 dark:text-white font-bold">Dr. Subhashini Pamulapati, DDS</strong>. Serving Kutztown and Berks County families.
          </p>

          {/* Instant Action CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
            <button
              onClick={() => onOpenWizard()}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-neutral-950 hover:bg-neutral-800 dark:bg-lime dark:hover:bg-lime-hover text-white dark:text-neutral-950 font-black text-base sm:text-lg tracking-tight transition-all shadow-thick active:scale-95 flex items-center justify-center space-x-3 group"
            >
              <span>Request Appointment</span>
              <div className="w-6 h-6 rounded-full bg-white/20 dark:bg-black/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <svg className="w-3.5 h-3.5 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="w-full sm:w-auto px-7 py-4 rounded-full bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 border-2 border-neutral-300/90 dark:border-neutral-700 text-neutral-900 dark:text-white font-bold text-base transition-all flex items-center justify-center space-x-2.5 active:scale-95 shadow-sm"
            >
              <svg className="w-5 h-5 text-neutral-700 dark:text-neutral-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>

        {/* 3D Tactile Interactive Showcase Stage (Inspired by the Reference Image) */}
        <div className="relative mt-12 sm:mt-16 max-w-5xl mx-auto">
          {/* Subtle Ambient Curved Platform */}
          <div className="relative rounded-3xl bg-gradient-to-b from-neutral-100 to-white dark:from-neutral-900 dark:to-neutral-950 border-2 border-neutral-200/90 dark:border-neutral-800 p-6 sm:p-12 shadow-thick overflow-hidden">
            
            {/* Architectural Grid & Accent Decor */}
            <div className="absolute -right-12 -top-12 w-64 h-64 bg-lime/10 dark:bg-lime/5 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -left-12 -bottom-12 w-64 h-64 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />

            {/* Floating Tag Badges (Modeled directly on the floating price tags £335, £349, £285 in image) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
              {tags.map((tag, i) => (
                <div 
                  key={i}
                  className="card-thick-hover p-4 rounded-2xl cursor-default group"
                >
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-lime shrink-0 shadow-glow-lime" />
                    <span className="text-xs sm:text-sm font-black text-neutral-900 dark:text-white truncate">
                      {tag.label}
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-neutral-500 dark:text-neutral-400 mt-1 font-medium">
                    {tag.sub}
                  </p>
                </div>
              ))}
            </div>

            {/* Central Tactile Phone/App Mockup Viewport (Direct deconstruction from template image) */}
            <div className="max-w-md mx-auto bg-neutral-900 dark:bg-black rounded-[2.5rem] p-3 shadow-2xl border-4 border-neutral-800 dark:border-neutral-700">
              {/* Phone Speaker & Camera Notch */}
              <div className="w-24 h-4 bg-neutral-950 rounded-full mx-auto mb-2" />

              {/* Inside Screen Card */}
              <div className="bg-white dark:bg-neutral-900 rounded-[2rem] p-5 sm:p-6 text-neutral-900 dark:text-white space-y-4">
                {/* Header in phone */}
                <div className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-800 pb-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-7 h-7 rounded-xl bg-lime flex items-center justify-center text-neutral-950 font-bold text-xs">
                      ✨
                    </div>
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-wider">Sparkle Dental</h4>
                      <p className="text-[10px] text-neutral-500">15295 Kutztown Rd</p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold">
                    ★ 5.0 Rated
                  </span>
                </div>

                {/* Doctor Bio Card */}
                <div className="p-3.5 rounded-2xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200/80 dark:border-neutral-700/80">
                  <p className="text-[11px] font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                    Lead Clinician
                  </p>
                  <p className="text-sm font-bold text-neutral-900 dark:text-white mt-0.5">
                    Dr. Subhashini Pamulapati, DDS
                  </p>
                  <p className="text-[11px] text-neutral-600 dark:text-neutral-300 mt-1 leading-snug">
                    NYU College of Dentistry alumnus & LVHN Miles of Smiles faculty instructor. Gentle, anxiety-free treatment.
                  </p>
                </div>

                {/* Quick Service Selection Pills */}
                <div className="space-y-1.5">
                  <p className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider">Select Care Needed</p>
                  <div className="grid grid-cols-2 gap-2">
                    {['New Patient Exam', 'Crowns & Implants', 'Gentle Whitening', 'Urgent Relief'].map((svc) => (
                      <button
                        key={svc}
                        onClick={() => onOpenWizard(svc)}
                        className="px-3 py-2 rounded-xl text-left text-xs font-bold bg-neutral-100 dark:bg-neutral-800 hover:bg-lime hover:text-neutral-950 dark:hover:bg-lime dark:hover:text-neutral-950 transition-colors"
                      >
                        {svc}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Instant Request Button */}
                <button
                  onClick={() => onOpenWizard()}
                  className="w-full py-3 rounded-xl bg-neutral-950 hover:bg-black dark:bg-lime dark:hover:bg-lime-hover text-white dark:text-neutral-950 font-black text-xs uppercase tracking-wider shadow-md transition active:scale-95 flex items-center justify-center space-x-1.5"
                >
                  <span>Start Online Request</span>
                  <svg className="w-3.5 h-3.5 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Bottom Proof Strip */}
            <div className="mt-8 pt-6 border-t border-neutral-200/80 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-neutral-600 dark:text-neutral-400">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Most PPO & Medicare HMO Accepted</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-lime-dark dark:bg-lime" />
                <span>CareCredit & In-House Flexible Plans</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-neutral-400" />
                <span>New Patient & Bleaching Specials</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
