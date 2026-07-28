import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Ryan - In-Home Tech Support | Little Stone Tech Co.",
  description: "Get in touch with Ryan Wilson at Little Stone Tech Co. Call directly at 226-921-5949 or email r.wilson@littlestonetech.ca for trusted technology support in St. Marys, ON.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      
      <main className="flex-1 pt-24 md:pt-32">
        {/* Senior-Friendly Navigation Assistant / Back Button */}
        <div className="bg-brand-cream/80 border-b border-brand-teal-light/10 py-4 print-hide">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="inline-flex items-center space-x-2.5 text-brand-teal hover:text-brand-orange font-bold text-lg transition-colors min-h-[48px] px-5 py-2.5 rounded-2xl bg-white border-2 border-brand-teal-light/10 hover:border-brand-orange shadow-sm"
              aria-label="Return to the main home page"
            >
              <ArrowLeft className="w-5.5 h-5.5 shrink-0" />
              <span>Go Back to Home Page</span>
            </Link>
          </div>
        </div>

        {/* Dedicated Page Heading for SEO & Hierarchy */}
        <div className="bg-brand-cream py-10 print-hide">
          <div className="max-w-3xl mx-auto text-center px-4">
            <span className="text-base font-bold text-brand-teal-light uppercase tracking-widest mb-3 block">
              Here for St. Marys
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif font-extrabold text-brand-teal tracking-tight leading-tight">
              Connect with Ryan
            </h1>
            <div className="w-24 h-1 bg-brand-orange mx-auto mt-6 rounded-full" />
            <p className="text-lg sm:text-xl text-brand-teal-light font-medium mt-4 leading-relaxed">
              Need some patient, friendly technology support right at your kitchen table? Or ready to rescue your family videos from aging VHS tapes? I'm always happy to chat—reach out via call, text, or email.
            </p>
          </div>
        </div>

        {/* The main Contact & Booking Form component */}
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
