import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { portfolioData } from "../data";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-black/40 backdrop-blur-md pt-16 pb-12 px-4 sm:px-6 lg:px-8 z-10" id="footer">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 pb-12">
        {/* Left Side */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center font-display font-extrabold text-sm text-black shadow-lg shadow-white/10">
              SV
            </div>
            <span className="font-display font-bold text-white text-lg">
              {portfolioData.personalInfo.name}
            </span>
          </div>
          <p className="font-sans text-sm text-zinc-400 max-w-sm leading-relaxed">
            Passionate Computer Science student and Full Stack Developer shaping the future of digital solutions.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-3">
          <a
            href={portfolioData.personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-colors shadow-lg"
            title="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={portfolioData.personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-colors shadow-lg"
            title="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${portfolioData.personalInfo.email}`}
            className="p-3 text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-colors shadow-lg"
            title="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="h-px bg-white/10 max-w-7xl mx-auto" />

      {/* Footer Bottom Row */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm font-sans text-zinc-500">
        <div>
          &copy; {currentYear} {portfolioData.personalInfo.name}. All rights reserved.
        </div>

        <div className="flex items-center gap-8">
          <span className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase font-semibold">
            DESIGNED WITH CRAFT
          </span>

          <button
            onClick={handleScrollToTop}
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/10 transition-colors cursor-pointer flex items-center justify-center shadow-lg"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
