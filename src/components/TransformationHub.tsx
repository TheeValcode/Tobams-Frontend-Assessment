import React from "react";
import Image from "next/image";
import { ArrowUpRight, Zap } from "lucide-react";
import { Button } from "./ui/Button";

const ceoWebinarFeatures = [
  "Strategic Career Guidance",
  "Leadership Development",
  "CV Development",
  "Sustainability Leadership",
  "Communication Skills",
  "Business Model",
];

export function TransformationHub() {
  return (
    <section className="w-full bg-white py-12 md:py-16 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Soft Pink Container Card with exact #FCD9DD background */}
        <div className="relative overflow-hidden bg-[#FCD9DD] rounded-3xl p-6 sm:p-10 md:p-12 border border-brand-purple/10">
          <div className="space-y-6">

            {/* Header Area */}
            <div className="space-y-2">
              <p className="text-sm md:text-base font-medium italic text-blue-600">
                Learning With Our CEO:
              </p>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-purple tracking-tight italic">
                Transformation Hub With Jite Newton
              </h2>

              <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal pt-2 max-w-5xl">
                Transformation Hub with Jite Newton is a flagship webinar series curated by the CEO, Dr. Jite Newton. Designed to elevate career trajectories and leadership capabilities, this exclusive event offers invaluable insights and strategies for personal and professional growth. Whether you&apos;re seeking to advance your career or enhance your leadership skills, the Transformation Hub provides a transformative learning experience to unlock your full potential and drive success in your endeavours.
              </p>
            </div>

            {/* Bottom Grid: Left Image & Right Bullet Grid Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-4">
              {/* Left Image */}
              <div className="lg:col-span-6">
                <div className="relative w-full h-[280px] sm:h-[340px] rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src="/f83c7998e33b33da8cc0b1cf834df42b459ef661.jpg"
                    alt="Dr. Jite Newton Transformation Hub Webinar"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* Right Side Bullet Card with #F5EEF8/White pill boxes */}
              <div className="lg:col-span-6 bg-white/40 backdrop-blur-xs rounded-2xl p-6 flex flex-col justify-between space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {ceoWebinarFeatures.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 bg-white rounded-xl px-4 py-3 shadow-2xs border border-white/80"
                    >
                      <Zap className="w-4 h-4 text-brand-purple shrink-0 stroke-brand-purple fill-none stroke-[2]" />
                      <span className="text-xs sm:text-sm font-medium text-slate-800">
                        {item}
                      </span>
                    </div>
                  ))}

                </div>

                <div>
                  <Button
                    variant="primary"
                    size="md"
                    className="bg-brand-purple hover:bg-brand-purple-dark px-6 font-medium text-sm rounded-md"
                    icon={<ArrowUpRight className="w-4 h-4 ml-1" />}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

