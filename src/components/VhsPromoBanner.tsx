"use client";

import React from "react";
import Link from "next/link";
import { Film, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function VhsPromoBanner() {
  return (
    <section id="vhs-promo" className="py-16 bg-brand-tan/10 relative overflow-hidden print-hide">
      {/* Decorative Warm Backlighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card rounded-3xl p-8 sm:p-12 border-2 border-brand-teal-light/10 bg-white/70 shadow-lg relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Content */}
          <div className="flex-1 space-y-4 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 bg-brand-teal-light/10 text-brand-teal-light px-4 py-2 rounded-full font-bold text-base border border-brand-teal-light/20">
              <Film className="w-5 h-5 shrink-0" />
              <span>Memories Preservation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-brand-teal leading-tight">
              Have Old VHS Tapes Gathering Dust?
            </h2>

            <p className="text-lg sm:text-xl text-brand-teal-light font-medium leading-relaxed max-w-2xl">
              VHS tapes physically decay over time, eventually turning into static. Let Ryan rescue your family videos in St. Marys so you can watch them on your modern TV, iPad, or smartphone.
            </p>
          </div>

          {/* Action Button */}
          <div className="shrink-0 w-full md:w-auto">
            <Link
              href="/vhs-conversion"
              className="flex items-center justify-center w-full md:w-auto h-16 px-8 bg-white hover:bg-brand-cream text-brand-teal border-2 border-brand-teal-light/20 hover:border-brand-orange font-bold text-xl rounded-full shadow-md hover:shadow-lg transition-all duration-200 active:scale-98 min-h-[48px] cursor-pointer"
            >
              <span>See Pricing & Details</span>
              <ArrowRight className="w-5.5 h-5.5 ml-2.5 shrink-0" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
