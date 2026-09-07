import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/Button";

const consultantPills = [
  {
    title: "Expert-Led Learning",
    description:
      "Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis.",
  },
  {
    title: "Interactive Workshops",
    description:
      "Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights.",
  },
  {
    title: "Comprehensive Curriculum",
    description:
      "Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.",
  },
  {
    title: "Global Recognition",
    description:
      "You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition.",
  },
];

export function TrainingConsultant() {
  return (
    <>
      <section className="w-full bg-[#E9E2E7] py-12 md:py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Top Header */}
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-purple tracking-tight">
              Training The Consultant
            </h2>
            <p className="text-sm sm:text-base font-semibold text-brand-purple">
              Maximise Your Potential as a Certified Trainer:
            </p>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal pt-1 max-w-5xl">
              With the help of our Training Consultants program, take a revolutionary step toward becoming a distinguished certified training consultant. Learn from professionals in the field, immerse yourself in a thorough curriculum, and hone your training methods through interactive workshops. Participating in our program will enable you to gain expertise in diverse courses while also developing the abilities to mentor and encourage others in their career advancement.
            </p>
          </div>

          {/* Dark Purple Container Box with 4 Feature Grid Items */}
          <div className="bg-brand-purple-dark text-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {consultantPills.map((item) => (
                <div key={item.title} className="space-y-2">
                  <h3 className="text-base font-bold text-white tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Learn More Button */}
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
      </section>

      {/* Accelerate Growth CTA Banner Section with White Background */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-purple-dark text-white rounded-2xl p-8 sm:p-10 text-center space-y-6 shadow-xl">
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-white max-w-2xl mx-auto leading-snug">
              Want to accelerate professional growth and development at your organisation? <br />
              <span className="text-slate-200">See how we can help.</span>
            </h3>
            <div>
              <button className="bg-white text-brand-purple hover:bg-slate-100 font-semibold px-6 py-2.5 rounded-md text-sm transition-colors shadow-xs">
                Book a Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}



