import React, { useState } from 'react';
import { authApi } from '../../services/api';
import { BUSINESS_INFO } from '../../data/businessData';

export default function AdminLogin({ onLoginSuccess, onBackToSite }) {
  const [password, setPassword] = useState('sparkle2025');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!password.trim()) {
      setError('Please enter your admin password.');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const result = await authApi.login(password);
      if (result.success) {
        onLoginSuccess(result.user);
      } else {
        setError(result.error || 'Invalid credentials.');
      }
    } catch (err) {
      setError(err.message || 'Login failed. Please check your password.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fbfbfb] dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100 flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden font-sans">
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-lime/15 rounded-full blur-3xl pointer-events-none" />

      {/* Back to Site Button */}
      <div className="w-full max-w-md mb-6 z-10">
        <button
          onClick={onBackToSite}
          className="inline-flex items-center space-x-2 text-xs font-bold text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition px-3 py-1.5 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-900 border border-neutral-200 dark:border-neutral-800"
        >
          <svg className="w-4 h-4 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back to Sparkle Dental</span>
        </button>
      </div>

      {/* Login Card */}
      <div className="w-full max-w-md card-thick p-8 sm:p-10 rounded-3xl relative z-10 shadow-2xl">
        {/* Brand Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-neutral-950 dark:bg-lime text-white dark:text-neutral-950 mb-4 shadow-md">
            <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C7.5 2 4 5 4 9c0 3.2 1.6 5.8 3 8.5C8.2 20 9.1 22 10.5 22c1.2 0 1.5-1.5 1.5-3 0-1.5.5-2 1.5-2s1.5.5 1.5 2c0 1.5.3 3 1.5 3 1.4 0 2.3-2 3.5-4.5 1.4-2.7 3-5.3 3-8.5 0-4-3.5-7-8-7z"/>
            </svg>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-neutral-950 dark:text-white uppercase">
            Sparkle Dental
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 mt-1 font-medium">
            Kutztown Clinic Management & Patient Portal
          </p>
          <div className="inline-flex items-center space-x-1.5 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 px-3 py-1 rounded-full mt-3 text-[11px] text-neutral-600 dark:text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-lime" />
            <span className="font-semibold">Secure Practitioner Suite</span>
          </div>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-6 p-4 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-xs font-semibold">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-2">
              Staff Passcode / Key
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password..."
                className="w-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 focus:border-neutral-950 dark:focus:border-lime rounded-2xl px-4 py-3 text-sm text-neutral-900 dark:text-white outline-none transition"
                autoFocus
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 text-xs font-semibold"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            <p className="text-[11px] text-neutral-500 mt-1.5 font-medium">
              Demo access code: <code className="bg-neutral-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded font-mono text-lime-dark dark:text-lime">sparkle2025</code>
            </p>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 rounded-full bg-neutral-950 hover:bg-black dark:bg-lime dark:hover:bg-lime-hover text-white dark:text-neutral-950 font-black text-sm uppercase tracking-wider shadow-thick active:scale-95 transition flex items-center justify-center space-x-2"
          >
            <span>{isLoading ? 'Authenticating...' : 'Enter Clinic Dashboard'}</span>
            <svg className="w-4 h-4 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </form>

        {/* Footer info */}
        <div className="mt-8 pt-6 border-t border-neutral-100 dark:border-neutral-800/80 text-center text-[11px] text-neutral-400">
          Sparkle Dental PA • 15295 Kutztown Rd • (610) 683-6955
        </div>
      </div>
    </div>
  );
}
