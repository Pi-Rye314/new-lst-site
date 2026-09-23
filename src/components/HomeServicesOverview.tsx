"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  UserCheck, 
  Printer, 
  Cpu, 
  Check, 
  ArrowRight, 
  Phone,
  Sparkles
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { businessConfig } from "@/config/business";

const serviceIcons: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-7 h-7" />,
  UserCheck: <UserCheck className="w-7 h-7" />,
  Printer: <Printer className="w-7 h-7" />,
  Cpu: <Cpu className="w-7 h-7" />,
};

const serviceBadges: Record<string, string> = {
  "network-hardening": "Security & Wi-Fi",
  "digital-training": "Patience-First Lessons",
  "device-setup": "Setup & Printing",
  "performance-cleanups": "Speed & Tune-Ups",
};

export default function HomeServicesOverview() {
  const services = businessConfig.services;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="services-overview" className="py-20 bg-brand-cream relative overflow-hidden">
      {/* Subtle Dot Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(var(--color-brand-teal-light)_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04] pointer-events-none" />

      {/* Decorative Ambient Blobs */}
      <div className="absolute top-1/4 left-1/12 w-96 h-96 bg-brand-tan/20 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/12 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <SectionHeader
          tag="In-Home Support"
          title="What We Help With at Your Kitchen Table"
          description="Friendly, patient technology assistance right in your home in St. Marys. No confusing jargon, no rushing, and no judgment—just clear, lasting solutions."
        />

        {/* 4 Core Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {services.map((service) => {
            const badge = serviceBadges[service.id] || "In-Home Help";
            const icon = serviceIcons[service.iconName] || <Sparkles className="w-7 h-7" />;

            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="glass-card rounded-3xl p-8 sm:p-10 border border-brand-teal-light/10 bg-white/80 hover:bg-white hover:border-brand-orange hover:shadow-xl transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar inside Card */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-orange bg-brand-orange/10 px-3.5 py-1.5 rounded-full">
                      {badge}
                    </span>
                    <div className="w-14 h-14 bg-brand-teal/5 text-brand-teal rounded-2xl flex items-center justify-center group-hover:bg-brand-orange/10 group-hover:text-brand-orange transition-colors duration-300 shrink-0">
                      {icon}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl sm:text-3xl font-serif font-extrabold text-brand-teal mb-3 group-hover:text-brand-teal-hover transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-base sm:text-lg text-brand-teal-light font-medium leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="space-y-3 bg-brand-cream/50 p-5 rounded-2xl border border-brand-teal-light/5 mb-6">
                    {service.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start text-brand-teal">
                        <Check className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 shrink-0" aria-hidden="true" />
                        <span className="text-sm sm:text-base font-semibold leading-relaxed">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-brand-teal-light/10 flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-bold text-brand-teal-light">
                    Visit at your home in St. Marys
                  </span>
                  <Link
                    href="/services"
                    className="inline-flex items-center font-bold text-base text-brand-teal hover:text-brand-orange transition-colors group-hover:translate-x-1 duration-200"
                  >
                    <span>Full Details</span>
                    <ArrowRight className="w-4.5 h-4.5 ml-1.5 shrink-0" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Gateway & Reassurance */}
        <div className="mt-16 bg-white/70 border border-brand-teal-light/15 rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full inline-block mb-1">
              Need Something Specific?
            </span>
            <h4 className="text-2xl sm:text-3xl font-serif font-extrabold text-brand-teal">
              Not sure which service fits your issue?
            </h4>
            <p className="text-base text-brand-teal-light font-medium leading-relaxed">
              Don&apos;t worry about matching an exact checklist. Just give Ryan a call or send a quick message explaining what&apos;s happening in your own words.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3.5 shrink-0 w-full sm:w-auto">
            <a
              href={`tel:${businessConfig.contact.phone}`}
              className="inline-flex items-center justify-center h-14 px-7 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-base sm:text-lg rounded-full shadow-md hover:shadow-lg transition-all duration-200 min-h-[48px]"
            >
              <Phone className="w-4.5 h-4.5 mr-2.5 shrink-0 text-white animate-pulse" />
              <span>Call Ryan: {businessConfig.contact.phoneFormatted}</span>
            </a>
            <Link
              href="/services"
              className="inline-flex items-center justify-center h-14 px-7 bg-white hover:bg-brand-cream text-brand-teal border-2 border-brand-teal-light/20 hover:border-brand-orange font-bold text-base sm:text-lg rounded-full shadow-sm hover:shadow transition-all duration-200 min-h-[48px]"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4.5 h-4.5 ml-2 shrink-0" />
            </Link>
          </div>
        </div>

        {/* Small Business & Rural Callout */}
        <div className="mt-8 text-center">
          <p className="text-sm font-semibold text-brand-teal-light">
            Running a local shop, workshop, or farm?{" "}
            <Link
              href="/services"
              className="text-brand-orange hover:text-brand-orange-hover underline underline-offset-4 font-bold ml-1"
            >
              We also provide Small Business IT & long-range Wi-Fi setups →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
