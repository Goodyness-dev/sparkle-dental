import React from 'react';
import { AMENITIES_AVAILABLE } from '../../data/amenitiesData';
import { BUSINESS_INFO } from '../../data/businessData';

export default function AmenitiesSection({ onOpenWizard }) {
  return (
    <section id="amenities" className="py-20 sm:py-28 bg-[#faf8f5] dark:bg-[#0c121c] transition-colors" aria-labelledby="amenities-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#0e233c] border border-[#e8dfd2] dark:border-[#17365d] text-xs font-bold text-[#0c1e33] dark:text-white uppercase tracking-wider mb-3 shadow-xs">
            <span>Patient Comfort & Technology</span>
          </div>
          <h2 id="amenities-heading" className="text-3xl sm:text-5xl font-black tracking-tight text-[#0c1e33] dark:text-white uppercase leading-tight">
            Designed Around Your Complete Peace of Mind
          </h2>
          <p className="text-stone-600 dark:text-slate-300 mt-4 text-base sm:text-lg leading-relaxed font-medium">
            We've eliminated dental stress with hospital-grade gentle protocols, transparent financing, and convenient weekend accessibility in Kutztown.
          </p>
        </div>

        {/* Bento Showcase: Clinical Technology & Comfort Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {/* Feature Card 1: Modern Operatory Suite */}
          <div className="card-thick-hover rounded-3xl overflow-hidden group flex flex-col justify-between bg-white dark:bg-[#0e233c] border-2 border-[#e8dfd2] dark:border-[#17365d]">
            <div className="h-48 w-full overflow-hidden relative">
              <img
                src="/images/diegotoralabad-dentist-7397734_1920.jpg"
                alt="Modern Sterilization and Operatory Suite"
                className="w-full h-full object-cover img-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1e33]/80 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 text-xs font-black text-white bg-[#0c1e33]/80 px-3 py-1 rounded-full backdrop-blur-xs border border-white/20">
                CDC & ADA Sterilization
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-black text-[#0c1e33] dark:text-white mb-2">Hospital-Grade Sterilization</h3>
              <p className="text-stone-600 dark:text-slate-300 text-sm leading-relaxed font-medium">
                Individual sterile cassette setups, digital autoclave monitoring, and spotless treatment suites.
              </p>
            </div>
          </div>

          {/* Feature Card 2: Gentle Pediatric & Family Care */}
          <div className="card-thick-hover rounded-3xl overflow-hidden group flex flex-col justify-between bg-white dark:bg-[#0e233c] border-2 border-[#e8dfd2] dark:border-[#17365d]">
            <div className="h-48 w-full overflow-hidden relative">
              <img
                src="/images/meistervideo-dentist-1933009_1920.jpg"
                alt="Gentle Pediatric and Family Dentistry"
                className="w-full h-full object-cover img-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1e33]/80 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 text-xs font-black text-white bg-[#0c1e33]/80 px-3 py-1 rounded-full backdrop-blur-xs border border-white/20">
                Zero-Anxiety First Visits
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-black text-[#0c1e33] dark:text-white mb-2">Kid-Friendly & Anxiety-Free</h3>
              <p className="text-stone-600 dark:text-slate-300 text-sm leading-relaxed font-medium">
                Painless local numbing, warm bedside manner, and fun first visits that build dental confidence for life.
              </p>
            </div>
          </div>

          {/* Feature Card 3: Direct Insurance Filing */}
          <div className="card-thick-hover rounded-3xl overflow-hidden group flex flex-col justify-between bg-white dark:bg-[#0e233c] border-2 border-[#e8dfd2] dark:border-[#17365d]">
            <div className="h-48 w-full overflow-hidden relative">
              <img
                src="/images/giuliamar-smile-191626_1920.jpg"
                alt="Cosmetic Whitening and Restorations"
                className="w-full h-full object-cover img-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1e33]/80 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 text-xs font-black text-white bg-[#0c1e33]/80 px-3 py-1 rounded-full backdrop-blur-xs border border-white/20">
                PPO & CareCredit
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-black text-[#0c1e33] dark:text-white mb-2">Transparent Local Pricing</h3>
              <p className="text-stone-600 dark:text-slate-300 text-sm leading-relaxed font-medium">
                Direct insurance electronic billing, 0% APR financing via CareCredit, and flexible self-pay plans.
              </p>
            </div>
          </div>
        </div>

        {/* Refined Deep Navy Banner with Floating Orb */}
        <div className="relative pt-12">
          {/* Floating 3D Orb at Top */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#0c1e33] to-[#142c47] p-1 shadow-xl border-4 border-[#faf8f5] dark:border-[#0c121c] flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-white/10 flex items-center justify-center text-white text-3xl">
                🦷
              </div>
            </div>
          </div>

          {/* Deep Navy Block */}
          <div className="rounded-[3rem] bg-[#0c1e33] text-white pt-20 pb-16 px-8 sm:px-14 shadow-2xl border-2 border-[#17365d] relative overflow-hidden text-center max-w-5xl mx-auto">
            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight leading-tight">
                EXPERIENCE ANXIETY-FREE DENTISTRY AT SPARKLE DENTAL
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                Whether you need same-day precision ceramic crowns, routine dental hygiene, or urgent emergency relief, Sparkle Dental makes it simple, gentle, and covered by your insurance.
              </p>

              {/* Action Button */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => onOpenWizard()}
                  className="px-9 py-4 rounded-full bg-white hover:bg-slate-100 text-[#0c1e33] font-black text-sm uppercase tracking-wider transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center space-x-2"
                >
                  <span>Schedule Online Request</span>
                  <span>→</span>
                </button>

                <a
                  href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
                  className="px-8 py-4 rounded-full border border-white/30 hover:border-white text-white font-bold text-sm uppercase tracking-wider transition hover:bg-white/10"
                >
                  Call ({BUSINESS_INFO.phone})
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
