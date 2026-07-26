"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { businessConfig } from "@/config/business";

export default function FaqSection() {
  const faqItems = businessConfig.faq;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-24 bg-brand-cream relative overflow-hidden">
      {/* Decorative background lines */}
      <div className="absolute inset-0 bg-[radial-gradient(var(--color-brand-teal-light)_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <SectionHeader
          tag="Got Questions?"
          title="Frequently Asked Questions"
          description="Clear, honest answers about our services, safety practices, and how we help St. Marys families feel confident with their technology."
        />

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="glass-card rounded-2xl border border-brand-teal-light/15 overflow-hidden transition-all duration-300 bg-white/60 hover:bg-white hover:border-brand-orange hover:shadow-md"
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleIndex(index)}
                  className="flex items-center justify-between w-full p-6 text-left focus:outline-none outline-none group cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-lg bg-brand-teal-light/10 flex items-center justify-center text-brand-teal shrink-0 mt-0.5 group-hover:bg-brand-orange/10 group-hover:text-brand-orange transition-colors">
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    <span className="text-lg md:text-xl font-serif font-bold text-brand-teal group-hover:text-brand-orange transition-colors duration-200 leading-snug">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-brand-teal-light shrink-0 ml-4 transition-transform duration-300 ${
                      isOpen ? "transform rotate-180 text-brand-orange" : ""
                    }`}
                  />
                </button>

                {/* Animated Accordion Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      role="region"
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 pl-12 sm:pl-16 text-base md:text-lg font-medium text-brand-teal/90 leading-relaxed border-t border-brand-teal-light/5">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Soft CTA to avoid dead-end user flow */}
        <div className="text-center mt-12 pt-4">
          <p className="text-lg text-brand-teal font-medium">
            Still have questions or ready to book?{" "}
            <Link
              href="/contact"
              className="text-brand-orange hover:text-brand-orange-hover font-bold underline underline-offset-4 transition-colors ml-1 cursor-pointer"
            >
              Contact Ryan directly
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
