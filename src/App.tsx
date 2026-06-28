import { useEffect, useState } from "react";
import { ReactLenis } from "lenis/react";
import { motion } from "motion/react";
import BackgroundGlows from "./components/BackgroundGlows";
import LoadingScreen from "./components/LoadingScreen";
import ScrollProgressBar from "./components/ScrollProgressBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import CodingProfiles from "./components/CodingProfiles";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { portfolioData } from "./data";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Dynamic SEO and Structured Data (Schema.org) Injection
  useEffect(() => {
    const info = portfolioData.personalInfo;
    
    // Set Page Title
    document.title = `${info.name} | ${info.headline}`;

    // Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", info.description);

    // Open Graph Tags
    const ogTags = {
      "og:title": `${info.name} - Portfolio`,
      "og:description": info.description,
      "og:type": "profile",
      "og:url": window.location.href,
      "og:site_name": `${info.name} Portfolio`
    };

    Object.entries(ogTags).forEach(([property, value]) => {
      let ogMeta = document.querySelector(`meta[property="${property}"]`);
      if (!ogMeta) {
        ogMeta = document.createElement("meta");
        ogMeta.setAttribute("property", property);
        document.head.appendChild(ogMeta);
      }
      ogMeta.setAttribute("content", value);
    });

    // Twitter Card Tags
    const twitterTags = {
      "twitter:card": "summary_large_image",
      "twitter:title": `${info.name} | Portfolio`,
      "twitter:description": info.description,
    };

    Object.entries(twitterTags).forEach(([name, value]) => {
      let twMeta = document.querySelector(`meta[name="${name}"]`);
      if (!twMeta) {
        twMeta = document.createElement("meta");
        twMeta.setAttribute("name", name);
        document.head.appendChild(twMeta);
      }
      twMeta.setAttribute("content", value);
    });

    // Inject Schema.org Structured Data
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": info.name,
      "url": window.location.href,
      "email": info.email,
      "telephone": info.phone,
      "description": info.description,
      "jobTitle": "Full Stack Developer",
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "Vardhaman College of Engineering"
      },
      "sameAs": [
        info.linkedin,
        info.github,
        info.leetcode,
        info.codolio
      ]
    };

    let schemaScript = document.getElementById("structured-seo-schema") as HTMLScriptElement;
    if (!schemaScript) {
      schemaScript = document.createElement("script");
      schemaScript.id = "structured-seo-schema";
      schemaScript.type = "application/ld+json";
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(schemaData, null, 2);

    return () => {
      // Cleanup injected script on unmount
      schemaScript?.remove();
    };
  }, []);

  return (
    <ReactLenis root>
      <div className="relative min-h-screen text-zinc-100 font-sans selection:bg-indigo-500/30 selection:text-white" id="portfolio-app-root">
        {/* Premium Loading Screen Overlay */}
        <LoadingScreen onComplete={() => setIsLoading(false)} />

        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Premium Scroll Progress Bar */}
            <ScrollProgressBar />

            {/* Premium background particle canvas */}
            <BackgroundGlows />

            {/* Navigation Header */}
            <Navbar />

            {/* Structured Sections */}
            <main className="relative z-10" id="main-content">
              {/* Section 1: Hero */}
              <Hero />

              {/* Section divider line */}
              <div className="h-[1px] bg-zinc-900/60 max-w-7xl mx-auto" />

              {/* Section 2: About Me */}
              <div id="about-section-wrapper">
                <About />
              </div>

              <div className="h-[1px] bg-zinc-900/60 max-w-7xl mx-auto" />

              {/* Section 3: Skills */}
              <div id="skills-section-wrapper">
                <Skills />
              </div>

              <div className="h-[1px] bg-zinc-900/60 max-w-7xl mx-auto" />

              {/* Section 4: Projects */}
              <div id="projects-section-wrapper">
                <Projects />
              </div>

              <div className="h-[1px] bg-zinc-900/60 max-w-7xl mx-auto" />

              {/* Section 5: Achievements */}
              <div id="achievements-section-wrapper">
                <Achievements />
              </div>

              <div className="h-[1px] bg-zinc-900/60 max-w-7xl mx-auto" />

              {/* Section 6: Coding Profiles */}
              <div id="profiles-section-wrapper">
                <CodingProfiles />
              </div>

              <div className="h-[1px] bg-zinc-900/60 max-w-7xl mx-auto" />

              {/* Section 8: Resume */}
              <div id="resume-section-wrapper">
                <Resume />
              </div>

              <div className="h-[1px] bg-zinc-900/60 max-w-7xl mx-auto" />

              {/* Section 9: Contact */}
              <div id="contact-section-wrapper">
                <Contact />
              </div>
            </main>

            {/* Footer */}
            <Footer />
          </motion.div>
        )}
      </div>
    </ReactLenis>
  );
}
