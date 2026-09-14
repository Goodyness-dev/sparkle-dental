import React, { useState, useEffect } from 'react';
import { submitQuoteRequest } from '../../services/quoteService';
import { BUSINESS_INFO } from '../../data/businessData';

export default function QuoteWizardModal({ isOpen, onClose, initialCategory = null, initialService = null }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  const [formData, setFormData] = useState({
    serviceCategory: initialCategory || 'General & Preventive',
    detailedService: initialService || 'Comprehensive Exams & Cleanings',
    isNewPatient: true,
    anxietyLevel: 'Mild - appreciate gentle touch',
    insuranceType: 'PPO Dental Insurance',
    timeline: 'This Week',
    preferredTime: 'Morning (8am - 12pm)',
    details: '',
    name: '',
    phone: '',
    email: '',
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (initialService) {
        setFormData(prev => ({
          ...prev,
          detailedService: initialService,
          serviceCategory: initialCategory || 'Restorative'
        }));
      }
    } else {
      document.body.style.overflow = '';
      setCurrentStep(1);
      setSubmissionResult(null);
      setErrorMsg('');
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, initialCategory, initialService]);

  if (!isOpen) return null;

  const procedures = [
    { title: 'New Patient Exam & Cleanings', cat: 'General & Preventive', desc: 'Full exam, x-rays, and gentle polish' },
    { title: 'Custom Porcelain Crowns & Bridges', cat: 'Restorative', desc: 'Precision restorations for damaged teeth' },
    { title: 'Gentle Root Canal Therapy', cat: 'Restorative', desc: 'Preserve your tooth and relieve infection' },
    { title: 'Permanent Dental Implants', cat: 'Restorative', desc: 'Lifelong tooth replacement anchors' },
    { title: 'Kids & Pediatric Dentistry', cat: 'Pediatric & Emergency', desc: 'Fun, encouraging children’s dental visits' },
    { title: 'Teeth Whitening Kit Special', cat: 'Cosmetic & Whitening', desc: 'Take-home clinical bleaching promo' },
    { title: 'Urgent Same-Day Emergency', cat: 'Pediatric & Emergency', desc: 'Severe toothache, trauma, or swelling' },
    { title: 'Other Dental Consultation', cat: 'General & Preventive', desc: 'Cosmetic bonding, second opinions' },
  ];

  const handleNext = () => {
    setErrorMsg('');
    if (currentStep === 1 && !formData.detailedService) {
      setErrorMsg('Please select a dental procedure or reason for visit.');
      return;
    }
    if (currentStep === 3 && (!formData.name.trim() || !formData.phone.trim())) {
      setErrorMsg('Please provide your name and contact phone number.');
      return;
    }
    setCurrentStep(prev => prev + 1);
  };

  const handleBack = () => {
    setErrorMsg('');
    setCurrentStep(prev => Math.max(1, prev - 1));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Please enter your full name and phone number.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const res = await submitQuoteRequest(formData);
      setSubmissionResult(res);
      setCurrentStep(4); // Success step
    } catch (err) {
      setErrorMsg('Error submitting request. Please call us directly at ' + BUSINESS_INFO.phone);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/70 backdrop-blur-sm animate-fade-in" role="dialog" aria-modal="true">
      <div className="relative w-full max-w-2xl bg-white dark:bg-[#121212] rounded-3xl shadow-2xl border-2 border-neutral-200 dark:border-neutral-800 overflow-hidden my-8">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-neutral-200 dark:border-neutral-800 bg-[#fbfbfb] dark:bg-[#0a0a0a]">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-xl bg-neutral-950 dark:bg-lime flex items-center justify-center text-white dark:text-neutral-950 text-xs font-black">
              ✨
            </div>
            <div>
              <h3 className="text-base font-black text-neutral-950 dark:text-white uppercase tracking-tight">
                Sparkle Dental Request
              </h3>
              <p className="text-xs text-neutral-500 font-medium">Kutztown, PA • Dr. Subha Pamulapati</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Step Indicator */}
        {currentStep < 4 && (
          <div className="px-6 sm:px-8 pt-4 pb-2 bg-white dark:bg-[#121212]">
            <div className="flex items-center justify-between text-xs font-bold text-neutral-500 mb-2">
              <span>Step {currentStep} of 3</span>
              <span className="text-lime-dark dark:text-lime">
                {currentStep === 1 && 'Procedure & Care Reason'}
                {currentStep === 2 && 'Patient & Insurance Preferences'}
                {currentStep === 3 && 'Contact Information'}
              </span>
            </div>
            <div className="w-full bg-neutral-100 dark:bg-neutral-800 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-neutral-950 dark:bg-lime h-full transition-all duration-300"
                style={{ width: `${(currentStep / 3) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          
          {errorMsg && (
            <div className="mb-6 p-4 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-xs sm:text-sm font-semibold">
              {errorMsg}
            </div>
          )}

          {/* STEP 1: Service Selection */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <div className="space-y-1">
                <h4 className="text-xl font-black text-neutral-950 dark:text-white">What type of care do you need?</h4>
                <p className="text-xs sm:text-sm text-neutral-500 font-medium">Select a treatment or reason for your visit with Dr. Subha.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-80 overflow-y-auto pr-1">
                {procedures.map((p) => (
                  <button
                    key={p.title}
                    type="button"
                    onClick={() => {
                      setFormData(prev => ({
                        ...prev,
                        detailedService: p.title,
                        serviceCategory: p.cat
                      }));
                    }}
                    className={`p-4 rounded-2xl text-left border-2 transition-all ${
                      formData.detailedService === p.title
                        ? 'border-neutral-950 dark:border-lime bg-neutral-50 dark:bg-neutral-900 shadow-sm'
                        : 'border-neutral-200 dark:border-neutral-800 hover:border-neutral-400'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-black text-neutral-950 dark:text-white">{p.title}</span>
                      {formData.detailedService === p.title && (
                        <span className="w-2.5 h-2.5 rounded-full bg-lime shadow-glow-lime shrink-0" />
                      )}
                    </div>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 font-medium">{p.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Comfort & Insurance */}
          {currentStep === 2 && (
            <div className="space-y-5">
              <div className="space-y-1">
                <h4 className="text-xl font-black text-neutral-950 dark:text-white">Patient Profile & Comfort</h4>
                <p className="text-xs sm:text-sm text-neutral-500 font-medium">Help us tailor a comfortable, anxiety-free appointment.</p>
              </div>

              {/* New Patient Toggle */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-neutral-600 dark:text-neutral-400">Have you visited our Kutztown office before?</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, isNewPatient: true }))}
                    className={`py-3 px-4 rounded-xl text-xs font-bold border-2 transition-all ${
                      formData.isNewPatient ? 'border-neutral-950 dark:border-lime bg-neutral-100 dark:bg-neutral-900' : 'border-neutral-200 dark:border-neutral-800'
                    }`}
                  >
                    Yes, First Time Patient
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, isNewPatient: false }))}
                    className={`py-3 px-4 rounded-xl text-xs font-bold border-2 transition-all ${
                      !formData.isNewPatient ? 'border-neutral-950 dark:border-lime bg-neutral-100 dark:bg-neutral-900' : 'border-neutral-200 dark:border-neutral-800'
                    }`}
                  >
                    Existing / Returning Patient
                  </button>
                </div>
              </div>

              {/* Anxiety Comfort Level */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-neutral-600 dark:text-neutral-400">Dental Anxiety Comfort Protocol</label>
                <select
                  value={formData.anxietyLevel}
                  onChange={(e) => setFormData(prev => ({ ...prev, anxietyLevel: e.target.value }))}
                  className="w-full p-3 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-sm font-semibold text-neutral-900 dark:text-white focus:outline-none"
                >
                  <option value="None - completely comfortable">None — completely comfortable</option>
                  <option value="Mild - appreciate gentle touch">Mild — I appreciate a slow, gentle touch</option>
                  <option value="High - significant dental anxiety">High — Please explain every step & provide gentle care</option>
                </select>
              </div>

              {/* Insurance Preference */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-neutral-600 dark:text-neutral-400">Insurance & Payment Method</label>
                <select
                  value={formData.insuranceType}
                  onChange={(e) => setFormData(prev => ({ ...prev, insuranceType: e.target.value }))}
                  className="w-full p-3 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-sm font-semibold text-neutral-900 dark:text-white focus:outline-none"
                >
                  <option value="PPO Dental Insurance">PPO Dental Insurance (Direct Filing)</option>
                  <option value="Medicare HMO Plan">Medicare HMO Dental Plan</option>
                  <option value="CareCredit Financing">CareCredit Healthcare Financing</option>
                  <option value="In-House Flexible Plan / Self-Pay">Self-Pay / In-House Flexible Plan</option>
                </select>
              </div>
            </div>
          )}

          {/* STEP 3: Contact & Timing */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <div className="space-y-1">
                <h4 className="text-xl font-black text-neutral-950 dark:text-white">Your Contact Details</h4>
                <p className="text-xs sm:text-sm text-neutral-500 font-medium">We will confirm your appointment via phone or text promptly.</p>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="text-xs font-bold uppercase text-neutral-600 dark:text-neutral-400 block mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="e.g. Sarah Miller"
                    className="w-full p-3 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-sm font-medium text-neutral-900 dark:text-white focus:outline-none focus:border-neutral-900 dark:focus:border-lime"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold uppercase text-neutral-600 dark:text-neutral-400 block mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder="(610) 000-0000"
                      className="w-full p-3 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-sm font-medium text-neutral-900 dark:text-white focus:outline-none focus:border-neutral-900 dark:focus:border-lime"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase text-neutral-600 dark:text-neutral-400 block mb-1">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="name@example.com"
                      className="w-full p-3 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-sm font-medium text-neutral-900 dark:text-white focus:outline-none focus:border-neutral-900 dark:focus:border-lime"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase text-neutral-600 dark:text-neutral-400 block mb-1">Preferred Timeframe</label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData(prev => ({ ...prev, timeline: e.target.value }))}
                    className="w-full p-3 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-sm font-semibold text-neutral-900 dark:text-white focus:outline-none"
                  >
                    <option value="Urgent / Same-Day Relief">Urgent / Same-Day Priority Relief</option>
                    <option value="Next Monday (8am - 5pm)">Next Monday (8:00 AM – 5:00 PM)</option>
                    <option value="Next Wednesday (8am - 5pm)">Next Wednesday (8:00 AM – 5:00 PM)</option>
                    <option value="1st Saturday of Month (8am - 1pm)">1st Saturday of the Month (8:00 AM – 1:00 PM)</option>
                    <option value="Flexible / First Available">Flexible / First Available Opening</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase text-neutral-600 dark:text-neutral-400 block mb-1">Symptoms or Additional Notes</label>
                  <textarea
                    rows="2"
                    value={formData.details}
                    onChange={(e) => setFormData(prev => ({ ...prev, details: e.target.value }))}
                    placeholder="Tell us if you are experiencing tooth pain, need a second opinion, or want the take-home whitening promo..."
                    className="w-full p-3 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-sm font-medium text-neutral-900 dark:text-white focus:outline-none focus:border-neutral-900 dark:focus:border-lime"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Success Screen */}
          {currentStep === 4 && (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-lime text-neutral-950 flex items-center justify-center mx-auto shadow-glow-lime font-black text-2xl">
                ✓
              </div>
              <h4 className="text-2xl font-black text-neutral-950 dark:text-white">Appointment Request Received!</h4>
              <p className="text-neutral-600 dark:text-neutral-300 text-sm max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-neutral-950 dark:text-white">{formData.name}</strong>. Dr. Subha's team at Sparkle Dental in Kutztown has received your request for <strong>{formData.detailedService}</strong>.
              </p>
              <div className="p-4 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 max-w-sm mx-auto text-xs space-y-1 font-semibold text-neutral-700 dark:text-neutral-300">
                <p>Confirmation Ref: <span className="font-bold text-lime-dark dark:text-lime">{submissionResult?.quoteId}</span></p>
                <p>We will call or text you at <span className="font-bold">{formData.phone}</span> to confirm your exact chair time.</p>
              </div>

              <div className="pt-4">
                <button
                  onClick={onClose}
                  className="px-8 py-3.5 rounded-full bg-neutral-950 hover:bg-black dark:bg-lime dark:text-neutral-950 text-white font-bold text-sm shadow-md"
                >
                  Return to Sparkle Dental
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Controls */}
        {currentStep < 4 && (
          <div className="flex items-center justify-between px-6 sm:px-8 py-4 border-t border-neutral-200 dark:border-neutral-800 bg-[#fbfbfb] dark:bg-[#0a0a0a]">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="px-5 py-2.5 rounded-full border border-neutral-300 dark:border-neutral-700 text-xs font-bold hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
              >
                Back
              </button>
            ) : <div />}

            {currentStep < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-2.5 rounded-full bg-neutral-950 hover:bg-black dark:bg-lime dark:hover:bg-lime-hover text-white dark:text-neutral-950 text-xs font-black uppercase tracking-wider transition shadow-sm"
              >
                Continue &rarr;
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="px-7 py-3 rounded-full bg-lime hover:bg-lime-hover text-neutral-950 text-xs font-black uppercase tracking-wider transition shadow-glow-lime disabled:opacity-50"
              >
                {isSubmitting ? 'Sending Request...' : 'Confirm Appointment Request'}
              </button>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
