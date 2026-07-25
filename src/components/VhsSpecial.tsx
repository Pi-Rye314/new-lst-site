"use client";

import React, { useState } from "react";
import { Film, Sparkles, Shield, Gift, Phone, Info, Plus, Minus } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { businessConfig } from "@/config/business";

export default function VhsSpecial() {
  const vhs = businessConfig.vhsService;
  const [tapeCount, setTapeCount] = useState(5);
  const [addonOption, setAddonOption] = useState<"download" | "usb" | "dvd">("download");

  const tapePrice = 15.99;
  const addonPrices = {
    download: 0,
    usb: 10.00,
    dvd: 5.00
  };
  const totalPrice = (tapeCount * tapePrice) + addonPrices[addonOption];

  const handleIncrement = () => setTapeCount((c) => Math.min(c + 1, 99));
  const handleDecrement = () => setTapeCount((c) => Math.max(c - 1, 1));

  return (
    <section id="vhs-special" className="py-16 bg-brand-tan/10 relative overflow-hidden">
      {/* Decorative Warm Backlighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-orange/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <SectionHeader
          tag="Save Your Memories"
          title={vhs.title}
          description="VHS tapes decay physically over time, eventually turning into permanent static. Let's rescue your precious family memories before they're gone forever."
          headingLevel="h1"
        />

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
          
          {/* Left Column: Info, Lifespan warning, Features (7 Columns) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Decaying timeline warning */}
            <div className="glass-card rounded-3xl p-6 md:p-8 border border-brand-teal-light/10 shadow-sm relative overflow-hidden bg-white">
              <div className="flex items-center space-x-3 mb-4">
                <Info className="w-6 h-6 text-brand-orange shrink-0 animate-pulse" />
                <h4 className="font-serif font-extrabold text-2xl text-brand-teal">
                  The Lifespan of a VHS Tape
                </h4>
              </div>
              
              <p className="text-brand-teal-light text-lg leading-relaxed mb-6 font-medium">
                Unlike digital files, magnetic tape degrades constantly. Every day your tapes spend in the attic or closet makes them more brittle.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-brand-cream/40 rounded-xl border border-brand-teal-light/5">
                  <div className="text-[10px] sm:text-xs font-bold text-emerald-700 bg-emerald-50 rounded-full px-2.5 py-0.5 inline-block mb-2 uppercase tracking-wider">Years 0 - 10</div>
                  <p className="text-base font-bold text-brand-teal">Good Quality</p>
                  <p className="text-xs sm:text-sm text-brand-teal-light mt-1.5">Colors are bright, audio is stable.</p>
                </div>
                
                <div className="p-4 bg-brand-cream/40 rounded-xl border border-brand-teal-light/5">
                  <div className="text-[10px] sm:text-xs font-bold text-amber-700 bg-amber-50 rounded-full px-2.5 py-0.5 inline-block mb-2 uppercase tracking-wider">Years 10 - 25</div>
                  <p className="text-base font-bold text-brand-teal">Fading & Jitter</p>
                  <p className="text-xs sm:text-sm text-brand-teal-light mt-1.5">Color bleeding, minor tracking glitches.</p>
                </div>

                <div className="p-4 bg-red-50/40 rounded-xl border border-red-100">
                  <div className="text-[10px] sm:text-xs font-bold text-red-700 bg-red-50 rounded-full px-2.5 py-0.5 inline-block mb-2 uppercase tracking-wider">Years 25+ (Today)</div>
                  <p className="text-base font-bold text-red-900">Critical Risk</p>
                  <p className="text-xs sm:text-sm text-red-750 mt-1.5">Tape brittleness, mold, permanent tracking static.</p>
                </div>
              </div>
            </div>

            {/* Description details */}
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-serif font-extrabold text-brand-teal leading-tight">
                {vhs.heading}
              </h3>
              <p className="text-lg text-brand-teal-light font-medium leading-relaxed">
                {vhs.description}
              </p>
            </div>

            {/* Sub-features Grid (2 Features) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Feature 1: Tape Stabilization */}
              <div className="glass-card rounded-2xl p-6 border-l-4 border-brand-teal flex flex-col justify-between bg-white hover:border-brand-orange hover:shadow-md transition-all duration-200 cursor-default">
                <div>
                  <div className="flex items-center space-x-3 mb-3">
                    <Sparkles className="w-5 h-5 text-brand-orange shrink-0" />
                    <span className="font-serif font-bold text-base text-brand-teal">{vhs.hardwareBridge.name}</span>
                  </div>
                  <p className="text-sm text-brand-teal-light font-semibold leading-relaxed">
                    {vhs.hardwareBridge.description}
                  </p>
                </div>
                <div className="mt-4">
                  <span className="inline-block text-xs font-bold bg-brand-teal text-white px-3 py-1 rounded-full uppercase tracking-wider">
                    {vhs.hardwareBridge.badge}
                  </span>
                </div>
              </div>

              {/* Feature 2: No Hostage Promise */}
              <div className="glass-card rounded-2xl p-6 border-l-4 border-brand-orange flex flex-col justify-between bg-white hover:border-brand-orange hover:shadow-md transition-all duration-200 cursor-default">
                <div>
                  <div className="flex items-center space-x-3 mb-3">
                    <Shield className="w-5 h-5 text-brand-orange shrink-0" />
                    <span className="font-serif font-bold text-base text-brand-teal">{vhs.promise.title}</span>
                  </div>
                  <p className="text-sm text-brand-teal-light font-semibold leading-relaxed">
                    {vhs.promise.description}
                  </p>
                </div>
                <div className="mt-4">
                  <span className="inline-block text-xs font-bold bg-brand-orange text-white px-3 py-1 rounded-full uppercase tracking-wider">
                    Free Pick-up
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Cassette CSS Art & Calculator (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col items-center space-y-8">


            {/* Calculator Card */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 md:p-10 border border-brand-teal-light/15 bg-white shadow-lg relative overflow-hidden flex flex-col justify-between w-full">
              {/* Card Header */}
              <div>
                <h4 className="text-xl sm:text-2xl font-serif font-extrabold text-brand-teal mb-2">
                  Estimate Your Conversion
                </h4>
                <p className="text-sm sm:text-base text-brand-teal-light leading-relaxed mb-6 font-medium">
                  Select how many tapes you have and choose your preferred delivery format to calculate your total estimate.
                </p>

                {/* Counter Selector */}
                <div className="flex items-center justify-center space-x-6 py-4 bg-brand-cream/40 border border-brand-teal-light/10 rounded-2xl mb-6">
                  <button
                    onClick={handleDecrement}
                    className="w-12 h-12 bg-white hover:bg-brand-cream border-2 border-brand-teal-light/15 hover:border-brand-orange text-brand-teal hover:text-brand-orange rounded-full flex items-center justify-center transition-all cursor-pointer select-none"
                    aria-label="Decrease tape count"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <div className="text-center min-w-[70px]">
                    <span className="text-4xl font-serif font-black text-brand-teal">{tapeCount}</span>
                    <p className="text-xs font-bold text-brand-teal-light uppercase tracking-wider mt-0.5">Tapes</p>
                  </div>
                  <button
                    onClick={handleIncrement}
                    className="w-12 h-12 bg-white hover:bg-brand-cream border-2 border-brand-teal-light/15 hover:border-brand-orange text-brand-teal hover:text-brand-orange rounded-full flex items-center justify-center transition-all cursor-pointer select-none"
                    aria-label="Increase tape count"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>

                {/* Media Format Addons */}
                <div className="mb-6 space-y-2.5">
                  <span className="block text-xs sm:text-sm font-bold text-brand-teal-light uppercase tracking-wider">
                    Format & Delivery Option
                  </span>
                  
                  <div className="grid grid-cols-1 gap-2.5">
                    {[
                      { id: "download", label: "Direct MP4 Download", desc: "Fastest delivery via private secure link", price: 0 },
                      { id: "usb", label: "USB Flash Drive", desc: "All files loaded onto a physical USB drive", price: 10.00 },
                      { id: "dvd", label: "DVD Disc Copy", desc: "Traditional DVD playable on home players", price: 5.00 }
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setAddonOption(opt.id as "download" | "usb" | "dvd")}
                        className={`flex items-center justify-between p-3.5 rounded-xl border-2 text-left transition-all cursor-pointer select-none ${
                          addonOption === opt.id
                            ? "border-brand-orange bg-brand-cream/15 shadow-sm"
                            : "border-brand-teal-light/10 hover:border-brand-teal-light/20 bg-white"
                        }`}
                      >
                        <div className="pr-2">
                          <span className="block text-sm sm:text-base font-bold text-brand-teal">{opt.label}</span>
                          <span className="block text-xs sm:text-sm text-brand-teal-light mt-0.5">{opt.desc}</span>
                        </div>
                        <span className={`text-xs sm:text-sm font-extrabold shrink-0 ml-2 ${opt.price === 0 ? "text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full" : "text-brand-teal"}`}>
                          {opt.price === 0 ? "FREE" : `+$${opt.price.toFixed(2)}`}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Pricing Summary Details */}
                <div className="space-y-3.5 mb-6 text-base text-brand-teal">
                  <div className="flex justify-between items-center py-2 border-b border-brand-teal-light/5">
                    <span className="font-medium text-brand-teal-light">Price per tape</span>
                    <span className="font-bold text-base sm:text-lg">${tapePrice.toFixed(2)}</span>
                  </div>
                  {addonPrices[addonOption] > 0 && (
                    <div className="flex justify-between items-center py-2 border-b border-brand-teal-light/5">
                      <span className="font-medium text-brand-teal-light">Add-on media cost</span>
                      <span className="font-bold text-base sm:text-lg">+${addonPrices[addonOption].toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center py-2 border-b border-brand-teal-light/5">
                    <span className="font-medium text-brand-teal-light">Pick-up & Return (St. Marys)</span>
                    <span className="font-bold text-brand-orange text-[10px] sm:text-xs uppercase tracking-widest bg-orange-50 px-2.5 py-1 rounded-full">FREE</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-serif font-extrabold text-base sm:text-lg">Estimated Total</span>
                    <span className="text-2xl sm:text-3xl font-serif font-black text-brand-teal">${totalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Action Booking */}
              <div className="space-y-4">
                <a
                  href={`tel:${businessConfig.contact.phone}`}
                  className="flex items-center justify-center w-full h-14 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-200 min-h-[48px] active:scale-98"
                >
                  <Phone className="w-5 h-5 mr-3 shrink-0 text-white animate-pulse" />
                  <span>Book for {tapeCount} {tapeCount === 1 ? "Tape" : "Tapes"}</span>
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Step-by-Step Timeline Section */}
        <div className="mt-20 border-t border-brand-teal-light/10 pt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-serif font-extrabold text-brand-teal">
              How the Memory Rescue Process Works
            </h3>
            <p className="text-base text-brand-teal-light mt-2 max-w-2xl mx-auto font-medium">
              We make the entire digitization process safe, simple, and completely transparent from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Free Local Pickup",
                desc: "We drive directly to your home in St. Marys to collect your VHS tapes safely. No shipping, no risk.",
                icon: Shield
              },
              {
                step: "2",
                title: "Stabilize & Clean",
                desc: "We run your tapes through professional stabilization units to fix jitter and static on modern flat screens.",
                icon: Sparkles
              },
              {
                step: "3",
                title: "Digitize to MP4",
                desc: "We capture footage in modern high-quality formats. Enjoy them on your smart TV, tablet, phone, or laptop.",
                icon: Film
              },
              {
                step: "4",
                title: "Delivery & Payment",
                desc: "We hand-deliver your original tapes and new digital media back to you. Pay upon local delivery.",
                icon: Gift
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="glass-card bg-white rounded-2xl p-6 sm:p-8 border border-brand-teal-light/10 relative hover:border-brand-orange transition-all duration-200">
                  <div className="absolute -top-4 -left-4 w-9 h-9 rounded-full bg-brand-orange text-white font-bold flex items-center justify-center text-sm shadow-sm">
                    {item.step}
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-brand-cream/60 text-brand-teal flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif font-bold text-xl text-brand-teal mb-2">{item.title}</h4>
                  <p className="text-sm sm:text-base text-brand-teal-light leading-relaxed font-semibold">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </section>
  );
}
