import React, { useState, useEffect, useRef } from 'react';
import { BUSINESS_INFO, isOpenNow } from '../../data/businessData';

export default function Hero({ onOpenWizard }) {
  const openStatus = isOpenNow();
  const videoRef = useRef(null);
  const stageVideoRef = useRef(null);

  useEffect(() => {
    // Ensure muted autoplay succeeds across all browser security policies
    [videoRef, stageVideoRef].forEach((ref) => {
      if (ref.current) {
        ref.current.defaultMuted = true;
        ref.current.muted = true;
        const playPromise = ref.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((err) => {
            console.log('Video autoplay prevented, waiting for user interaction:', err);
          });
        }
      }
    });
  }, []);

  const tags = [
    { label: 'Zero-Anxiety Care', sub: 'Gentle local anesthesia', anim: 'animate-float-slow', glow: 'shadow-glow-lime' },
    { label: 'Same-Day Crowns', sub: 'Precision ceramic fit', anim: 'animate-float-reverse', glow: 'shadow-glow-lime' },
    { label: '5.0 Star Rating', sub: 'Berks County verified', anim: 'animate-float', glow: 'shadow-glow-lime' },
    { label: 'PPO & Medicare HMO', sub: 'Direct insurance filing', anim: 'animate-float-slow', glow: 'shadow-glow-lime' },
  ];

  return (
    <section className="relative pt-8 sm:pt-14 pb-16 sm:pb-24 overflow-hidden isolate" aria-label="Sparkle Dental Hero">
      {/* Background 3D Rendered Motion Video - Front and Center */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-85 dark:opacity-75 scale-105 transition-opacity duration-1000"
          poster="/images/diegotoralabad-dentist-7397734_1920.jpg"
          aria-hidden="true"
        >
          <source src="/A_photorealistic_D_rendered_m.mp4" type="video/mp4" />
        </video>
        {/* Subtle Gradient Overlay for crisp typography while keeping 3D video unmistakably visible */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#fbfbfb]/70 via-[#fbfbfb]/40 to-[#fbfbfb] dark:from-[#0a0a0a]/80 dark:via-[#0a0a0a]/50 dark:to-[#0a0a0a]" />
      </div>

      {/* Dotted Grid & Atmospheric Glows */}
      <div className="absolute inset-0 bg-dotted-grid pointer-events-none z-0 opacity-30" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[350px] bg-gradient-to-b from-lime/25 via-emerald-100/20 to-transparent dark:from-lime/15 dark:via-emerald-950/15 blur-3xl pointer-events-none z-0 animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Top Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-3 sm:space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs sm:text-sm font-semibold text-neutral-700 dark:text-neutral-300 shadow-sm transition-all hover:border-lime">
            <span className="w-2 h-2 rounded-full bg-lime animate-ping" />
            <span>Discover your Kutztown dental sanctuary</span>
            <span className="text-neutral-300 dark:text-neutral-700">|</span>
            <span className={`text-xs font-bold ${openStatus ? 'text-emerald-600 dark:text-emerald-400' : 'text-neutral-500'}`}>
              {openStatus ? 'Open Now' : 'Mon & Wed 8-5 • 1st Sat'}
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-neutral-950 dark:text-white uppercase leading-[0.92] transition-transform duration-300">
            PERFECT <span className="underline decoration-lime decoration-wavy decoration-from-font underline-offset-8">SMILE</span>
          </h1>

          <p className="text-base sm:text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto font-medium leading-relaxed pt-1">
            Personalized, anxiety-free general and restorative dentistry led by{' '}
            <strong className="text-neutral-900 dark:text-white font-bold">Dr. Subhashini Pamulapati, DDS</strong>. Serving Kutztown and Berks County families.
          </p>

          {/* Instant Action CTA Buttons with tactile hover interactions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
            <button
              onClick={() => onOpenWizard()}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-neutral-950 hover:bg-neutral-800 dark:bg-lime dark:hover:bg-lime-hover text-white dark:text-neutral-950 font-black text-base sm:text-lg tracking-tight transition-all shadow-thick active:scale-95 flex items-center justify-center space-x-3 group hover:shadow-glow-lime"
            >
              <span>Request Appointment</span>
              <div className="w-6 h-6 rounded-full bg-white/20 dark:bg-black/10 flex items-center justify-center group-hover:translate-x-1.5 transition-transform duration-200">
                <svg className="w-3.5 h-3.5 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="w-full sm:w-auto px-7 py-4 rounded-full bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 border-2 border-neutral-300/90 dark:border-neutral-700 text-neutral-900 dark:text-white font-bold text-base transition-all flex items-center justify-center space-x-2.5 active:scale-95 shadow-sm hover:border-neutral-500"
            >
              <svg className="w-5 h-5 text-neutral-700 dark:text-neutral-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>

        {/* 3D Tactile Interactive Showcase Stage */}
        <div className="relative mt-12 sm:mt-16 max-w-5xl mx-auto">
          {/* Subtle Ambient Curved Platform */}
          <div className="relative rounded-3xl backdrop-blur-md bg-white/80 dark:bg-neutral-900/80 border-2 border-neutral-200/90 dark:border-neutral-800 p-6 sm:p-12 shadow-thick overflow-hidden">
            
            {/* Ambient Background 3D Motion Video Backdrop */}
            <div className="absolute inset-0 opacity-40 dark:opacity-30 pointer-events-none overflow-hidden">
              <video
                ref={stageVideoRef}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="w-full h-full object-cover scale-105"
                aria-hidden="true"
              >
                <source src="/A_photorealistic_D_rendered_m.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/20 to-white/60 dark:from-neutral-950/80 dark:via-neutral-950/20 dark:to-neutral-950/60" />
            </div>

            {/* Glowing Orbs */}
            <div className="absolute -right-12 -top-12 w-64 h-64 bg-lime/10 dark:bg-lime/5 rounded-full blur-2xl pointer-events-none animate-pulse-glow" />
            <div className="absolute -left-12 -bottom-12 w-64 h-64 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-2xl pointer-events-none animate-pulse-glow" />

            {/* Floating Tag Badges with Hover Glow & Smooth Bobbing Animations */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8 relative z-10">
              {tags.map((tag, i) => (
                <div 
                  key={i}
                  className={`card-thick-hover p-4 rounded-2xl cursor-default group ${tag.anim} backdrop-blur-xs bg-white/90 dark:bg-[#121212]/90`}
                >
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-lime shrink-0 shadow-glow-lime animate-ping" />
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

            {/* Central Tactile Phone Viewport (With Real Clinic Photography) */}
            <div className="max-w-md mx-auto bg-neutral-900 dark:bg-black rounded-[2.5rem] p-3 shadow-2xl border-4 border-neutral-800 dark:border-neutral-700 relative z-10 transition-transform duration-500 hover:-translate-y-1">
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

                {/* Real Doctor Consultation Image Banner */}
                <div className="relative h-44 rounded-2xl overflow-hidden group">
                  <img
                    src="/images/dentistofficial-dentist-6058791_1920.jpg"
                    alt="Dr. Subhashini Pamulapati at Sparkle Dental"
                    loading="eager"
                    className="w-full h-full object-cover img-zoom"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white">
                    <div>
                      <p className="text-xs font-black">Dr. Subhashini Pamulapati, DDS</p>
                      <p className="text-[10px] text-lime font-semibold">Lead Clinician • NYU Alum</p>
                    </div>
                    <span className="text-[10px] bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full font-bold">
                      Accepting Patients
                    </span>
                  </div>
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
            <div className="mt-8 pt-6 border-t border-neutral-200/80 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-neutral-600 dark:text-neutral-400 relative z-10">
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
