import React from "react";
import Image from "next/image";
import { Zap } from "lucide-react";

const managementPills = [
  "Enhanced Leadership Skills",
  "Improved Employee Engagement",
  "Stronger Organisational Culture",
  "Sustainable Growth",
];

export function ManagementDev() {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dark Purple Container Card */}
        <div className="bg-brand-purple-dark text-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-xl border border-brand-purple/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Image */}
            <div className="lg:col-span-6">
              <div className="relative w-full h-[280px] sm:h-[360px] md:h-[420px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/733872776ac31abdb528d87705fbbb7945a0d26d.jpg"
                  alt="Three professionals looking at a tablet together"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Right Text & Feature Pills */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
                Management Development Program
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-slate-200 leading-relaxed font-light">
                <p>
                  Tobams Group offers a comprehensive Management Development Program designed to equip corporate organisations with the high-performing leaders they need to thrive.
                </p>
                <p>
                  Our program includes workshops, seminars, coaching sessions, online courses, and experiential learning opportunities designed to improve leadership, strategic thinking, communication, and other essential managerial competencies for corporate organisations.
                </p>
              </div>

              {/* Stacked Rounded Feature Pills with Lightning Icons */}
              <div className="space-y-3 pt-2">
                {managementPills.map((pillText) => (
                  <div
                    key={pillText}
                    className="flex items-center gap-3 bg-white/10 hover:bg-white/15 backdrop-blur-xs transition-colors rounded-xl px-4 py-3 border border-white/10"
                  >
                    <span className="flex items-center justify-center shrink-0 w-6 h-6 rounded-full bg-white/20 text-white">
                      <Zap className="w-3.5 h-3.5 fill-current stroke-none text-white" />
                    </span>
                    <span className="text-sm sm:text-base font-medium text-white">
                      {pillText}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
