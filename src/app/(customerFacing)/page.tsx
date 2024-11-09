import Footer from "../_components/Footer";
import EndSection from "./_components/EndSection";
import FamiliesSection from "./_components/FamiliesSection";
import HeroSection from "./_components/HeroSection";
import ReviewsSection from "./_components/ReviewsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FamiliesSection />
      <ReviewsSection />
      <EndSection />
      <Footer />
    </>
  );
}
