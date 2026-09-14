export const BUSINESS_INFO = {
  name: "Sparkle Dental",
  legalName: "Sparkle Dental PA LLC",
  tagline: "Gentle, Personalized Dental Care for the Entire Family in Kutztown, PA",
  address: {
    street: "15295 Kutztown Rd",
    city: "Kutztown",
    state: "PA",
    zip: "19530",
    formatted: "15295 Kutztown Rd, Kutztown, PA 19530",
  },
  geo: {
    latitude: 40.5181,
    longitude: -75.7761
  },
  phone: "(610) 683-6955",
  website: "sparkledentalpa.com",
  email: "smile@sparkledentalpa.com",
  googleMapsLink: "https://www.google.com/maps/dir/?api=1&destination=Sparkle+Dental,+15295+Kutztown+Rd,+Kutztown,+PA+19530",
  googleMapsEmbedUrl: "https://maps.google.com/maps?q=15295%20Kutztown%20Rd%2C%20Kutztown%2C%20PA%2019530&t=&z=15&ie=UTF8&iwloc=&output=embed",
  
  hours: [
    { day: "Monday", open: "8:00 AM", close: "5:00 PM", note: "General & Restorative Appointments" },
    { day: "Tuesday", open: "Closed", close: "Closed", note: "Emergency Calls Monitored" },
    { day: "Wednesday", open: "8:00 AM", close: "5:00 PM", note: "Family & Pediatric Care" },
    { day: "Thursday", open: "Closed", close: "Closed", note: "Emergency Calls Monitored" },
    { day: "Friday", open: "Closed", close: "Closed", note: "Emergency Calls Monitored" },
    { day: "Saturday", open: "8:00 AM", close: "1:00 PM", note: "1st Saturday of the Month" },
    { day: "Sunday", open: "Closed", close: "Closed", note: "" },
  ],

  history: [
    {
      year: "1980s-2021",
      title: "Decades of Local Family Dental Heritage",
      description: "Originally founded as John P. Boyle Family Dentistry, serving Kutztown, Fleetwood, and surrounding Berks County communities with caring, neighborhood dentistry for decades."
    },
    {
      year: "2017",
      title: "Clinical Leadership at Lehigh Valley Health Network",
      description: "Dr. Subhashini Pamulapati (Dr. Subha) joined the Miles of Smiles Dental Clinic at LVHN, instructing and mentoring dental residents in advanced clinical procedures and patient-first care."
    },
    {
      year: "2022",
      title: "Sparkle Dental Transition",
      description: "Dr. Subha officially acquired the practice from Dr. Boyle, bringing modern digital dentistry, compassionate restorative techniques, and enhanced patient comfort to Kutztown."
    },
    {
      year: "Present",
      title: "A Modern Dental Sanctuary for Berks County",
      description: "Providing Kutztown families with anxiety-free dentistry, cutting-edge restorative care, pediatric dental visits, and flexible financing options under one roof."
    }
  ],

  owner: {
    name: "Dr. Subhashini Pamulapati, DDS",
    nickname: "Dr. Subha",
    role: "Lead Dentist & Practice Director",
    degrees: "DDS — NYU College of Dentistry & Rajiv Gandhi University of Health Sciences",
    quote: "Our mission is to make quality dental care comfortable, accessible, and anxiety-free. Whether it's your child's first check-up, a restorative crown, or emergency relief, our Kutztown team treats you like family with honesty, warmth, and gentle precision."
  },

  insurance: {
    accepted: "Most PPO Dental Plans & Select Medicare HMO Insurances",
    financing: "CareCredit & In-House Flexible Monthly Payment Plans",
    cards: ["Visa", "Mastercard", "Discover", "American Express", "CareCredit"]
  },

  promotions: [
    {
      title: "New Patient Comprehensive Exam & X-Rays",
      subtitle: "Full digital exam, gentle hygiene consultation & complete diagnostic imaging.",
      badge: "New Patient Special"
    },
    {
      title: "Emergency Dental Consultation",
      subtitle: "Same-day priority assessment for toothaches, chipped teeth, and sudden oral discomfort.",
      badge: "Urgent Relief"
    },
    {
      title: "Take-Home Bleaching Kit Special",
      subtitle: "Professional-grade take-home teeth whitening kit bundled with new patient registration.",
      badge: "Limited Time Offer"
    }
  ],

  reviews: [
    {
      author: "Sarah K.",
      location: "Kutztown, PA",
      source: "Verified Patient",
      rating: 5,
      date: "Recent Patient",
      comment: "Dr. Subha is the gentlest dentist I have ever had! I have had dental anxiety since childhood, but she explained every step calmly, made sure I didn't feel a thing during my crown prep, and her staff is so warm and welcoming."
    },
    {
      author: "David M.",
      location: "Fleetwood, PA",
      source: "Verified Patient",
      rating: 5,
      date: "Recent Patient",
      comment: "Transitioned from Dr. Boyle to Dr. Subha seamlessly. She takes her time, never rushes you out of the chair, and provides honest recommendations without pushing unnecessary procedures. Five stars all the way!"
    },
    {
      author: "Jennifer L.",
      location: "Topton, PA",
      source: "Verified Patient",
      rating: 5,
      date: "Recent Patient",
      comment: "Brought my 7-year-old in for a pediatric checkup and cleaning. Dr. Subha and her assistant were fantastic with him! He walked out smiling and proud of his clean teeth with zero tears. The office is spotlessly clean."
    },
    {
      author: "Robert T.",
      location: "Allentown, PA",
      source: "Verified Patient",
      rating: 5,
      date: "Recent Patient",
      comment: "Had severe tooth pain on a Monday morning and they accommodated me for an emergency exam quickly. Gentle root canal therapy solved the pain completely. Very grateful to have Dr. Subha in our community!"
    }
  ]
};

export const isOpenNow = () => {
  const now = new Date();
  const day = now.getDay(); // 0 = Sun, 1 = Mon, 2 = Tue, 3 = Wed, 4 = Thu, 5 = Fri, 6 = Sat
  const hour = now.getHours();
  
  // Monday & Wednesday 8am - 5pm
  if (day === 1 || day === 3) {
    return hour >= 8 && hour < 17;
  }
  // 1st Saturday of the month 8am - 1pm
  if (day === 6) {
    const date = now.getDate();
    if (date <= 7) {
      return hour >= 8 && hour < 13;
    }
    return false;
  }
  return false;
};
