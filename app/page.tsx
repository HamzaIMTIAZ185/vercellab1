import hero from "@/components/hero";
import about from "@/components/about";
import projects from "@/components/projects";
import academia from "@/components/academia";
import contact from "@/components/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-50 text-black font-sans selection:bg-blue-200">
      {/* We removed navbar and skills entirely */}
      <hero />
      <about />
      <projects />
      <academia />
      <contact />
    </div>
  );
}