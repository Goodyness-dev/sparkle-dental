import React from 'react';
import { BUSINESS_INFO } from '../../data/businessData';

export default function Footer({ onOpenWizard, onNavigate }) {
  const handleLinkClick = (e, target) => {
    e.preventDefault();
    if (target === 'services') {
      if (onNavigate) onNavigate('services');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (target === 'admin' || target === '#/admin') {
      if (onNavigate) onNavigate('admin');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (onNavigate) onNavigate('home');
    setTimeout(() => {
      const el = document.querySelector(target);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <footer className="bg-[#0c1e33] text-slate-400 text-sm pb-16 sm:pb-0 border-t border-[#17365d]" role="contentinfo">
      
      {/* High-Impact Pre-Footer Callout */}
      <div className="bg-[#071322] border-b border-[#17365d] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-[#1d77ff]">
              Anxiety-Free Family Dentistry
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Ready to restore your healthiest, brightest smile?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base">
              Accepting new patients and emergencies in Kutztown, PA. Flexible financing & insurance welcome.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full md:w-auto shrink-0">
            <button
              onClick={() => onOpenWizard()}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#1d77ff] hover:bg-[#1565e6] text-white font-black text-base transition-all shadow-xl shadow-blue-500/25 active:scale-95 text-center"
            >
              Request Appointment Online
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="w-full sm:w-auto px-7 py-4 rounded-full bg-[#0c1e33] hover:bg-[#17365d] text-white font-bold text-base transition border border-[#17365d] flex items-center justify-center space-x-2.5 active:scale-95 text-center"
            >
              <svg className="w-5 h-5 text-[#1d77ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Brand Column */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-lime flex items-center justify-center text-neutral-950">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C7.5 2 4 5 4 9c0 3.2 1.6 5.8 3 8.5C8.2 20 9.1 22 10.5 22c1.2 0 1.5-1.5 1.5-3 0-1.5.5-2 1.5-2s1.5.5 1.5 2c0 1.5.3 3 1.5 3 1.4 0 2.3-2 3.5-4.5 1.4-2.7 3-5.3 3-8.5 0-4-3.5-7-8-7z"/>
              </svg>
            </div>
            <span className="font-heading font-black text-white text-lg tracking-tight">
              SPARKLE DENTAL
            </span>
          </div>
          <p className="text-neutral-400 text-sm leading-relaxed">
            Gentle family and restorative dentistry led by Dr. Subhashini Pamulapati, DDS. Serving Kutztown, Fleetwood, Topton, and Berks County.
          </p>
          <div className="text-xs text-neutral-500 font-semibold">
            Formerly John P. Boyle Family Dentistry (transitioned 2022)
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Quick Navigation</h4>
          <ul className="space-y-2.5 text-sm">
            {[
              { label: 'Dental Services Catalog', target: 'services' },
              { label: 'About Dr. Subha', target: '#about' },
              { label: 'Patient Comfort & Tech', target: '#amenities' },
              { label: 'Office Hours & Map', target: '#location' },
              { label: 'Patient Reviews', target: '#reviews' },
              { label: 'Staff / Admin Portal', target: 'admin' },
            ].map(link => (
              <li key={link.label}>
                <button 
                  onClick={(e) => handleLinkClick(e, link.target)} 
                  className="hover:text-lime transition text-neutral-400 text-left"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Office Hours */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Kutztown Hours</h4>
          <ul className="space-y-1.5 text-xs">
            <li className="flex justify-between py-1 border-b border-neutral-900">
              <span className="text-neutral-400">Monday:</span>
              <span className="font-bold text-white">8:00 AM – 5:00 PM</span>
            </li>
            <li className="flex justify-between py-1 border-b border-neutral-900">
              <span className="text-neutral-500">Tuesday:</span>
              <span className="text-neutral-500">Closed (Urgent on call)</span>
            </li>
            <li className="flex justify-between py-1 border-b border-neutral-900">
              <span className="text-neutral-400">Wednesday:</span>
              <span className="font-bold text-white">8:00 AM – 5:00 PM</span>
            </li>
            <li className="flex justify-between py-1 border-b border-neutral-900">
              <span className="text-neutral-500">Thursday - Friday:</span>
              <span className="text-neutral-500">Closed (Urgent on call)</span>
            </li>
            <li className="flex justify-between py-1 border-b border-neutral-900">
              <span className="text-neutral-400">1st Saturday:</span>
              <span className="font-bold text-lime">8:00 AM – 1:00 PM</span>
            </li>
            <li className="flex justify-between py-1">
              <span className="text-neutral-500">Sunday:</span>
              <span className="text-neutral-500">Closed</span>
            </li>
          </ul>
        </div>

        {/* Practice Contact */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Get In Touch</h4>
          <address className="not-italic space-y-3 text-sm">
            <p className="text-neutral-300 font-bold">{BUSINESS_INFO.legalName}</p>
            <p className="text-neutral-400">{BUSINESS_INFO.address.formatted}</p>
            <p>
              <a href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`} className="text-lime font-bold hover:underline block">
                {BUSINESS_INFO.phone}
              </a>
              <a href={`mailto:${BUSINESS_INFO.email}`} className="text-neutral-400 hover:text-white block mt-1 text-xs">
                {BUSINESS_INFO.email}
              </a>
            </p>
          </address>
        </div>

      </div>

      {/* Copyright Strip */}
      <div className="border-t border-neutral-900 py-6 px-4 text-center text-xs text-neutral-500">
        <p>© {new Date().getFullYear()} {BUSINESS_INFO.legalName}. All Rights Reserved. General & Cosmetic Dentistry in Kutztown, PA.</p>
      </div>
    </footer>
  );
}
