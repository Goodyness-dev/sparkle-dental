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
      className="relative min-h-[85vh] lg:min-h-[92vh] flex flex-col justify-center py-20 sm:py-28 overflow-hidden isolate bg-[#08121e] transition-colors" 
      aria-label="Sparkle Dental Hero"
    >
      {/* Video as the Full Background for the Whole Hero Section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover scale-105 opacity-90 contrast-[1.12] brightness-[0.9] transition-opacity duration-1000"
          poster="/images/diegotoralabad-dentist-7397734_1920.jpg"
          aria-hidden="true"
        >
          <source src="/A_photorealistic_D_rendered_m.mp4" type="video/mp4" />
        </video>

        {/* Cinematic Dark Translucent Vignette - High Video Contrast & Clarity, No Washing Out */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#08121e]/80 via-[#08121e]/45 to-[#08121e]/90" />
        {/* Subtle radial focus vignette to emphasize the 3D dental action */}
        <div className="absolute inset-0 bg-radial from-transparent via-[#08121e]/30 to-[#08121e]/85" />
      </div>

      {/* Main Content Arena */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center my-auto">
        
        {/* Practice Status Pill Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-black/45 border border-white/15 text-xs sm:text-sm font-semibold text-slate-200 shadow-lg backdrop-blur-md mb-6 transition-all hover:border-white/30">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span>Discover your Kutztown dental sanctuary</span>
          <span className="text-white/30">|</span>
          <span className={`text-xs font-bold ${openStatus ? 'text-emerald-400 font-bold' : 'text-slate-300'}`}>
            {openStatus ? '● Open Now' : 'Mon & Wed 8-5 • 1st Sat'}
          </span>
        </div>

        {/* Editorial Bold Headline */}
        <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black tracking-tighter text-white uppercase leading-[0.92] drop-shadow-md">
          PERFECT <span className="underline decoration-[#1d77ff] decoration-wavy decoration-from-font underline-offset-8">SMILE</span>
        </h1>

        {/* Subtitle with High Legibility & Warmth */}
        <p className="text-lg sm:text-2xl text-slate-200 max-w-2xl mx-auto font-medium leading-relaxed pt-5 drop-shadow-sm">
          Personalized, anxiety-free general and restorative dentistry led by{' '}
          <strong className="text-white font-bold">Dr. Subhashini Pamulapati, DDS</strong>. Serving Kutztown and Berks County families.
        </p>

        {/* Action CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 max-w-lg mx-auto">
          <button
            onClick={() => onOpenWizard()}
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#1d77ff] hover:bg-[#1565e6] text-white font-black text-base sm:text-lg tracking-tight transition-all shadow-xl shadow-blue-500/30 hover:scale-105 active:scale-95 flex items-center justify-center space-x-3 group"
          >
            <span>Request Appointment</span>
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1.5 transition-transform duration-200">
              <svg className="w-3.5 h-3.5 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>

          <a
            href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border-2 border-white/20 text-white font-bold text-base transition-all flex items-center justify-center space-x-2.5 active:scale-95 backdrop-blur-md shadow-md"
          >
            <svg className="w-5 h-5 text-[#38bdf8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>{BUSINESS_INFO.phone}</span>
          </a>
        </div>

        {/* Refined Floating Proof Badges */}
        <div className="pt-10 sm:pt-14 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-black/40 border border-white/15 text-xs sm:text-sm text-slate-200 font-semibold shadow-md backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>★ 5.0 Rated • Berks County Verified</span>
          </div>
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-black/40 border border-white/15 text-xs sm:text-sm text-slate-200 font-semibold shadow-md backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Zero-Anxiety Gentle Dentistry</span>
          </div>
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-black/40 border border-white/15 text-xs sm:text-sm text-slate-200 font-semibold shadow-md backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#38bdf8]" />
            <span>Most PPO & Medicare HMO Accepted</span>
          </div>
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-black/40 border border-white/15 text-xs sm:text-sm text-slate-200 font-semibold shadow-md backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-sky-400" />
            <span>Same-Day Precision Crowns & Implants</span>
          </div>
        </div>

      </div>

      {/* Smooth Transition into Next Section (Silk Cream #faf8f5) */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent via-[#08121e]/50 to-[#faf8f5] dark:to-[#071322] pointer-events-none z-10" />
    </section>
  );
}
