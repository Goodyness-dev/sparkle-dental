import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '../../data/businessData';

export default function Navbar({ onOpenWizard, currentPage = 'home', onNavigate, darkMode, onToggleDarkMode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 15);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, target) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (target === 'services') {
      if (onNavigate) onNavigate('services');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (currentPage !== 'home' && onNavigate) {
      onNavigate('home');
      setTimeout(() => {
        const el = document.querySelector(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }

    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Services', target: 'services' },
    { name: 'About Dr. Subha', target: '#about' },
    { name: 'Comfort & Tech', target: '#amenities' },
    { name: 'Hours & Location', target: '#location' },
    { name: 'Reviews', target: '#reviews' },
  ];

  return (
    <header 
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#fbfbfb]/90 dark:bg-[#0a0a0a]/90 backdrop-blur-md shadow-sm border-b border-neutral-200/80 dark:border-neutral-800' 
          : 'bg-[#fbfbfb] dark:bg-[#0a0a0a] border-b border-neutral-200/50 dark:border-neutral-800/60'
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo (Tactile Minimalist) */}
        <button 
          onClick={(e) => handleNavClick(e, '#')} 
          className="flex items-center space-x-3 group text-left"
          aria-label="Sparkle Dental Home"
        >
          <div className="w-10 h-10 rounded-2xl bg-neutral-900 dark:bg-white flex items-center justify-center text-white dark:text-neutral-950 shadow-md group-hover:scale-105 transition-transform">
            {/* Semantic Sparkle Tooth SVG */}
            <svg className="w-6 h-6 fill-current text-lime dark:text-neutral-950" viewBox="0 0 24 24">
              <path d="M12 2C7.5 2 4 5 4 9c0 3.2 1.6 5.8 3 8.5C8.2 20 9.1 22 10.5 22c1.2 0 1.5-1.5 1.5-3 0-1.5.5-2 1.5-2s1.5.5 1.5 2c0 1.5.3 3 1.5 3 1.4 0 2.3-2 3.5-4.5 1.4-2.7 3-5.3 3-8.5 0-4-3.5-7-8-7zm0 3c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm-4 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm8 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-xl sm:text-2xl font-black tracking-tight text-neutral-900 dark:text-white leading-tight">
              Sparkle<span className="text-lime-dark dark:text-lime font-black">Dental</span>
            </span>
            <span className="text-[11px] tracking-wider uppercase text-neutral-500 dark:text-neutral-400 font-semibold">
              Kutztown, PA
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = link.target === 'services' && currentPage === 'services';
            return (
              <button
                key={link.name}
                onClick={(e) => handleNavClick(e, link.target)}
                className={`text-sm font-semibold tracking-tight transition-colors ${
                  isActive 
                    ? 'text-neutral-950 dark:text-lime font-bold border-b-2 border-neutral-950 dark:border-lime pb-1' 
                    : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white'
                }`}
              >
                {link.name}
              </button>
            );
          })}
        </nav>

        {/* Action Pills & Theme Toggle */}
        <div className="flex items-center space-x-3">
          {/* Phone Link (Minimalist Outline Pill) */}
          <a
            href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
            className="hidden sm:inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white/70 dark:bg-neutral-900/80 text-neutral-900 dark:text-neutral-100 text-sm font-medium hover:border-neutral-500 transition-all"
            aria-label={`Call Sparkle Dental at ${BUSINESS_INFO.phone}`}
          >
            <svg className="w-4 h-4 text-neutral-700 dark:text-neutral-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="font-semibold">{BUSINESS_INFO.phone}</span>
          </a>

          {/* Primary CTA (Bold Tactile Pill matching 'Get help' in reference image) */}
          <button
            onClick={() => onOpenWizard()}
            className="px-5 py-2.5 rounded-full bg-neutral-900 hover:bg-black dark:bg-lime dark:hover:bg-lime-hover text-white dark:text-neutral-950 font-bold text-sm tracking-tight transition-all duration-200 shadow-sm active:scale-95 flex items-center space-x-2"
          >
            <span>Book Visit</span>
            <svg className="w-4 h-4 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={onToggleDarkMode}
            className="p-2.5 rounded-full text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? (
              <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800 px-6 py-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={(e) => handleNavClick(e, link.target)}
                className="text-left py-2 text-base font-semibold text-neutral-800 dark:text-neutral-200 hover:text-lime-dark dark:hover:text-lime border-b border-neutral-100 dark:border-neutral-900"
              >
                {link.name}
              </button>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWizard();
              }}
              className="w-full py-3.5 rounded-full bg-neutral-900 text-white dark:bg-lime dark:text-neutral-950 font-bold text-center shadow-md flex items-center justify-center space-x-2"
            >
              <span>Book Appointment Online</span>
              <svg className="w-4 h-4 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="w-full py-3 rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white font-semibold text-center flex items-center justify-center space-x-2"
            >
              <span>Call {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
