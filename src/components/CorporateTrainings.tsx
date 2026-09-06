import React from "react";
import Image from "next/image";
import { FeatureListItem } from "./ui/FeatureListItem";

const corporateTrainingFeatures = [
  "Leadership Training",
  "Strategic Planning and Implementation",
  "Project Management",
  "Sustainability Training",
  "Customised Training",
];

export function CorporateTrainings() {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text Column */}
          <div className="lg:col-span-6 space-y-5">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Corporate Trainings
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Empower your team with our customised Corporate Training programs designed to address the unique needs and objectives of your organisation. Our expert facilitators work closely with your team to deliver tailored learning experiences that align with your company&apos;s goals and values.
            </p>

            {/* Bullet List with Lightning Bolt Icons */}
            <ul className="space-y-3 pt-2">
              {corporateTrainingFeatures.map((item) => (
                <FeatureListItem key={item} text={item} />
              ))}
            </ul>
          </div>

          {/* Image Column */}
          <div className="lg:col-span-6">
            <div className="relative w-full h-[280px] sm:h-[360px] md:h-[400px] rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/e5e1262308c38e62b50da6013b0ae330a3dfab22.jpg"
                alt="Corporate trainer presenting to team in modern office"
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
