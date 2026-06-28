import { motion } from "motion/react";
import { GraduationCap, MapPin, Calendar, BookOpen, Layers, GitBranch, Sparkles, Puzzle } from "lucide-react";
import { portfolioData } from "../data";
import TiltCard from "./TiltCard";

const focusAreas = [
  {
    title: "Full Stack Development",
    description: "Building production-grade web applications with modern frameworks like React, Node.js, Express, and databases like MongoDB and SQL.",
    icon: Layers,
  },
  {
    title: "Data Structures & Algorithms",
    description: "Strong problem-solving foundation with over 400+ problems solved across platforms like LeetCode and Codolio. Specialized in Java & Python.",
    icon: GitBranch,
  },
  {
    title: "AI Applications",
    description: "Integrating LLMs, prompt engineering, and intelligent features into web projects to deliver state-of-the-art UX.",
    icon: Sparkles,
  },
  {
    title: "Problem Solving",
    description: "Enthusiastic hackathon competitor and team lead. Fast-paced builder, architecting solutions to real-world socio-urban issues.",
    icon: Puzzle,
  },
];

export default function About() {
  const edu = portfolioData.education[0];

  return (
    <section className="section-padding relative" id="about">
      {/* Section Header */}
      <div className="text-center mb-16">
        <p className="heading-label">
          Discover My Journey
        </p>
        <h2 className="heading-title">
          About Me
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Education Timeline */}
        <div className="lg:col-span-5">
          <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
            {/* Ambient cyber glow behind icon */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-2xl" />

            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="p-3 rounded-xl bg-white/5 text-indigo-400 border border-white/10 shadow-lg">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-white tracking-tight">Education</h3>
            </div>

            {/* Timeline Item */}
            <div className="relative pl-6 border-l border-white/10 space-y-6">
              {/* Dot marker with subtle pulse */}
              <div className="absolute -left-[4.5px] top-2 w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(129,140,248,0.8)] animate-pulse" />

              <div className="space-y-3 relative z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono font-medium text-zinc-300">
                  <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                  {edu.period}
                </span>

                <h4 className="font-display text-lg font-semibold text-white leading-snug">
                  {edu.institution}
                </h4>

                <p className="font-sans text-sm text-zinc-400">
                  {edu.degree}
                </p>

                <div className="flex items-center gap-1.5 font-sans text-sm text-zinc-500 pt-1">
                  <MapPin className="w-4 h-4 text-zinc-500" />
                  {edu.location}
                </div>
              </div>

              <div className="pt-6 border-t border-white/5 mt-6">
                <div className="flex items-center gap-2 mb-4 text-zinc-300 font-sans text-sm font-medium">
                  <BookOpen className="w-4 h-4 text-indigo-400" />
                  Relevant Coursework:
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Data Structures",
                    "Algorithms",
                    "DBMS",
                    "Web Technologies",
                    "Artificial Intelligence",
                    "Operating Systems",
                    "OOPs",
                  ].map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-zinc-300 hover:border-indigo-500/30 hover:text-indigo-300 transition-colors duration-300 cursor-default"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Focus Areas */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {focusAreas.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={item.title} 
                className="h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              >
                <TiltCard className="glass-card rounded-2xl p-6 h-full flex flex-col justify-between group">
                  <div>
                    <div className="p-3 rounded-xl bg-white/5 text-indigo-400 border border-white/10 w-fit mb-5 group-hover:scale-110 group-hover:bg-indigo-500/10 transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="font-display text-base font-bold text-white mb-3 tracking-tight group-hover:text-indigo-300 transition-colors">
                      {item.title}
                    </h3>

                    <p className="font-sans text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                      {item.description}
                    </p>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
