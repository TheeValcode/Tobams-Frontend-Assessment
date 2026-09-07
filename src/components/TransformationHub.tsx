import React from "react";
import Image from "next/image";

export function TransformationHub() {
  return (
    <section className="w-full bg-white py-12 md:py-16 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Soft Pink Tinted Container Card */}
        <div className="relative overflow-hidden bg-brand-pink-bg rounded-3xl p-6 sm:p-10 md:p-12 border border-brand-purple/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4">
              <p className="text-sm md:text-base font-semibold italic text-brand-purple">
                Learning With Our CEO:
              </p>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-purple tracking-tight italic">
                Transformation Hub With Jite Newton
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal pt-2">
                Transformation Hub with Jite Newton is a flagship webinar series curated by the CEO, Dr. Jite Newton. Designed to elevate career trajectories and leadership capabilities, this exclusive event offers invaluable insights and strategies for personal and professional growth. Whether you&apos;re seeking to advance your career or enhance your leadership skills, the Transformation Hub provides a transformative learning experience to unlock your full potential and drive success in your endeavours.
              </p>
            </div>

            {/* Right Side CEO Portrait */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-lg border-2 border-white">
                <Image
                  src="/f83c7998e33b33da8cc0b1cf834df42b459ef661.jpg"
                  alt="Dr. Jite Newton - CEO of Tobams Group"
                  fill
                  sizes="(max-width: 768px) 224px, 256px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
