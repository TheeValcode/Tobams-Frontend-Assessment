import React from "react";
import Image from "next/image";
import { Button } from "./ui/Button";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-950 py-16 md:py-24 lg:py-28 min-h-[440px] flex items-center justify-center">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/3f9fee51039d846e8786883c446663724e497325.jpg"
          alt="Professional working on laptop analytics"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.45]"
        />
        {/* Subtle radial gradient overlay for focus */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        {/* Category Pill Tag */}
        <div className="inline-flex items-center">
          <span className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-white/10 backdrop-blur-md border border-white/20">
            WHAT WE DO
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Training and Development
        </h1>

        {/* Subtitle Paragraph */}
        <p className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto font-normal">
          Our comprehensive range of programs and resources is designed to enhance skills, broaden knowledge, and propel careers forward in today&apos;s ever-evolving landscape.
        </p>

        {/* Action CTA Button */}
        <div className="pt-2">
          <Button variant="outline" size="lg" className="border-brand-purple bg-brand-purple/40 hover:bg-brand-purple font-semibold text-white px-8">
            Book a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
