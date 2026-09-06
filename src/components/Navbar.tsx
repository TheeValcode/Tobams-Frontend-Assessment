"use me";
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, User, Menu, X } from "lucide-react";
import { Button } from "./ui/Button";

interface NavLinkItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  active?: boolean;
}

const navLinks: NavLinkItem[] = [
  { label: "About", href: "#", hasDropdown: true, active: true },
  { label: "What We Do", href: "#", hasDropdown: true },
  { label: "Jobs", href: "#", hasDropdown: true },
  { label: "Projects", href: "#" },
  { label: "TG Academy", href: "#" },
  { label: "Strategic Partnership", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Book a Consultation", href: "#" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-xs">
      {/* Top Header Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/f110fd4f935cdabd8ef9636a8144267e4494e408.png"
            alt="Tobams Group Logo"
            width={165}
            height={48}
            priority
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Top Right Actions (Account & CTA) */}
        <div className="hidden md:flex items-center gap-3">
          {/* Account Dropdown Pill Button */}
          <div className="relative">
            <button
              onClick={() => setAccountDropdownOpen(!accountDropdownOpen)}
              className="inline-flex items-center gap-2 bg-brand-purple text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand-purple-light transition-colors"
              aria-expanded={accountDropdownOpen}
              aria-haspopup="true"
            >
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                <User className="w-3.5 h-3.5 text-white" />
              </div>
              <span>Account</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${accountDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {accountDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-slate-100 py-1 z-50">
                <Link href="#" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
                  Profile Settings
                </Link>
                <Link href="#" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
                  My Courses
                </Link>
                <div className="border-t border-slate-100 my-1"></div>
                <Link href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-slate-50">
                  Sign Out
                </Link>
              </div>
            )}
          </div>

          {/* Take Assessment CTA Button */}
          <Button variant="accent" size="md">
            Take Assessment
          </Button>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Main Navigation Row (Desktop) */}
      <div className="hidden md:block border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-6 lg:space-x-8 py-2.5 overflow-x-auto scrollbar-none">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group shrink-0">
                <Link
                  href={link.href}
                  className={`inline-flex items-center gap-1.5 py-1 text-sm font-medium transition-colors ${
                    link.active
                      ? "text-brand-purple border-b-2 border-brand-purple font-semibold"
                      : "text-slate-700 hover:text-brand-purple"
                  }`}
                >
                  <span>{link.label}</span>
                  {link.hasDropdown && (
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-purple transition-colors" />
                  )}
                </Link>
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-4">
          <nav className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`flex items-center justify-between px-3 py-2 rounded-md text-base font-medium ${
                  link.active
                    ? "bg-brand-pink-bg text-brand-purple font-semibold"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>{link.label}</span>
                {link.hasDropdown && <ChevronDown className="w-4 h-4 text-slate-400" />}
              </Link>
            ))}
          </nav>
          <div className="border-t border-slate-100 pt-4 space-y-2">
            <Button variant="primary" className="w-full justify-center">
              Account
            </Button>
            <Button variant="accent" className="w-full justify-center">
              Take Assessment
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
