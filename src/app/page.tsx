import HeroSection from "../components/homeComponents/HeroSection";
import AboutSection from "../components/homeComponents/AboutSection";
import ExperienceSection from "../components/homeComponents/ExperienceSection";

export default function Home() {
  return (
    <div className="flex flex-col bg-blue2 space-y-40 pb-20">
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <ExperienceSection></ExperienceSection>
    </div>
  );
}
