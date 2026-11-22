import React, { useState } from 'react';
import { portfolioData } from './data/portfolioData';
import SplashScreen from './components/SplashScreen';
import DynamicParticlesBg from './components/DynamicParticlesBg';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillsMarquee from './components/SkillsMarquee';
import About from './components/About';
import ExperienceTimeline from './components/ExperienceTimeline';
import ProjectsShowcase from './components/ProjectsShowcase';
import CertificatesShowcase from './components/CertificatesShowcase';

import HobbiesSection from './components/HobbiesSection';
import EducationSection from './components/EducationSection';
import FAQSection from './components/FAQSection';
import NewsletterSubscription from './components/NewsletterSubscription';
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

        {/* 6. Hobbies & Interests */}
        <HobbiesSection hobbies={portfolioData.hobbies} />

        {/* 7. Academic Background & Education */}
        <EducationSection education={portfolioData.education} />

        {/* 8. Work Experience */}
        <ExperienceTimeline
          experiences={portfolioData.experiences}
        />

        {/* 9. Full Projects Showcase */}
        <ProjectsShowcase
          projects={portfolioData.projects}
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />

        <CertificatesShowcase certificates={portfolioData.certificates} />

        {/* 9. Live Interactive AI Assistant Simulation */}


        {/* 12. Interactive FAQs Accordion */}
        <FAQSection faqs={portfolioData.faqs} />

        <NewsletterSubscription />

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

