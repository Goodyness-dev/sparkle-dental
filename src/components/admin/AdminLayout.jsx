import React, { useState, useEffect } from 'react';
import DashboardOverview from './DashboardOverview';
import OrdersView from './OrdersView';
import InboxView from './InboxView';
import AdminSettings from './AdminSettings';
import QuoteDetailModal from './QuoteDetailModal';
import NewOrderModal from './NewOrderModal';
import { authApi, quotesApi } from '../../services/api';
import { BUSINESS_INFO } from '../../data/businessData';

function getInitials(name) {
  if (!name) return 'SP';
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function AdminLayout({ user, onLogout, onBackToSite }) {
  const [activeTab, setActiveTab] = useState('dashboard'); // 'dashboard' | 'orders' | 'inbox' | 'settings'
  const [modalQuote, setModalQuote] = useState(null);
  const [isNewOrderOpen, setIsNewOrderOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [stats, setStats] = useState({ total: 0, pending: 0, quoted: 0, completed: 0 });

  useEffect(() => {
    quotesApi.getStats().then(setStats).catch(() => {});
  }, [activeTab]);

  const handleLogout = async () => {
    await authApi.logout();
    onLogout();
  };

  const navItems = [
    { id: 'dashboard', label: 'Clinical Dashboard', badge: null },
    { id: 'orders', label: 'Patient Requests', badge: stats.total > 0 ? stats.total : null },
    { id: 'inbox', label: 'Patient Inbox', badge: stats.pending > 0 ? stats.pending : null },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-100 font-sans flex antialiased">
      {/* Mobile Backdrop */}
      {isMobileSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-xs"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}

      {/* LEFT SIDEBAR */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-[#121212] border-r border-neutral-800 flex flex-col justify-between transition-transform duration-300 ease-in-out ${
        isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        <div className="p-6 space-y-8 flex-1 overflow-y-auto">
          {/* Logo Brand */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 min-w-0">
              <div className="w-10 h-10 shrink-0 rounded-2xl bg-lime text-neutral-950 flex items-center justify-center shadow-glow-lime">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C7.5 2 4 5 4 9c0 3.2 1.6 5.8 3 8.5C8.2 20 9.1 22 10.5 22c1.2 0 1.5-1.5 1.5-3 0-1.5.5-2 1.5-2s1.5.5 1.5 2c0 1.5.3 3 1.5 3 1.4 0 2.3-2 3.5-4.5 1.4-2.7 3-5.3 3-8.5 0-4-3.5-7-8-7z"/>
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <span className="font-heading font-black text-sm tracking-tight text-white block leading-tight truncate">
                  Sparkle Dental
                </span>
                <span className="text-[10px] text-lime font-bold uppercase tracking-wider block">
                  Kutztown Clinic Portal
                </span>
              </div>
            </div>
            <button 
              onClick={() => setIsMobileSidebarOpen(false)}
              className="lg:hidden p-1.5 rounded-lg text-neutral-400 hover:text-white shrink-0"
            >
              ✕
            </button>
          </div>

          {/* MENU Section */}
          <div className="space-y-2">
            <span className="text-[10px] font-black text-neutral-500 uppercase tracking-widest px-3 block">
              Management
            </span>
            <nav className="space-y-1">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setIsMobileSidebarOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3.5 py-3 rounded-2xl text-xs font-bold transition ${
                      isActive
                        ? 'bg-lime text-neutral-950 shadow-glow-lime font-black'
                        : 'text-neutral-400 hover:bg-neutral-800 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                        isActive ? 'bg-neutral-950 text-white' : 'bg-neutral-800 text-lime border border-neutral-700'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* GENERAL Section */}
          <div className="space-y-2">
            <span className="text-[10px] font-black text-neutral-500 uppercase tracking-widest px-3 block">
              System
            </span>
            <nav className="space-y-1">
              <button
                onClick={() => {
                  setActiveTab('settings');
                  setIsMobileSidebarOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-3.5 py-3 rounded-2xl text-xs font-bold transition ${
                  activeTab === 'settings'
                    ? 'bg-lime text-neutral-950 font-black'
                    : 'text-neutral-400 hover:bg-neutral-800 hover:text-white'
                }`}
              >
                <span>Clinic Settings & Alerts</span>
              </button>

              <button
                onClick={onBackToSite}
                className="w-full flex items-center justify-between px-3.5 py-3 rounded-2xl text-xs font-bold text-neutral-400 hover:bg-neutral-800 hover:text-white transition"
              >
                <span>Back to Customer Site &rarr;</span>
              </button>

              <button
                onClick={handleLogout}
                className="w-full flex items-center space-x-3 px-3.5 py-3 rounded-2xl text-xs font-bold text-red-400 hover:bg-red-950/40 transition"
              >
                <span>Log Out</span>
              </button>
            </nav>
          </div>
        </div>

        {/* Doctor Identity Card */}
        <div className="p-4 m-4 rounded-2xl bg-neutral-900 border border-neutral-800 text-white space-y-2">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-full bg-lime text-neutral-950 font-black flex items-center justify-center text-xs">
              {getInitials(user?.name)}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-bold truncate">{user?.name || 'Dr. Subha'}</p>
              <p className="text-[10px] text-neutral-400 truncate">{user?.role || 'Lead Dentist'}</p>
            </div>
          </div>
        </div>
      </aside>

      {/* ------------------------------------------------------------- */}
      {/* MAIN VIEW AREA                                                */}
      {/* ------------------------------------------------------------- */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="h-16 border-b border-neutral-800 bg-[#121212]/90 backdrop-blur-md px-4 sm:px-8 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsMobileSidebarOpen(true)}
              className="lg:hidden p-2 rounded-xl text-neutral-400 hover:bg-neutral-800"
            >
              ☰
            </button>
            <div>
              <h2 className="font-heading font-black text-base sm:text-lg text-white capitalize">
                {activeTab === 'dashboard' && 'Clinical Management & Chair Schedule'}
                {activeTab === 'orders' && 'Patient Inquiries & Treatment Pipeline'}
                {activeTab === 'inbox' && 'Patient Messages & Requests'}
                {activeTab === 'settings' && 'Clinic Configuration'}
              </h2>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsNewOrderOpen(true)}
              className="hidden sm:inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-lime hover:bg-lime-hover text-neutral-950 font-black text-xs uppercase tracking-wider shadow-glow-lime active:scale-95 transition"
            >
              <span>+ Record Walk-In</span>
            </button>
            <button
              onClick={onBackToSite}
              className="px-3.5 py-1.5 rounded-full border border-neutral-700 hover:border-neutral-500 text-neutral-300 hover:text-white text-xs font-semibold transition"
            >
              View Public Site
            </button>
          </div>
        </header>

        {/* Tab Content Canvas */}
        <main className="flex-1 p-4 sm:p-8 max-w-7xl w-full mx-auto overflow-y-auto">
          {activeTab === 'dashboard' && (
            <DashboardOverview 
              onNavigateTab={setActiveTab}
              onSelectQuote={setModalQuote}
              onOpenNewOrder={() => setIsNewOrderOpen(true)}
            />
          )}

          {activeTab === 'orders' && (
            <OrdersView 
              onSelectQuote={setModalQuote}
              onOpenNewOrder={() => setIsNewOrderOpen(true)}
            />
          )}

          {activeTab === 'inbox' && (
            <InboxView 
              onSelectQuote={setModalQuote}
            />
          )}

          {activeTab === 'settings' && (
            <AdminSettings />
          )}
        </main>
      </div>

      {/* Quote / Patient Detail Modal */}
      {modalQuote && (
        <QuoteDetailModal 
          quoteId={modalQuote.id || modalQuote}
          onClose={() => setModalQuote(null)}
          onStatusChange={() => {
            quotesApi.getStats().then(setStats).catch(() => {});
          }}
        />
      )}

      {/* New Order / Walk-in Modal */}
      {isNewOrderOpen && (
        <NewOrderModal
          isOpen={isNewOrderOpen}
          onClose={() => setIsNewOrderOpen(false)}
          onCreated={() => {
            quotesApi.getStats().then(setStats).catch(() => {});
          }}
        />
      )}
    </div>
  );
}
