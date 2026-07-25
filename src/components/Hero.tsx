"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Heart, Smile } from "lucide-react";
import { businessConfig } from "@/config/business";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };


  return (
    <section
      id="hero"
      className="relative pt-24 pb-12 md:pt-30 md:pb-16 lg:pt-32 lg:pb-16 overflow-hidden bg-gradient-to-b from-brand-tan/15 via-brand-cream to-brand-cream"
    >
      {/* Dynamic Background Glow Elements */}
      <div className="absolute top-1/6 left-1/12 w-80 h-80 bg-brand-tan/30 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/6 right-1/12 w-[450px] h-[450px] bg-brand-orange/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Hero Left Content (7 Columns) */}
          <motion.div
            className="lg:col-span-7 space-y-5 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >


            {/* Main Title */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-serif font-extrabold tracking-tight text-brand-teal leading-tight"
            >
              {businessConfig.hero.headline}
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-xl sm:text-2xl text-brand-teal font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              {businessConfig.hero.subHeadline}
            </motion.p>

            {/* Premium Trust Cards Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5 pt-2"
            >
              {[
                { icon: <Smile className="w-6.5 h-6.5 text-brand-orange" />, title: "Zero jargon", desc: "Simple English explanations" },
                { icon: <Heart className="w-6.5 h-6.5 text-brand-orange" />, title: "Patient care", desc: "No clock-watching, ever" },
                { icon: <ShieldCheck className="w-6.5 h-6.5 text-brand-orange" />, title: "At your table", desc: "We come directly to you" },
              ].map((trust, idx) => (
                <div 
                  key={idx} 
                  className="glass-card rounded-[20px] p-[17px] md:p-[21px] border border-brand-teal-light/10 flex flex-col items-center text-center space-y-3.5 hover:bg-brand-cream hover:border-brand-orange hover:shadow-lg transition-all duration-250 cursor-default"
                >
                  <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center shrink-0">
                    {trust.icon}
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-xl text-brand-teal">{trust.title}</h4>
                    <p className="text-base text-brand-teal-light font-medium mt-1 leading-snug">{trust.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

          </motion.div>

          {/* Hero Right Graphic (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col items-center gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[390px] aspect-square flex items-center justify-center p-6"
            >
              {/* Outer Decorative Glow Ring */}
              <div className="absolute inset-0 bg-brand-tan/10 rounded-[40px] blur-xl -z-10" />

              {/* Main Center Card (Sleek Rounded Square with Local Stone Double Border showing Ryan's Headshot) */}
              <motion.div
                whileHover={{ rotateY: 3, rotateX: -3, scale: 1.01 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full bg-white border-4 border-brand-orange rounded-[36px] shadow-premium-lg overflow-hidden flex items-center justify-center relative"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src="/Ryan_Wilson_Headshot.png"
                    alt="Ryan Wilson - Your Friendly In-Home Technology Support Advocate"
                    fill
                    sizes="(max-width: 768px) 100vw, 390px"
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Action Buttons under Headshot */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full max-w-[390px] flex flex-col gap-4 px-6 lg:px-0"
            >

              {/* Secondary CTA */}
              <Link
                href="/services"
                className="flex items-center justify-center w-full h-16 bg-white hover:bg-brand-cream text-brand-teal border-2 border-brand-teal-light/20 hover:border-brand-orange font-bold text-xl rounded-full shadow-md hover:shadow-lg transition-all duration-200 min-h-[48px]"
              >
                <span>See How I Can Help</span>
                <ArrowRight className="w-5 h-5 ml-2.5" />
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
