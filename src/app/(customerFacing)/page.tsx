import EndSection from "./_components/EndSection";
import FamiliesSection from "./_components/FamiliesSection";
import HeroSection from "./_components/HeroSection";
import ReviewsSection from "./_components/ReviewsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simple Revit | Home",
  description: "Simple Revit, Home",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <FamiliesSection />
      <ReviewsSection />
      <EndSection />
    </>
  );
}
