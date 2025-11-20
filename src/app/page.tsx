import HeroSection from "../components/homeComponents/HeroSection";

export default function Home() {
  return (
    <div className="flex flex-col bg-blue2 space-y-40">
      <HeroSection></HeroSection>
      {/* <AboutSection></AboutSection>
      <ExperienceSection></ExperienceSection> */}
    </div>
  );
}
