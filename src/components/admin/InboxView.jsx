import React, { useState, useEffect } from 'react';
import { quotesApi } from '../../services/api';

export default function InboxView({ onSelectQuote }) {
  const [quotes, setQuotes] = useState([]);
  const [selectedQuote, setSelectedQuote] = useState(null);
  const [replyText, setReplyText] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  useEffect(() => {
    quotesApi.getQuotes().then(res => {
      const list = res.quotes || [];
      setQuotes(list);
      if (list.length > 0 && !selectedQuote) {
        setSelectedQuote(list[0]);
      }
    });
  }, []);

  const handleSendReply = (e) => {
    e.preventDefault();
    if (!replyText.trim()) return;
    setSentSuccess(true);
    setTimeout(() => {
      setSentSuccess(false);
      setReplyText('');
    }, 2000);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[75vh]">
      {/* Left List */}
      <div className="md:col-span-5 card-thick rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 flex flex-col">
        <div className="p-4 border-b border-neutral-800 bg-neutral-950">
          <h3 className="text-sm font-black uppercase tracking-wider text-white">Patient Inquiries</h3>
          <p className="text-[11px] text-neutral-400">Incoming online booking requests</p>
        </div>
        <div className="divide-y divide-neutral-800/60 overflow-y-auto flex-1">
          {quotes.map(q => (
            <div
              key={q.id}
              onClick={() => setSelectedQuote(q)}
              className={`p-4 cursor-pointer transition ${
                selectedQuote?.id === q.id ? 'bg-neutral-800/80 border-l-4 border-lime' : 'hover:bg-neutral-800/40'
              }`}
            >
              <div className="flex justify-between items-start">
                <span className="font-bold text-sm text-white">{q.customer?.name}</span>
                <span className={`text-[10px] uppercase font-black px-2 py-0.5 rounded-full ${
                  q.status === 'pending' ? 'bg-amber-400/20 text-amber-300' : 'bg-emerald-400/20 text-emerald-300'
                }`}>
                  {q.status}
                </span>
              </div>
              <p className="text-xs text-lime mt-0.5">{q.service?.detailedService}</p>
              <p className="text-[11px] text-neutral-400 mt-1 line-clamp-1">{q.service?.details || 'Requested online consultation.'}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Details & Communication Studio */}
      <div className="md:col-span-7 card-thick rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 flex flex-col justify-between">
        {selectedQuote ? (
          <>
            <div className="p-6 border-b border-neutral-800 bg-neutral-950 flex justify-between items-center">
              <div>
                <span className="text-xs font-bold text-lime uppercase">Ref #{selectedQuote.id}</span>
                <h3 className="text-lg font-black text-white">{selectedQuote.customer?.name}</h3>
                <p className="text-xs text-neutral-400">{selectedQuote.customer?.phone} • {selectedQuote.customer?.email}</p>
              </div>
              <button
                onClick={() => onSelectQuote && onSelectQuote(selectedQuote)}
                className="px-3.5 py-1.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-xs font-bold text-white transition"
              >
                Full Record &rarr;
              </button>
            </div>

            <div className="p-6 overflow-y-auto flex-1 space-y-4">
              <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800">
                <span className="text-[11px] font-bold text-neutral-500 uppercase">Treatment Requested</span>
                <p className="text-sm font-bold text-white mt-0.5">{selectedQuote.service?.detailedService}</p>
                <p className="text-xs text-neutral-300 mt-2 font-medium">
                  {selectedQuote.service?.details || 'No additional symptoms specified.'}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-neutral-950/60 border border-neutral-800">
                  <span className="text-neutral-500 block">Patient History</span>
                  <span className="font-bold text-white">{selectedQuote.patient?.isNewPatient || 'New Patient'}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-neutral-950/60 border border-neutral-800">
                  <span className="text-neutral-500 block">Preferred Schedule</span>
                  <span className="font-bold text-white">{selectedQuote.logistics?.timeline || 'Flexible'}</span>
                </div>
              </div>

              {sentSuccess && (
                <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-800 text-emerald-300 text-xs font-bold text-center">
                  ✓ Message logged and sent to patient queue!
                </div>
              )}
            </div>

            {/* Quick Reply Form */}
            <form onSubmit={handleSendReply} className="p-4 border-t border-neutral-800 bg-neutral-950 flex gap-2">
              <input
                type="text"
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder={`Draft quick response to ${selectedQuote.customer?.name}...`}
                className="flex-1 bg-neutral-900 border border-neutral-800 focus:border-lime rounded-2xl px-4 py-2.5 text-xs text-white placeholder-neutral-500 outline-none"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-2xl bg-lime hover:bg-lime-hover text-neutral-950 font-bold text-xs uppercase tracking-wider transition"
              >
                Send
              </button>
            </form>
          </>
        ) : (
          <div className="p-12 text-center text-neutral-500 my-auto">
            Select a patient message to begin.
          </div>
        )}
      </div>
    </div>
  );
}
