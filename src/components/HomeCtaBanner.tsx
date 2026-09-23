"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, ShieldCheck, Heart, MapPin } from "lucide-react";
import { businessConfig } from "@/config/business";

export default function HomeCtaBanner() {
  return (
    <section className="py-20 bg-gradient-to-b from-brand-cream via-brand-tan/20 to-brand-cream relative overflow-hidden">
      {/* Decorative Warm Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-orange/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <div className="glass-card rounded-[32px] p-8 sm:p-12 md:p-16 border-2 border-brand-teal-light/15 bg-white/90 shadow-xl relative overflow-hidden">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-brand-orange/10 text-brand-orange px-4 py-1.5 rounded-full font-bold text-sm mb-6">
            <Heart className="w-4 h-4 shrink-0 fill-current animate-pulse" />
            <span>Here For St. Marys</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-brand-teal leading-tight max-w-3xl mx-auto">
            Ready to get your tech running smoothly again?
          </h2>

          <p className="text-lg sm:text-xl text-brand-teal-light font-medium mt-4 max-w-2xl mx-auto leading-relaxed">
            Whether your printer stopped connecting, your computer is crawling, or you want help securing your online accounts—Ryan is happy to chat.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${businessConfig.contact.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center h-16 px-8 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-lg sm:text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 min-h-[48px]"
            >
              <Phone className="w-5 h-5 mr-3 shrink-0 text-white animate-pulse" />
              <span>Call Ryan: {businessConfig.contact.phoneFormatted}</span>
            </a>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center h-16 px-8 bg-brand-teal hover:bg-brand-teal-hover text-white font-bold text-lg sm:text-xl rounded-full shadow-md hover:shadow-lg transition-all duration-200 min-h-[48px]"
            >
              <Mail className="w-5 h-5 mr-2.5 shrink-0" />
              <span>Send a Message</span>
            </Link>
          </div>

          {/* Trust points */}
          <div className="mt-10 pt-8 border-t border-brand-teal-light/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="flex items-center justify-center space-x-2 text-brand-teal font-bold text-sm sm:text-base">
              <MapPin className="w-4.5 h-4.5 text-brand-orange shrink-0" />
              <span>Free travel in St. Marys</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-brand-teal font-bold text-sm sm:text-base">
              <ShieldCheck className="w-4.5 h-4.5 text-brand-orange shrink-0" />
              <span>Zero technical jargon</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-brand-teal font-bold text-sm sm:text-base">
              <Heart className="w-4.5 h-4.5 text-brand-orange shrink-0" />
              <span>Pay upon completion</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
