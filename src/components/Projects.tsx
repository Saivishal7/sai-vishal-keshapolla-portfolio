import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Github, 
  ExternalLink, 
  CheckCircle2, 
  Globe, 
  X, 
  ChevronRight,
  AlertCircle,
  Wrench,
  Flame,
  TrendingUp
} from "lucide-react";
import TiltCard from "./TiltCard";

interface RichProjectDetails {
  id: string;
  title: string;
  category: "Full Stack" | "AI" | "Frontend";
  period: string;
  description: string;
  technologies: string[];
  features: string[];
  githubLink: string;
  liveDemoLink: string;
  imageUrl: string;
  
  overview: string;
  problemStatement: string;
  developmentProcess: string;
  challenges: string;
  futureImprovements: string;
}

const richProjectsData: RichProjectDetails[] = [
  {
    id: "e-waste",
    title: "E-Waste Management Platform",
    category: "Full Stack",
    period: "2026",
    description: "A full-stack web platform connecting citizens, repair technicians, recyclers, NGOs, and administrators to streamline e-waste collection and recycling through an intuitive and responsive interface.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    features: [
      "Secure Authentication",
      "Role-Based Dashboards",
      "E-Waste Reporting",
      "Pickup Scheduling",
      "REST APIs",
      "Real-Time Status Updates",
      "Responsive Design"
    ],
    githubLink: "https://github.com/Saivishal7",
    liveDemoLink: "https://saivishal7.github.io/E-waste-collab-platform/",
    imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9d39d66e8?auto=format&fit=crop&q=80&w=800",
    
    overview: "This full-stack platform solves the coordination issue in urban recycling. Built during a competitive hackathon where it secured 1st place, it provides discrete interfaces for citizens to report e-waste, repair shops to bid on salvageable hardware, and government recyclers to dispatch pickups efficiently.",
    problemStatement: "Electronic waste is the fastest-growing waste stream globally. Proper disposal and recycling methods are often inaccessible or ignored, leading to massive toxic pollution in landfills. There is currently a complete lack of cohesive digital coordination between individual citizens, repair shops, and certified eco-recycling agencies.",
    developmentProcess: "Designed with a multi-role user architecture in mind. Integrated a secure JWT and bcrypt authentication server, constructed Express backend controllers for tracking pickup requests with MongoDB, and built a custom high-density responsive dashboard in React utilizing Tailwind CSS layout templates.",
    challenges: "Managing state synchronizations and access permissions dynamically on the client side while keeping backend API endpoints bulletproof. This was successfully solved by constructing express-level role-validator middleware and a strict global authorization context in React.",
    futureImprovements: "Integrate vehicle route-optimization algorithms for recycling truck dispatchers, enable native push notifications for pickup updates, and build a rewards system utilizing digital green credits for citizens."
  },
  {
    id: "learnpath-ai",
    title: "LearnPath AI – Personalized Learning",
    category: "AI",
    period: "2026",
    description: "An AI-powered personalized learning platform that helps students identify weak subjects, receive customized learning recommendations, generate study timetables, and monitor academic progress.",
    technologies: ["Python", "Flask", "SQLite", "HTML", "CSS", "Jinja2"],
    features: [
      "Secure Authentication",
      "AI-Based Learning Recommendations",
      "Automated Timetable Generation",
      "Progress Tracking",
      "Admin Dashboard",
      "Personalized Student Dashboard"
    ],
    githubLink: "https://github.com/Saivishal7",
    liveDemoLink: "https://saivishal7.github.io/learnPath-frontend/login.html",
    imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800",
    
    overview: "LearnPath AI is a dedicated educational helper that takes standard student performance inputs, runs custom learning models, and offers personalized revision tasks. It aims to bridge the gap between heavy curricula and individual student capabilities.",
    problemStatement: "Standardized modern education structures treat all students identically, completely ignoring personal learning curves, skill gaps, and strengths. Students struggle to build structured, balanced timetables on their own, leading to increased academic anxiety and lower retention rates.",
    developmentProcess: "Formulated a modular Python-Flask microservice. Configured an relational SQLite layer to capture daily performance logs, mapped subject strengths to customizable priority matrices, and rendered dynamic, beautiful timetables using clean semantic HTML pages coupled with customized Jinja2 layouts.",
    challenges: "Designing an automated scheduling heuristic that structures weekly plans gracefully without conflicts or study fatigue. This was solved by engineering a mathematical weighting algorithm that distributes study slots based on subject difficulty scores.",
    futureImprovements: "Transition localized learning heuristics into large language model recommendation queries, implement dynamic interactive quiz sets, and incorporate multi-user collaborative flashcard studies."
  },
  {
    id: "entropy",
    title: "Entropy – Solving Platform",
    category: "Frontend",
    period: "2026",
    description: "An interactive web platform designed to improve logical thinking and problem-solving through structured coding challenges and aptitude practice with a modern user experience.",
    technologies: ["React.js", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    features: [
      "Interactive Coding Challenges",
      "Aptitude Practice",
      "Responsive UI",
      "Modern Dashboard",
      "Reusable Components",
      "Smooth User Experience"
    ],
    githubLink: "https://github.com/Saivishal7",
    liveDemoLink: "https://saivishal7.github.io/Entropy/",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
    
    overview: "Entropy makes logical prep work exciting. By incorporating beautiful animations, micro-challenges, and gamified progress states, this platform enables developers to sharpen their coding practices and DSA aptitudes within an eye-safe cosmic workspace.",
    problemStatement: "Aptitude and computer science prep sites are often boring, visually intimidating, or outdated. High-friction onboarding processes and poor visual feedback on solving milestones discourage junior developers from building durable problem-solving habits.",
    developmentProcess: "Built entirely client-side using React for instant response times. Deployed highly customizable interactive problem solvers with dynamic visual steps. Utilized Tailwind CSS custom tokens to establish an immersive high-contrast palette with subtle gradient frames.",
    challenges: "Achieving complex client-side state transitions and timing configurations while keeping interaction loops fluid. Solved by decoupling reactive canvas rendering from primary event listeners and keeping state tracking highly flat.",
    futureImprovements: "Introduce a complete browser-based WebAssembly runner for live compiling, add real-time global peer-to-peer coding battles, and implement personalized learning recommendations."
  }
];

export default function Projects() {
  const [filter, setFilter] = useState<"All" | "Full Stack" | "AI" | "Frontend">("All");
  const [selectedProject, setSelectedProject] = useState<RichProjectDetails | null>(null);

  const filteredProjects = richProjectsData.filter(
    (p) => filter === "All" || p.category === filter
  );

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <section className="section-padding relative" id="projects">
      {/* Section Header */}
      <div className="text-center mb-12">
        <p className="heading-label">
          My Creative Works
        </p>
        <h2 className="heading-title">
          Featured Projects
        </h2>
      </div>

      {/* Filter Tabs - Flat Segment Switch */}
      <div className="flex flex-wrap justify-center items-center gap-2 mb-12" id="projects-filter-bar">
        {(["All", "Full Stack", "AI", "Frontend"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
              filter === tab
                ? "text-black bg-white shadow-lg shadow-white/20"
                : "text-zinc-400 hover:text-white bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch" id="projects-grid">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((p) => {
            return (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="h-full cursor-pointer"
                onClick={() => setSelectedProject(p)}
              >
                <TiltCard className="glass-card rounded-2xl flex flex-col justify-between overflow-hidden h-full group">
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      {/* Image Frame */}
                      <div className="relative h-56 overflow-hidden bg-black/50 border-b border-white/5">
                        <img
                          src={p.imageUrl}
                          alt={p.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Soft overlay on image */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                        {/* Absolute tags inside image container */}
                        <div className="absolute top-4 left-4 z-20 flex gap-2">
                          <span className="px-3 py-1 rounded-lg text-xs font-mono font-semibold tracking-wide backdrop-blur-md bg-black/50 border border-white/10 text-indigo-300">
                            {p.category}
                          </span>
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-6 lg:p-8 space-y-5">
                        <div>
                          <h3 className="font-display text-xl font-bold text-white tracking-tight leading-snug group-hover:text-indigo-400 transition-colors">
                            {p.title}
                          </h3>
                          <p className="font-sans text-sm text-zinc-400 leading-relaxed mt-3 font-light">
                            {p.description}
                          </p>
                        </div>

                        {/* Technology Badges */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {p.technologies.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-zinc-300 group-hover:border-indigo-500/30 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                          {p.technologies.length > 4 && (
                            <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-zinc-400">
                              +{p.technologies.length - 4}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons Footer */}
                    <div className="p-6 lg:p-8 pt-0 mt-auto flex flex-col gap-3" onClick={(e) => e.stopPropagation()}>
                      <button
                        onClick={() => setSelectedProject(p)}
                        className="w-full py-3 rounded-xl text-sm font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-between px-5 group/btn"
                      >
                        <span>View Case Study</span>
                        <ChevronRight className="w-4 h-4 text-zinc-400 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
                      </button>

                      <div className="flex items-center gap-3">
                        {p.githubLink && (
                          <a
                            href={p.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-zinc-300 bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white transition-all flex items-center justify-center gap-2 group/link cursor-pointer"
                          >
                            <Github className="w-4 h-4 text-zinc-400 group-hover/link:text-white transition-colors" />
                            Code
                          </a>
                        )}
                        {p.liveDemoLink && (
                          <a
                            href={p.liveDemoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-black bg-white hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 shadow-lg shadow-white/10 cursor-pointer"
                          >
                            <Globe className="w-4 h-4" />
                            Live
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Case Study Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-xl cursor-pointer"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-4xl bg-[#111111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[85vh] z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-black/50 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 backdrop-blur-md transition-all cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Side: Summary Panel */}
              <div className="w-full md:w-5/12 bg-white/5 border-r border-white/5 flex flex-col justify-between p-6 sm:p-8 overflow-y-auto">
                <div>
                  {/* Thumbnail */}
                  <div className="relative h-48 rounded-xl overflow-hidden border border-white/10 mb-6 bg-black/50">
                    <img
                      src={selectedProject.imageUrl}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex gap-2 mb-4">
                    <span className="px-3 py-1 rounded-md text-xs font-mono font-bold tracking-wide uppercase bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      {selectedProject.category}
                    </span>
                    <span className="px-3 py-1 rounded-md text-xs font-mono font-medium tracking-wide text-zinc-400 bg-white/5 border border-white/10">
                      {selectedProject.period}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white mb-4 leading-tight">
                    {selectedProject.title}
                  </h3>

                  <p className="font-sans text-sm text-zinc-400 leading-relaxed font-light mb-6">
                    {selectedProject.overview}
                  </p>
                </div>

                <div className="space-y-6 pt-6 border-t border-white/10 mt-auto">
                  <div className="space-y-2">
                    <span className="font-mono text-xs font-semibold text-zinc-500 tracking-wider uppercase block">Tech Stack</span>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 rounded-xl text-sm font-semibold text-zinc-300 bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white transition-all flex items-center justify-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      Repository
                    </a>
                    <a
                      href={selectedProject.liveDemoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 rounded-xl text-sm font-semibold text-black bg-white hover:bg-zinc-200 transition-all flex items-center justify-center gap-2"
                    >
                      <Globe className="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Side: Scrollable Case Study */}
              <div className="w-full md:w-7/12 flex flex-col overflow-y-auto p-6 sm:p-10 bg-[#111111]">
                <div className="space-y-8">
                  
                  {/* Problem Statement */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-zinc-400">
                      <AlertCircle className="w-5 h-5 text-indigo-400" />
                      <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">Problem Statement</h4>
                    </div>
                    <p className="font-sans text-sm text-zinc-400 leading-relaxed font-light pl-7">
                      {selectedProject.problemStatement}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-zinc-400">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">Key Features</h4>
                    </div>
                    <div className="pl-7 grid grid-cols-1 gap-2.5">
                      {selectedProject.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm text-zinc-400">
                          <span className="text-emerald-500/50 mt-0.5">&bull;</span>
                          <span className="font-light leading-relaxed">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Development Process */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-zinc-400">
                      <Wrench className="w-5 h-5 text-amber-400" />
                      <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">Implementation details</h4>
                    </div>
                    <p className="font-sans text-sm text-zinc-400 leading-relaxed font-light pl-7">
                      {selectedProject.developmentProcess}
                    </p>
                  </div>

                  {/* Key Challenges */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-zinc-400">
                      <Flame className="w-5 h-5 text-red-400" />
                      <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">Challenges &amp; Solutions</h4>
                    </div>
                    <p className="font-sans text-sm text-zinc-400 leading-relaxed font-light pl-7">
                      {selectedProject.challenges}
                    </p>
                  </div>

                  {/* Future Improvements */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-zinc-400">
                      <TrendingUp className="w-5 h-5 text-cyan-400" />
                      <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">Future Roadmap</h4>
                    </div>
                    <p className="font-sans text-sm text-zinc-400 leading-relaxed font-light pl-7">
                      {selectedProject.futureImprovements}
                    </p>
                  </div>

                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
