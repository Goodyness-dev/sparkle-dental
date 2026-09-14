import React from 'react';
import { BUSINESS_INFO } from '../../data/businessData';

export default function AboutSection({ onOpenWizard }) {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white dark:bg-[#0e0e0e] transition-colors" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Doctor Profile & Credentials Card */}
          <div className="lg:col-span-5 relative">
            <div className="card-thick p-8 sm:p-10 rounded-3xl relative overflow-hidden bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-950">
              {/* Doctor Avatar / Geometric Monogram */}
              <div className="w-20 h-20 rounded-3xl bg-neutral-950 dark:bg-lime text-white dark:text-neutral-950 flex items-center justify-center font-black text-2xl shadow-thick mb-6">
                DSP
              </div>

              <div className="space-y-2">
                <span className="text-xs font-black uppercase tracking-widest text-lime-dark dark:text-lime">
                  Lead Clinician & Practice Owner
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-neutral-950 dark:text-white tracking-tight">
                  {BUSINESS_INFO.owner.name}
                </h3>
                <p className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">
                  {BUSINESS_INFO.owner.degrees}
                </p>
              </div>

              {/* Badges / Highlights */}
              <div className="mt-6 pt-6 border-t border-neutral-200/80 dark:border-neutral-800 space-y-3 text-xs font-bold text-neutral-700 dark:text-neutral-300">
                <div className="flex items-center space-x-2.5">
                  <span className="w-2 h-2 rounded-full bg-lime" />
                  <span>Faculty, Lehigh Valley Health Network</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Clinical Resident Instructor Since 2017</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <span className="w-2 h-2 rounded-full bg-neutral-400" />
                  <span>Acquired Dr. Boyle Practice in 2022</span>
                </div>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-4 right-4 sm:right-8 bg-neutral-950 dark:bg-lime text-white dark:text-neutral-950 rounded-2xl shadow-xl px-6 py-3.5 flex items-center space-x-3">
              <span className="text-3xl font-black tracking-tight">NYU</span>
              <span className="text-xs font-bold uppercase tracking-wider leading-tight">College of<br />Dentistry</span>
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
            <div className="border-l-4 border-lime-dark dark:border-lime pl-6 py-2 bg-neutral-50 dark:bg-neutral-900/50 rounded-r-2xl">
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

            {/* Heritage Timeline Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                <span className="font-black text-xs uppercase tracking-wider text-lime-dark dark:text-lime">Heritage</span>
                <h4 className="text-sm font-bold text-neutral-950 dark:text-white mt-0.5">Berks County Roots</h4>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">Carrying forward Dr. Boyle's multi-decade local reputation for honest dentistry.</p>
              </div>
              <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                <span className="font-black text-xs uppercase tracking-wider text-lime-dark dark:text-lime">Excellence</span>
                <h4 className="text-sm font-bold text-neutral-950 dark:text-white mt-0.5">Modern Technology</h4>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">Digital radiography, aesthetic ceramic restorations, and pain-free numbing.</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <button
                onClick={() => onOpenWizard()}
                className="px-8 py-4 rounded-full bg-neutral-950 hover:bg-neutral-800 dark:bg-lime dark:hover:bg-lime-hover text-white dark:text-neutral-950 font-black text-base transition-all shadow-thick active:scale-95"
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
