import HeroSection from "../components/sectionComponents/heroSection";
import SkillSection from "../components/sectionComponents/skillSection";
import ExperienceSection from "../components/sectionComponents/experienceSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection></HeroSection>
      <SkillSection></SkillSection>
      <ExperienceSection></ExperienceSection>
    </div>
  );
}
