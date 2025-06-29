import { Summary } from "@/components/Summary";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Achievements } from "@/components/Achievements";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <div >
      <Hero />
      <Summary />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Achievements />
      <Footer />
    </div>
  );
}
