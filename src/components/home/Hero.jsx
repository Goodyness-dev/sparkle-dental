import React, { useEffect, useRef } from 'react';
import { BUSINESS_INFO, isOpenNow } from '../../data/businessData';

export default function Hero({ onOpenWizard }) {
  const openStatus = isOpenNow();
  const videoRef = useRef(null);

  useEffect(() => {
    // Ensure muted autoplay succeeds reliably across all browser policies
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.log('Autoplay prevented, awaiting user interaction:', err);
        });
      }
    }
  }, []);

  return (
    <section 
      className="relative min-h-[85vh] lg:min-h-[92vh] flex flex-col justify-center pt-20 pb-24 overflow-hidden isolate bg-neutral-950" 
      aria-label="Sparkle Dental Hero"
    >
      {/* Background 3D Rendered Motion Video - Front, Center & Bold */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-90 scale-105"
          poster="/images/diegotoralabad-dentist-7397734_1920.jpg"
          aria-hidden="true"
        >
          <source src="/A_photorealistic_D_rendered_m.mp4" type="video/mp4" />
        </video>

        {/* Toned Down Cinematic Dark Vignette Overlay - Eliminates harsh white washout so the 3D video pops vividly */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-black/35 to-black/60" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-black/25 to-neutral-950/90" />
      </div>

      {/* Atmospheric Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-lime/15 blur-[120px] pointer-events-none z-0 animate-pulse-glow" />

      {/* Main Content Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center my-auto">
        {/* Practice Status Pill Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold text-white shadow-2xl mb-6 hover:border-lime transition-colors">
          <span className="w-2.5 h-2.5 rounded-full bg-lime animate-ping" />
          <span>Discover your Kutztown dental sanctuary</span>
          <span className="text-white/30">|</span>
          <span className={`text-xs font-bold ${openStatus ? 'text-lime font-black' : 'text-neutral-300'}`}>
            {openStatus ? '● Open Now' : 'Mon & Wed 8-5 • 1st Sat'}
          </span>
        </div>

        {/* Editorial Bold Headline with High-Contrast Typography */}
        <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black tracking-tighter text-white uppercase leading-[0.9] drop-shadow-2xl">
          PERFECT <span className="text-lime underline decoration-lime decoration-wavy decoration-from-font underline-offset-8">SMILE</span>
        </h1>

        {/* Subtitle with High Legibility */}
        <p className="text-lg sm:text-2xl text-neutral-200 max-w-2xl mx-auto font-medium leading-relaxed pt-5 drop-shadow-lg">
          Personalized, anxiety-free general and restorative dentistry led by{' '}
          <strong className="text-white font-bold">Dr. Subhashini Pamulapati, DDS</strong>. Serving Kutztown and Berks County families.
        </p>

        {/* Action CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 max-w-lg mx-auto">
          <button
            onClick={() => onOpenWizard()}
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-lime hover:bg-lime-hover text-neutral-950 font-black text-base sm:text-lg tracking-tight transition-all shadow-glow-lime hover:scale-105 active:scale-95 flex items-center justify-center space-x-3 group"
          >
            <span>Request Appointment</span>
            <div className="w-6 h-6 rounded-full bg-black/15 flex items-center justify-center group-hover:translate-x-1.5 transition-transform duration-200">
              <svg className="w-3.5 h-3.5 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>

          <a
            href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white font-bold text-base transition-all flex items-center justify-center space-x-2.5 active:scale-95 shadow-xl hover:border-white/50"
          >
            <svg className="w-5 h-5 text-lime" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>{BUSINESS_INFO.phone}</span>
          </a>
        </div>

        {/* Sleek Floating Glass Badges - Light & Translucent, Does NOT Obscure the Video */}
        <div className="pt-10 sm:pt-14 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-xs sm:text-sm text-neutral-200 font-medium shadow-lg hover:border-lime/50 transition-colors">
            <span className="w-2 h-2 rounded-full bg-lime shadow-glow-lime" />
            <span>★ 5.0 Rated • Berks County Verified</span>
          </div>
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-xs sm:text-sm text-neutral-200 font-medium shadow-lg hover:border-lime/50 transition-colors">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Zero-Anxiety Gentle Dentistry</span>
          </div>
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-xs sm:text-sm text-neutral-200 font-medium shadow-lg hover:border-lime/50 transition-colors">
            <span className="w-2 h-2 rounded-full bg-lime" />
            <span>Most PPO & Medicare HMO Accepted</span>
          </div>
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-xs sm:text-sm text-neutral-200 font-medium shadow-lg hover:border-lime/50 transition-colors">
            <span className="w-2 h-2 rounded-full bg-sky-400" />
            <span>Same-Day Crowns & Implants</span>
          </div>
        </div>
      </div>

      {/* Seamless Smooth Melt Transition into the Next Section */}
      <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-b from-transparent via-neutral-950/60 to-[#fbfbfb] dark:to-[#0a0a0a] pointer-events-none z-10" />
    </section>
  );
}
