import { 
  FileText, 
  Printer, 
  FileSpreadsheet, 
  MapPin, 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  Calendar,
  Download,
  ExternalLink,
  Trophy,
  GraduationCap,
  Cpu,
  Code2,
  Award,
  Sparkles
} from "lucide-react";
import { portfolioData } from "../data";

export default function Resume() {
  const edu = portfolioData.education[0];

  return (
    <section className="section-padding relative" id="resume">
      {/* Section Header */}
      <div className="text-center mb-16">
        <p className="heading-label">
          Credentials &amp; Resume
        </p>
        <h2 className="heading-title">
          Professional Resume
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Core Value Proposition Pitch & Action Buttons */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="glass-card rounded-2xl p-8 space-y-6 flex-1 transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-white/5 text-indigo-400 border border-white/10 shadow-lg backdrop-blur-md">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-white">Summary</h3>
            </div>

            <p className="font-sans text-sm sm:text-base text-zinc-400 leading-relaxed font-light">
              Highly motivated Computer Science student with a strong foundation in Web Technologies and Data Structures. Passionate about engineering high-performance microservices, writing optimal algorithms, and designing clean, fast, accessible user interfaces.
            </p>

            <div className="space-y-4 pt-6 border-t border-white/10">
              <div className="flex items-center gap-3 text-sm text-zinc-400">
                <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.5)]" />
                <span>Specialized in Java, Python, and TypeScript</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-zinc-400">
                <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
                <span>First Place Winner in E-waste Collab Hackathon</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-zinc-400">
                <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.5)]" />
                <span>400+ algorithmic problems solved cross-platform</span>
              </div>
            </div>
          </div>

          {/* Action buttons (View, Download, GitHub, LinkedIn) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-4 rounded-xl text-sm font-semibold text-black bg-white hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-white/10"
            >
              <ExternalLink className="w-4 h-4" />
              View Resume
            </a>
            <a
              href="https://github.com/Saivishal7"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-4 rounded-xl text-sm font-semibold text-zinc-300 bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/sai-vishal-a04423272"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-4 rounded-xl text-sm font-semibold text-zinc-300 bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right Column: Modern Interactive Resume Card */}
        <div className="lg:col-span-7">
          <div className="glass-card rounded-2xl p-8 relative overflow-hidden flex flex-col justify-between h-full transition-all duration-300">
            {/* Ambient cyber mesh backgrounds inside the card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-indigo-500/10 via-purple-500/5 to-transparent rounded-bl-[100px] pointer-events-none -z-10" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-tr-[100px] pointer-events-none -z-10" />

            <div className="space-y-8">
              {/* Card Header: Name, Title, Contacts */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 border-b border-white/10 pb-6">
                <div>
                  <h3 className="font-display text-3xl font-extrabold text-white tracking-tight">
                    {portfolioData.personalInfo.name}
                  </h3>
                  <p className="font-mono text-sm text-indigo-400 tracking-wider uppercase font-bold mt-2">
                    Computer Science Student &amp; Full Stack Developer
                  </p>
                </div>
                {/* Hackathon Winner Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs text-purple-300 font-bold w-fit shrink-0">
                  <Trophy className="w-4 h-4 text-purple-400 animate-pulse" />
                  <span>Hackathon Winner</span>
                </div>
              </div>

              {/* Grid: Education & Contacts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
                {/* Education section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-zinc-500 uppercase tracking-widest">
                    <GraduationCap className="w-4 h-4 text-indigo-400" />
                    <span>Education</span>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-sans font-bold text-white text-base">
                      {edu.institution}
                    </h4>
                    <p className="font-sans text-sm text-zinc-400 italic">
                      {edu.degree}
                    </p>
                    <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>

                {/* Contacts & Metadata */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-zinc-500 uppercase tracking-widest">
                    <Sparkles className="w-4 h-4 text-indigo-400" />
                    <span>Location &amp; Info</span>
                  </div>
                  <ul className="space-y-3 text-sm text-zinc-400 font-light">
                    <li className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-zinc-500" />
                      <span>{portfolioData.personalInfo.location}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-zinc-500" />
                      <a href={`mailto:${portfolioData.personalInfo.email}`} className="hover:text-indigo-400 transition-colors">
                        {portfolioData.personalInfo.email}
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-zinc-500" />
                      <span>{portfolioData.personalInfo.phone}</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Core Skills section */}
              <div className="space-y-4 pt-4 border-t border-white/5">
                <div className="flex items-center gap-2 text-xs font-bold text-zinc-500 uppercase tracking-widest">
                  <Cpu className="w-4 h-4 text-indigo-400" />
                  <span>Technical Expertise</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <span className="font-mono text-xs text-zinc-500 font-semibold uppercase tracking-wider block mb-2">Languages</span>
                    <div className="flex flex-wrap gap-2">
                      {portfolioData.skills[0].items.map((skill) => (
                        <span key={skill.name} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-zinc-300 font-mono font-medium">
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="font-mono text-xs text-zinc-500 font-semibold uppercase tracking-wider block mb-2">Frameworks &amp; Tools</span>
                    <div className="flex flex-wrap gap-2">
                      {portfolioData.skills[1].items.map((skill) => (
                        <span key={skill.name} className="px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-300 font-mono font-medium">
                          {skill.name}
                        </span>
                      ))}
                      {portfolioData.skills[3].items.map((skill) => (
                        <span key={skill.name} className="px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-300 font-mono font-medium">
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Resume CTA Footer block */}
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div>
                <p className="font-mono text-xs text-zinc-500 font-semibold uppercase tracking-wider">Official Portfolio Asset</p>
                <p className="font-sans text-sm text-zinc-400 mt-1">PDF Document • 1 Page Complete</p>
              </div>
              <a
                href="/resume.pdf"
                download="Sai_Vishal_Keshapolla_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-black bg-white hover:bg-zinc-200 transition-all cursor-pointer shadow-lg shadow-white/10 group"
              >
                <span>Download Resume PDF</span>
                <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
