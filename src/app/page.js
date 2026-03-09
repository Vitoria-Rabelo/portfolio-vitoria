import Image from "next/image";
import HeroSession
 from "@/components/HeroSession";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] mx-auto px-12 py-4">
      <HeroSession/>
    </main>
  );
}
