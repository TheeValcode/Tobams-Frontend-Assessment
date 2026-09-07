"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  text: string;
}

const testimonialsData: TestimonialItem[] = [
  {
    id: 1,
    name: "Aisha Yusuf",
    role: "Founder",
    company: "CraftHub NG",
    avatar: "/08e455fe112b5aa889f8276e41832a747a9bda45.png",
    text: "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
  },
  {
    id: 2,
    name: "John Davies",
    role: "Marketing Manager",
    company: "E-Commerce Emporium",
    avatar: "/08e455fe112b5aa889f8276e41832a747a9bda45 (1).png",
    text: "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
  },
  {
    id: 3,
    name: "Chinonso Nwankwo",
    role: "HR Director",
    company: "FutureTech Solutions",
    avatar: "/1994067c3ac3d40d2341bd81bd13e2e7f755bf0d.png",
    text: "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section className="w-full bg-white py-16 md:py-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Heading */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Testimonials
          </h2>
        </div>

        {/* Testimonials Cards Slider/Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 shadow-sm border border-red-100/60 border-l-4 border-l-brand-red flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
            >
              {/* User Avatar & Info */}
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-slate-100">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{item.name}</h3>
                  <p className="text-xs text-slate-500">
                    {item.role}, {item.company}
                  </p>
                </div>
              </div>

              {/* Quote Text */}
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Carousel Navigation Buttons */}
        <div className="flex justify-end gap-2 pt-2">
          <button
            onClick={handlePrev}
            className="w-9 h-9 rounded-full bg-brand-pink-bg hover:bg-brand-purple/10 flex items-center justify-center text-brand-purple transition-colors focus:outline-none"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="w-9 h-9 rounded-full bg-brand-pink-bg hover:bg-brand-purple/10 flex items-center justify-center text-brand-purple transition-colors focus:outline-none"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
