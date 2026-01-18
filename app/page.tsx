import { Landing } from "@/components/sections/Landing";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { Navigation } from "@/components/navigation/Navigation";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Landing />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
