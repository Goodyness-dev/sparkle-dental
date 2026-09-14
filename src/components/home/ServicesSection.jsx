import React, { useState } from 'react';
import { SERVICES, SERVICE_CATEGORIES } from '../../data/servicesData';

export default function ServicesSection({ onOpenWizard, onViewAllServices }) {
  const [selectedCategory, setSelectedCategory] = useState('All Services');

  const filteredServices = selectedCategory === 'All Services'
    ? SERVICES.slice(0, 6)
    : SERVICES.filter(s => s.category === selectedCategory).slice(0, 6);

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#fbfbfb] dark:bg-[#0a0a0a] transition-colors" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Tactile Minimalist) */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-bold text-neutral-600 dark:text-neutral-400 uppercase tracking-widest mb-3">
            <span>Comprehensive Dental Care</span>
          </div>
          <h2 id="services-heading" className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-950 dark:text-white uppercase leading-[1.05]">
            Exceptional Care for Every Tooth.
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 mt-4 text-base sm:text-xl leading-relaxed font-medium">
            From routine preventive checkups to complex restorations and anxiety-free emergency relief. Everything Kutztown families need under one roof.
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
                  ? 'bg-neutral-950 text-white dark:bg-lime dark:text-neutral-950 shadow-sm'
                  : 'bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tactile Thick Cards Grid (Thick & Alive Design System) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {filteredServices.map((service) => (
            <article
              key={service.id}
              onClick={() => onOpenWizard(service.category, service.subType)}
              className="card-thick-hover p-8 sm:p-9 rounded-3xl cursor-pointer group flex flex-col justify-between"
            >
              <div>
                {/* Header row with badge & icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-neutral-900 dark:text-lime group-hover:scale-110 transition-transform">
                    {/* Semantic Tooth Outline SVG */}
                    <svg className="w-6 h-6 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C7.5 2 4 5 4 9c0 3.2 1.6 5.8 3 8.5C8.2 20 9.1 22 10.5 22c1.2 0 1.5-1.5 1.5-3 0-1.5.5-2 1.5-2s1.5.5 1.5 2c0 1.5.3 3 1.5 3 1.4 0 2.3-2 3.5-4.5 1.4-2.7 3-5.3 3-8.5 0-4-3.5-7-8-7z" />
                    </svg>
                  </div>
                  {service.popular && (
                    <span className="px-3 py-1 rounded-full bg-lime/30 dark:bg-lime/20 text-neutral-900 dark:text-lime border border-lime/40 text-xs font-black uppercase tracking-wider">
                      Popular
                    </span>
                  )}
                </div>

                {/* Procedure Title */}
                <h3 className="text-xl sm:text-2xl font-black text-neutral-950 dark:text-white tracking-tight leading-snug mb-3 group-hover:text-lime-dark dark:group-hover:text-lime transition-colors">
                  {service.title}
                </h3>

                {/* Clinical description */}
                <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                  {service.description}
                </p>
              </div>

              {/* Action row */}
              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                <span className="text-neutral-400 dark:text-neutral-500">
                  {service.category}
                </span>
                <div className="inline-flex items-center space-x-1.5 text-neutral-900 dark:text-lime font-black group-hover:translate-x-1 transition-transform">
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
            className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-neutral-900 hover:bg-black dark:bg-neutral-800 dark:hover:bg-neutral-700 text-white font-bold text-base transition-all shadow-thick active:scale-95 border border-neutral-800"
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
