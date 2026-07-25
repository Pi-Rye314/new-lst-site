"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Heart } from "lucide-react";
import { businessConfig } from "@/config/business";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(2026);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#123C44] text-white pt-16 pb-8 border-t border-[#2C5E67]/20 relative overflow-hidden">
      {/* Decorative Blur Blob */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#D97736]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start pb-12 border-b border-[#2C5E67]/20">
          
          {/* Brand Info (5 Columns) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl text-[#EAD7C3] tracking-tight">
                  {businessConfig.name}
                </span>
                <span className="text-sm text-white/70 font-semibold tracking-wide">
                  {businessConfig.tagline}
                </span>
              </div>
            </div>
            
            <p className="text-lg text-white/80 font-medium max-w-sm leading-relaxed">
              Friendly, patient, and professional technology support delivered directly to your home. No jargon, just clear solutions.
            </p>

            <div className="flex items-center space-x-1 text-base font-semibold text-[#EAD7C3]/80">
              <span>Established 2025</span>
              <span>Established 2024</span>
              <span>•</span>
              <span>St. Marys, ON</span>
            </div>
          </div>

          {/* Quick Links (3 Columns) */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="font-serif font-bold text-lg text-[#EAD7C3] tracking-wider uppercase">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-lg font-semibold text-white/80">
              <li>
                <Link href="/" className="hover:text-[#D97736] transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#D97736] transition-colors duration-200">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/vhs-conversion" className="hover:text-[#D97736] transition-colors duration-200">
                  VHS Conversion
                </Link>
              </li>
              <li>
                <Link href="/neighbourly-tips" className="hover:text-[#D97736] transition-colors duration-200">
                  Neighbourly Tips
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#D97736] transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Support (4 Columns) */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="font-serif font-bold text-lg text-[#EAD7C3] tracking-wider uppercase">
              Direct Support
            </h3>
            <ul className="space-y-3.5 text-lg font-medium text-white/90">
              <li>
                <a
                  href={`tel:${businessConfig.contact.phone}`}
                  className="flex items-center py-2.5 hover:text-[#D97736] transition-colors duration-200 group min-h-[48px]"
                >
                  <Phone className="w-5 h-5 mr-3 text-[#D97736] shrink-0" />
                  <span className="font-bold">{businessConfig.contact.phoneFormatted}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${businessConfig.contact.email}`}
                  className="flex items-center py-2.5 hover:text-[#D97736] transition-colors duration-200 group overflow-hidden min-h-[48px]"
                >
                  <Mail className="w-5 h-5 mr-3 text-[#D97736] shrink-0" />
                  <span className="font-bold truncate">{businessConfig.contact.email}</span>
                </a>
              </li>
              <li className="flex items-start py-2.5">
                <MapPin className="w-5 h-5 mr-3 text-[#D97736] shrink-0 mt-1" />
                <span className="font-bold">{businessConfig.contact.areaServed}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-base text-white/60 font-semibold space-y-4 sm:space-y-0">
          <p>
            &copy; {currentYear} {businessConfig.shortName}. All rights reserved.
          </p>
          <p className="flex items-center">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-[#D97736] mx-1.5 fill-current animate-pulse" />
            <span>in St. Marys, Ontario</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
