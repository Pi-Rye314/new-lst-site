"use client";

import React from "react";

interface SectionHeaderProps {
  tag: string;
  title: string;
  description?: string;
  className?: string;
  isPrintHide?: boolean;
  headingLevel?: "h1" | "h2";
}

export default function SectionHeader({
  tag,
  title,
  description,
  className = "",
  isPrintHide = true,
  headingLevel = "h2"
}: SectionHeaderProps) {
  const Heading = headingLevel;

  return (
    <div
      className={`text-center max-w-3xl mx-auto mb-16 ${
        isPrintHide ? "print-hide" : ""
      } ${className}`}
    >
      <span className="text-base font-bold text-brand-teal-light uppercase tracking-widest mb-3 block">
        {tag}
      </span>
      <Heading className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-brand-teal tracking-tight leading-tight">
        {title}
      </Heading>
      <div className="w-24 h-1 bg-brand-orange mx-auto mt-6 rounded-full" />
      {description && (
        <p className="text-lg sm:text-xl text-brand-teal-light font-medium mt-4 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
