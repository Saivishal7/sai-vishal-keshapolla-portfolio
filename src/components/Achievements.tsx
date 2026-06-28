import { motion } from "motion/react";
import { Trophy, Award, Rocket, Crown, LucideIcon } from "lucide-react";
import { portfolioData } from "../data";
import TiltCard from "./TiltCard";

const iconMap: Record<string, LucideIcon> = {
  trophy: Trophy,
  award: Award,
  star: Rocket,
  chess: Crown
};

// Define accent colors for each achievement to highlight them beautifully
const accentMap: Record<string, { dot: string; text: string; border: string; bg: string; iconColor: string }> = {
  "ach-1": {
    dot: "bg-indigo-500 shadow-indigo-500/30",
    text: "text-indigo-400",
    border: "group-hover:border-indigo-500/30",
    bg: "bg-indigo-500/10",
    iconColor: "text-indigo-400"
  },
  "ach-2": {
    dot: "bg-purple-500 shadow-purple-500/30",
    text: "text-purple-400",
    border: "group-hover:border-purple-500/30",
    bg: "bg-purple-500/10",
    iconColor: "text-purple-400"
  },
  "ach-3": {
    dot: "bg-blue-500 shadow-blue-500/30",
    text: "text-blue-400",
    border: "group-hover:border-blue-500/30",
    bg: "bg-blue-500/10",
    iconColor: "text-blue-400"
  },
  "ach-4": {
    dot: "bg-cyan-400 shadow-cyan-400/30",
    text: "text-cyan-400",
    border: "group-hover:border-cyan-400/30",
    bg: "bg-cyan-500/10",
    iconColor: "text-cyan-400"
  }
};

export default function Achievements() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = (isEven: boolean) => ({
    hidden: { 
      opacity: 0, 
      x: isEven ? 30 : -30,
      y: 10
    },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  });

  return (
    <section className="section-padding relative" id="achievements">
      {/* Section Header */}
      <div className="text-center mb-16">
        <p className="heading-label">
          My Accolades &amp; Milestones
        </p>
        <h2 className="heading-title">
          Achievements &amp; Milestones
        </h2>
      </div>

      {/* Timeline Layout */}
      <div className="relative max-w-4xl mx-auto" id="achievements-timeline">
        {/* Center vertical bar with an elegant gradient track */}
        <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-[2px] bg-gradient-to-b from-indigo-500/30 via-purple-500/30 to-cyan-500/10 -translate-x-1/2 hidden md:block" />

        <motion.div 
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {portfolioData.achievements.map((ach, idx) => {
            const Icon = iconMap[ach.iconType] || Trophy;
            const isEven = idx % 2 === 0;
            const accents = accentMap[ach.id] || accentMap["ach-1"];

            return (
              <motion.div
                key={ach.id}
                variants={itemVariants(isEven)}
                className={`relative flex flex-col md:flex-row items-stretch ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Visual marker inside the timeline bar with a glowing shadow */}
                <div className={`absolute left-4 md:left-1/2 top-6 w-12 h-12 rounded-full bg-[#111] border border-white/10 flex items-center justify-center -translate-x-1/2 z-20 hidden md:flex transition-transform hover:scale-110 cursor-default shadow-xl`}>
                  <div className={`absolute inset-1 rounded-full ${accents.bg}`} />
                  <Icon className={`w-5 h-5 ${accents.iconColor} relative z-10`} />
                </div>

                {/* Left/Right content panel */}
                <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${isEven ? "md:pr-12" : "md:pl-12"}`}>
                  <TiltCard className="glass-card rounded-2xl p-8 relative group transition-all duration-300">
                    
                    {/* Glowing highlight indicator */}
                    <div className="absolute top-0 left-0 w-1 h-full rounded-l-2xl bg-gradient-to-b from-transparent via-white/10 to-transparent group-hover:from-indigo-500 group-hover:to-purple-500 transition-all duration-500" />

                    {/* Badge Pill */}
                    <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 ${accents.text} text-xs font-mono font-medium mb-4`}>
                      <span className={`w-2 h-2 rounded-full ${accents.dot} animate-pulse`} />
                      {ach.badge}
                    </span>

                    {/* Title & Organization */}
                    <h3 className="font-display text-xl font-bold text-white mb-2 transition-colors group-hover:text-indigo-400 leading-snug">
                      {ach.event}
                    </h3>
                    <p className="font-mono text-xs text-zinc-500 font-semibold uppercase tracking-wider mb-4">
                      {ach.title}
                    </p>

                    {/* Description text */}
                    <p className="font-sans text-sm text-zinc-400 leading-relaxed font-light">
                      {ach.description}
                    </p>
                  </TiltCard>
                </div>

                {/* Spacer for MD screens on the opposite side */}
                <div className="w-1/2 hidden md:block" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
