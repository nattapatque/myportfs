import HeroSection from "../components/sectionComponents/heroSection";
import SkillSection from "../components/sectionComponents/skillSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection></HeroSection>
      <SkillSection></SkillSection>
    </div>
  );
}
