"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { businessConfig } from "@/config/business";

export default function StickyMobileCta() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA bar after scrolling 200px down
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 80, x: "-50%", opacity: 0 }}
          animate={{ y: 0, x: "-50%", opacity: 1 }}
          exit={{ y: 80, x: "-50%", opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
          className="fixed bottom-6 left-1/2 z-40 flex flex-col w-[92%] max-w-md items-center gap-2 rounded-3xl border border-brand-teal-light/25 bg-brand-cream/95 p-4 shadow-[0_12px_40px_-8px_rgba(18,60,68,0.18)] backdrop-blur-md lg:hidden"
        >
          {/* Action 1: Call Ryan Directly */}
          <a
            href={`tel:${businessConfig.contact.phone}`}
            className="flex items-center justify-center w-full h-14 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-lg rounded-2xl transition-transform active:scale-98 touch-manipulation min-h-[48px] shadow-md"
            aria-label={`Click Here to Call Ryan Directly at ${businessConfig.contact.phoneFormatted}`}
          >
            <Phone className="w-5 h-5 mr-3 shrink-0 text-white animate-pulse" />
            <span>Click Here to Call Ryan Directly</span>
          </a>

          {/* Action 2: Book Visit Link */}
          <Link
            href="/contact"
            className="text-base font-bold text-brand-teal hover:text-brand-orange transition-colors py-1 outline-none focus-visible:underline"
            aria-label="Or request a call back"
          >
            Or request a call back
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
