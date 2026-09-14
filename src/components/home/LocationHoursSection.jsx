import React from 'react';
import { BUSINESS_INFO, isOpenNow } from '../../data/businessData';

export default function LocationHoursSection({ onOpenWizard }) {
  const shopOpen = isOpenNow();
  const currentDayIndex = new Date().getDay();
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDayName = dayNames[currentDayIndex];

  return (
    <section id="location" className="py-20 sm:py-28 bg-white dark:bg-[#0e0e0e] transition-colors" aria-labelledby="location-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-bold text-neutral-600 dark:text-neutral-400 uppercase tracking-widest mb-3">
            <span>Kutztown Clinic Location & Hours</span>
          </div>
          <h2 id="location-heading" className="text-3xl sm:text-5xl font-black tracking-tight text-neutral-950 dark:text-white uppercase leading-tight">
            Convenient Berks County Access.
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 mt-4 text-base sm:text-lg leading-relaxed font-medium">
            Located on Kutztown Rd with easy front-door parking. Serving Kutztown, Fleetwood, Topton, Lyons, and surrounding communities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Hours & Contact Card */}
          <div className="lg:col-span-5 card-thick p-8 sm:p-10 rounded-3xl flex flex-col justify-between">
            <div className="space-y-6">
              {/* Live Status Badge */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800">
                <div className="flex items-center space-x-3">
                  <span className={`w-3.5 h-3.5 rounded-full ${shopOpen ? 'bg-emerald-500 animate-ping' : 'bg-neutral-400'}`} />
                  <div>
                    <span className={`font-black text-base block ${shopOpen ? 'text-emerald-600 dark:text-emerald-400' : 'text-neutral-700 dark:text-neutral-300'}`}>
                      {shopOpen ? 'Office Open Now' : 'Currently Closed'}
                    </span>
                    <span className="text-xs text-neutral-500 font-semibold">Today is {currentDayName}</span>
                  </div>
                </div>
                <div className="text-xs font-bold px-2.5 py-1 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                  EST
                </div>
              </div>

              {/* Hours Table */}
              <div>
                <h3 className="text-xs font-black uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3">
                  Office Schedule
                </h3>
                <div className="divide-y divide-neutral-100 dark:divide-neutral-800/80 text-sm">
                  {BUSINESS_INFO.hours.map((h) => {
                    const isToday = h.day.toLowerCase() === currentDayName.toLowerCase();
                    return (
                      <div
                        key={h.day}
                        className={`py-2.5 px-3 flex justify-between items-center rounded-xl transition-colors ${
                          isToday 
                            ? 'bg-neutral-100 dark:bg-neutral-900 font-bold text-neutral-950 dark:text-white' 
                            : 'text-neutral-600 dark:text-neutral-300'
                        }`}
                      >
                        <span className="flex items-center space-x-2">
                          <span>{h.day}</span>
                          {isToday && (
                            <span className="text-[10px] uppercase px-2 py-0.5 rounded-full bg-lime text-neutral-950 font-black">
                              Today
                            </span>
                          )}
                        </span>
                        <div className="text-right">
                          <span className={h.open === 'Closed' ? 'text-neutral-400 font-normal' : 'font-bold'}>
                            {h.open === 'Closed' ? 'Closed' : `${h.open} – ${h.close}`}
                          </span>
                          {h.note && (
                            <span className="text-[11px] text-lime-dark dark:text-lime block font-semibold">
                              {h.note}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Address & Direct Phone Details */}
            <div className="pt-6 border-t border-neutral-200/80 dark:border-neutral-800 space-y-4">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-neutral-400">Clinic Address</span>
                <p className="text-base font-bold text-neutral-950 dark:text-white mt-0.5">{BUSINESS_INFO.address.formatted}</p>
                <p className="text-xs text-neutral-500 mt-0.5">Berks County • Easy On-Site Ground Parking</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
                  className="flex-1 py-3 px-4 rounded-full bg-neutral-950 hover:bg-neutral-800 dark:bg-lime dark:hover:bg-lime-hover text-white dark:text-neutral-950 font-bold text-sm text-center shadow-sm"
                >
                  Call {BUSINESS_INFO.phone}
                </a>
                <a
                  href={BUSINESS_INFO.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-full border border-neutral-300 dark:border-neutral-700 hover:border-neutral-500 text-neutral-900 dark:text-white font-semibold text-sm text-center"
                >
                  Get Directions
                </a>
              </div>
            </div>

          </div>

          {/* Google Maps Interactive Card */}
          <div className="lg:col-span-7 card-thick rounded-3xl overflow-hidden min-h-[420px] relative flex flex-col">
            <iframe
              title="Sparkle Dental Kutztown PA Map"
              src={BUSINESS_INFO.googleMapsEmbedUrl}
              className="w-full flex-1 border-0"
              style={{ minHeight: '400px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="p-4 bg-white dark:bg-neutral-900 border-t border-neutral-200/80 dark:border-neutral-800 flex items-center justify-between text-xs font-semibold text-neutral-600 dark:text-neutral-400">
              <span>15295 Kutztown Rd, Kutztown, PA 19530</span>
              <a 
                href={BUSINESS_INFO.googleMapsLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lime-dark dark:text-lime font-bold hover:underline"
              >
                Open in Google Maps &rarr;
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
