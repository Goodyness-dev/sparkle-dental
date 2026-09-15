import React from 'react';
import { BUSINESS_INFO } from '../../data/businessData';

export default function ReviewsSection({ onOpenWizard }) {
  const smileGallery = [
    { img: '/images/4961598-teeth-3433751_1920.jpg', caption: 'Teeth Whitening Special', sub: 'Brightening results' },
    { img: '/images/giuliamar-smile-191626_1920.jpg', caption: 'Full Smile Transformation', sub: 'Cosmetic restorative' },
    { img: '/images/meistervideo-dentist-1933009_1920.jpg', caption: 'Pediatric First Visit', sub: 'Tear-free checkups' },
    { img: '/images/anestiev-tooth-2068131_1920.jpg', caption: 'Aesthetic Crown Finish', sub: 'Natural ceramic match' },
  ];

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#eef5fb] dark:bg-[#071322] transition-colors" aria-labelledby="reviews-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#0e233c] border border-[#d2e3f3] dark:border-[#17365d] text-xs font-bold text-[#1d77ff] uppercase tracking-widest mb-3 shadow-xs">
            <span>Verified Patient Experiences</span>
          </div>
          <h2 id="reviews-heading" className="text-3xl sm:text-5xl font-black tracking-tight text-[#0c1e33] dark:text-white uppercase leading-tight">
            TRUSTED BY KUTZTOWN FAMILIES
          </h2>
          <div className="flex items-center justify-center space-x-3 mt-4">
            <div className="flex text-amber-400 space-x-1" aria-label="5 out of 5 stars">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-slate-700 dark:text-slate-300 text-base font-bold">
              5.0 Star Local Patient Reputation
            </span>
          </div>
        </div>

        {/* Smile Transformation Proof Rail */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-14">
          {smileGallery.map((item, idx) => (
            <div 
              key={idx} 
              className="card-thick-hover rounded-2xl overflow-hidden group relative border border-[#d2e3f3] dark:border-[#17365d]"
            >
              <div className="h-44 sm:h-52 w-full overflow-hidden bg-slate-200 dark:bg-[#0c1e33]">
                <img
                  src={item.img}
                  alt={item.caption}
                  loading="lazy"
                  className="w-full h-full object-cover img-zoom"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1e33]/90 via-[#0c1e33]/30 to-transparent flex flex-col justify-end p-3.5 text-white">
                <p className="text-xs font-black drop-shadow-sm">{item.caption}</p>
                <p className="text-[10px] text-cyan-300 font-semibold drop-shadow-sm">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Reviews Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {BUSINESS_INFO.reviews.map((rev, idx) => (
            <article
              key={idx}
              className="card-thick-hover p-8 sm:p-10 rounded-3xl flex flex-col justify-between bg-white dark:bg-[#0e233c] border-2 border-[#d2e3f3] dark:border-[#17365d]"
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
                  <span className="text-xs font-bold text-[#1d77ff] bg-[#eef5fb] dark:bg-[#17365d] border border-[#d2e3f3] dark:border-[#17365d] px-3 py-1 rounded-full">
                    {rev.source}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-slate-700 dark:text-slate-200 text-base sm:text-lg leading-relaxed mb-6 font-medium italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-6 border-t border-[#e2edf7] dark:border-[#17365d] flex justify-between items-center">
                <div>
                  <h4 className="font-black text-[#0c1e33] dark:text-white text-base">{rev.author}</h4>
                  <span className="text-slate-500 dark:text-slate-400 text-xs font-semibold">{rev.location}</span>
                </div>
                <span className="text-xs font-bold text-[#1d77ff]">{rev.date}</span>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 sm:mt-16 text-center">
          <button
            onClick={() => onOpenWizard()}
            className="inline-flex items-center space-x-3 px-9 py-4 rounded-full bg-[#1d77ff] hover:bg-[#1565e6] text-white font-black text-base transition-all shadow-xl shadow-blue-500/25 active:scale-95"
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
