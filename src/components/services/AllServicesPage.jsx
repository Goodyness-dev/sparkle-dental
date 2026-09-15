import React, { useState, useEffect } from 'react';
import { SERVICES, SERVICE_CATEGORIES } from '../../data/servicesData';
import { BUSINESS_INFO } from '../../data/businessData';

export default function AllServicesPage({ onOpenWizard, onBackToHome }) {
  const [selectedCategory, setSelectedCategory] = useState('All Services');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const filteredServices = SERVICES.filter(service => {
    const matchesCategory = selectedCategory === 'All Services' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.subType.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#fbfbfb] dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100 transition-colors py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center space-x-2 text-xs sm:text-sm font-bold text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-lime transition"
          >
            <svg className="w-4 h-4 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back to Sparkle Dental Home</span>
          </button>
        </div>

        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-lime-dark dark:text-lime">
            Clinical Catalog
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-neutral-950 dark:text-white uppercase mt-2">
            Complete Dental Care Services
          </h1>
          <p className="text-neutral-600 dark:text-neutral-300 mt-4 text-base sm:text-lg leading-relaxed font-medium">
            Explore our comprehensive menu of restorative treatments, preventive hygiene, pediatric dental visits, and urgent pain relief in Kutztown, PA.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center mb-10">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            {SERVICE_CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-neutral-950 text-white dark:bg-lime dark:text-neutral-950 shadow-sm'
                    : 'bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px]">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search treatments, crowns, exams..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-sm font-medium text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-neutral-900 dark:focus:border-lime transition shadow-sm"
            />
            <svg className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
        </div>

        {/* Services Grid with Visual Image Headers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map(service => (
            <article
              key={service.id}
              onClick={() => onOpenWizard(service.category, service.subType)}
              className="card-thick-hover p-6 sm:p-7 rounded-3xl cursor-pointer group flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Visual Image Header */}
                <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-5 bg-neutral-100 dark:bg-neutral-800">
                  <img
                    src={service.image}
                    alt={`${service.title} - Sparkle Dental Kutztown`}
                    loading="lazy"
                    className="w-full h-full object-cover img-zoom"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Category Pill Tag Overlay */}
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

                  <div className="absolute bottom-3 left-3">
                    <span className="text-white text-xs font-semibold drop-shadow-sm flex items-center space-x-1.5">
                      <span className="w-2 h-2 rounded-full bg-lime" />
                      <span>{service.subType}</span>
                    </span>
                  </div>
                </div>

                <h2 className="text-xl font-black text-neutral-950 dark:text-white tracking-tight leading-snug mb-2 group-hover:text-lime-dark dark:group-hover:text-lime transition-colors">
                  {service.title}
                </h2>

                <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed mb-6 font-medium line-clamp-3">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                <span className="text-xs font-bold text-lime-dark dark:text-lime">
                  Inquire / Book
                </span>
                <div className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center group-hover:bg-neutral-950 group-hover:text-white dark:group-hover:bg-lime dark:group-hover:text-neutral-950 transition-colors">
                  <svg className="w-4 h-4 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-16 card-thick rounded-3xl">
            <p className="text-lg font-bold text-neutral-600 dark:text-neutral-400">No procedures match your search.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All Services'); }}
              className="mt-4 px-6 py-2.5 rounded-full bg-neutral-900 text-white dark:bg-lime dark:text-neutral-950 text-sm font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Emergency Call Banner */}
        <div className="mt-16 card-thick p-8 sm:p-10 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-r from-neutral-900 to-neutral-950 text-white">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-lime">Urgent Dental Pain?</span>
            <h3 className="text-2xl font-black text-white mt-1">Same-Day Emergency Priority</h3>
            <p className="text-neutral-400 text-sm mt-1">If you have severe swelling or acute pain, call our office immediately.</p>
          </div>
          <a
            href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
            className="px-8 py-4 rounded-full bg-lime hover:bg-lime-hover text-neutral-950 font-black text-base shrink-0 shadow-glow-lime active:scale-95 transition"
          >
            Call {BUSINESS_INFO.phone}
          </a>
        </div>

      </div>
    </div>
  );
}
