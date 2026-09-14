import React, { useState } from 'react';
import { quotesApi } from '../../services/api';
import { BUSINESS_INFO } from '../../data/businessData';

export default function QuoteDetailModal({ quote, quoteId, onClose, onUpdate, onStatusChange }) {
  const targetQuote = quote || (typeof quoteId === 'object' ? quoteId : null);
  const [currentQuote, setCurrentQuote] = useState(targetQuote);
  const [status, setStatus] = useState(targetQuote?.status || 'pending');
  const [isUpdating, setIsUpdating] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!currentQuote) return null;

  const handleStatusUpdate = async (newStatus) => {
    setIsUpdating(true);
    try {
      await quotesApi.updateStatus(currentQuote.id, newStatus);
      setStatus(newStatus);
      if (onStatusChange) onStatusChange();
      if (onUpdate) onUpdate();
    } catch (err) {
      console.error(err);
    } finally {
      setIsUpdating(false);
    }
  };

  const copySmsTemplate = () => {
    const text = `Hi ${currentQuote.customer?.name || 'there'}, this is Dr. Subha's team from Sparkle Dental in Kutztown. We received your request for ${currentQuote.service?.detailedService}. We have an opening available. Please call us at (610) 683-6955 to confirm your chair time!`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm" role="dialog">
      <div className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col text-neutral-100">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-800 bg-neutral-950">
          <div>
            <span className="text-xs font-bold text-lime uppercase tracking-wider">Patient Request Ref: {currentQuote.id}</span>
            <h3 className="text-xl font-black text-white mt-0.5">{currentQuote.customer?.name || 'Patient'}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800"
          >
            ✕
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1">
          
          {/* Status Badge & Selector */}
          <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-bold text-neutral-400 uppercase">Current Status</span>
              <p className="text-sm font-black text-white capitalize">{status}</p>
            </div>
            <div className="flex items-center gap-2">
              {['pending', 'confirmed', 'completed'].map((st) => (
                <button
                  key={st}
                  onClick={() => handleStatusUpdate(st)}
                  disabled={isUpdating}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold capitalize transition ${
                    status === st
                      ? 'bg-lime text-neutral-950 font-black'
                      : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>

          {/* Clinical Procedure Block */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-neutral-950/60 border border-neutral-800">
              <span className="text-xs font-bold text-neutral-500 uppercase">Procedure Requested</span>
              <p className="text-base font-black text-white mt-1">{currentQuote.service?.detailedService}</p>
              <p className="text-xs text-lime mt-0.5">{currentQuote.service?.category}</p>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-950/60 border border-neutral-800">
              <span className="text-xs font-bold text-neutral-500 uppercase">Target Timeline</span>
              <p className="text-base font-black text-white mt-1">{currentQuote.logistics?.timeline}</p>
              <p className="text-xs text-neutral-400 mt-0.5">{currentQuote.logistics?.specificDate}</p>
            </div>
          </div>

          {/* Patient Details & Comfort */}
          <div className="p-5 rounded-2xl bg-neutral-950/60 border border-neutral-800 space-y-3">
            <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Patient Profile & Preferences</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div>
                <span className="text-neutral-500 block">Patient Type:</span>
                <span className="font-bold text-white">{currentQuote.patient?.isNewPatient || 'New Patient'}</span>
              </div>
              <div>
                <span className="text-neutral-500 block">Anxiety Level:</span>
                <span className="font-bold text-lime">{currentQuote.patient?.anxietyLevel || 'Standard'}</span>
              </div>
              <div>
                <span className="text-neutral-500 block">Insurance:</span>
                <span className="font-bold text-white">{currentQuote.patient?.insuranceType || 'Self-Pay'}</span>
              </div>
            </div>
          </div>

          {/* Clinical Notes / Symptoms */}
          {currentQuote.service?.details && (
            <div className="p-5 rounded-2xl bg-neutral-950/60 border border-neutral-800 space-y-1.5">
              <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Patient Notes / Symptoms</h4>
              <p className="text-sm text-neutral-200 leading-relaxed font-medium italic">
                "{currentQuote.service?.details}"
              </p>
            </div>
          )}

          {/* Contact Details */}
          <div className="p-5 rounded-2xl bg-neutral-950/60 border border-neutral-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Direct Patient Contact</span>
              <p className="text-sm font-bold text-white mt-1">{currentQuote.customer?.phone} • {currentQuote.customer?.email}</p>
              <p className="text-xs text-neutral-500">{currentQuote.customer?.preferredLocation || 'Kutztown, PA'}</p>
            </div>
            <a
              href={`tel:${(currentQuote.customer?.phone || '').replace(/[^0-9]/g, '')}`}
              className="px-5 py-2.5 rounded-full bg-lime text-neutral-950 font-black text-xs uppercase tracking-wider hover:bg-lime-hover shadow-glow-lime transition"
            >
              Call Patient Now
            </a>
          </div>

          {/* Staff Quick SMS Dispatch */}
          <div className="p-4 rounded-2xl bg-neutral-800/40 border border-neutral-800 flex items-center justify-between">
            <span className="text-xs text-neutral-400">Copy ready-to-send SMS confirmation message for this patient</span>
            <button
              onClick={copySmsTemplate}
              className="px-3.5 py-1.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-xs font-bold text-white transition"
            >
              {copied ? '✓ Copied!' : 'Copy SMS Script'}
            </button>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-neutral-950 border-t border-neutral-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-xs font-bold text-white transition"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
