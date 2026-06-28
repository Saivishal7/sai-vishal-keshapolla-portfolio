import { motion } from "motion/react";
import { ArrowRight, Mail, Download, Sparkles, Trophy, Cpu, ExternalLink } from "lucide-react";
import { portfolioData } from "../data";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section 
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-20 overflow-hidden px-4 sm:px-6 lg:px-8"
      id="hero-section"
    >
      {/* Immersive cyber spotlights and glowing background meshes */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-violet-600/10 via-indigo-500/5 to-cyan-400/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-violet-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Floating element 1: Left */}
      <motion.div
        className="absolute left-[5%] top-[25%] hidden xl:flex items-center gap-2.5 px-4 py-2.5 rounded-2xl glass-card select-none"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-3 h-3 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.8)] animate-pulse" />
        <span className="font-mono text-xs text-zinc-200 font-bold tracking-tight">Java &amp; Fullstack</span>
      </motion.div>

      {/* Floating element 2: Right */}
      <motion.div
        className="absolute right-[5%] top-[35%] hidden xl:flex items-center gap-2.5 px-4 py-2.5 rounded-2xl glass-card select-none"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Trophy className="w-4.5 h-4.5 text-cyan-400 filter drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]" />
        <span className="font-mono text-xs text-zinc-200 font-bold tracking-tight">Hackathon Winner</span>
      </motion.div>

      {/* Floating element 3: Left Bottom */}
      <motion.div
        className="absolute left-[8%] bottom-[25%] hidden xl:flex items-center gap-2.5 px-4 py-2.5 rounded-2xl glass-card select-none"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <Cpu className="w-4.5 h-4.5 text-fuchsia-400 filter drop-shadow-[0_0_5px_rgba(192,132,252,0.5)]" />
        <span className="font-mono text-xs text-zinc-200 font-bold tracking-tight">419+ Solves</span>
      </motion.div>

      <motion.div 
        className="max-w-3xl mx-auto text-center z-10 space-y-7"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Available pill - minimal with a slight interactive glow */}
        <motion.div 
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-300 font-mono tracking-wider uppercase font-semibold backdrop-blur-md"
          variants={itemVariants}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Available for Internships
        </motion.div>

        {/* Main Title Heading - premium typography & gradient text */}
        <motion.h1 
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none text-white"
          variants={itemVariants}
        >
          Hi, I'm <span className="text-gradient-accent drop-shadow-[0_2px_15px_rgba(129,140,248,0.15)]">{portfolioData.personalInfo.name}</span>
        </motion.h1>

        {/* Static Subtitle - removes busy typing animations */}
        <motion.p 
          className="font-display text-base sm:text-xl font-medium text-zinc-300 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Computer Science Student &amp; Full Stack Developer specializing in robust systems, algorithms, and AI solutions.
        </motion.p>

        {/* Bio */}
        <motion.p 
          className="font-sans text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl mx-auto font-light"
          variants={itemVariants}
        >
          {portfolioData.personalInfo.description}
        </motion.p>

        {/* Action CTAs - Flat SaaS-style */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 px-4 max-w-xl mx-auto"
          variants={itemVariants}
        >
          <a
            href="#projects"
            className="group w-full sm:w-auto px-6 py-3 rounded-xl text-sm font-semibold text-black bg-white hover:bg-zinc-200 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            View Projects
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto px-6 py-3 rounded-xl text-sm font-semibold text-zinc-200 bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer backdrop-blur-md"
          >
            Contact
            <Mail className="w-4 h-4 text-zinc-400" />
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-xl text-sm font-semibold text-zinc-200 bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer backdrop-blur-md"
          >
            View Resume
            <ExternalLink className="w-4 h-4 text-zinc-400" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
