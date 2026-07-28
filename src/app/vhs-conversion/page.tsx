import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import VhsSpecial from "@/components/VhsSpecial";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "VHS Digitization & Conversion Services in St. Marys, ON | Little Stone Tech Co.",
  description: "Preserve your family home videos before they decay. Friendly, local VHS tape digitizing service in St. Marys, Ontario with free pick-up and delivery. Ryan Wilson: 226-921-5949.",
};

export default function VhsConversionPage() {
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

        {/* The main specialized VHS component */}
        <VhsSpecial />
      </main>

      <Footer />
    </>
  );
}
