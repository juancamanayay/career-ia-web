import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import FeaturedCareers from "../components/careers/FeaturedCareers";
import CtaSection from "../components/home/CtaSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturedCareers />
      <CtaSection />
    </>
  );
}
