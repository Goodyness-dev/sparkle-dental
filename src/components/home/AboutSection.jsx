import React from 'react';
import { BUSINESS_INFO } from '../../data/businessData';

export default function AboutSection({ onOpenWizard }) {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#eef5fb] dark:bg-[#071322] transition-colors" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Headline, Narrative & Philosophy (Matches PAYROT Section 2 Text) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white dark:bg-[#0e233c] border border-[#d2e3f3] dark:border-[#17365d] text-xs font-bold text-[#1d77ff] uppercase tracking-wider">
              <span>Meet Dr. Subha Pamulapati, DDS</span>
            </div>

            <h2 id="about-heading" className="text-3xl sm:text-5xl font-black tracking-tight text-[#0c1e33] dark:text-white uppercase leading-[1.08]">
              GENTLE DENTAL CARE FOR YOUR WHOLE FAMILY
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-medium">
              After years of directing dental residents at the Lehigh Valley Health Network's Miles of Smiles Clinic, Dr. Subhashini Pamulapati assumed stewardship of Dr. John P. Boyle's 40-year Kutztown practice in 2022. Her approach combines hospital-grade clinical precision with genuine warmth.
            </p>

            {/* Quick Spec Highlights */}
            <div className="space-y-2.5 pt-2">
              <div className="flex items-center space-x-3 text-sm font-semibold text-slate-700 dark:text-slate-200">
                <div className="w-5 h-5 rounded-full bg-[#1d77ff] text-white flex items-center justify-center text-xs font-bold shrink-0">✓</div>
                <span>NYU College of Dentistry Graduate & LVHN Faculty Instructor</span>
              </div>
              <div className="flex items-center space-x-3 text-sm font-semibold text-slate-700 dark:text-slate-200">
                <div className="w-5 h-5 rounded-full bg-[#1d77ff] text-white flex items-center justify-center text-xs font-bold shrink-0">✓</div>
                <span>Zero-Anxiety Environment with Pain-Free Local Anesthesia</span>
              </div>
              <div className="flex items-center space-x-3 text-sm font-semibold text-slate-700 dark:text-slate-200">
                <div className="w-5 h-5 rounded-full bg-[#1d77ff] text-white flex items-center justify-center text-xs font-bold shrink-0">✓</div>
                <span>Same-Day Precision Crowns, Implants & Pediatric Gentle Care</span>
              </div>
            </div>

            {/* Link button */}
            <div className="pt-4 flex items-center space-x-6">
              <button
                onClick={() => onOpenWizard()}
                className="px-7 py-3.5 rounded-full bg-[#1d77ff] hover:bg-[#1565e6] text-white font-bold text-sm tracking-tight transition-all shadow-md shadow-blue-500/25 active:scale-95 flex items-center space-x-2"
              >
                <span>Book Consultation</span>
                <span>→</span>
              </button>

              <a
                href="#services"
                className="text-xs sm:text-sm font-black uppercase text-[#0c1e33] dark:text-white tracking-wider hover:text-[#1d77ff] transition-colors"
              >
                Explore All Procedures →
              </a>
            </div>
          </div>

          {/* Right Column: Doctor Profile In Floating Payrot Blue Frame with Tech Pills */}
          <div className="lg:col-span-6 relative flex justify-center">
            
            {/* Payrot Atmospheric Azure Glow */}
            <div className="absolute inset-0 bg-radial-azure blur-3xl opacity-60 pointer-events-none" />

            <div className="relative w-full max-w-md rounded-[2.5rem] bg-gradient-to-tr from-[#cfe2f4] via-[#e2edf8] to-white dark:from-[#0e233c] dark:via-[#132c4a] dark:to-[#17365d] p-4 sm:p-6 shadow-2xl border-2 border-white dark:border-[#17365d]">
              
              {/* Doctor Main Portrait */}
              <div className="relative h-80 sm:h-96 w-full rounded-3xl overflow-hidden shadow-md">
                <img
                  src="/images/dentistofficial-dentist-6058791_1920.jpg"
                  alt="Dr. Subhashini Pamulapati, DDS at Sparkle Dental"
                  loading="lazy"
                  className="w-full h-full object-cover img-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1e33]/85 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#d4ff3f]">
                    Lead Clinician & Practice Owner
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight mt-0.5">
                    Dr. Subhashini Pamulapati, DDS
                  </h3>
                  <p className="text-xs text-slate-200 font-medium">
                    NYU College of Dentistry Alum • 15+ Yrs Care
                  </p>
                </div>
              </div>

              {/* Floating Tech Badges (Matches PAYROT payment pills) */}
              <div className="absolute -top-4 -left-4 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#0c1e33] border border-[#d2e3f3] dark:border-[#17365d] shadow-lg flex items-center space-x-2 text-xs font-bold text-[#0c1e33] dark:text-white animate-float-slow">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>$0 Preventive with Most PPO</span>
              </div>

              <div className="absolute -bottom-4 -right-4 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#0c1e33] border border-[#d2e3f3] dark:border-[#17365d] shadow-lg flex items-center space-x-2 text-xs font-bold text-[#0c1e33] dark:text-white animate-float">
                <span className="w-2 h-2 rounded-full bg-[#1d77ff]" />
                <span>LVHN Miles of Smiles Faculty</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
