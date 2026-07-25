"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { businessConfig } from "@/config/business";

export default function TestimonialSection() {
  const testimonials = businessConfig.testimonials;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 120 : -120,
      opacity: 0,
    }),
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-12 bg-brand-tan/10 relative overflow-hidden">
      {/* Decorative Blur Blob */}
      <div className="absolute top-1/2 left-1/10 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-10">
          <Heart className="w-5 h-5 text-brand-orange mx-auto animate-pulse" />
          <h2 className="text-sm sm:text-base font-bold text-brand-teal-light uppercase tracking-widest mt-2 mb-1.5">
            Local Stories
          </h2>
          <p className="text-3xl sm:text-4xl font-serif font-extrabold text-brand-teal">
            Words From Your Neighbours
          </p>
        </div>

        {/* Carousel Area */}
        <div className="relative min-h-[320px] sm:min-h-[240px] md:min-h-[200px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="glass-card rounded-3xl p-6 sm:p-8 w-full relative overflow-hidden text-center"
            >
              {/* Left Quote watermark icon */}
              <div className="absolute -top-3 -left-3 text-brand-teal-hover/10 pointer-events-none select-none">
                <Quote className="w-20 h-20" />
              </div>

              {/* Right Quote watermark icon */}
              <div className="absolute -top-3 -right-3 text-brand-teal-hover/10 pointer-events-none select-none">
                <Quote className="w-20 h-20 transform rotate-180" />
              </div>

              <div className="relative space-y-4">
                {/* Quote content - reduced font size and padding */}
                <blockquote className="text-base sm:text-lg font-serif font-medium text-brand-teal leading-relaxed italic max-w-2xl mx-auto">
                  &ldquo;{currentTestimonial.quote}&rdquo;
                </blockquote>

                {/* Separator line & Author details */}
                <div className="pt-4 border-t border-brand-teal-light/10 flex flex-col items-center">
                  <span className="text-lg sm:text-xl font-bold text-brand-teal">
                    {currentTestimonial.author}
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-brand-teal-light mt-1">
                    {currentTestimonial.location}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation & Controls */}
        {testimonials.length > 1 && (
          <div className="flex items-center justify-between mt-6 max-w-xs mx-auto">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full border border-brand-teal-light/10 hover:border-brand-teal-light/30 text-brand-teal-light hover:text-brand-teal hover:bg-white/40 transition-colors cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dot Indicators */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    index === currentIndex
                      ? "bg-brand-orange w-6"
                      : "bg-brand-teal-light/30 hover:bg-brand-teal-light/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-2 rounded-full border border-brand-teal-light/10 hover:border-brand-teal-light/30 text-brand-teal-light hover:text-brand-teal hover:bg-white/40 transition-colors cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

