"use client";

import React, { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2 
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { businessConfig } from "@/config/business";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({ name: "", phone: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSent(false), 5000);
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-brand-cream relative overflow-hidden">
      {/* Decorative Warm Blur Blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-tan/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Reusable Section Header */}
        <SectionHeader
          tag="Contact Ryan"
          title="Let's Solve Your Technology Troubles"
          description="Call, text, or request a call back using the simple form below. I will get back to you promptly to schedule your friendly, stress-free in-home visit."
        />

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details & Info (5 Columns) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick Contact Box */}
            <div className="glass-panel rounded-3xl p-8 border-2 border-brand-teal-light/10 shadow-sm space-y-6 bg-white/70">
              <h3 className="text-2xl font-serif font-bold text-brand-teal">
                Reach Out Directly
              </h3>
              
              {/* Phone Row */}
              <a
                href={`tel:${businessConfig.contact.phone}`}
                className="flex items-start group p-4 -m-4 rounded-2xl hover:bg-brand-orange/5 transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
              >
                <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange mr-4 shrink-0 group-hover:scale-105 transition-transform duration-200">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-sm font-bold text-brand-teal-light uppercase tracking-wider">
                    Message or Call Ryan
                  </span>
                  <span className="text-xl font-bold text-brand-teal group-hover:text-brand-orange transition-colors duration-200">
                    {businessConfig.contact.phoneFormatted}
                  </span>
                </div>
              </a>

              {/* Email Row */}
              <a
                href={`mailto:${businessConfig.contact.email}`}
                className="flex items-start group p-4 -m-4 rounded-2xl hover:bg-brand-orange/5 transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
              >
                <div className="w-12 h-12 bg-brand-teal-light/10 rounded-xl flex items-center justify-center text-brand-teal mr-4 shrink-0 group-hover:scale-105 transition-transform duration-200">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="overflow-hidden">
                  <span className="block text-sm font-bold text-brand-teal-light uppercase tracking-wider">
                    Email Your Advocate
                  </span>
                  <span className="text-lg sm:text-xl font-bold text-brand-teal group-hover:text-brand-orange transition-colors duration-200 block truncate">
                    {businessConfig.contact.email}
                  </span>
                </div>
              </a>

              {/* Location Row */}
              <div className="flex items-start p-4 -m-4">
                <div className="w-12 h-12 bg-brand-teal-light/10 rounded-xl flex items-center justify-center text-brand-teal mr-4 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-sm font-bold text-brand-teal-light uppercase tracking-wider">
                    Service Area
                  </span>
                  <span className="text-lg font-bold text-brand-teal">
                    {businessConfig.contact.areaServed}
                  </span>
                </div>
              </div>

            </div>

            {/* Operating Hours Box */}
            <div className="glass-panel rounded-3xl p-8 border-2 border-brand-teal-light/10 shadow-sm space-y-6 bg-white/70">
              <div className="flex items-center space-x-3 mb-2">
                <Clock className="w-6 h-6 text-brand-orange" />
                <h3 className="text-2xl font-serif font-bold text-brand-teal">
                  Hours of Operation
                </h3>
              </div>
              
              <ul className="space-y-3.5 text-lg font-medium text-brand-teal">
                <li className="flex justify-between border-b border-brand-teal-light/10 pb-2">
                  <span>Weekdays</span>
                  <span className="font-bold text-right">{businessConfig.operatingHours.weekdays.split(": ")[1]}</span>
                </li>
                <li className="flex justify-between border-b border-brand-teal-light/10 pb-2">
                  <span>Saturday</span>
                  <span className="font-bold text-right">{businessConfig.operatingHours.saturday.split(": ")[1]}</span>
                </li>
                <li className="flex justify-between pb-2">
                  <span>Sunday</span>
                  <span className="font-bold text-right text-red-600">{businessConfig.operatingHours.sunday.split(": ")[1]}</span>
                </li>
              </ul>
              <p className="text-base font-semibold text-brand-teal-light italic bg-brand-teal-light/5 p-4 rounded-xl">
                {businessConfig.operatingHours.note}
              </p>
            </div>

          </div>

          {/* Contact Form Panel (7 Columns) */}
          <div className="lg:col-span-7 bg-white border-2 border-brand-teal-light/10 rounded-3xl p-8 md:p-10 shadow-sm">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-brand-teal mb-2">
              Book Your Visit
            </h3>
            <p className="text-lg text-brand-teal-light font-semibold mb-6">
              Request a quick call back below and I will get in touch with you.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Form Input fields */}
              <div>
                <label htmlFor="name" className="block text-lg font-bold text-brand-teal mb-2">
                  Your Full Name <span className="text-brand-orange">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Margaret Smith"
                  className="w-full h-14 px-4 bg-brand-cream border-2 border-brand-teal-light/20 rounded-xl text-lg font-medium text-brand-teal placeholder-brand-teal-light/50 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-lg font-bold text-brand-teal mb-2">
                  Phone Number <span className="text-brand-orange">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. 226-921-5949"
                  className="w-full h-14 px-4 bg-brand-cream border-2 border-brand-teal-light/20 rounded-xl text-lg font-medium text-brand-teal placeholder-brand-teal-light/50 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors"
                />
                <p className="text-xs text-brand-teal-light font-semibold mt-1.5">Ryan will call or text this number within 24 hours.</p>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                {isSent ? (
                  <div className="flex items-center justify-center space-x-3 bg-green-50 text-green-900 border border-green-200/50 p-4.5 rounded-xl">
                    <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0" />
                    <span className="font-bold text-lg">Thank you! Ryan will contact you within 24 hours.</span>
                  </div>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center justify-center w-full h-16 bg-brand-teal hover:bg-brand-teal-hover text-white font-bold text-xl rounded-full shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 min-h-[48px] outline-none focus-visible:ring-4 focus-visible:ring-brand-orange cursor-pointer active:scale-98"
                  >
                    {isSubmitting ? (
                      <span>Requesting Call Back...</span>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2.5 shrink-0" />
                        <span>Request a Call Back</span>
                      </>
                    )}
                  </button>
                )}
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
