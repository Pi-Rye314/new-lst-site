"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { businessConfig } from "@/config/business";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Our Services", href: "/services" },
    { label: "VHS Conversion", href: "/vhs-conversion" },
    { label: "Neighbourly Tips", href: "/neighbourly-tips" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#123C44]/95 backdrop-blur-md border-b-2 border-brand-orange shadow-[0_4px_14px_-2px_rgba(217,119,54,0.28)] py-3"
          : "bg-[#123C44] border-b border-brand-orange/45 shadow-[0_2px_8px_-1px_rgba(217,119,54,0.12)] py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand Name */}
          <Link
            href="/"
            className="flex items-center space-x-3 group outline-none"
            aria-label={`${businessConfig.name} Home`}
          >
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg md:text-xl text-[#EAD7C3] tracking-tight group-hover:text-brand-orange transition-colors duration-200">
                {businessConfig.name}
              </span>
              <span className="text-sm text-white/70 font-semibold tracking-wide">
                {businessConfig.contact.areaServed.split(" • ")[1]}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Desktop Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-white/85 hover:text-brand-orange font-semibold text-lg transition-colors duration-200 py-3 px-1.5 relative group outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-orange ${
                    isActive ? "text-brand-orange font-bold" : ""
                  }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-brand-orange transition-all duration-200 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}></span>
                </Link>
              );
            })}
          </nav>

          {/* Call CTA Button */}
          <div className="hidden sm:block">
            <a
              href={`tel:${businessConfig.contact.phone}`}
              className="inline-flex items-center justify-center h-12 px-6 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-lg rounded-full shadow-md hover:shadow-lg transition-all duration-250 transform hover:-translate-y-0.5 active:translate-y-0 min-h-[48px] outline-none focus-visible:ring-4 focus-visible:ring-[#EAD7C3]/50"
            >
              <Phone className="w-5 h-5 mr-2 animate-pulse" />
              <span>Call Ryan</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-white/90 hover:text-brand-orange hover:bg-white/10 focus:outline-none min-w-[48px] min-h-[48px]"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        id="mobile-menu"
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0"
        } bg-[#123C44] border-t border-[#2C5E67]/20 shadow-lg`}
      >
        <div className="px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-white/80 hover:text-brand-orange hover:bg-white/5 text-xl font-bold transition-all duration-200 ${
                  isActive ? "text-brand-orange bg-brand-orange/10" : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-4 border-t border-[#2C5E67]/20 px-4">
            <a
              href={`tel:${businessConfig.contact.phone}`}
              className="flex items-center justify-center w-full h-14 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-xl rounded-full shadow-md transition-all duration-200 min-h-[48px]"
            >
              <Phone className="w-6 h-6 mr-3" />
              Call Ryan: {businessConfig.contact.phoneFormatted}
            </a>
            <p className="text-center text-xs text-white/60 mt-3 font-medium">
              {businessConfig.operatingHours.note}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
