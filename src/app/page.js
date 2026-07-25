import Image from "next/image";
import HeroSession from "@/components/HeroSession";
import Navbar from "@/components/Navbar";
import AboutSession from "@/components/AboutSession";
import ProjectsSection from "@/components/ProjectsSection";
import EmailSection from "@/components/EmailSection";
import Footer from "@/components/Footer";
import KnowledgesSection from "@/components/KnowledgesSection";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground cursor-none transition-colors duration-300">
      <CustomCursor />
      <Navbar />
      <div className="container mx-auto px-12 py-4">
        <HeroSession />
        <AboutSession />
        <KnowledgesSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
