import React, { useState, useEffect } from 'react';
import { quotesApi } from '../../services/api';

export default function DashboardOverview({ onNavigateTab, onSelectQuote, onOpenNewOrder }) {
  const [quotes, setQuotes] = useState([]);
  const [stats, setStats] = useState({ total: 0, pending: 0, quoted: 0, completed: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadData();
    const interval = setInterval(loadData, 10000);
    return () => clearInterval(interval);
  }, []);

  const loadData = async () => {
    try {
      const [quotesRes, statsRes] = await Promise.all([
        quotesApi.getQuotes({ limit: 10 }),
        quotesApi.getStats()
      ]);
      setQuotes(quotesRes.quotes || []);
      setStats(statsRes || { total: 0, pending: 0, quoted: 0, completed: 0 });
    } catch (err) {
      console.warn('Dashboard load note:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Top Welcome Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-3xl bg-neutral-900 border border-neutral-800">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-lime">Welcome Dr. Subha</span>
          <h1 className="text-2xl font-black text-white mt-1">Kutztown Dental Practice Status</h1>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1">Office Hours: Mon & Wed 8am-5pm • 1st Saturday 8am-1pm</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-bold text-emerald-400">Clinical Scheduling Active</span>
        </div>
      </div>

      {/* KPI Cards (Thick & Alive) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="card-thick p-6 rounded-3xl bg-neutral-900 border border-neutral-800">
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">Total Patient Inquiries</span>
          <p className="text-3xl sm:text-4xl font-black text-white mt-2">{stats.total}</p>
          <span className="text-[11px] text-neutral-400 mt-1 block">All-time clinic requests</span>
        </div>

        <div className="card-thick p-6 rounded-3xl bg-neutral-900 border border-neutral-800">
          <span className="text-xs font-bold uppercase tracking-wider text-lime">Pending Confirmations</span>
          <p className="text-3xl sm:text-4xl font-black text-lime mt-2">{stats.pending}</p>
          <span className="text-[11px] text-neutral-400 mt-1 block">Awaiting staff callback</span>
        </div>

        <div className="card-thick p-6 rounded-3xl bg-neutral-900 border border-neutral-800">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Confirmed Chair Time</span>
          <p className="text-3xl sm:text-4xl font-black text-blue-400 mt-2">{stats.quoted}</p>
          <span className="text-[11px] text-neutral-400 mt-1 block">Scheduled on calendar</span>
        </div>

        <div className="card-thick p-6 rounded-3xl bg-neutral-900 border border-neutral-800">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Completed Procedures</span>
          <p className="text-3xl sm:text-4xl font-black text-emerald-400 mt-2">{stats.completed}</p>
          <span className="text-[11px] text-neutral-400 mt-1 block">Treated & satisfied</span>
        </div>
      </div>

      {/* Recent Patient Requests Table */}
      <div className="card-thick rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800">
        <div className="p-6 border-b border-neutral-800 flex items-center justify-between">
          <div>
            <h3 className="text-base sm:text-lg font-black text-white">Recent Patient Requests</h3>
            <p className="text-xs text-neutral-400">Click any patient inquiry to review clinical notes or update confirmation status.</p>
          </div>
          <button
            onClick={() => onNavigateTab('orders')}
            className="text-xs font-bold text-lime hover:underline"
          >
            View All ({stats.total}) &rarr;
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-neutral-300">
            <thead className="bg-neutral-950 text-xs font-black uppercase tracking-wider text-neutral-500 border-b border-neutral-800">
              <tr>
                <th className="py-3.5 px-6">Patient</th>
                <th className="py-3.5 px-6">Procedure / Care</th>
                <th className="py-3.5 px-6">Insurance / Anxiety</th>
                <th className="py-3.5 px-6">Timeline</th>
                <th className="py-3.5 px-6">Status</th>
                <th className="py-3.5 px-6 text-right">Action</th>
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
                    <p className="text-xs text-neutral-400">{q.customer?.phone} • {q.customer?.preferredLocation}</p>
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
                      className="px-3 py-1 rounded-full bg-neutral-800 hover:bg-lime hover:text-neutral-950 text-xs font-bold transition"
                    >
                      Review
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
