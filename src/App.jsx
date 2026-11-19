import React, { useState } from 'react';
import { portfolioData } from './data/portfolioData';
import SplashScreen from './components/SplashScreen';
import DynamicParticlesBg from './components/DynamicParticlesBg';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillsMarquee from './components/SkillsMarquee';
import About from './components/About';
import ExperienceTimeline from './components/ExperienceTimeline';
import CarouselSection from './components/CarouselSection';
import ProjectsShowcase from './components/ProjectsShowcase';

import GallerySection from './components/GallerySection';
import EducationSection from './components/EducationSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import StickyScrollTop from './components/StickyScrollTop';
import Footer from './components/Footer';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [activePersona, setActivePersona] = useState('persona1');
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 relative selection:bg-zinc-700 selection:text-white">
      {/* Dynamic Monochrome Particles in Background */}
      <DynamicParticlesBg />
      
      {/* 1. Splash Screen Intro */}
      {showSplash && (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      )}

      {/* 2. Glassmorphic Navigation Bar */}
      <Navbar />

      {/* 3. Hero Section with Dynamic Rotating Text */}
      <main>
        <Hero
          data={portfolioData}
          activePersona={activePersona}
        />

        {/* 4. Infinite Loop Skills Marquee */}
        <SkillsMarquee data={portfolioData} />

        {/* 5. About Me & Engineering Philosophy */}
        <About
          data={portfolioData}
          activePersona={activePersona}
        />

        {/* 6. Work Experience (LivePerson & Freelance) */}
        <ExperienceTimeline
          experiences={portfolioData.experiences}
        />

        {/* 7. Flagship Projects Interactive Carousel */}
        <CarouselSection
          projects={portfolioData.projects}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />

        {/* 8. Full Projects Showcase with Filter & 3D Cards */}
        <ProjectsShowcase
          projects={portfolioData.projects}
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />

        {/* 9. Live Interactive AI Assistant Simulation */}


        {/* 10. Engineering Visual Gallery */}
        <GallerySection items={portfolioData.gallery} />

        {/* 11. Academic Background & Education */}
        <EducationSection education={portfolioData.education} />

        {/* 12. Interactive FAQs Accordion */}
        <FAQSection faqs={portfolioData.faqs} />

        {/* 13. Contact & Collaboration Form with Confetti */}
        <ContactSection
          contact={portfolioData.personal.contact}
          location={portfolioData.personal.location}
        />
      </main>

      {/* 14. Sticky Arrow-Up Button at Bottom-Left Corner (Sudut Kiri Bawah) */}
      <StickyScrollTop />

      {/* 15. Footer */}
      <Footer data={portfolioData} />

    </div>
  );
}

