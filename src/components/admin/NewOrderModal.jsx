import React, { useState } from 'react';
import { quotesApi } from '../../services/api';

export default function NewOrderModal({ isOpen, onClose, onCreated }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceCategory: 'General & Preventive',
    detailedService: 'New Patient Exam & Cleanings',
    insuranceType: 'PPO Dental Insurance',
    anxietyLevel: 'Mild - appreciate gentle touch',
    timeline: 'This Week',
    details: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setError('Please provide patient name and phone number.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const payload = {
        id: `DENTAL-WALKIN-${Date.now().toString().slice(-4)}`,
        submittedAt: 'Just now (Staff Entered)',
        status: 'confirmed',
        customer: {
          name: formData.name,
          phone: formData.phone,
          email: formData.email || 'N/A',
          preferredLocation: 'Kutztown, PA'
        },
        patient: {
          isNewPatient: 'Walk-in / Phone Patient',
          anxietyLevel: formData.anxietyLevel,
          insuranceType: formData.insuranceType
        },
        service: {
          category: formData.serviceCategory,
          detailedService: formData.detailedService,
          details: formData.details || 'Staff walk-in / phone booking'
        },
        logistics: {
          timeline: formData.timeline,
          specificDate: 'Staff Confirmed'
        }
      };

      await quotesApi.create(payload);
      if (onCreated) onCreated(payload);
      onClose();
    } catch (err) {
      setError(err.message || 'Failed to record patient');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5 text-neutral-100">
        
        <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
          <div>
            <h3 className="text-base font-black text-white uppercase tracking-tight">Record Phone or Walk-In Patient</h3>
            <p className="text-xs text-neutral-400">Add directly to Sparkle Dental chair schedule</p>
          </div>
          <button onClick={onClose} className="text-neutral-400 hover:text-white">✕</button>
        </div>

        {error && (
          <div className="p-3 rounded-xl bg-red-950/40 border border-red-800 text-red-300 text-xs">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block text-neutral-400 font-bold uppercase mb-1">Patient Full Name *</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              placeholder="e.g. Michael Miller"
              className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-2.5 text-white outline-none focus:border-lime"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-neutral-400 font-bold uppercase mb-1">Phone *</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                placeholder="(610) 000-0000"
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-2.5 text-white outline-none focus:border-lime"
              />
            </div>
            <div>
              <label className="block text-neutral-400 font-bold uppercase mb-1">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                placeholder="patient@example.com"
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-2.5 text-white outline-none focus:border-lime"
              />
            </div>
          </div>

          <div>
            <label className="block text-neutral-400 font-bold uppercase mb-1">Procedure</label>
            <select
              value={formData.detailedService}
              onChange={(e) => setFormData(prev => ({ ...prev, detailedService: e.target.value }))}
              className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-2.5 text-white outline-none focus:border-lime font-semibold"
            >
              <option value="New Patient Exam & Cleanings">New Patient Exam & Cleanings</option>
              <option value="Custom Porcelain Crowns & Bridges">Custom Porcelain Crowns & Bridges</option>
              <option value="Gentle Root Canal Therapy">Gentle Root Canal Therapy</option>
              <option value="Permanent Dental Implants">Permanent Dental Implants</option>
              <option value="Kids & Pediatric Dentistry">Kids & Pediatric Dentistry</option>
              <option value="Teeth Whitening Kit Special">Teeth Whitening Kit Special</option>
              <option value="Urgent Same-Day Emergency">Urgent Same-Day Emergency</option>
            </select>
          </div>

          <div>
            <label className="block text-neutral-400 font-bold uppercase mb-1">Insurance / Financing</label>
            <select
              value={formData.insuranceType}
              onChange={(e) => setFormData(prev => ({ ...prev, insuranceType: e.target.value }))}
              className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-2.5 text-white outline-none focus:border-lime"
            >
              <option value="PPO Dental Insurance">PPO Dental Insurance</option>
              <option value="Medicare HMO Plan">Medicare HMO Dental</option>
              <option value="CareCredit Financing">CareCredit Financing</option>
              <option value="Self-Pay / In-House Plan">Self-Pay / In-House Plan</option>
            </select>
          </div>

          <div className="pt-2 flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-full bg-neutral-800 text-neutral-300 font-bold"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-5 py-2 rounded-full bg-lime text-neutral-950 font-black uppercase tracking-wider shadow-glow-lime"
            >
              {isSubmitting ? 'Saving...' : 'Save Patient Record'}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
