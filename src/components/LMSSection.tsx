import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/Button";

const coursesList = [
  "Business Analysis",
  "Design Thinking",
  "Effective Communication",
  "Entrepreneurship",
  "Career Development",
  "Business Model",
];

export function LMSSection() {
  return (
    <section className="w-full bg-[#E9E2E7] py-16 md:py-24 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Circular Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-xl shrink-0">
              <Image
                src="/03f9d7af15f0ea1c24958b1735583ae7eab882f1.jpg"
                alt="Corporate professionals smiling"
                fill
                sizes="(max-width: 768px) 320px, 384px"
                className="object-cover object-center"
              />
            </div>
          </div>


          {/* Right Column: Title, Description Box, Bullet Grid, CTA */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-purple tracking-tight">
              Learning Management System
            </h2>

            {/* Content Container Card with exact #DACDD7 background */}
            <div className="bg-[#DACDD7] rounded-2xl p-6 sm:p-8 space-y-6 border border-brand-purple/10 shadow-xs">
              <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
                TG Academy is a hub of knowledge and skill-building resources designed to empower tech talents on their learning journey. From technical courses covering the latest programming languages and development frameworks to soft skills training in leadership, effective communication and project management, TG Academy offers a wide range of courses to cater to diverse learning needs. With accessible and interactive learning materials, individuals can enhance their skills and stay ahead in today&apos;s competitive tech landscape.
              </p>

              {/* Courses Bullet List */}
              <div className="space-y-3 pt-2">
                <p className="text-sm font-semibold text-brand-purple">
                  Some of our courses include:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                  {coursesList.map((course) => (
                    <div key={course} className="flex items-center gap-2 text-xs sm:text-sm text-slate-800 font-medium">
                      <span className="w-2 h-2 rounded-full bg-brand-purple shrink-0" />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Learn More Action Button */}
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
    </section>
  );
}

