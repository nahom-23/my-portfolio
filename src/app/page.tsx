// src/app/page.tsx
import Hero from "./components/Hero";
import DesktopHeader from "./components/DesktopHeader";
import Project from "./components/Project";
import Skills from "./components/Skills";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import LoadingScreen from "./components/LoadingScreen";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Loading Screen */}
      <LoadingScreen />

      {/* Responsive Desktop Header */}
      <DesktopHeader />

      {/* Hero Section - Responsive */}
      <Hero />

      {/* Other Sections */}
      <Project />
      <Skills />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
