"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  UserCheck,
  Cpu,
  HelpCircle,
  Check,
  ArrowRight,
  ChevronDown,
  Clock,
  ThumbsUp,
  ClipboardList,
  Sparkles,
  Phone,
  Plus,
  Minus,
  Briefcase,
  Server,
  Mail,
  Film
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { businessConfig } from "@/config/business";
import Link from "next/link";

// Static mapping to avoid tree-shaking rendering bugs in production bundles
const ServiceIcon = ({ name, className }: { name: string; className?: string }) => {
  switch (name) {
    case "ShieldCheck":
      return <ShieldCheck className={className} />;
    case "UserCheck":
      return <UserCheck className={className} />;
    case "Cpu":
      return <Cpu className={className} />;
    case "Film":
      return <Film className={className} />;
    case "Briefcase":
      return <Briefcase className={className} />;
    case "Server":
      return <Server className={className} />;
    default:
      return <HelpCircle className={className} />;
  }
};

interface ServiceCardData {
  id: string;
  title: string;
  badge: string;
  tagline: string;
  description: string;
  iconName: string;
  details: string[];
  duration: string;
  prep: string;
  bestFor: string;
}

const homeServices: ServiceCardData[] = [
  {
    id: "device-restoration",
    title: "Device Restoration & Hardware Overhauls",
    badge: "Hardware Care",
    tagline: "Give aging devices a second life and save money on replacements.",
    description: "Don't discard your slow, noisy, or unresponsive laptops. We perform hardware upgrades, deep system refreshes, thermal tune-ups, and lightweight Linux conversions to make old PCs run like new.",
    iconName: "Cpu",
    details: [
      "Replacing sluggish mechanical hard drives with lightning-fast modern SSDs",
      "Memory (RAM) upgrades to stop systems from freezing during multi-tasking",
      "Thermal paste replacement and internal cleaning to prevent system overheating",
      "Salvaging files and restoring dead operating systems back to working condition",
      "Installing lightweight systems like Linux Mint for a fast, simple, and virus-resistant experience"
    ],
    duration: "1.5 - 3 Hours",
    prep: "Bring the device's charging cable and any accessory cables.",
    bestFor: "Sluggish laptops, computers that take minutes to start, or older machines you want to rescue from the landfill."
  },
  {
    id: "onsite-support",
    title: "On-Site Technical Support & Guidance",
    badge: "In-Home Help",
    tagline: "Patient, expert assistance directly at your kitchen table.",
    description: "Technology should adapt to you, not the other way around. We come to your home to configure your network, set up new gadgets, and walk you through daily tasks step-by-step—with absolute patience and no jargon.",
    iconName: "UserCheck",
    details: [
      "Configuring wireless printers and ensuring they connect reliably on all devices",
      "Smart TV, streaming box (Apple TV, Chromecast, Firestick), and soundbar setups",
      "Hands-on lessons for secure online banking, government portals, and photo management",
      "Installing ad-blockers and configuring scam protection filters on your browser",
      "Personal tech advocacy to help you spot fraudulent phone calls and scam email alerts"
    ],
    duration: "1 - 2 Hours",
    prep: "Write down 2 or 3 tasks or questions you would like to go through together.",
    bestFor: "Seniors, retirees, and families wanting a friendly, patient expert to resolve technology frustrations."
  },
  {
    id: "media-preservation",
    title: "Media Preservation & VHS Restoration",
    badge: "Memories Archiving",
    tagline: "Save your precious family videos before magnetic tape decays.",
    description: "VHS tapes are physically deteriorating every year. We stabilize and digitize your home movies into modern high-quality formats you can play on your smartphone, tablet, or flat-screen TV.",
    iconName: "Film",
    details: [
      "High-definition digitization of VHS, VHS-C, and legacy media formats",
      "Professional time-base correction (TBC) to stabilize shaky tapes and fix tracking noise",
      "Conversion into lightweight, high-compatibility MP4 files",
      "Free contactless tape pickup and delivery directly to your home in St. Marys",
      "The 'No Hostage' Promise: Files delivered on physical drives you own (or secure download)"
    ],
    duration: "3 - 5 Business Days",
    prep: "Dust off your tapes and label them with names or dates if known.",
    bestFor: "Anyone with boxes of wedding videos, family holidays, or local St. Marys memories gathering dust."
  }
];

const businessServices: ServiceCardData[] = [
  {
    id: "micro-care",
    title: "Micro Care (B2B Tech Support)",
    badge: "Small Business IT",
    tagline: "Responsive support built for local shops, farms, and independent offices.",
    description: "Avoid expensive corporate IT contracts. We provide on-call tech troubleshooting, point-of-sale configuration, office networking, and equipment maintenance tailored to your local business scale.",
    iconName: "Briefcase",
    details: [
      "Point-of-Sale (POS) system setup, card terminal connection, and receipt printer help",
      "Guest Wi-Fi separation to secure your main business network from visitor devices",
      "Office hardware audit, procurement advice, and employee workstation deployment",
      "Reliable network printer and shared storage configurations",
      "On-call troubleshooting for network dropouts and printer jams"
    ],
    duration: "1 - 3 Hours or Retainer options",
    prep: "Jot down your active business tools, internet providers, and major tech bottlenecks.",
    bestFor: "Local cafes, downtown boutiques, family farms, and St. Marys professional offices."
  },
  {
    id: "managed-it",
    title: "Proactive IT Hardening & Backups",
    badge: "Data Protection",
    tagline: "Protect your customer records and secure critical business files.",
    description: "Security is a continuous habit, not a one-off tool. We set up proactive workstation monitoring, system patching, network security hardening, and redundant local/cloud backups so you never lose crucial files.",
    iconName: "ShieldCheck",
    details: [
      "Setting up automated, secure patch updates for operating systems and key business apps",
      "Installing lightweight, professional security tools to block tracking, ads, and malware",
      "Automated hybrid backup systems: local backups for speed, plus encrypted cloud backups for safety",
      "Workstation resource monitoring to catch disk failures or network issues before they stop your work",
      "Regular backup integrity testing to ensure files can actually be recovered in an emergency"
    ],
    duration: "Ongoing management & monthly checkups",
    prep: "Locate any active business software license credentials and server details.",
    bestFor: "Offices handling client data, accounting, inventory records, or proprietary files."
  },
  {
    id: "specialty-consulting",
    title: "Specialty Consulting & Local Data Sovereignty",
    badge: "Advanced Solutions",
    tagline: "Long-range networking, farm tech, and custom local-first data storage.",
    description: "When standard cloud solutions don't fit, we design custom systems that keep your data local (sovereignty), extend Wi-Fi across large physical properties, and deploy technology built to survive industrial environments.",
    iconName: "Server",
    details: [
      "Designing local-first, subscription-free data storage systems (NAS) for full file ownership",
      "Deploying rugged networks and Wi-Fi extenders for barns, garages, and large workshops",
      "Consulting on digital sovereignty, offline systems, and reducing dependency on cloud subscriptions",
      "Migrating legacy database systems and preserving historic business software data",
      "Custom sensor integration, automation designs, and industrial hardware sourcing"
    ],
    duration: "Project-based consulting",
    prep: "Schedule an initial discovery consultation to review physical layout and specs.",
    bestFor: "Farms needing long-range Wi-Fi, industrial workshops, and owners seeking complete data privacy."
  }
];

export default function Services() {
  const [activeTab, setActiveTab] = useState<"home" | "business">("home");
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  // VHS Calculator State (Integrated into the Media Preservation Featured Bento Card)
  const [tapeCount, setTapeCount] = useState(5);
  const [addonOption, setAddonOption] = useState<"download" | "usb" | "dvd">("download");

  const tapePrice = 15.99;
  const addonPrices = {
    download: 0,
    usb: 10.0,
    dvd: 5.0,
  };
  const totalPrice = tapeCount * tapePrice + addonPrices[addonOption];

  const handleIncrement = () => setTapeCount((c) => Math.min(c + 1, 99));
  const handleDecrement = () => setTapeCount((c) => Math.max(c - 1, 1));

  const toggleAccordion = (id: string) => {
    setExpandedCard((prev) => (prev === id ? null : id));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="services" className="py-20 bg-brand-cream relative overflow-hidden">
      {/* Subtle Dot Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(var(--color-brand-teal-light)_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04] pointer-events-none" />

      {/* Warm Ambient Glowing Orbs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-brand-tan/20 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Dynamic Section Header */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.4 }}
          >
            {activeTab === "home" ? (
              <SectionHeader
                tag="Home Tech & Media"
                title="Patience-First Support for Your Kitchen Table"
                description="Friendly, jargon-free technology assistance, custom computer restorations, and legacy media preservation delivered directly to your home in St. Marys."
                headingLevel="h1"
              />
            ) : (
              <SectionHeader
                tag="Business & Industrial IT"
                title="Local-First Infrastructure & Micro IT Support"
                description="Reliable network setups, proactive cyber protection, and specialty consultation for small businesses, retail storefronts, workshops, and family farms."
                headingLevel="h1"
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Premium Tab Bar Selector */}
        <div className="flex justify-center mb-16 print-hide">
          <div
            className="flex p-1.5 bg-brand-sand/70 backdrop-blur-md rounded-full border border-brand-teal-light/10 shadow-premium-sm"
            role="tablist"
            aria-label="Services tracks"
          >
            <button
              onClick={() => {
                setActiveTab("home");
                setExpandedCard(null);
              }}
              className={`relative px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-bold transition-all duration-300 min-h-[48px] cursor-pointer outline-none ${
                activeTab === "home"
                  ? "text-white"
                  : "text-brand-teal-light hover:text-brand-teal"
              }`}
              role="tab"
              aria-selected={activeTab === "home"}
              aria-controls="home-panel"
              id="home-tab"
            >
              {activeTab === "home" && (
                <motion.div
                  layoutId="active-tab-bg-v2"
                  className="absolute inset-0 bg-brand-teal rounded-full -z-10 shadow-md"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="flex items-center gap-2">
                <UserCheck className="w-5 h-5 shrink-0" />
                Home & Media Support
              </span>
            </button>

            <button
              onClick={() => {
                setActiveTab("business");
                setExpandedCard(null);
              }}
              className={`relative px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-bold transition-all duration-300 min-h-[48px] cursor-pointer outline-none ${
                activeTab === "business"
                  ? "text-white"
                  : "text-brand-teal-light hover:text-brand-teal"
              }`}
              role="tab"
              aria-selected={activeTab === "business"}
              aria-controls="business-panel"
              id="business-tab"
            >
              {activeTab === "business" && (
                <motion.div
                  layoutId="active-tab-bg-v2"
                  className="absolute inset-0 bg-brand-teal rounded-full -z-10 shadow-md"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 shrink-0" />
                Business & Industrial IT
              </span>
            </button>
          </div>
        </div>

        {/* Tab Panels */}
        <div className="focus:outline-none">
          <AnimatePresence mode="wait">
            {activeTab === "home" ? (
              <motion.div
                key="home-panel"
                id="home-panel"
                role="tabpanel"
                aria-labelledby="home-tab"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10"
              >
                {/* Home Services */}
                {homeServices.map((service) => {
                  const isExpanded = expandedCard === service.id;
                  const isVhs = service.id === "media-preservation";
                  const colSpanClass = isVhs ? "lg:col-span-12" : "lg:col-span-6";

                  return (
                    <motion.div
                      key={service.id}
                      variants={itemVariants}
                      className={`${colSpanClass} glass-card rounded-3xl p-8 border border-brand-teal-light/10 bg-white/70 hover:bg-white hover:border-brand-orange hover:shadow-lg transition-all duration-300 relative group flex flex-col justify-between`}
                    >
                      <div className={isVhs ? "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" : ""}>
                        {/* Service Content */}
                        <div className={isVhs ? "lg:col-span-7" : ""}>
                          {/* Header Badging & Service Icon */}
                          <div className="flex justify-between items-start mb-6">
                            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full">
                              {service.badge}
                            </span>
                            <div className="w-14 h-14 bg-brand-teal/5 text-brand-teal rounded-2xl flex items-center justify-center group-hover:bg-brand-orange/10 group-hover:text-brand-orange transition-colors duration-300 shrink-0">
                              <ServiceIcon name={service.iconName} className="w-7 h-7" />
                            </div>
                          </div>

                          {/* Title & Tagline */}
                          <h3 className="text-2xl sm:text-3xl font-serif font-extrabold text-brand-teal mb-2">
                            {service.title}
                          </h3>
                          <h4 className="text-brand-teal font-serif font-bold text-lg mb-4 opacity-90">
                            {service.tagline}
                          </h4>
                          <p className="text-base text-brand-teal-light font-semibold leading-relaxed mb-6">
                            {service.description}
                          </p>

                          {/* Deliverables Checklist */}
                          <ul
                            className="space-y-3.5 mb-6 bg-brand-cream/35 p-5 rounded-2xl border border-brand-teal-light/5"
                            aria-label={`Inclusions for ${service.title}`}
                          >
                            {service.details.map((detail, dIdx) => (
                              <li key={dIdx} className="flex items-start">
                                <Check className="w-5 h-5 text-emerald-600 mr-3 mt-1 shrink-0" aria-hidden="true" />
                                <span className="text-brand-teal text-base font-semibold leading-relaxed">
                                  {detail}
                                </span>
                              </li>
                            ))}
                          </ul>

                          {/* Accordion Toggle for Deep-Dive Specifications (only for non-VHS services) */}
                          {!isVhs && (
                            <div className="border-t border-brand-teal-light/5 pt-4 mb-6">
                              <button
                                onClick={() => toggleAccordion(service.id)}
                                className="flex items-center justify-between w-full py-2 text-brand-teal hover:text-brand-orange font-bold text-sm transition-colors outline-none cursor-pointer"
                                aria-expanded={isExpanded}
                                aria-controls={`details-${service.id}`}
                              >
                                <span>{isExpanded ? "Hide Visit Preparation" : "Show Visit Preparation & Info"}</span>
                                <ChevronDown
                                  className={`w-4 h-4 transform transition-transform duration-300 ${
                                    isExpanded ? "rotate-180" : ""
                                  }`}
                                />
                              </button>

                              <AnimatePresence initial={false}>
                                {isExpanded && (
                                  <motion.div
                                    id={`details-${service.id}`}
                                    role="region"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                  >
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 mt-2 text-xs sm:text-sm text-brand-teal-light font-medium bg-brand-sand/30 p-4 rounded-xl border border-brand-teal-light/5 space-y-2 sm:space-y-0">
                                      <div className="space-y-3">
                                        <div className="flex items-start gap-2">
                                          <Clock className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                                          <div>
                                            <strong className="text-brand-teal block font-bold">Estimated Time:</strong>
                                            {service.duration}
                                          </div>
                                        </div>
                                        <div className="flex items-start gap-2">
                                          <ThumbsUp className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                                          <div>
                                            <strong className="text-brand-teal block font-bold">Best For:</strong>
                                            {service.bestFor}
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex items-start gap-2">
                                        <ClipboardList className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                                        <div>
                                          <strong className="text-brand-teal block font-bold">What to Have Ready:</strong>
                                          {service.prep}
                                        </div>
                                      </div>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          )}

                          {isVhs && (
                            <div className="pt-4 flex flex-wrap gap-4">
                              <Link
                                href="/vhs-conversion"
                                className="inline-flex items-center gap-2 text-brand-teal hover:text-brand-orange font-bold text-sm sm:text-base transition-colors min-h-[48px] px-5 py-2.5 rounded-xl bg-white border border-brand-teal-light/10 shadow-sm hover:shadow"
                              >
                                <span>Explore Detailed FAQs & Policies</span>
                                <ArrowRight className="w-4.5 h-4.5 shrink-0" />
                              </Link>
                            </div>
                          )}
                        </div>

                        {/* VHS Conversion Calculator Widget (renders in full-width layout) */}
                        {isVhs && (
                          <div className="lg:col-span-5 flex flex-col items-center">
                            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-brand-teal-light/15 bg-white/95 shadow-md relative overflow-hidden flex flex-col justify-between w-full">
                              <div>
                                <h4 className="text-lg sm:text-xl font-serif font-extrabold text-brand-teal mb-2">
                                  Estimate Your Tape Rescue
                                </h4>
                                <p className="text-xs text-brand-teal-light leading-relaxed mb-4 font-semibold">
                                  Select tape count and preferred format to calculate a local flat-rate estimate.
                                </p>

                                {/* Counter Selector */}
                                <div className="flex items-center justify-center space-x-6 py-3.5 bg-brand-cream/40 border border-brand-teal-light/10 rounded-2xl mb-4">
                                  <button
                                    onClick={handleDecrement}
                                    className="w-10 h-10 bg-white hover:bg-brand-cream border-2 border-brand-teal-light/15 hover:border-brand-orange text-brand-teal hover:text-brand-orange rounded-full flex items-center justify-center transition-all cursor-pointer select-none"
                                    aria-label="Decrease tape count"
                                  >
                                    <Minus className="w-4.5 h-4.5" />
                                  </button>
                                  <div className="text-center min-w-[60px]">
                                    <span className="text-3xl font-serif font-black text-brand-teal">
                                      {tapeCount}
                                    </span>
                                    <p className="text-[9px] font-bold text-brand-teal-light uppercase tracking-wider">
                                      Tapes
                                    </p>
                                  </div>
                                  <button
                                    onClick={handleIncrement}
                                    className="w-10 h-10 bg-white hover:bg-brand-cream border-2 border-brand-teal-light/15 hover:border-brand-orange text-brand-teal hover:text-brand-orange rounded-full flex items-center justify-center transition-all cursor-pointer select-none"
                                    aria-label="Increase tape count"
                                  >
                                    <Plus className="w-4.5 h-4.5" />
                                  </button>
                                </div>

                                {/* Delivery Formats Selector */}
                                <div className="mb-4 space-y-2">
                                  <span className="block text-[10px] font-bold text-brand-teal-light uppercase tracking-wider">
                                    Delivery Format Add-On
                                  </span>

                                  <div className="grid grid-cols-1 gap-2">
                                    {[
                                      {
                                        id: "download",
                                        label: "Direct MP4 Download",
                                        desc: "Fast delivery via secure private link",
                                        price: 0,
                                      },
                                      {
                                        id: "usb",
                                        label: "USB Flash Drive",
                                        desc: "Files loaded onto a physical USB drive",
                                        price: 10.0,
                                      },
                                      {
                                        id: "dvd",
                                        label: "DVD Disc Copy",
                                        desc: "Playable on traditional DVD players",
                                        price: 5.0,
                                      },
                                    ].map((opt) => (
                                      <button
                                        key={opt.id}
                                        type="button"
                                        onClick={() => setAddonOption(opt.id as "download" | "usb" | "dvd")}
                                        className={`flex items-center justify-between p-2.5 rounded-xl border-2 text-left transition-all cursor-pointer select-none ${
                                          addonOption === opt.id
                                            ? "border-brand-orange bg-brand-cream/15 shadow-sm"
                                            : "border-brand-teal-light/10 hover:border-brand-teal-light/20 bg-white"
                                        }`}
                                      >
                                        <div className="pr-1.5">
                                          <span className="block text-xs sm:text-sm font-bold text-brand-teal">
                                            {opt.label}
                                          </span>
                                          <span className="block text-[10px] text-brand-teal-light mt-0.5 leading-snug">
                                            {opt.desc}
                                          </span>
                                        </div>
                                        <span
                                          className={`text-xs font-extrabold shrink-0 ml-1.5 ${
                                            opt.price === 0
                                              ? "text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full"
                                              : "text-brand-teal"
                                          }`}
                                        >
                                          {opt.price === 0 ? "FREE" : `+$${opt.price.toFixed(2)}`}
                                        </span>
                                      </button>
                                    ))}
                                  </div>
                                </div>

                                {/* Pricing calculator summary */}
                                <div className="space-y-2 mb-4 text-xs sm:text-sm text-brand-teal border-t border-brand-teal-light/5 pt-3">
                                  <div className="flex justify-between items-center">
                                    <span className="font-semibold text-brand-teal-light">Price per tape</span>
                                    <span className="font-bold text-brand-teal">
                                      ${tapePrice.toFixed(2)}
                                    </span>
                                  </div>
                                  {addonPrices[addonOption] > 0 && (
                                    <div className="flex justify-between items-center">
                                      <span className="font-semibold text-brand-teal-light">Format addon</span>
                                      <span className="font-bold text-brand-teal">
                                        +${addonPrices[addonOption].toFixed(2)}
                                      </span>
                                    </div>
                                  )}
                                  <div className="flex justify-between items-center">
                                    <span className="font-semibold text-brand-teal-light">Pickup & delivery</span>
                                    <span className="font-bold text-brand-orange text-[9px] uppercase tracking-widest bg-orange-50 px-2 py-0.5 rounded-full">
                                      FREE
                                    </span>
                                  </div>
                                  <div className="flex justify-between items-center py-2 border-t border-brand-teal-light/5 mt-1.5">
                                    <span className="font-serif font-extrabold text-sm sm:text-base">Estimated Total</span>
                                    <span className="text-xl sm:text-2xl font-serif font-black text-brand-teal">
                                      ${totalPrice.toFixed(2)}
                                    </span>
                                  </div>
                                </div>
                              </div>

                              <a
                                href={`tel:${businessConfig.contact.phone}`}
                                className="flex items-center justify-center w-full h-11 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-sm sm:text-base rounded-full shadow transition-all duration-200 min-h-[44px]"
                              >
                                <Phone className="w-4 h-4 mr-2 shrink-0 text-white animate-pulse" />
                                <span>Book for {tapeCount} {tapeCount === 1 ? "Tape" : "Tapes"}</span>
                              </a>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Card Footer CTA (for non-VHS services) */}
                      {!isVhs && (
                        <div className="pt-6 border-t border-brand-teal-light/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6">
                          <span className="text-sm font-bold text-brand-teal-light">
                            Patient, local support
                          </span>
                          <Link
                            href="/contact"
                            className="inline-flex items-center justify-center min-h-[48px] py-3.5 px-6 text-base font-bold bg-brand-teal text-white hover:bg-brand-teal-hover rounded-xl shadow-md transition-all duration-200 outline-none group text-center"
                          >
                            <span>Book an In-Home Visit</span>
                            <ArrowRight className="w-4.5 h-4.5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200 shrink-0" />
                          </Link>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div
                key="business-panel"
                id="business-panel"
                role="tabpanel"
                aria-labelledby="business-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10"
              >
                {/* Business Services */}
                {businessServices.map((service) => {
                  const isExpanded = expandedCard === service.id;
                  const isConsulting = service.id === "specialty-consulting";
                  const colSpanClass = isConsulting ? "lg:col-span-12" : "lg:col-span-6";

                  return (
                    <motion.div
                      key={service.id}
                      variants={itemVariants}
                      className={`${colSpanClass} glass-card rounded-3xl p-8 border border-brand-teal-light/10 bg-white/70 hover:bg-white hover:border-brand-orange hover:shadow-lg transition-all duration-300 relative group flex flex-col justify-between`}
                    >
                      <div className={isConsulting ? "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" : ""}>
                        {/* Service Content */}
                        <div className={isConsulting ? "lg:col-span-7" : ""}>
                          {/* Header Badging & Service Icon */}
                          <div className="flex justify-between items-start mb-6">
                            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full">
                              {service.badge}
                            </span>
                            <div className="w-14 h-14 bg-brand-teal/5 text-brand-teal rounded-2xl flex items-center justify-center group-hover:bg-brand-orange/10 group-hover:text-brand-orange transition-colors duration-300 shrink-0">
                              <ServiceIcon name={service.iconName} className="w-7 h-7" />
                            </div>
                          </div>

                          {/* Title & Tagline */}
                          <h3 className="text-2xl sm:text-3xl font-serif font-extrabold text-brand-teal mb-2">
                            {service.title}
                          </h3>
                          <h4 className="text-brand-teal font-serif font-bold text-lg mb-4 opacity-90">
                            {service.tagline}
                          </h4>
                          <p className="text-base text-brand-teal-light font-semibold leading-relaxed mb-6">
                            {service.description}
                          </p>

                          {/* Deliverables Checklist */}
                          <ul
                            className="space-y-3.5 mb-6 bg-brand-cream/35 p-5 rounded-2xl border border-brand-teal-light/5"
                            aria-label={`Inclusions for ${service.title}`}
                          >
                            {service.details.map((detail, dIdx) => (
                              <li key={dIdx} className="flex items-start">
                                <Check className="w-5 h-5 text-emerald-600 mr-3 mt-1 shrink-0" aria-hidden="true" />
                                <span className="text-brand-teal text-base font-semibold leading-relaxed">
                                  {detail}
                                </span>
                              </li>
                            ))}
                          </ul>

                          {/* Accordion Toggle for Deep-Dive Specifications (only for non-consulting services) */}
                          {!isConsulting && (
                            <div className="border-t border-brand-teal-light/5 pt-4 mb-6">
                              <button
                                onClick={() => toggleAccordion(service.id)}
                                className="flex items-center justify-between w-full py-2 text-brand-teal hover:text-brand-orange font-bold text-sm transition-colors outline-none cursor-pointer"
                                aria-expanded={isExpanded}
                                aria-controls={`details-${service.id}`}
                              >
                                <span>{isExpanded ? "Hide Requirements & Info" : "Show Requirements & Info"}</span>
                                <ChevronDown
                                  className={`w-4 h-4 transform transition-transform duration-300 ${
                                    isExpanded ? "rotate-180" : ""
                                  }`}
                                />
                              </button>

                              <AnimatePresence initial={false}>
                                {isExpanded && (
                                  <motion.div
                                    id={`details-${service.id}`}
                                    role="region"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                  >
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 mt-2 text-xs sm:text-sm text-brand-teal-light font-medium bg-brand-sand/30 p-4 rounded-xl border border-brand-teal-light/5 space-y-2 sm:space-y-0">
                                      <div className="space-y-3">
                                        <div className="flex items-start gap-2">
                                          <Clock className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                                          <div>
                                            <strong className="text-brand-teal block font-bold">Service Period:</strong>
                                            {service.duration}
                                          </div>
                                        </div>
                                        <div className="flex items-start gap-2">
                                          <ThumbsUp className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                                          <div>
                                            <strong className="text-brand-teal block font-bold">Best For:</strong>
                                            {service.bestFor}
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex items-start gap-2">
                                        <ClipboardList className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                                        <div>
                                          <strong className="text-brand-teal block font-bold">How to Prepare:</strong>
                                          {service.prep}
                                        </div>
                                      </div>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          )}
                        </div>

                        {/* Consulting Specialty Spotlight Card (renders in full-width layout) */}
                        {isConsulting && (
                          <div className="lg:col-span-5 flex flex-col items-center">
                            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-brand-teal-light/15 bg-brand-sand/30 shadow-md relative overflow-hidden flex flex-col justify-between w-full h-full">
                              <div>
                                <h4 className="text-lg sm:text-xl font-serif font-extrabold text-brand-teal mb-4 flex items-center gap-2">
                                  <Sparkles className="w-5.5 h-5.5 text-brand-orange shrink-0" />
                                  Custom Infrastructure
                                </h4>

                                <div className="space-y-5 text-xs sm:text-sm font-semibold text-brand-teal-light leading-relaxed">
                                  <div className="pb-4 border-b border-brand-teal-light/10">
                                    <span className="block font-serif font-bold text-brand-teal text-base mb-1">
                                      Long-Range Outbuilding Wi-Fi
                                    </span>
                                    Link workshops, barns, or gate systems across acreage back to your primary home internet connection safely.
                                  </div>
                                  <div className="pb-4 border-b border-brand-teal-light/10">
                                    <span className="block font-serif font-bold text-brand-teal text-base mb-1">
                                      Local-First Sovereignty
                                    </span>
                                    Deploy networks and document servers that keep your files physically inside your building—no forced cloud contracts.
                                  </div>
                                  <div>
                                    <span className="block font-serif font-bold text-brand-teal text-base mb-1">
                                      Rugged Configurations
                                    </span>
                                    Design system setups built specifically to withstand temperature shifts and dust in workshop or barn spaces.
                                  </div>
                                </div>
                              </div>

                              <div className="mt-8 flex flex-col gap-3">
                                <a
                                  href={`mailto:${businessConfig.contact.email}?subject=Specialty Consulting Request`}
                                  className="flex items-center justify-center w-full h-11 bg-brand-teal hover:bg-brand-teal-hover text-white font-bold text-sm sm:text-base rounded-full shadow transition-all duration-200 min-h-[44px]"
                                >
                                  <Mail className="w-4.5 h-4.5 mr-2 shrink-0 text-white" />
                                  <span>Request Consultation</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Card Footer CTA (for non-consulting services) */}
                      {!isConsulting && (
                        <div className="pt-6 border-t border-brand-teal-light/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6">
                          <span className="text-sm font-bold text-brand-teal-light">
                            Trustworthy local IT
                          </span>
                          <Link
                            href="/contact"
                            className="inline-flex items-center justify-center min-h-[48px] py-3.5 px-6 text-base font-bold bg-brand-teal text-white hover:bg-brand-teal-hover rounded-xl shadow-md transition-all duration-200 outline-none group text-center"
                          >
                            <span>Request Consultation</span>
                            <ArrowRight className="w-4.5 h-4.5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200 shrink-0" />
                          </Link>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
