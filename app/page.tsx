"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Research from "@/components/sections/Research";
import Leadership from "@/components/sections/Leadership";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/ui/Footer";

const CustomCursor = dynamic(() => import("@/components/ui/CustomCursor"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <div className="grain-overlay" />
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Research />
        <Leadership />
        <Contact />
      </main>

      <Footer />
    </>
  );
}