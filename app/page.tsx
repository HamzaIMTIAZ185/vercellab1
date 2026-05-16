import About from "@/components/about";
import Academia from "@/components/academia";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Projects from "@/components/project";
import Skills from "@/components/skills";


export default function Home() {
  return (
    <div className="min-h-screen bg-blue-50 text-black font-sans selection:bg-blue-200">
      {/* We removed navbar and skills entirely */}
      <Hero />
      <About />
      <Academia />
      <Contact />
      <Skills />
      <Projects />
      
    </div>
  );
}