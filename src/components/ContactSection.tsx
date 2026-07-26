import React from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock 
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { businessConfig } from "@/config/business";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-brand-cream relative overflow-hidden">
      {/* Decorative Warm Blur Blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-tan/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Reusable Section Header */}
        <SectionHeader
          tag="Contact Ryan"
          title="Let's Solve Your Technology Troubles"
          description="Call, text, or email me directly. I will get back to you promptly to schedule your friendly, stress-free in-home visit."
        />

        {/* Contact Content - Centered Layout */}
        <div className="max-w-3xl mx-auto space-y-8">
          
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
      </div>
    </section>
  );
}
