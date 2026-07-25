export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // Will map to Lucide icons
  details: string[];
}

export interface TechTip {
  category: string;
  title: string;
  strategy: string;
  why: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
}

export interface QuizOption {
  text: string;
  isCorrect: boolean;
}

export interface QuizQuestion {
  id: number;
  type: "Email" | "Popup Alert" | "Phone Call";
  scenario: string;
  content: string;
  options: QuizOption[];
  explanation: string;
}

export interface HeroConfig {
  badge: string;
  headline: string;
  subHeadline: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BusinessConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  advocateName: string;
  contact: {
    phone: string;
    phoneFormatted: string;
    email: string;
    address: string;
    cityState: string;
    areaServed: string;
  };
  operatingHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
    note: string;
  };
  hero: HeroConfig;
  services: ServiceItem[];
  vhsService: {
    title: string;
    heading: string;
    description: string;
    whyDigitize: string;
    quote: string;
    hardwareBridge: {
      name: string;
      description: string;
      badge: string;
    };
    promise: {
      title: string;
      description: string;
    };
    pricing: {
      title: string;
      offer: string;
      price: string;
    };
    details: string[];
  };
  techTips: TechTip[];
  quizQuestions: QuizQuestion[];
  testimonials: Testimonial[];
  faq: FaqItem[];
  branding: {
    colors: {
      bgCream: string;
      primaryTeal: string;
      accentOrange: string;
      borderTeal: string;
      lightTan: string;
    };
  };
}

export const businessConfig: BusinessConfig = {
  name: "Little Stone Tech Company",
  shortName: "Little Stone Tech Co.",
  tagline: "Trusted Technology Support",
  description: "Get friendly, patient, and professional technology help right at your kitchen table. We travel directly to your home in St. Marys to resolve your tech issues with patience and clarity—guaranteed no confusing jargon.",
  advocateName: "Ryan Wilson",
  contact: {
    phone: "226-921-5949",
    phoneFormatted: "(226) 921-5949",
    email: "r.wilson@littlestonetech.ca",
    address: "St. Marys, ON",
    cityState: "St. Marys, ON",
    areaServed: "St. Marys and surrounding area",
  },
  operatingHours: {
    weekdays: "Monday - Friday: 9:00 AM - 5:00 PM",
    saturday: "Saturday: By Appointment",
    sunday: "Sunday: Closed",
    note: "In-home & mobile visits are scheduled at your convenience. Call or email to book."
  },
  hero: {
    badge: "Active Service • St. Marys Local Visit",
    headline: "Frustrated with your computer, printer, or Wi-Fi?",
    subHeadline: "Get patient, friendly tech help right at your kitchen table—serving St. Marys families from The Flats to historic downtown."
  },
  services: [
    {
      id: "network-hardening",
      title: "Wi-Fi Security & Scam Protection",
      description: "Secure your home Wi-Fi network so scammers and hackers can't get into your online banking or steal your personal information.",
      iconName: "ShieldCheck",
      details: [
        "Locking down your Wi-Fi router with strong, custom passwords",
        "Setting up automatic filters to block known scam and predatory tracking sites",
        "Securing guest connections for visitors and family members",
        "Strengthening your Wi-Fi signal to eliminate weak spots in the house"
      ]
    },
    {
      id: "digital-training",
      title: "In-Home Guidance Session",
      description: "One-on-one, stress-free lessons structured around your goals. Master online banking, manage photos, and safely identify fake email alerts with patient help.",
      iconName: "UserCheck",
      details: [
        "Patient, step-by-step guidance matching your learning speed",
        "Identifying email scams, phishing attempts, and fake popup alerts",
        "How to use online banking, pay bills, and access government portals securely",
        "Organizing and backing up precious family photos"
      ]
    },
    {
      id: "device-setup",
      title: "Reliable Device & Printer Setup",
      description: "Ensure your tablets, smartphones, and laptops talk perfectly to your printer and home entertainment systems every single time.",
      iconName: "Printer",
      details: [
        "Wireless printer configuration and testing on all devices",
        "Smart TV, streaming device (Apple TV, Chromecast, Firestick), and soundbar setups",
        "Transferring data and accounts to new tablets, phones, or laptops",
        "Configuring automated, worry-free local or cloud backup systems"
      ]
    },
    {
      id: "performance-cleanups",
      title: "Performance Cleanups & Tune-Ups",
      description: "Remove frustrating pop-ups, clear hidden tracking files, and speed up slow or aging computers completely safely.",
      iconName: "Cpu",
      details: [
        "Removing files that slow down your computer, clearing internet tracking, and blocking spyware",
        "Optimizing startup programs to make your computer boot faster",
        "Installing reliable, lightweight ad-blockers and security tools",
        "Hardware checkups to see if a simple memory or disk upgrade can save you from buying a new PC"
      ]
    }
  ],
  vhsService: {
    title: "VHS Digitization & Conversion",
    heading: "Your Old Tapes Are Rotting. Let's save the good parts.",
    description: "Preserve your precious home videos—like family summers swimming at the St. Marys Quarry, winter skates on the Thames River, or Queen Street parades—before they fade forever. We digitize standard VHS tapes into modern, high-quality files you can play on your TV or phone.",
    whyDigitize: "As VHS tapes age, their magnetic tape becomes brittle and literally flakes apart. Once that footage turns to static, those moments are gone.",
    quote: "Physics doesn't wait for 'someday.' Rescue it before the tape gives up.",
    hardwareBridge: {
      name: "Professional Tape Stabilization",
      description: "We use professional equipment that stabilizes shaky old tapes so they look clear and clean on your modern flat-screen TV.",
      badge: "Clean Quality"
    },
    promise: {
      title: "The \"No Hostage\" Promise",
      description: "No subscriptions. Files on a drive you own. Free pick-up right here in St. Marys."
    },
    pricing: {
      title: "Simple Flat-Rate",
      offer: "Per Tape Digitization",
      price: "$15.99 / tape"
    },
    details: [
      "Direct MP4 download or USB flash drive delivery",
      "Glitch stabilization for smooth and clean playback",
      "Free contact-free pick-up and delivery in St. Marys",
      "Pay upon hand-delivery of your digitized videos"
    ]
  },
  techTips: [
    {
      category: "PHYSICAL DEFENCE",
      title: "Keep a paper \"Digital Logbook\" for your passwords.",
      strategy: "Take ownership of your security.",
      why: "Paper cannot be hacked from overseas."
    },
    {
      category: "DOUBLE SECURITY",
      title: "Use security codes on your phone to lock your accounts.",
      strategy: "Strategic habit.",
      why: "This acts as a deadbolt to keep intruders out."
    },
    {
      category: "SUNDAY REFRESH",
      title: "Turn your devices completely off for 10 seconds every Sunday.",
      strategy: "Optimise your tools.",
      why: "This clears errors and keeps your device fast."
    },
    {
      category: "NETWORK CARE",
      title: "Unplug your internet router for 30 seconds on the 1st of the month.",
      strategy: "Stay connected.",
      why: "This ensures the best speed for video calls with family."
    },
    {
      category: "DIGITAL SHIELD",
      title: "If you feel rushed or panicked, wait 60 seconds.",
      strategy: "Silence is strength.",
      why: "Verify the source before you ever take action."
    },
    {
      category: "VISUAL MASTERY",
      title: "Adjust your screen settings for maximum text size and contrast.",
      strategy: "Make technology adapt to you.",
      why: "Strategic visibility prevents mistakes."
    },
    {
      category: "LOCAL BACKUP",
      title: "Identify a trusted expert to call for complex technical issues.",
      strategy: "The ultimate defence.",
      why: "Knowing when to call in backup ensures peace of mind."
    }
  ],
  quizQuestions: [
    {
      id: 1,
      type: "Popup Alert",
      scenario: "You are reading news online when a red flashing window pops up on your screen.",
      content: "🚨 WARNING! YOUR PC IS INFECTED WITH 19 VIRUSES! Microsoft has locked your computer. Call Microsoft Support immediately at 1-800-999-XXXX to secure your files.",
      options: [
        { text: "Scam - Close the browser tab immediately.", isCorrect: true },
        { text: "Safe - Call the support number to clean the viruses.", isCorrect: false }
      ],
      explanation: "Microsoft, Apple, and your internet provider will NEVER show flashing popup phone numbers asking you to call them. This is a support scam trying to charge you hundreds of dollars."
    },
    {
      id: 2,
      type: "Email",
      scenario: "You receive an urgent email from 'Netflix Support' with an unofficial email address.",
      content: "Dear Customer, your credit card on file has failed and your Netflix account will be suspended in 24 hours. Click here to confirm your card details: http://netflix-payment-security.com/signin",
      options: [
        { text: "Safe - Click the link to update your card.", isCorrect: false },
        { text: "Scam - Delete the email and check Netflix directly.", isCorrect: true }
      ],
      explanation: "This is a 'phishing' email. Scammers use fake links that look close to Netflix but are designed to steal your passwords and credit cards. Always check the official website or app directly."
    },
    {
      id: 3,
      type: "Phone Call",
      scenario: "You receive a phone call from someone claiming to be from the Canada Revenue Agency (CRA).",
      content: "Hello, this is officer Watson from the CRA. We found errors in your tax return and you owe $2,500. If you do not pay immediately via iTunes gift cards or Bitcoin, local police will issue an arrest warrant.",
      options: [
        { text: "Scam - Hang up immediately.", isCorrect: true },
        { text: "Safe - Follow the directions to avoid arrest.", isCorrect: false }
      ],
      explanation: "Government agencies will never threaten you with immediate arrest, send police over the phone, or ask for payment in iTunes gift cards, retail vouchers, or cryptocurrency."
    }
  ],
  testimonials: [
    {
      quote: "How thankful I am for Little Stone Tech Company and how lucky we are to have them in St. Marys. When my IPad recently died I contacted them for help. They resurrected a laptop that had given up the ghost thanks to Microsoft again out, but saved it from the landfill. ​They replaced Windows with a lightweight system called Linux Mint. They tell me it’s like putting a fresh, efficient engine into a car—it runs faster and smoother. ​Essentially, they saved me from having to buy a brand-new $800 computer! Thank you Ashley and Ryan of Little Stone Tech.",
      author: "Gwen A.",
      location: "St. Marys Resident"
    },
    {
      quote: "We recently found an old VHS tape of our daughter’s wedding, 1994. It was  frail and needed to be preserved so we could share it with family and friends. Seeing people who are no longer with us was so very special, as were the festivities of course! Ryan from Little Stone Tech Co. took it, put one copy on a flash drive, second on a DVD. He picked up from our home and delivered them back. Excellent service and very good price! Please check out your treasures then contact Ryan. Then… have a party to watch them, that’s our plan😊😊",
      author: "Margaret H.",
      location: "St. Marys Resident"
    },
    {
      quote: "I want to say a big thank you to Ryan and Ashley. They developed my new website for Edgewood Kennels. They were so helpful and kind. They knew exactly what needed to be done and were very helpful. I am so happy with my website. They are very good at what they do. I would highly recommend Little Stone Tech to anybody that needs a website made for personal or a business. Thank you again Ryan and Ashley. Sincerely, Edgewood Kennels.",
      author: "Kelly - Edgewood Kennels",
      location: "St. Marys Resident"
    }
  ],
  faq: [
    {
      question: "Do you charge extra to travel to my home in St. Marys?",
      answer: "No, travel is completely free within St. Marys. The price we agree on for your session covers everything—there are no hidden travel fees."
    },
    {
      question: "How do you handle passwords? Will you write them down?",
      answer: "We believe in security first. We will never keep a copy of your passwords ourselves. Instead, we help you write them down in a physical, paper 'Digital Logbook' that stays safely inside your home. Since paper can't be hacked from overseas, this is the most secure way for you to manage them."
    },
    {
      question: "Can you help set up tablets, Apple TVs, or smart home gadgets?",
      answer: "Yes! We can configure any device that connects to your home network, including iPads, Android tablets, smart TVs, Apple TVs, Chromecast, soundbars, smart doorbells, and wireless printers."
    },
    {
      question: "Is my personal data safe during a cleanup or backup?",
      answer: "Absolutely. We perform cleanups and tune-ups right in front of you at your kitchen table. We do not copy, open, or transfer your personal files, photos, or documents unless we are helping you back them up to a drive you physically own."
    }
  ],
  branding: {
    colors: {
      bgCream: "#F9F8F3", // Warm cream/sand
      primaryTeal: "#123C44", // Slate Teal
      accentOrange: "#D97736", // Terracotta orange
      borderTeal: "#2C5E67", // Light slate teal border
      lightTan: "#EAD7C3" // Light tan border/accent
    }
  }
};
