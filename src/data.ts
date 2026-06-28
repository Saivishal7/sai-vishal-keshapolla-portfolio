export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  period: string;
  githubLink: string;
  liveDemoLink: string;
  category: "Full Stack" | "AI" | "Frontend";
}

export interface SkillItem {
  name: string;
  percentage: number; // For progress bar animations
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export interface EducationTimeline {
  institution: string;
  degree: string;
  period: string;
  location: string;
  bullets: string[];
}

export interface Achievement {
  id: string;
  title: string;
  event: string;
  description: string;
  badge: string;
  iconType: "trophy" | "award" | "star" | "chess";
}

export interface CodingProfile {
  platform: string;
  handle: string;
  metric: string;
  subMetric?: string;
  link: string;
  colorClass: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  credentialId?: string;
  link: string;
  imageUrl: string;
}

export const portfolioData = {
  personalInfo: {
    name: "Sai Vishal Keshapolla",
    headline: "Computer Science Student | Full Stack Developer | Problem Solver",
    email: "saivishalkeshapolla123@gmail.com",
    phone: "+91 7075032295",
    location: "ECIL, Hyderabad, Telangana",
    github: "https://github.com/Saivishal7",
    linkedin: "https://linkedin.com/in/sai-vishal-a04423272",
    leetcode: "https://leetcode.com/u/saivishal7",
    codolio: "https://codolio.com/profile/ICPC2628019",
    description: "Passionate Computer Science student specializing in Full Stack Development, Data Structures & Algorithms, and AI-powered applications. I enjoy building impactful products, solving challenging problems, and participating in hackathons.",
  },
  
  education: [
    {
      institution: "Vardhaman College of Engineering",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      period: "Sep. 2024 - May 2028",
      location: "Hyderabad, Telangana",
      bullets: [
        "Expected Graduation: May 2028",
        "Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Web Technologies, Artificial Intelligence, Operating Systems, Software Engineering."
      ]
    }
  ] as EducationTimeline[],

  skills: [
    {
      category: "Languages",
      items: [
        { name: "Java", percentage: 90 },
        { name: "Python", percentage: 85 },
        { name: "C++", percentage: 80 },
        { name: "C", percentage: 75 },
        { name: "JavaScript", percentage: 85 },
        { name: "SQL", percentage: 80 },
        { name: "HTML/CSS", percentage: 95 }
      ]
    },
    {
      category: "Frameworks & Libraries",
      items: [
        { name: "React.js", percentage: 88 },
        { name: "Node.js", percentage: 82 },
        { name: "Express.js", percentage: 85 },
        { name: "Flask", percentage: 78 }
      ]
    },
    {
      category: "Databases",
      items: [
        { name: "MongoDB", percentage: 80 },
        { name: "MySQL", percentage: 85 },
        { name: "SQLite", percentage: 82 }
      ]
    },
    {
      category: "Developer Tools",
      items: [
        { name: "Git", percentage: 88 },
        { name: "GitHub", percentage: 90 },
        { name: "VS Code", percentage: 95 }
      ]
    },
    {
      category: "Core Concepts",
      items: [
        { name: "Data Structures", percentage: 92 },
        { name: "Algorithms", percentage: 85 },
        { name: "DBMS", percentage: 84 },
        { name: "REST APIs", percentage: 90 },
        { name: "Operating Systems", percentage: 78 },
        { name: "OOPs", percentage: 88 }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "e-waste",
      title: "E-Waste Management Platform",
      category: "Full Stack",
      period: "2026",
      description: "A full-stack web platform that connects citizens, repair technicians, recyclers, NGOs, and administrators to streamline e-waste collection and recycling efficiently.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      features: [
        "Secure User Authentication",
        "Role-Based Dashboards for stakeholders",
        "Pickup Scheduling & Request Tracker",
        "RESTful API Integration",
        "Real-time Status Updates",
        "Responsive Client Interface"
      ],
      githubLink: "https://github.com/Saivishal7",
      liveDemoLink: "https://github.com/Saivishal7"
    },
    {
      id: "learnpath-ai",
      title: "LearnPath AI",
      category: "AI",
      period: "2026",
      description: "An AI-powered personalized learning platform that helps students identify weak subjects and receive customized study recommendations, automated timetables, and progress tracking.",
      technologies: ["Python", "Flask", "SQLite", "HTML", "CSS", "Jinja2"],
      features: [
        "Secure User Authentication & Profiles",
        "Personalized Recommendation Engine",
        "Dynamic Progress Tracking",
        "Automated Timetable Generator",
        "Administrative Dashboard"
      ],
      githubLink: "https://github.com/Saivishal7",
      liveDemoLink: "https://github.com/Saivishal7"
    },
    {
      id: "entropy",
      title: "Entropy - Interactive Solving",
      category: "Frontend",
      period: "2026",
      description: "Interactive web platform designed to improve logical thinking and problem-solving through structured coding and aptitude challenges.",
      technologies: ["React.js", "JavaScript", "Tailwind CSS", "CSS"],
      features: [
        "Interactive Coding Challenges",
        "Structured Aptitude Tests",
        "Modern Responsive Dashboard",
        "Reusable Components",
        "Smooth Motion Transitions"
      ],
      githubLink: "https://github.com/Saivishal7",
      liveDemoLink: "https://github.com/Saivishal7"
    }
  ] as Project[],

  achievements: [
    {
      id: "ach-1",
      title: "Secured 1st Place",
      event: "KG Reddy College Hackathon",
      description: "Developed and pitch-presented an end-to-end full-stack E-Waste Management Platform, solving real-world urban recycling tracking issues.",
      badge: "🥇 1st Place Winner",
      iconType: "trophy"
    },
    {
      id: "ach-2",
      title: "Collaborative Workload Platform",
      event: "SNIST XTRM Hackathon (24-Hour)",
      description: "Built a collaborative project management platform to balance team workloads, track progress, and mitigate burnout during high-intensity sessions.",
      badge: "🏆 Competitor & Innovator",
      iconType: "award"
    },
    {
      id: "ach-3",
      title: "Startup Mentoring Ecosystem",
      event: "CodeNYX Hackathon (36-Hour) at CVR College",
      description: "Developed an ecosystem to connect aspiring entrepreneurs with startup mentors, validating business concepts, and facilitating structured planning.",
      badge: "🚀 Top Finalist",
      iconType: "star"
    },
    {
      id: "ach-4",
      title: "Chess Champion",
      event: "ORTUS Annual Fest, Vardhaman College",
      description: "Secured 1st Place in the competitive chess championship during the annual technical and cultural college festival.",
      badge: "♟️ Chess Champion",
      iconType: "chess"
    }
  ] as Achievement[],

  codingProfiles: [
    {
      platform: "LeetCode",
      handle: "saivishal7",
      metric: "246+ Solved",
      subMetric: "Contest Rating: 1404",
      link: "https://leetcode.com/u/saivishal7",
      colorClass: "from-amber-500 to-yellow-600"
    },
    {
      platform: "Codolio",
      handle: "ICPC2628019",
      metric: "419+ Solved",
      subMetric: "Across Platforms",
      link: "https://codolio.com/profile/ICPC2628019",
      colorClass: "from-emerald-500 to-teal-600"
    },
    {
      platform: "GitHub",
      handle: "Saivishal7",
      metric: "Active Contributions",
      subMetric: "Project Repositories",
      link: "https://github.com/Saivishal7",
      colorClass: "from-slate-700 to-slate-900"
    },
    {
      platform: "LinkedIn",
      handle: "Sai Vishal Keshapolla",
      metric: "Professional Network",
      subMetric: "Hyderabad, India",
      link: "https://linkedin.com/in/sai-vishal-a04423272",
      colorClass: "from-blue-600 to-indigo-700"
    }
  ] as CodingProfile[],

  certificates: [
    {
      id: "cert-1",
      title: "Full Stack Software Developer",
      issuer: "Meta (Coursera)",
      year: "2025",
      credentialId: "META-FS-99120",
      link: "https://coursera.org",
      imageUrl: "https://picsum.photos/seed/metafs/400/250"
    },
    {
      id: "cert-2",
      title: "Data Structures & Algorithms Specialization",
      issuer: "UC San Diego & HSE University",
      year: "2025",
      credentialId: "DSA-UCSD-88210",
      link: "https://coursera.org",
      imageUrl: "https://picsum.photos/seed/dsa/400/250"
    },
    {
      id: "cert-3",
      title: "AI & Neural Network Applications",
      issuer: "Google Cloud Skills Boost",
      year: "2026",
      credentialId: "GCP-AI-447192",
      link: "https://cloud.google.com",
      imageUrl: "https://picsum.photos/seed/gcpai/400/250"
    }
  ] as Certificate[]
};
