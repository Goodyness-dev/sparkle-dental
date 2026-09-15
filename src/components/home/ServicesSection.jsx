import React, { useState } from 'react';
import { SERVICES, SERVICE_CATEGORIES } from '../../data/servicesData';

export default function ServicesSection({ onOpenWizard, onViewAllServices }) {
  const [selectedCategory, setSelectedCategory] = useState('All Services');

  const filteredServices = selectedCategory === 'All Services'
    ? SERVICES.slice(0, 6)
    : SERVICES.filter(s => s.category === selectedCategory).slice(0, 6);

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#eef5fb] dark:bg-[#071322] transition-colors" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Matches Payrot 'WHO WE SERVE' structure) */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#0e233c] border border-[#d2e3f3] dark:border-[#17365d] text-xs font-bold text-[#1d77ff] uppercase tracking-widest mb-3 shadow-xs">
            <span>Who We Serve & Clinical Procedures</span>
          </div>
          <h2 id="services-heading" className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0c1e33] dark:text-white uppercase leading-[1.05]">
            EXCEPTIONAL CARE FOR EVERY SMILE
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mt-4 text-base sm:text-xl leading-relaxed font-medium">
            From routine gentle cleanings to same-day porcelain restorations and anxiety-free emergency relief. Everything Berks County families need under one roof.
          </p>
        </div>

        {/* Category Pills Filter */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-8 sm:mb-12 no-scrollbar">
          {SERVICE_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-tight whitespace-nowrap transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-[#1d77ff] text-white shadow-md shadow-blue-500/25'
                  : 'bg-white dark:bg-[#0e233c] text-slate-600 dark:text-slate-300 border border-[#d2e3f3] dark:border-[#17365d] hover:border-[#1d77ff]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tactile Thick Cards Grid with Rich Photography & Hover Zoom */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {filteredServices.map((service) => (
            <article
              key={service.id}
              onClick={() => onOpenWizard(service.category, service.subType)}
              className="card-thick-hover p-6 sm:p-7 rounded-3xl cursor-pointer group flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Visual Image Header */}
                <div className="relative h-48 sm:h-52 w-full rounded-2xl overflow-hidden mb-5 bg-neutral-100 dark:bg-neutral-800">
                  <img
                    src={service.image}
                    alt={`${service.title} - Sparkle Dental Kutztown`}
                    loading="lazy"
                    className="w-full h-full object-cover img-zoom"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Frosted Badge Pill on Image */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider border border-white/20">
                      {service.category}
                    </span>
                    {service.popular && (
                      <span className="px-2.5 py-1 rounded-full bg-lime text-neutral-950 text-[11px] font-black uppercase tracking-wider shadow-glow-lime">
                        Featured
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-white text-xs font-semibold drop-shadow-sm flex items-center space-x-1.5">
                      <span className="w-2 h-2 rounded-full bg-lime" />
                      <span>{service.subType}</span>
                    </span>
                  </div>
                </div>

                {/* Procedure Title */}
                <h3 className="text-xl sm:text-2xl font-black text-neutral-950 dark:text-white tracking-tight leading-snug mb-2.5 group-hover:text-lime-dark dark:group-hover:text-lime transition-colors">
                  {service.title}
                </h3>

                {/* Clinical description */}
                <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed mb-4 font-medium line-clamp-3">
                  {service.description}
                </p>
              </div>

              {/* Action row */}
              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                <span className="text-neutral-400 dark:text-neutral-500">
                  Anxiety-Free Protocol
                </span>
                <div className="inline-flex items-center space-x-1.5 text-[#1d77ff] font-black group-hover:translate-x-1 transition-transform">
                  <span>Schedule</span>
                  <svg className="w-4 h-4 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View Complete Procedure Catalog Button */}
        <div className="text-center">
          <button
            onClick={onViewAllServices}
            className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-[#1d77ff] hover:bg-[#1565e6] text-white font-bold text-base transition-all shadow-xl shadow-blue-500/25 active:scale-95"
          >
            <span>Explore Full Dental Catalog ({SERVICES.length} Procedures)</span>
            <svg className="w-4 h-4 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
