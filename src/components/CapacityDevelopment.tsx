import React from "react";
import Image from "next/image";
import { FeatureListItem } from "./ui/FeatureListItem";

const capacityFeatures = [
  { text: "Tailored Training Programs", highlighted: true },
  { text: "Expert-Led Workshops", highlighted: false },
  { text: "Personalized Mentorship", highlighted: false },
  { text: "Technical Skills Enhancement", highlighted: false },
  { text: "Collaborative Learning Environment", highlighted: false },
  { text: "Ongoing Support and Resources", highlighted: false },
];

export function CapacityDevelopment() {
  return (
    <section className="w-full bg-white py-12 md:py-16 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text Column (Left) */}
          <div className="lg:col-span-6 space-y-5">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Capacity Development
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              At Tobams Group, we empower individuals and organizations through tailored training programs, expert-led workshops, and personalized mentorship. We are dedicated to providing a comprehensive suite of benefits designed to foster your development and success:
            </p>

            {/* Bullet List with Highlighted Option */}
            <ul className="space-y-2.5 pt-2">
              {capacityFeatures.map((item) => (
                <FeatureListItem
                  key={item.text}
                  text={item.text}
                  highlighted={item.highlighted}
                />
              ))}
            </ul>
          </div>

          {/* Image Column (Right) */}
          <div className="lg:col-span-6">
            <div className="relative w-full h-[280px] sm:h-[360px] md:h-[400px] rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/5c5a12abda242a3deb8ee7eb2002146f0ec1ea57.jpg"
                alt="Man pointing to whiteboard charts during workshop"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
