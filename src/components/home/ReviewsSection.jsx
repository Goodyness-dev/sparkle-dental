import React from 'react';
import { BUSINESS_INFO } from '../../data/businessData';

export default function ReviewsSection({ onOpenWizard }) {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#fbfbfb] dark:bg-[#0a0a0a] transition-colors" aria-labelledby="reviews-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-bold text-neutral-600 dark:text-neutral-400 uppercase tracking-widest mb-3">
            <span>Patient Experiences</span>
          </div>
          <h2 id="reviews-heading" className="text-3xl sm:text-5xl font-black tracking-tight text-neutral-950 dark:text-white uppercase leading-tight">
            Trusted by Kutztown Families.
          </h2>
          <div className="flex items-center justify-center space-x-3 mt-4">
            <div className="flex text-amber-400 space-x-1" aria-label="5 out of 5 stars">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-neutral-700 dark:text-neutral-300 text-base font-bold">
              5.0 Star Local Patient Reputation
            </span>
          </div>
        </div>

        {/* Reviews Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {BUSINESS_INFO.reviews.map((rev, idx) => (
            <article
              key={idx}
              className="card-thick-hover p-8 sm:p-10 rounded-3xl flex flex-col justify-between"
            >
              <div>
                {/* Stars + Badge */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex text-amber-400 space-x-1" aria-label={`${rev.rating} out of 5 stars`}>
                    {[...Array(rev.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs font-bold text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 px-3 py-1 rounded-full">
                    {rev.source}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-neutral-700 dark:text-neutral-200 text-base sm:text-lg leading-relaxed mb-6 font-medium italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-6 border-t border-neutral-100 dark:border-neutral-800/80 flex justify-between items-center">
                <div>
                  <h4 className="font-black text-neutral-950 dark:text-white text-base">{rev.author}</h4>
                  <span className="text-neutral-500 dark:text-neutral-400 text-xs font-semibold">{rev.location}</span>
                </div>
                <span className="text-xs font-bold text-lime-dark dark:text-lime">{rev.date}</span>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 sm:mt-16 text-center">
          <button
            onClick={() => onOpenWizard()}
            className="inline-flex items-center space-x-3 px-9 py-4 rounded-full bg-neutral-950 hover:bg-black dark:bg-lime dark:hover:bg-lime-hover text-white dark:text-neutral-950 font-black text-base transition-all shadow-thick active:scale-95"
          >
            <span>Experience Gentle Dentistry — Book Today</span>
            <svg className="w-4 h-4 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
