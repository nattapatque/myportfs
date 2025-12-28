import HeroSection from "../components/sectionComponents/heroSection";
import SkillSection from "../components/sectionComponents/skillSection";
import ExperienceSection from "../components/sectionComponents/experienceSection";
import ProjectsSection from "../components/sectionComponents/projectsSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section id="hero">
        <HeroSection />
      </section>

      <section id="skills">
        <SkillSection />
      </section>

      <section id="experience">
        <ExperienceSection />
      </section>

      <section id="projects">
        <ProjectsSection />
      </section>
    </div>
  );
}
