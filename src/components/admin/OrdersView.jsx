import React, { useState, useEffect } from 'react';
import { quotesApi } from '../../services/api';

export default function OrdersView({ onSelectQuote, onOpenNewOrder }) {
  const [quotes, setQuotes] = useState([]);
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadData();
    const interval = setInterval(loadData, 10000);
    return () => clearInterval(interval);
  }, [statusFilter, searchTerm]);

  const loadData = async () => {
    try {
      const res = await quotesApi.getQuotes({ status: statusFilter, search: searchTerm });
      setQuotes(res.quotes || []);
    } catch (err) {
      console.warn('OrdersView load err:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl font-black text-white">Patient Appointment Inquiries</h2>
          <p className="text-xs text-neutral-400">All submissions from online forms and phone inquiries.</p>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          {/* Status Filter Buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-neutral-900 border border-neutral-800 rounded-2xl">
            {['all', 'pending', 'confirmed', 'completed'].map(tab => (
              <button
                key={tab}
                onClick={() => setStatusFilter(tab)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold capitalize transition ${
                  statusFilter === tab
                    ? 'bg-lime text-neutral-950 font-black'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <button
            onClick={onOpenNewOrder}
            className="px-4 py-2 rounded-2xl bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xs whitespace-nowrap transition"
          >
            + New Record
          </button>
        </div>
      </div>

      {/* Search Input */}
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by patient name, phone number, procedure..."
          className="w-full bg-neutral-900 border border-neutral-800 focus:border-lime rounded-2xl pl-4 pr-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition"
        />
      </div>

      {/* Orders Table */}
      <div className="card-thick rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-neutral-300">
            <thead className="bg-neutral-950 text-xs font-black uppercase tracking-wider text-neutral-500 border-b border-neutral-800">
              <tr>
                <th className="py-4 px-6">Patient</th>
                <th className="py-4 px-6">Procedure</th>
                <th className="py-4 px-6">Insurance & Anxiety</th>
                <th className="py-4 px-6">Requested Time</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800/80">
              {quotes.map((q) => (
                <tr 
                  key={q.id}
                  onClick={() => onSelectQuote(q)}
                  className="hover:bg-neutral-800/60 cursor-pointer transition"
                >
                  <td className="py-4 px-6">
                    <p className="font-bold text-white">{q.customer?.name || 'Anonymous'}</p>
                    <p className="text-xs text-neutral-400">{q.customer?.phone} • {q.customer?.email}</p>
                  </td>
                  <td className="py-4 px-6">
                    <p className="font-bold text-white text-xs">{q.service?.detailedService}</p>
                    <p className="text-[11px] text-neutral-400">{q.service?.category}</p>
                  </td>
                  <td className="py-4 px-6">
                    <p className="text-xs text-neutral-200">{q.patient?.insuranceType || 'Self-Pay'}</p>
                    <p className="text-[11px] text-lime font-semibold">{q.patient?.anxietyLevel || 'Standard'}</p>
                  </td>
                  <td className="py-4 px-6 text-xs text-neutral-300">
                    {q.logistics?.timeline || 'Flexible'}
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-black uppercase tracking-wider ${
                      q.status === 'pending'
                        ? 'bg-amber-400/20 text-amber-300 border border-amber-400/40'
                        : q.status === 'confirmed'
                        ? 'bg-blue-400/20 text-blue-300 border border-blue-400/40'
                        : 'bg-emerald-400/20 text-emerald-300 border border-emerald-400/40'
                    }`}>
                      {q.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button
                      className="px-3.5 py-1.5 rounded-full bg-neutral-800 hover:bg-lime hover:text-neutral-950 text-xs font-bold transition"
                    >
                      Manage
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {quotes.length === 0 && (
          <div className="p-12 text-center text-neutral-500">
            No patient requests match the current filters.
          </div>
        )}
      </div>
    </div>
  );
}
