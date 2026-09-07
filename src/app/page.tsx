import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { LMSSection } from "@/components/LMSSection";
import { CorporateTrainings } from "@/components/CorporateTrainings";
import { IndividualTraining } from "@/components/IndividualTraining";
import { CapacityDevelopment } from "@/components/CapacityDevelopment";
import { ManagementDev } from "@/components/ManagementDev";
import { TransformationHub } from "@/components/TransformationHub";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <LMSSection />
        <CorporateTrainings />
        <IndividualTraining />
        <CapacityDevelopment />
        <ManagementDev />
        <TransformationHub />
      </main>
      <Footer />
    </div>
  );
}
