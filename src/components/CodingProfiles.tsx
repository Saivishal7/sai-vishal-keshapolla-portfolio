import { 
  Github, 
  Linkedin, 
  Trophy, 
  ArrowUpRight
} from "lucide-react";
import TiltCard from "./TiltCard";

const LeetCodeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-indigo-400" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.483 0a1.39 1.39 0 0 0-.961.411l-9.12 9.119a1.37 1.37 0 0 0-.379.976c-.004.368.137.74.402 1.007l5.42 5.42a1.336 1.336 0 0 0 1.95 0l9.12-9.12a1.354 1.354 0 0 0 .378-.974c.004-.367-.138-.74-.403-1.007l-5.42-5.42A1.36 1.36 0 0 0 13.483 0zm-5.1 11.3a.62.62 0 1 1 0-1.24.62.62 0 0 1 0 1.24zM15.42 16.7l-2.22 2.22a.96.96 0 0 1-1.36 0l-5.42-5.42a.96.96 0 0 1 0-1.36l2.22-2.22.95.95-1.58 1.58 4.07 4.07 1.58-1.58.95.95z" />
  </svg>
);

const CodolioIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export default function CodingProfiles() {
  const profiles = [
    {
      platform: "LeetCode",
      handle: "saivishal7",
      metric: "Problems Solved",
      metricValue: "246+",
      subMetric: "Contest Rating",
      subMetricValue: "1404",
      link: "https://leetcode.com/u/saivishal7",
      buttonText: "View Profile",
      icon: LeetCodeIcon
    },
    {
      platform: "Codolio",
      handle: "ICPC2628019",
      metric: "Solves Across Platforms",
      metricValue: "419+",
      subMetric: "Platform Scorecard",
      subMetricValue: "Verified Gold",
      link: "https://codolio.com/profile/ICPC2628019",
      buttonText: "View Profile",
      icon: CodolioIcon
    },
    {
      platform: "GitHub",
      handle: "Saivishal7",
      metric: "Contribution Grid",
      metricValue: "Active",
      subMetric: "Repository Count",
      subMetricValue: "32 Active",
      link: "https://github.com/Saivishal7",
      buttonText: "View GitHub",
      icon: () => <Github className="w-5 h-5 text-indigo-400" />
    },
    {
      platform: "LinkedIn",
      handle: "Sai Vishal Keshapolla",
      metric: "Professional Network",
      metricValue: "Hyderabad, IN",
      subMetric: "Target Interest",
      subMetricValue: "Full-Stack Dev",
      link: "https://linkedin.com/in/sai-vishal-a04423272",
      buttonText: "Connect",
      icon: () => <Linkedin className="w-5 h-5 text-indigo-400" />
    }
  ];

  return (
    <section className="section-padding relative" id="profiles">
      {/* Section Header */}
      <div className="text-center mb-16">
        <p className="heading-label">
          Active Channels
        </p>
        <h2 className="heading-title">
          Coding Profiles
        </h2>
      </div>

      {/* Grid of Compact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8" id="profiles-grid">
        {profiles.map((profile) => {
          const Icon = profile.icon;
          return (
            <div key={profile.platform}>
              <TiltCard className="glass-card rounded-2xl p-6 lg:p-8 flex flex-col justify-between h-full group transition-all duration-300">
                <div>
                  {/* Top: Header */}
                  <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/10">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 shadow-lg backdrop-blur-md">
                      <Icon />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-white text-lg leading-tight">
                        {profile.platform}
                      </h3>
                      <p className="font-mono text-xs text-zinc-500 mt-1 truncate max-w-[150px]" title={profile.handle}>
                        {profile.handle}
                      </p>
                    </div>
                  </div>

                  {/* Middle: Metrics with clean layout */}
                  <div className="space-y-6">
                    {/* Primary Metric */}
                    <div className="space-y-1.5">
                      <span className="font-sans text-[11px] text-zinc-500 block font-bold uppercase tracking-widest">
                        {profile.metric}
                      </span>
                      <div className="font-display text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">
                        {profile.metricValue}
                      </div>
                    </div>

                    {/* Secondary Metric */}
                    <div className="space-y-1.5">
                      <span className="font-sans text-[11px] text-zinc-500 block font-bold uppercase tracking-widest">
                        {profile.subMetric}
                      </span>
                      <div className="font-mono text-sm font-semibold text-zinc-300 flex items-center gap-2 pt-0.5">
                        <Trophy className="w-4 h-4 text-indigo-400 shrink-0" />
                        <span>{profile.subMetricValue}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom: Link Button */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <a
                    href={profile.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl text-sm font-semibold text-center border border-white/10 text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 transition-all flex items-center justify-center gap-2 cursor-pointer group/btn"
                  >
                    <span>{profile.buttonText}</span>
                    <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all" />
                  </a>
                </div>
              </TiltCard>
            </div>
          );
        })}
      </div>
    </section>
  );
}
