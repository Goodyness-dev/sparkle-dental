import React from 'react';
import { BUSINESS_INFO } from '../../data/businessData';

export default function AboutSection({ onOpenWizard }) {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white dark:bg-[#0e0e0e] transition-colors" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Doctor Profile Photography & Facility Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-neutral-200/90 dark:border-neutral-800 group">
              {/* Doctor Main Portrait */}
              <div className="h-96 sm:h-[450px] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                <img
                  src="/images/dentistofficial-dentist-6058791_1920.jpg"
                  alt="Dr. Subhashini Pamulapati, DDS at Sparkle Dental"
                  loading="lazy"
                  className="w-full h-full object-cover img-zoom"
                />
              </div>

              {/* Gradient Overlay & Credentials Strip */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                <span className="text-xs font-black uppercase tracking-widest text-lime">
                  Lead Clinician & Practice Owner
                </span>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight mt-1">
                  {BUSINESS_INFO.owner.name}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-semibold mt-1">
                  {BUSINESS_INFO.owner.degrees}
                </p>

                <div className="mt-4 pt-4 border-t border-white/20 flex items-center justify-between text-xs font-bold">
                  <span className="flex items-center space-x-1.5">
                    <span className="w-2 h-2 rounded-full bg-lime animate-ping" />
                    <span>LVHN Miles of Smiles Faculty</span>
                  </span>
                  <span className="text-lime">15+ Yrs Care</span>
                </div>
              </div>
            </div>

            {/* Overlapping Facility Inset Card with Gentle Floating Animation */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 w-44 sm:w-52 rounded-2xl overflow-hidden shadow-2xl border-2 border-white dark:border-neutral-800 bg-white dark:bg-neutral-900 p-2 hidden xs:block animate-float-slow">
              <div className="h-24 sm:h-28 w-full rounded-xl overflow-hidden relative">
                <img
                  src="/images/diegotoralabad-dentist-7397735_1920.jpg"
                  alt="Sparkle Dental Modern Operatory"
                  className="w-full h-full object-cover img-zoom"
                />
                <div className="absolute inset-0 bg-black/30" />
                <span className="absolute bottom-1.5 left-2 text-[10px] font-black text-white bg-black/60 px-2 py-0.5 rounded-md backdrop-blur-xs">
                  Kutztown Suite
                </span>
              </div>
              <p className="text-[10px] font-bold text-neutral-800 dark:text-neutral-200 mt-1.5 px-1 truncate">
                Hospital-Grade Hygiene
              </p>
            </div>
          </div>

          {/* Right Column: Narrative & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-bold text-neutral-600 dark:text-neutral-400 uppercase tracking-widest">
              <span>Meet Dr. Subha</span>
            </div>

            <h2 id="about-heading" className="text-3xl sm:text-5xl font-black tracking-tight text-neutral-950 dark:text-white leading-[1.1]">
              Compassionate Dentistry With An Academic Standard.
            </h2>

            {/* Quote Block */}
            <div className="border-l-4 border-lime-dark dark:border-lime pl-6 py-3 bg-neutral-50 dark:bg-neutral-900/50 rounded-r-2xl">
              <p className="text-neutral-800 dark:text-neutral-200 text-base sm:text-lg italic leading-relaxed font-medium">
                "{BUSINESS_INFO.owner.quote}"
              </p>
              <div className="mt-3 text-xs sm:text-sm font-black uppercase tracking-wider text-neutral-900 dark:text-lime">
                — {BUSINESS_INFO.owner.nickname}, {BUSINESS_INFO.owner.role}
              </div>
            </div>

            <p className="text-neutral-600 dark:text-neutral-300 text-base sm:text-lg leading-relaxed font-medium">
              After years of directing dental residents at the Lehigh Valley Health Network's Miles of Smiles Clinic, Dr. Subha assumed stewardship of Dr. John P. Boyle's longstanding Kutztown practice. Her vision is simple: modern clinical precision delivered with the gentleness and empathy you'd expect from family.
            </p>

            {/* Heritage & Tech Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="card-thick p-5 rounded-2xl">
                <span className="font-black text-xs uppercase tracking-wider text-lime-dark dark:text-lime">Heritage</span>
                <h4 className="text-sm font-bold text-neutral-950 dark:text-white mt-1">Berks County Roots</h4>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">Carrying forward Dr. Boyle's multi-decade local reputation for honest dentistry.</p>
              </div>
              <div className="card-thick p-5 rounded-2xl">
                <span className="font-black text-xs uppercase tracking-wider text-lime-dark dark:text-lime">Excellence</span>
                <h4 className="text-sm font-bold text-neutral-950 dark:text-white mt-1">Digital Operatory</h4>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">Digital radiography, aesthetic ceramic restorations, and pain-free numbing.</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <button
                onClick={() => onOpenWizard()}
                className="px-8 py-4 rounded-full bg-neutral-950 hover:bg-neutral-800 dark:bg-lime dark:hover:bg-lime-hover text-white dark:text-neutral-950 font-black text-base transition-all shadow-thick active:scale-95 hover:shadow-glow-lime"
              >
                Schedule With Dr. Subha
              </button>
              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="text-neutral-900 dark:text-white font-bold text-sm underline underline-offset-4 hover:text-lime-dark dark:hover:text-lime transition"
              >
                Speak with our Kutztown team ({BUSINESS_INFO.phone})
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
