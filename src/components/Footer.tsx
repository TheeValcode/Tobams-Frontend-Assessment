import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/Button";

const whatWeDoLinks = [
  "Sustainability Services",
  "Strategy Planning and Implementation",
  "Tech Talent Solutions",
  "Training and Development",
  "IT Consulting Services",
  "Social Impact",
  "Talent Recruitment",
];

const companyLinks = [
  "About",
  "Jobs",
  "Projects",
  "Our Founder",
  "Business Model",
  "The Team",
  "Contact Us",
  "Blog",
  "FAQs",
  "Testimonials",
];

const solutionLinks = [
  "Tobams Group Academy",
  "Help a Tech Talent",
  "Campus Ambassadors Program",
  "Join Our Platform",
  "Pricing",
  "Book a Consultation",
  "Join Our Slack Community",
];

export function Footer() {
  return (
    <footer className="w-full bg-[#1A0A26] text-white">
      {/* Zone 1: CTA Banner */}
      <div className="bg-[#2E0B42] border-b border-white/10 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <p className="text-sm md:text-base italic text-pink-200">
                Ready to be a part of something extraordinary?
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
                Let&apos;s work together to create a difference
              </h2>
            </div>
            <Button variant="accent" size="lg" className="shrink-0 font-semibold px-8 py-3">
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Zone 2: Main Navigation Links Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Column 1: Logo & Blurb */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block bg-white p-2 rounded-lg">
              <Image
                src="/f110fd4f935cdabd8ef9636a8144267e4494e408.png"
                alt="Tobams Group Logo"
                width={150}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-slate-300 leading-relaxed font-light">
              Tobams Group is an innovative consultancy firm committed to empowering tech talents, driving business growth, and offering sustainability solutions globally.
            </p>
          </div>

          {/* Column 2: What We Do */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-base font-semibold text-white tracking-wide">
              What We Do
            </h3>
            <ul className="space-y-2 text-xs md:text-sm text-slate-300">
              {whatWeDoLinks.map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-pink-300 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-base font-semibold text-white tracking-wide">
              Company
            </h3>
            <ul className="space-y-2 text-xs md:text-sm text-slate-300">
              {companyLinks.map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-pink-300 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Solution */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-base font-semibold text-white tracking-wide">
              Solution
            </h3>
            <ul className="space-y-2 text-xs md:text-sm text-slate-300">
              {solutionLinks.map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-pink-300 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Zone 3: Registered Offices Cards */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs md:text-sm text-slate-300">
            {/* UK Address */}
            <div className="space-y-1">
              <p className="font-semibold text-white">United Kingdom</p>
              <p>07451196</p>
              <p>Vine Cottages, 215 North Street, Romford, Essex, RM1 4QA</p>
            </div>

            {/* Nigeria Address */}
            <div className="space-y-1">
              <p className="font-semibold text-white">Nigeria</p>
              <p>RC 1048722</p>
              <p>4, Muaz Close, Angwar-Rimi, Kaduna State</p>
            </div>

            {/* Contact Info */}
            <div className="space-y-1">
              <p className="font-semibold text-white">Contact Information</p>
              <p>theteam@tobamsgroup.com</p>
              <p>+447886600748</p>
            </div>
          </div>
        </div>

        {/* Zone 4: Copyright & Legal Links Bar */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>Copyright © Tobams Group, 2024. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <Link href="#" className="hover:text-white transition-colors">
              Terms and Conditions
            </Link>
            <span>•</span>
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="#" className="hover:text-white transition-colors">
              Cookies Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
