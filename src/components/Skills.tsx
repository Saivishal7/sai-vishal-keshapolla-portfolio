import { Code2, Layers, Database, Wrench, Brain } from "lucide-react";
import { portfolioData } from "../data";
import TiltCard from "./TiltCard";
import { motion } from "motion/react";

const categoryIcons: Record<string, any> = {
  "Languages": Code2,
  "Frameworks & Libraries": Layers,
  "Databases": Database,
  "Developer Tools": Wrench,
  "Core Concepts": Brain
};

export default function Skills() {
  return (
    <section className="section-padding relative" id="skills">
      {/* Section Header */}
      <div className="text-center mb-16">
        <p className="heading-label">
          My Technical Arsenal
        </p>
        <h2 className="heading-title">
          Skills &amp; Expertise
        </h2>
      </div>

      {/* Skills Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="skills-grid">
        {portfolioData.skills.map((cat, idx) => {
          const IconComponent = categoryIcons[cat.category] || Code2;

          return (
            <motion.div 
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
            >
              <TiltCard className="glass-card rounded-2xl p-8 relative overflow-hidden h-full group">
                {/* Visual ambient drop light inside the card */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-2xl group-hover:from-indigo-500/20 transition-colors duration-500" />

                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/5 relative z-10">
                  <div className="p-3 rounded-xl bg-white/5 text-indigo-400 border border-white/10 shadow-lg group-hover:scale-110 group-hover:bg-indigo-500/10 transition-all duration-300">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors">
                    {cat.category}
                  </h3>
                </div>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-2.5 relative z-10">
                  {cat.items.map((skill, skillIdx) => {
                    // Match technology names to professional colors
                    const getTechColor = (name: string) => {
                      const lower = name.toLowerCase();
                      if (lower.includes("react")) return "bg-cyan-400 shadow-cyan-500/20";
                      if (lower.includes("java") && !lower.includes("script")) return "bg-amber-500 shadow-amber-500/20";
                      if (lower.includes("python")) return "bg-yellow-400 shadow-yellow-500/20";
                      if (lower.includes("javascript") || lower === "js") return "bg-yellow-500 shadow-yellow-500/20";
                      if (lower.includes("c++")) return "bg-blue-500 shadow-blue-500/20";
                      if (lower.includes("c ") || lower === "c") return "bg-slate-400 shadow-slate-400/20";
                      if (lower.includes("mongodb")) return "bg-emerald-500 shadow-emerald-500/20";
                      if (lower.includes("sql") || lower.includes("db")) return "bg-sky-400 shadow-sky-500/20";
                      if (lower.includes("node")) return "bg-green-500 shadow-green-500/20";
                      if (lower.includes("express")) return "bg-zinc-300 shadow-zinc-300/20";
                      if (lower.includes("html") || lower.includes("css")) return "bg-orange-500 shadow-orange-500/20";
                      if (lower.includes("flask")) return "bg-emerald-400 shadow-emerald-400/20";
                      if (lower.includes("git")) return "bg-red-500 shadow-red-500/20";
                      if (lower.includes("vscode")) return "bg-sky-500 shadow-sky-500/20";
                      if (lower.includes("data") || lower.includes("algorithm")) return "bg-indigo-400 shadow-indigo-500/20";
                      return "bg-slate-400";
                    };

                    const dotColorClass = getTechColor(skill.name);

                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: (idx * 0.1) + (skillIdx * 0.05) }}
                        className="group/chip px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-zinc-300 hover:text-white text-xs font-semibold font-mono flex items-center gap-2.5 hover:border-indigo-500/30 hover:bg-white/10 hover:shadow-lg transition-all duration-300 cursor-default"
                      >
                        {/* Animated progress bar behind chip */}
                        <div className="absolute inset-0 bg-indigo-500/10 rounded-lg scale-x-0 origin-left group-hover/chip:scale-x-100 transition-transform duration-500 ease-out" />
                        <span className={`relative z-10 w-2 h-2 rounded-full ${dotColorClass} transition-transform group-hover/chip:scale-125`} />
                        <span className="relative z-10">{skill.name}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </TiltCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
