import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import Services from "@/components/Services";
import SkillsSection from "@/components/SkillsSecton";
import WorkFlow from "@/components/WorkFlow";

import Image from "next/image";

export default function Home() {
  return (
    <div>

      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <SkillsSection></SkillsSection>
      <ProjectsSection></ProjectsSection>
      <Services></Services>
      <WorkFlow></WorkFlow>
    </div>
  );
}
