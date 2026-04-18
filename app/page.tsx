// Preview Deployment Test
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";
import { Services } from "@/sections/Services";
import { Projects } from "@/sections/Projects";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
