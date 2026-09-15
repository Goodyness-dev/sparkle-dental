import React, { useEffect, useRef } from 'react';
import { BUSINESS_INFO, isOpenNow } from '../../data/businessData';

export default function Hero({ onOpenWizard }) {
  const openStatus = isOpenNow();
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => console.log('Autoplay waiting:', err));
      }
    }
  }, []);

  return (
    <section 
      className="relative pt-6 sm:pt-10 pb-16 lg:pb-24 overflow-hidden isolate bg-[#eef5fb] dark:bg-[#071322] transition-colors" 
      aria-label="Sparkle Dental Hero"
    >
      {/* 1. Giant Watermark Typography across Top (PAYROT style) */}
      <div className="absolute top-2 left-0 right-0 flex justify-center pointer-events-none select-none z-0 overflow-hidden">
        <span className="text-[14vw] font-black tracking-[0.2em] uppercase text-[#1d77ff]/[0.04] dark:text-white/[0.03] leading-none whitespace-nowrap">
          SPARKLE
        </span>
      </div>

      {/* 2. Atmospheric Radiant Azure Glow in Center */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[850px] h-[500px] bg-radial-azure pointer-events-none z-0 blur-2xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 3-Column Floating Arena (Left Card | Center 3D Video Hero | Right VIP Card) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-4 sm:pt-8">
          
          {/* LEFT FLOATING POD (Matches PAYROT Globe Pod) */}
          <div className="lg:col-span-3 order-2 lg:order-1 flex flex-col space-y-4">
            <div className="card-thick-hover p-6 rounded-3xl backdrop-blur-md bg-white/90 dark:bg-[#0e233c]/90 border border-[#d2e3f3] dark:border-[#17365d] transition-all hover:-translate-y-1">
              {/* 3D Orb Asset / Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#1d77ff] to-cyan-400 p-0.5 shadow-lg shadow-blue-500/20 mb-4 flex items-center justify-center">
                <div className="w-full h-full rounded-2xl bg-white/10 flex items-center justify-center text-white">
                  <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C7.5 2 4 5 4 9c0 3.2 1.6 5.8 3 8.5C8.2 20 9.1 22 10.5 22c1.2 0 1.5-1.5 1.5-3 0-1.5.5-2 1.5-2s1.5.5 1.5 2c0 1.5.3 3 1.5 3 1.4 0 2.3-2 3.5-4.5 1.4-2.7 3-5.3 3-8.5 0-4-3.5-7-8-7zm0 3c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm-4 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm8 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-base font-black text-[#0c1e33] dark:text-white leading-tight tracking-tight">
                Gentle & Anxiety-Free Care
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                Personalized family dentistry, painless local anesthesia, same-day ceramic crowns & urgent tooth relief in Kutztown.
              </p>
              <div className="mt-4 pt-3 border-t border-[#e2edf7] dark:border-[#17365d] flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#1d77ff]">Learn More</span>
                <span className="text-xs text-[#1d77ff]">→</span>
              </div>
            </div>

            {/* Quick Status Pill */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-2xl bg-white/80 dark:bg-[#0e233c]/80 border border-[#d2e3f3] dark:border-[#17365d] text-xs font-semibold text-slate-700 dark:text-slate-300 shadow-xs">
              <span className={`w-2.5 h-2.5 rounded-full ${openStatus ? 'bg-emerald-500 animate-ping' : 'bg-amber-500'}`} />
              <span>{openStatus ? 'Open Today in Kutztown' : 'Schedule Appt Online 24/7'}</span>
            </div>
          </div>

          {/* CENTER 3D VIDEO ARENA (Matches PAYROT Blue Parrot Centerpiece) */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-center justify-center relative">
            
            {/* Tech Connecting Line with Node Pill */}
            <div className="hidden sm:flex items-center space-x-3 mb-3 relative z-10 animate-float-slow">
              <div className="px-3.5 py-1.5 rounded-full bg-white/95 dark:bg-[#0e233c]/95 border border-[#d2e3f3] dark:border-[#17365d] shadow-md flex items-center space-x-2 text-xs font-bold text-[#0c1e33] dark:text-white">
                <span className="w-2 h-2 rounded-full bg-[#1d77ff] animate-pulse" />
                <span>Dr. Subhashini Pamulapati, DDS • NYU Dental</span>
              </div>
            </div>

            {/* Central 3D Video Floating Orb Screen */}
            <div className="relative w-full max-w-[420px] aspect-square rounded-[3rem] overflow-hidden border-4 border-white/80 dark:border-[#17365d]/80 shadow-2xl shadow-blue-500/20 group">
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="w-full h-full object-cover scale-105 transition-transform duration-700 group-hover:scale-110"
                poster="/images/diegotoralabad-dentist-7397734_1920.jpg"
                aria-hidden="true"
              >
                <source src="/A_photorealistic_D_rendered_m.mp4" type="video/mp4" />
              </video>

              {/* Frosted Vignette Overlay for Depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1e33]/70 via-transparent to-transparent pointer-events-none" />

              {/* Floating Bottom Badge inside Video */}
              <div className="absolute bottom-4 inset-x-4 flex items-center justify-between text-white pointer-events-none">
                <div className="px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-[11px] font-bold">
                  ✨ 3D Precision Digital Care
                </div>
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#d4ff3f] fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Pulsing Central Target Node (Payrot Style) */}
            <div className="mt-4 flex items-center space-x-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
              <span className="w-2 h-2 rounded-full bg-[#1d77ff]" />
              <span>State-of-the-Art Kutztown Clinic</span>
            </div>
          </div>

          {/* RIGHT FLOATING POD (Matches PAYROT Blue Visa Card Pod) */}
          <div className="lg:col-span-3 order-3 flex flex-col space-y-4">
            
            {/* Sparkle Dental VIP Dental Card */}
            <div className="relative rounded-3xl p-5 bg-gradient-to-br from-[#1d77ff] via-[#1862d6] to-[#0c1e33] text-white shadow-xl shadow-blue-500/25 border border-white/25 transition-all hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-black tracking-wider uppercase opacity-90">Sparkle Direct Care</span>
                <span className="px-2 py-0.5 rounded-md bg-white/20 text-[10px] font-bold">PPO Verified</span>
              </div>

              {/* Card EMV Chip Simulation */}
              <div className="w-10 h-7 rounded-md bg-amber-200/80 border border-amber-400/60 mb-5 flex items-center justify-center">
                <div className="w-6 h-4 border border-amber-700/40 rounded-sm" />
              </div>

              <div className="space-y-1">
                <p className="font-mono text-xs tracking-widest opacity-80">•••• •••• •••• 1953</p>
                <div className="flex items-center justify-between pt-2">
                  <div>
                    <p className="text-[9px] uppercase tracking-wider opacity-70">Member Practice</p>
                    <p className="text-xs font-bold">Berks County Family</p>
                  </div>
                  <span className="text-xs font-black tracking-widest text-[#d4ff3f]">VIP DENTAL</span>
                </div>
              </div>
            </div>

            {/* Accepted Insurances Badge */}
            <div className="card-thick p-4 rounded-2xl bg-white/90 dark:bg-[#0e233c]/90 border border-[#d2e3f3] dark:border-[#17365d]">
              <p className="text-[11px] font-black uppercase text-[#0c1e33] dark:text-white tracking-wider">
                Direct Insurance Filing
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Delta, MetLife, Cigna, Guardian, CareCredit & select Medicare HMO plans.
              </p>
            </div>
          </div>
        </div>

        {/* 3. SIGNATURE PAYROT NOTCHED TROUGH (Bottom Sculpted Centerpiece) */}
        <div className="mt-12 sm:mt-16 pt-8 border-t-2 border-[#d6e6f5] dark:border-[#17365d] grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          
          {/* Left Statement */}
          <div className="md:col-span-4 text-left">
            <div className="flex items-center space-x-2 text-xs font-bold text-[#1d77ff] mb-2">
              <span className="w-2 h-2 rounded-full bg-[#1d77ff]" />
              <span className="uppercase tracking-wider">Comprehensive Practice</span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 font-medium">
              Sparkle Dental empowers Kutztown families with gentle, anxiety-free preventive and restorative dental health.
            </p>
            <a 
              href="#services" 
              className="inline-flex items-center space-x-1.5 text-xs font-black uppercase text-[#0c1e33] dark:text-white tracking-wider mt-3 hover:text-[#1d77ff] transition-colors"
            >
              <span>Our Services</span>
              <span>↓</span>
            </a>
          </div>

          {/* Center Notched Fast Button (Signature Template Notch) */}
          <div className="md:col-span-4 flex flex-col items-center justify-center text-center">
            <button
              onClick={() => onOpenWizard()}
              className="px-8 py-4 rounded-full bg-[#1d77ff] hover:bg-[#1565e6] text-white font-black text-sm uppercase tracking-wider transition-all shadow-xl shadow-blue-500/30 hover:scale-105 active:scale-95 flex items-center space-x-3 group"
            >
              <span>Book Appointment</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <h2 className="text-xl sm:text-2xl font-black text-[#0c1e33] dark:text-white uppercase tracking-tight mt-3">
              FAST RELIEF, GENTLE CARE
            </h2>
          </div>

          {/* Right Stat Counter (Matches PAYROT 90M+ Counter) */}
          <div className="md:col-span-4 flex flex-col md:items-end text-left md:text-right">
            <div className="px-2 py-0.5 rounded-md bg-[#dbeaf8] dark:bg-[#17365d] text-[#1d77ff] text-[10px] font-black uppercase tracking-wider inline-block mb-1">
              Verified Patients
            </div>
            <div className="text-3xl sm:text-4xl font-black text-[#0c1e33] dark:text-white tracking-tight">
              900+ <span className="text-[#1d77ff] text-2xl">★</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Smiles restored with 5.0 Star Berks County care
            </p>
            <a 
              href="#reviews" 
              className="text-xs font-bold text-[#1d77ff] hover:underline mt-2 inline-block"
            >
              View Reviews →
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
