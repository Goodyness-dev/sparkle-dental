const TOKEN_STORAGE_KEY = 'sparkle_admin_token';
const QUOTES_STORAGE_KEY = 'sparkle_dental_quotes';

export function getStoredToken() {
  try {
    return localStorage.getItem(TOKEN_STORAGE_KEY);
  } catch {
    return null;
  }
}

export function setStoredToken(token) {
  try {
    if (token) {
      localStorage.setItem(TOKEN_STORAGE_KEY, token);
    } else {
      localStorage.removeItem(TOKEN_STORAGE_KEY);
    }
  } catch (e) {
    console.warn('Storage warning:', e);
  }
}

// Initial mock appointments for instant demo availability
const INITIAL_APPOINTMENTS = [
  {
    id: "DENTAL-839201",
    submittedAt: "Today at 9:15 AM",
    status: "pending",
    customer: {
      name: "Sarah Miller",
      email: "sarah.m@gmail.com",
      phone: "(610) 451-2290",
      preferredLocation: "Kutztown, PA"
    },
    patient: {
      isNewPatient: "Yes, New Patient",
      anxietyLevel: "Mild - appreciate gentle touch",
      insuranceType: "PPO Dental Insurance (Delta Dental)"
    },
    service: {
      category: "General & Preventive",
      detailedService: "New Patient Exam & Cleanings",
      details: "Has not seen a dentist in 2 years. Looking for a gentle checkup and ultrasonic cleaning."
    },
    logistics: {
      timeline: "Next Monday (8:00 AM – 5:00 PM)",
      specificDate: "Morning (9:30 AM preferred)"
    }
  },
  {
    id: "DENTAL-749102",
    submittedAt: "Yesterday at 2:30 PM",
    status: "confirmed",
    customer: {
      name: "David Zimmerman",
      email: "dzimmerman@ptd.net",
      phone: "(610) 683-1144",
      preferredLocation: "Fleetwood, PA"
    },
    patient: {
      isNewPatient: "Existing Patient (Dr. Boyle)",
      anxietyLevel: "None - completely comfortable",
      insuranceType: "CareCredit Financing"
    },
    service: {
      category: "Restorative",
      detailedService: "Custom Porcelain Crowns & Bridges",
      details: "Cracked back molar (#19). Needs crown prep and restoration before holiday."
    },
    logistics: {
      timeline: "Next Wednesday (8:00 AM – 5:00 PM)",
      specificDate: "Afternoon (2:00 PM)"
    }
  },
  {
    id: "DENTAL-610394",
    submittedAt: "Yesterday at 11:00 AM",
    status: "pending",
    customer: {
      name: "Jennifer Albright",
      email: "jalbright@kutztown.edu",
      phone: "(484) 529-8831",
      preferredLocation: "Kutztown, PA"
    },
    patient: {
      isNewPatient: "Yes, New Patient",
      anxietyLevel: "High - significant dental anxiety",
      insuranceType: "Medicare HMO Plan"
    },
    service: {
      category: "Pediatric & Emergency",
      detailedService: "Urgent Same-Day Emergency",
      details: "Severe throbbing pain in lower jaw since Sunday night. Appreciates gentle local anesthesia."
    },
    logistics: {
      timeline: "Urgent / Same-Day Relief",
      specificDate: "First available chair time"
    }
  },
  {
    id: "DENTAL-592817",
    submittedAt: "Sep 12, 2026",
    status: "completed",
    customer: {
      name: "Mark Snyder",
      email: "msnyder_farm@outlook.com",
      phone: "(610) 756-3209",
      preferredLocation: "Topton, PA"
    },
    patient: {
      isNewPatient: "Yes, New Patient",
      anxietyLevel: "Mild - appreciate gentle touch",
      insuranceType: "PPO Dental Insurance (MetLife)"
    },
    service: {
      category: "Pediatric & Emergency",
      detailedService: "Kids & Pediatric Dentistry",
      details: "7-year-old son Lucas for pediatric examination, fluoride treatment, and cleaning."
    },
    logistics: {
      timeline: "1st Saturday of Month (8am - 1pm)",
      specificDate: "Completed successfully"
    }
  }
];

function getLocalAppointments() {
  try {
    const raw = localStorage.getItem(QUOTES_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(QUOTES_STORAGE_KEY, JSON.stringify(INITIAL_APPOINTMENTS));
      return INITIAL_APPOINTMENTS;
    }
    return JSON.parse(raw);
  } catch {
    return INITIAL_APPOINTMENTS;
  }
}

function saveLocalAppointments(list) {
  try {
    localStorage.setItem(QUOTES_STORAGE_KEY, JSON.stringify(list));
  } catch (e) {
    console.warn('Could not save appointments:', e);
  }
}

// ------------------------------------------------------------------
// Auth APIs
// ------------------------------------------------------------------
export const authApi = {
  async login(password) {
    // Check against configured password or allow default demo access
    const valid = password.trim() === 'sparkle2025' || password.trim() === 'admin' || password.trim().length > 0;
    if (valid) {
      const user = {
        id: 'dr-subha',
        name: 'Dr. Subhashini Pamulapati, DDS',
        email: 'smile@sparkledentalpa.com',
        role: 'Practice Director / Lead Dentist'
      };
      const token = 'sparkle_session_' + Date.now();
      setStoredToken(token);
      return { success: true, token, user };
    }
    throw new Error('Invalid credentials.');
  },

  async verify() {
    const token = getStoredToken();
    if (!token) return { authenticated: false };
    return {
      authenticated: true,
      user: {
        id: 'dr-subha',
        name: 'Dr. Subhashini Pamulapati, DDS',
        email: 'smile@sparkledentalpa.com',
        role: 'Practice Director / Lead Dentist'
      }
    };
  },

  async logout() {
    setStoredToken(null);
    return { success: true };
  },

  async changePassword(oldPassword, newPassword) {
    return { success: true };
  }
};

// ------------------------------------------------------------------
// Quotes / Appointments APIs
// ------------------------------------------------------------------
export const quotesApi = {
  async getStats() {
    const list = getLocalAppointments();
    return {
      total: list.length,
      pending: list.filter(q => q.status === 'pending').length,
      quoted: list.filter(q => q.status === 'confirmed').length,
      completed: list.filter(q => q.status === 'completed').length,
    };
  },

  async getQuotes({ status = 'all', search = '', limit = 100, offset = 0 } = {}) {
    let list = getLocalAppointments();
    if (status && status !== 'all') {
      list = list.filter(q => q.status === status);
    }
    if (search) {
      const s = search.toLowerCase();
      list = list.filter(q => 
        (q.customer?.name || '').toLowerCase().includes(s) ||
        (q.customer?.phone || '').includes(s) ||
        (q.service?.detailedService || '').toLowerCase().includes(s) ||
        (q.id || '').toLowerCase().includes(s)
      );
    }
    return {
      quotes: list.slice(offset, offset + limit),
      total: list.length
    };
  },

  async getQuote(id) {
    const list = getLocalAppointments();
    return list.find(q => q.id === id) || null;
  },

  async create(appointment) {
    const list = getLocalAppointments();
    list.unshift(appointment);
    saveLocalAppointments(list);
    return appointment;
  },

  async updateStatus(id, status) {
    const list = getLocalAppointments();
    const item = list.find(q => q.id === id);
    if (item) {
      item.status = status;
      saveLocalAppointments(list);
      return item;
    }
    throw new Error('Appointment not found');
  },

  async deleteQuote(id) {
    let list = getLocalAppointments();
    list = list.filter(q => q.id !== id);
    saveLocalAppointments(list);
    return { success: true };
  },

  async getInbox({ status = 'all', search = '' } = {}) {
    return this.getQuotes({ status, search });
  },

  async getMessages(quoteId) {
    return [];
  },

  async sendMessage(quoteId, { message, quotePrice = null }) {
    return { success: true };
  }
};

export const settingsApi = {
  async getSettings() {
    return {
      practiceName: "Sparkle Dental",
      phone: "(610) 683-6955",
      email: "smile@sparkledentalpa.com",
      address: "15295 Kutztown Rd, Kutztown, PA 19530"
    };
  },
  async saveSettings(settings) {
    return { success: true };
  }
};
