import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HomeServicesOverview from "@/components/HomeServicesOverview";
import VhsPromoBanner from "@/components/VhsPromoBanner";
import TestimonialSection from "@/components/TestimonialSection";
import FaqSection from "@/components/FaqSection";
import HomeCtaBanner from "@/components/HomeCtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Sticky Top Header */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-1">
        {/* Section 1: Hero Block with Dual CTAs */}
        <Hero />

        {/* Section 2: Core In-Home Services Overview Grid */}
        <HomeServicesOverview />

        {/* Section 3: Specialized VHS Conversion Promo Banner */}
        <VhsPromoBanner />

        {/* Section 4: Customer Reviews Spotlight (Local Stories) */}
        <TestimonialSection />

        {/* Section 5: Frequently Asked Questions */}
        <FaqSection />

        {/* Section 6: Closing Reassurance CTA Banner */}
        <HomeCtaBanner />
      </main>

      {/* Footer Block */}
      <Footer />
    </>
  );
}
