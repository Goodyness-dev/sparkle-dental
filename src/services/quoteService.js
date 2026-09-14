import { quotesApi } from './api';

export const INTEGRATION_CONFIG = {
  emailJs: {
    enabled: false,
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
  },
  telegram: {
    enabled: false,
    botToken: import.meta.env.VITE_TELEGRAM_BOT_TOKEN || '',
    chatId: import.meta.env.VITE_TELEGRAM_CHAT_ID || '',
  }
};

export const formatQuoteSummary = (data) => {
  return {
    submittedAt: new Date().toLocaleString(),
    id: `DENTAL-${Date.now().toString().slice(-6)}`,
    customer: {
      name: data.name,
      email: data.email,
      phone: data.phone || 'Not provided',
      preferredLocation: data.location || 'Kutztown, PA area',
    },
    patient: {
      isNewPatient: data.isNewPatient ? 'Yes, New Patient' : 'Existing Patient',
      anxietyLevel: data.anxietyLevel || 'Standard',
      insuranceType: data.insuranceType || 'Self-Pay / In-House',
    },
    service: {
      category: data.serviceCategory,
      detailedService: data.detailedService,
      details: data.details || 'None provided',
    },
    logistics: {
      timeline: data.timeline || 'Flexible',
      specificDate: data.specificDate || 'Any Monday/Wednesday/Saturday',
    }
  };
};

export const submitQuoteRequest = async (formData) => {
  const summary = formatQuoteSummary(formData);

  console.group('🦷 [SPARKLE DENTAL] APPOINTMENT REQUEST SUBMITTED');
  console.log('Payload:', summary);
  console.groupEnd();

  // Save to localStorage for instant local demo / retrieval
  try {
    const existing = JSON.parse(localStorage.getItem('sparkle_dental_quotes') || '[]');
    existing.unshift(summary);
    localStorage.setItem('sparkle_dental_quotes', JSON.stringify(existing));
  } catch (e) {
    console.warn('Could not save to localStorage:', e);
  }

  // Try saving to backend API if available
  try {
    await quotesApi.create(summary);
  } catch (err) {
    // API server might be offline during static build; continue safely
    console.info('Backend API offline, saved locally:', err.message);
  }

  return {
    success: true,
    quoteId: summary.id,
    summary,
  };
};
