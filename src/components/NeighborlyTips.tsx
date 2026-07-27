"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BookOpen, 
  ShieldAlert, 
  RotateCcw, 
  Router, 
  Eye, 
  UserCheck, 
  HelpCircle, 
  Printer, 
  X, 
  Download 
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { businessConfig, TechTip } from "@/config/business";

// Tip category icon helper
const getTipIcon = (category: string) => {
  switch (category) {
    case "PHYSICAL DEFENCE":
      return <BookOpen className="w-6 h-6 text-brand-orange" />;
    case "DOUBLE SECURITY":
      return <ShieldAlert className="w-6 h-6 text-brand-orange" />;
    case "SUNDAY REFRESH":
      return <RotateCcw className="w-6 h-6 text-brand-orange" />;
    case "NETWORK CARE":
      return <Router className="w-6 h-6 text-brand-orange" />;
    case "DIGITAL SHIELD":
      return <ShieldAlert className="w-6 h-6 text-brand-orange" />;
    case "VISUAL MASTERY":
      return <Eye className="w-6 h-6 text-brand-orange" />;
    case "LOCAL BACKUP":
      return <UserCheck className="w-6 h-6 text-brand-orange" />;
    default:
      return <HelpCircle className="w-6 h-6 text-brand-orange" />;
  }
};

export default function NeighborlyTips() {
  const tips = businessConfig.techTips;
  const [isFlyerModalOpen, setIsFlyerModalOpen] = useState(false);

  // Printing engine
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      const iframe = document.createElement("iframe");
      iframe.style.position = "fixed";
      iframe.style.width = "0";
      iframe.style.height = "0";
      iframe.style.border = "none";
      document.body.appendChild(iframe);

      const doc = iframe.contentWindow?.document || iframe.contentDocument;
      if (doc) {
        doc.write(`
          <html>
            <head>
              <title>Print Tech Checkup Sheet</title>
              <style>
                @page { size: portrait; margin: 4mm; }
                body { margin: 0; display: flex; align-items: center; justify-content: center; height: 100vh; background: white; }
                img { max-width: 100%; max-height: 100%; object-fit: contain; }
              </style>
            </head>
            <body>
              <img src="/tech_check_v2.png" onload="window.focus(); window.print();" />
            </body>
          </html>
        `);
        doc.close();
      }

      setTimeout(() => {
        document.body.removeChild(iframe);
      }, 8000);
    }
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
    <section id="tech-tips" className="py-20 bg-brand-cream relative overflow-hidden">
      {/* Decorative Warm Ambient Background Elements */}
      <div className="absolute top-1/6 left-1/10 w-96 h-96 bg-brand-tan/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Print-Only Branded Header */}
        <div className="hidden print-only text-center border-b-4 border-brand-teal pb-6 mb-10">
          <h1 className="text-4xl font-bold font-serif text-brand-teal">{businessConfig.name}</h1>
          <p className="text-lg font-semibold text-brand-teal-light mt-1">{businessConfig.tagline}</p>
          <p className="text-base font-semibold text-brand-teal-light mt-2">
            In-Home Tech Support & Advocate • Ryan Wilson • {businessConfig.contact.phoneFormatted}
          </p>
        </div>

        {/* Section Header */}
        <SectionHeader
          tag="Digital Tips"
          title="Neighbourly Tech Checks"
          description="Simple, stress-free advice to keep your computer secure and running smoothly. Review the habits below, or print the checklist for your fridge."
          headingLevel="h1"
        />

        {/* Habits Checklist Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {tips.map((tip: TechTip, index: number) => {
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card rounded-3xl p-7 border border-brand-teal-light/10 bg-white/70 hover:bg-white hover:border-brand-orange hover:shadow-lg transition-all duration-300 relative group cursor-default"
              >
                <div>
                  {/* Top Bar inside Card */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-bold text-brand-teal-light uppercase tracking-wider bg-brand-teal-light/10 px-3.5 py-1.5 rounded-full print-hide">
                      {tip.category}
                    </span>
                    <div className="w-9 h-9 bg-brand-cream border border-brand-teal-light/10 rounded-xl flex items-center justify-center shrink-0 print-hide">
                      {getTipIcon(tip.category)}
                    </div>
                  </div>

                  {/* Habit Title */}
                  <h3 className="text-xl sm:text-2xl font-serif font-extrabold text-brand-teal mb-3.5 leading-snug">
                    {index + 1}. {tip.title}
                  </h3>

                  {/* Strategy Description */}
                  <p className="text-xs sm:text-sm font-black text-brand-orange uppercase tracking-wider mb-3">
                    Strategy: {tip.strategy}
                  </p>

                  {/* Context block */}
                  <p className="text-base text-brand-teal-light leading-relaxed font-semibold border-l-2 border-brand-tan/50 pl-3 italic">
                    &ldquo;{tip.why}&rdquo;
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* PRINTABLE FRIDGE SHEET CALLOUT */}
        <div className="mt-20 border-t border-brand-teal-light/10 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto print-hide">
            
            {/* Visual Paper Preview Mockup (5 Columns) */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div 
                whileHover={{ rotate: 1.5, scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-[300px] aspect-[1/1.4] bg-white border-8 border-white rounded-[20px] shadow-premium-lg overflow-hidden flex flex-col justify-between p-4"
              >
                {/* Paper Header */}
                <div className="text-center border-b border-brand-teal-light/10 pb-2.5">
                  <span className="block font-serif text-[10px] font-black text-brand-teal tracking-widest uppercase">Little Stone Tech</span>
                  <span className="block font-serif text-sm font-extrabold text-brand-teal mt-0.5">Neighbourly Tech Checks</span>
                </div>
                {/* Paper Body Lines */}
                <div className="space-y-2 py-3 flex-1 flex flex-col justify-center">
                  {[
                    "Keep password logbooks on physical paper.",
                    "Set up mobile verification lock codes.",
                    "Power down devices fully on Sundays.",
                    "Cycle internet router power monthly."
                  ].map((line, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-[9px] font-bold text-brand-teal-light">
                      <span className="w-2.5 h-2.5 border border-brand-teal-light/35 rounded shrink-0 flex items-center justify-center text-[7px] text-green-600 font-extrabold font-sans">✓</span>
                      <span>{line}</span>
                    </div>
                  ))}
                </div>
                {/* Paper Footer */}
                <div className="border-t border-brand-teal-light/10 pt-2 text-center text-[8px] font-bold text-brand-teal-light/60">
                  Call Ryan for help: (226) 921-5949
                </div>
              </motion.div>
            </div>

            {/* Content & Actions (7 Columns) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full w-fit mx-auto lg:mx-0 block">
                Offline Hygiene
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-extrabold text-brand-teal leading-tight">
                Want a Physical Copy for Your Fridge?
              </h3>
              <p className="text-base sm:text-lg text-brand-teal-light font-medium leading-relaxed">
                Technology is easier when you don&apos;t have to navigate menus. Preview and print a high-quality physical checklist to pin to your fridge.
              </p>
              
              <div className="flex flex-wrap gap-y-2 justify-center lg:justify-start text-xs sm:text-sm font-extrabold text-brand-teal-light gap-x-5">
                <button
                  onClick={() => setIsFlyerModalOpen(true)}
                  className="hover:text-brand-teal hover:underline inline-flex items-center cursor-pointer bg-transparent border-none p-0 outline-none"
                >
                  👁️ Preview Tech Checkup Sheet
                </button>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-3 w-full justify-center lg:justify-start">
                <button
                  onClick={handlePrint}
                  className="h-14 px-6 border-2 border-brand-teal hover:bg-brand-teal/5 text-brand-teal font-bold text-base sm:text-lg rounded-full flex items-center justify-center transition-all duration-200 min-h-[48px] cursor-pointer"
                >
                  <Printer className="w-5 h-5 mr-2" />
                  <span>Print Checklist Sheet</span>
                </button>
                <a
                  href="/contact"
                  className="h-14 px-8 bg-brand-teal hover:bg-brand-teal-hover text-white font-bold text-base sm:text-lg rounded-full flex items-center justify-center transition-all duration-200 min-h-[48px] shadow-md hover:shadow-lg"
                >
                  Ask Ryan for a Copy
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* LIGHTBOX MODAL PREVIEWS */}
      <AnimatePresence>
        {isFlyerModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm print-hide"
            onClick={() => setIsFlyerModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="relative max-w-3xl w-full bg-white rounded-3xl overflow-hidden border border-brand-teal-light/20 p-6 flex flex-col items-center shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="w-full flex items-center justify-between border-b border-brand-teal-light/10 pb-4 mb-4">
                <h3 className="text-xl font-serif font-extrabold text-brand-teal">
                  Printable Tech Checkup Sheet
                </h3>
                <button
                  onClick={() => setIsFlyerModalOpen(false)}
                  className="p-2 text-brand-teal-light hover:text-brand-orange transition-colors min-h-[48px] min-w-[48px] cursor-pointer flex items-center justify-center"
                  aria-label="Close flyer preview"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Flyer Image container */}
              <div className="relative w-full aspect-[4/3] md:aspect-[16/11] bg-brand-cream border border-brand-teal-light/10 rounded-2xl overflow-hidden shadow-inner">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/tech_check_v2.png"
                  alt="Tech Checkup Sheet"
                  className="w-full h-full object-contain p-2"
                />
              </div>

              {/* Action row */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3 w-full justify-center">
                <a
                  href="/tech_check_v2.png"
                  download
                  className="h-14 px-8 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-lg rounded-full flex items-center justify-center transition-all duration-200 min-h-[48px] shadow-sm cursor-pointer"
                >
                  <Download className="w-5 h-5 mr-2" />
                  <span>Download Flyer Image</span>
                </a>
                <button
                  onClick={() => window.open("/tech_check_v2.png", '_blank')}
                  className="h-14 px-6 border-2 border-brand-teal hover:bg-brand-teal/5 text-brand-teal font-bold text-lg rounded-full flex items-center justify-center transition-all duration-200 min-h-[48px] cursor-pointer"
                >
                  <span>View Full Size</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
