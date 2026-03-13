import Image from "next/image";
import HeroSession from "@/components/HeroSession";
import Navbar from "@/components/Navbar";
import AboutSession from "@/components/AboutSession";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar/>
      <div className="container mx-auto px-12 py-4">
        <HeroSession/>
        <AboutSession/>
        <ProjectsSection/>
      </div>
    </main>
  );
}
