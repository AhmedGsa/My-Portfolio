import AboutMe from "@/components/about-me/AboutMe";
import Education from "@/components/education/Education";
import Experience from "@/components/experience/Experience";
import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";

export default function Home() {
  return <>
    <Hero />
    <Services />
    <AboutMe />
    <Experience />
    <Education />
  </>
}
