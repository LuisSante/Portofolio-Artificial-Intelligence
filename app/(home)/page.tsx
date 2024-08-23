import { LandingPage } from "@/components/page-ui/LandingPage";
import { SkillsSection } from "@/components/page-ui/SkillsSection";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <LandingPage />
      <SkillsSection />
    </main>
  );
}
