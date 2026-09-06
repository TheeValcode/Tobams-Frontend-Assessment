import React from "react";
import Image from "next/image";
import { FeatureListItem } from "./ui/FeatureListItem";

const individualTrainingFeatures = [
  "Leadership Development",
  "Soft Skills Development",
  "Industry Specific Knowledge",
  "Technical Skills Enhancement",
  "Time Management and Productivity",
  "Career Development",
];

export function IndividualTraining() {
  return (
    <section className="w-full bg-white py-12 md:py-16 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Image Column (Left on Desktop) */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative w-full h-[280px] sm:h-[360px] md:h-[400px] rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/9d2e7f745af0f275c5f457a871cad852f9dabd10.jpg"
                alt="Woman listening attentively during personalized training meeting"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Text Column (Right on Desktop) */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Personalised Individual Training
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Begin a journey of lifelong learning and professional development with Tobams Group&apos;s diverse range of training programs for individuals. From technical skills mastery to soft skills enhancement, our courses cover a wide spectrum of topics to meet the evolving needs of today&apos;s professionals.
            </p>

            {/* Bullet List with Lightning Bolt Icons */}
            <ul className="space-y-3 pt-2">
              {individualTrainingFeatures.map((item) => (
                <FeatureListItem key={item} text={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
