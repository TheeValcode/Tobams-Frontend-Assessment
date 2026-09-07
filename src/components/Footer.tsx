import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
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
    <footer className="w-full bg-[#1A0426] text-white">
      {/* Zone 1: CTA Banner */}
      <div className="bg-[#2A0538] border-b border-white/10 py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center md:text-left">
              <p className="text-xs md:text-sm text-slate-300">
                Ready to be a part of something extraordinary?
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
                Let&apos;s work together to create a difference
              </h2>
            </div>
            <Button variant="accent" size="md" className="shrink-0 font-semibold px-6 py-2.5 bg-[#6B1B54] hover:bg-[#822266] rounded-md">
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Zone 2: Main Navigation Links Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Column 1: Logo (Transparent), Blurb & Social Icons */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block">
              <Image
                src="/f110fd4f935cdabd8ef9636a8144267e4494e408.png"
                alt="Tobams Group Logo"
                width={240}
                height={70}
                className="h-12 sm:h-16 w-auto object-contain"
              />
            </Link>


            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light max-w-sm">
              Tobams Group is an innovative consultancy firm reshaping the future of tech talent development in Africa, specializing in talent acquisition, internships, and skill development with a global perspective.
            </p>

            {/* Circular Social Icons */}
            <div className="flex items-center gap-3 pt-1">
              {/* LinkedIn */}
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-white text-[#1A0426] flex items-center justify-center hover:bg-slate-200 transition-colors font-bold text-xs"
                aria-label="LinkedIn"
              >
                in
              </Link>
              {/* Instagram */}
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-white text-[#1A0426] flex items-center justify-center hover:bg-slate-200 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
              {/* X / Twitter */}
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-white text-[#1A0426] flex items-center justify-center hover:bg-slate-200 transition-colors font-bold text-xs"
                aria-label="X"
              >
                𝕏
              </Link>
            </div>
          </div>


          {/* Column 2: What We Do */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-bold text-white tracking-wide">
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
            <h3 className="text-sm font-bold text-white tracking-wide">
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
            <h3 className="text-sm font-bold text-white tracking-wide">
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

        {/* Zone 3: Registered Offices & Contact Cards */}
        <div className="bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 2 Cols: Registered Offices */}
            <div className="lg:col-span-8 space-y-4">
              <h4 className="text-sm font-bold text-white">Registered Offices</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-300 border-r-0 lg:border-r border-white/10 pr-0 lg:pr-6">
                {/* UK Address */}
                <div className="space-y-1">
                  <p className="font-semibold text-red-400">United Kingdom</p>
                  <p>07451196 (Registered by Company House)</p>
                  <p>Vine Cottages, 215 North Street, Romford, Essex, United Kingdom, RM1 4QA</p>
                </div>

                {/* Nigeria Address */}
                <div className="space-y-1">
                  <p className="font-semibold text-red-400">Nigeria</p>
                  <p>RC 1048722 (Registered by the Corporate Affairs Commission)</p>
                  <p>4, Muaz Close, Angwar-Rimi</p>
                </div>
              </div>
            </div>

            {/* Right Col: Contact Information */}
            <div className="lg:col-span-4 space-y-4">
              <h4 className="text-sm font-bold text-white">Contact Information</h4>
              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-red-400 shrink-0" />
                  <span>theteam@tobamsgroup.com</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-red-400 shrink-0" />
                  <span>+447886600748</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Zone 4: Copyright & Legal Links Bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>Copyright © Tobams Group, 2024. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="#" className="hover:text-white transition-colors">
              Terms and Conditions
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Cookies Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

