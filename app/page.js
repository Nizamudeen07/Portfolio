import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import HowIBuild from "@/components/HowIBuild";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main id="home">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <HowIBuild />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
