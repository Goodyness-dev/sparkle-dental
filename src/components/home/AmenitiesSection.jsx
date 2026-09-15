import React from 'react';
import { AMENITIES_AVAILABLE } from '../../data/amenitiesData';
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

        {/* Bento Showcase: Clinical Technology & Comfort Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {/* Feature Card 1: With Image of Modern Operatory Suite */}
          <div className="card-thick-hover rounded-3xl overflow-hidden group flex flex-col justify-between">
            <div className="h-44 w-full overflow-hidden relative">
              <img
                src="/images/diegotoralabad-dentist-7397734_1920.jpg"
                alt="Modern Sterilization and Operatory Suite"
                className="w-full h-full object-cover img-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 text-xs font-black text-white bg-black/60 px-3 py-1 rounded-full backdrop-blur-xs">
                CDC & ADA Sterilization
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-black text-neutral-950 dark:text-white mb-2">Hospital-Grade Sterilization</h3>
              <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed font-medium">
                Individual sterile cassette setups, autoclave monitoring, and spotless treatment suites.
              </p>
            </div>
          </div>

          {/* Feature Card 2: Gentle Pediatric & Family Care */}
          <div className="card-thick-hover rounded-3xl overflow-hidden group flex flex-col justify-between">
            <div className="h-44 w-full overflow-hidden relative">
              <img
                src="/images/meistervideo-dentist-1933009_1920.jpg"
                alt="Gentle Pediatric and Family Dentistry"
                className="w-full h-full object-cover img-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 text-xs font-black text-white bg-black/60 px-3 py-1 rounded-full backdrop-blur-xs">
                Zero-Anxiety First Visits
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-black text-neutral-950 dark:text-white mb-2">Kid-Friendly & Anxiety-Free</h3>
              <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed font-medium">
                Patience, gentle numbing, and positive encouragement to make dental checkups a breeze.
              </p>
            </div>
          </div>

          {/* Feature Card 3: Digital Hygiene & Cleaning */}
          <div className="card-thick-hover rounded-3xl overflow-hidden group flex flex-col justify-between">
            <div className="h-44 w-full overflow-hidden relative">
              <img
                src="/images/rgerber-teeth-cleaning-1514692_1920.jpg"
                alt="Ultrasonic Hygiene and Cleaning"
                className="w-full h-full object-cover img-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 text-xs font-black text-white bg-black/60 px-3 py-1 rounded-full backdrop-blur-xs">
                Ultrasonic Scaling
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-black text-neutral-950 dark:text-white mb-2">Precision Hygiene Polish</h3>
              <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed font-medium">
                Gentle ultrasonic plaque removal, periodontal pocket charting, and fluoride varnish protection.
              </p>
            </div>
          </div>
        </div>

        {/* High-Impact Promotions Banner with Radiant Smile Imagery */}
        <div className="rounded-3xl bg-neutral-950 dark:bg-[#121212] text-white p-8 sm:p-12 shadow-thick border-2 border-neutral-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-lime/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Image Showcase */}
            <div className="lg:col-span-4 rounded-2xl overflow-hidden border-2 border-neutral-700 shadow-xl relative h-64 sm:h-72 group">
              <img
                src="/images/giuliamar-smile-191626_1920.jpg"
                alt="Radiant White Smile at Sparkle Dental"
                className="w-full h-full object-cover img-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-center">
                <span className="text-xs font-black text-lime uppercase tracking-wider bg-black/70 px-3 py-1 rounded-full backdrop-blur-xs">
                  ✨ Take-Home Bleaching Promo
                </span>
              </div>
            </div>

            {/* Middle Content */}
            <div className="lg:col-span-5 space-y-4">
              <span className="px-3.5 py-1.5 rounded-full bg-lime text-neutral-950 font-black text-xs uppercase tracking-wider">
                Special Patient Promotions
              </span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
                New Patient Exam & Professional Bleaching Special
              </h3>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                Welcome to Sparkle Dental! Get a comprehensive digital exam, low-radiation diagnostic x-rays, and ask about our take-home teeth whitening kit special bundled with your new patient visit.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-xs font-bold text-neutral-300">
                <span className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-lime animate-ping" />
                  <span>CareCredit 0% APR Options</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>PPO Insurance Direct Billing</span>
                </span>
              </div>
            </div>

            {/* Right Buttons */}
            <div className="lg:col-span-3 flex flex-col gap-3 justify-center">
              <button
                onClick={() => onOpenWizard('New Patient Exam')}
                className="w-full py-4 rounded-full bg-lime hover:bg-lime-hover text-neutral-950 font-black text-sm uppercase tracking-wider transition-all shadow-glow-lime active:scale-95 text-center"
              >
                Claim Promotion & Book
              </button>
              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="w-full py-3.5 rounded-full border border-neutral-700 hover:border-neutral-500 text-white font-bold text-center text-xs uppercase tracking-wider transition"
              >
                Call (610) 683-6955
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
