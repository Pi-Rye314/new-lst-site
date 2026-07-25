import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VhsPromoBanner from "@/components/VhsPromoBanner";
import FaqSection from "@/components/FaqSection";
import TestimonialSection from "@/components/TestimonialSection";
import Footer from "@/components/Footer";
import StickyMobileCta from "@/components/StickyMobileCta";

export default function Home() {
  return (
    <>
      {/* Sticky Top Header */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-1">
        {/* Section 1: Hero Block */}
        <Hero />

        {/* Section 2: Specialized VHS Conversion Promo Banner */}
        <VhsPromoBanner />

        {/* Section 3: Customer Reviews Spotlight (Local Stories) */}
        <TestimonialSection />

        {/* Section 4: Frequently Asked Questions (Got Questions?) */}
        <FaqSection />
      </main>

      {/* Footer Block */}
      <Footer />

      {/* Floating Sticky Mobile CTA */}
      <StickyMobileCta />
    </>
  );
}
