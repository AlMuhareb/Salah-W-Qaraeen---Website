import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const profile = {
  name: "Salah W Qaraeen",
  title: "Cybersecurity & Criminology Student",
  tagline:
    "Bridging cybersecurity and criminology to understand digital threats, crime, public safety, investigation and risk.",
  email: "salahqaraeen77@gmail.com",
  location: "Sydney, Australia",
  linkedin: "https://www.linkedin.com/in/salah-qaraeen-a81415261",
  github: "#",
  tryHackMe: "#",
  hackTheBox: "#",
  resume: "#",
  university: "University of Technology Sydney",
  degree: "Bachelor of Cybersecurity / Bachelor of Criminology",
};

function Icon({ name, className = "h-5 w-5", strokeWidth = 1.8 }) {
  const commonProps = {
    viewBox: "0 0 24 24",
    fill: name === "github" ? "currentColor" : "none",
    stroke: name === "github" ? "none" : "currentColor",
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    "aria-hidden": "true",
  };

  switch (name) {
    case "shield":
      return (
        <svg {...commonProps}>
          <path d="M12 3l7 3v5c0 5-3.4 9-7 10-3.6-1-7-5-7-10V6l7-3z" />
        </svg>
      );
    case "lock":
      return (
        <svg {...commonProps}>
          <rect x="5" y="11" width="14" height="10" rx="2" />
          <path d="M8 11V8a4 4 0 0 1 8 0v3" />
        </svg>
      );
    case "terminal":
      return (
        <svg {...commonProps}>
          <path d="M4 7l5 5-5 5" />
          <path d="M12 17h8" />
        </svg>
      );
    case "server":
      return (
        <svg {...commonProps}>
          <rect x="4" y="4" width="16" height="6" rx="2" />
          <rect x="4" y="14" width="16" height="6" rx="2" />
          <path d="M8 7h.01" />
          <path d="M8 17h.01" />
        </svg>
      );
    case "code":
      return (
        <svg {...commonProps}>
          <path d="M8 9l-4 3 4 3" />
          <path d="M16 9l4 3-4 3" />
          <path d="M14 5l-4 14" />
        </svg>
      );
    case "network":
      return (
        <svg {...commonProps}>
          <circle cx="6" cy="6" r="3" />
          <circle cx="18" cy="6" r="3" />
          <circle cx="12" cy="18" r="3" />
          <path d="M8.5 8.2l2.2 6.4" />
          <path d="M15.5 8.2l-2.2 6.4" />
          <path d="M9 6h6" />
        </svg>
      );
    case "scale":
      return (
        <svg {...commonProps}>
          <path d="M12 3v18" />
          <path d="M6 7h12" />
          <path d="M6 7l-3 6h6L6 7z" />
          <path d="M18 7l-3 6h6l-3-6z" />
          <path d="M8 21h8" />
        </svg>
      );
    case "award":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="8" r="5" />
          <path d="M8.5 12.5L7 21l5-3 5 3-1.5-8.5" />
        </svg>
      );
    case "mail":
      return (
        <svg {...commonProps}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M4 7l8 6 8-6" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...commonProps}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M8 11v6" />
          <path d="M8 8.5v.01" />
          <path d="M12 17v-6" />
          <path d="M12 13c0-1.2.8-2 2-2s2 .8 2 2v4" />
        </svg>
      );
    case "github":
      return (
        <svg {...commonProps}>
          <path d="M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.3 6.9 9.7.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.6 2.5 1.1 3.1.8.1-.7.4-1.1.7-1.4-2.3-.3-4.7-1.2-4.7-5 0-1.1.4-2 1-2.8-.1-.3-.4-1.3.1-2.8 0 0 .8-.3 2.8 1.1.8-.2 1.6-.3 2.4-.3s1.6.1 2.4.3c1.9-1.4 2.8-1.1 2.8-1.1.5 1.5.2 2.5.1 2.8.6.7 1 1.7 1 2.8 0 3.9-2.4 4.8-4.7 5 .4.3.8 1 .8 2v2.9c0 .3.2.6.8.5 4-1.4 6.8-5.2 6.8-9.7C22 6.6 17.5 2 12 2z" />
        </svg>
      );
    case "external":
      return (
        <svg {...commonProps}>
          <path d="M14 4h6v6" />
          <path d="M10 14L20 4" />
          <path d="M20 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4" />
        </svg>
      );
    case "document":
      return (
        <svg {...commonProps}>
          <path d="M7 3h7l5 5v13H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
          <path d="M14 3v6h6" />
          <path d="M9 14h6" />
          <path d="M9 18h6" />
        </svg>
      );
    case "eye":
      return (
        <svg {...commonProps}>
          <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "target":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1" />
        </svg>
      );
    case "book":
      return (
        <svg {...commonProps}>
          <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 1 4 16.5z" />
          <path d="M4 16.5A2.5 2.5 0 0 0 6.5 19H20" />
          <path d="M8 7h8" />
          <path d="M8 11h7" />
        </svg>
      );
    case "chevronRight":
      return (
        <svg {...commonProps}>
          <path d="M9 18l6-6-6-6" />
        </svg>
      );
    default:
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}

const navItems = [
  ["About", "#about"],
  ["Lab", "#lab"],
  ["Projects", "#projects"],
  ["Platforms", "#platforms"],
  ["Blog", "#blog"],
  ["Contact", "#contact"],
];

const stats = [
  { label: "Specialisations", value: "Dual", detail: "Cybersecurity + Criminology" },
  { label: "University", value: "UTS", detail: "Technology, crime and society" },
  { label: "Cyber Focus", value: "Defence", detail: "Detection, networks and systems" },
  { label: "Crim Focus", value: "Analysis", detail: "Crime, justice and public safety" },
];

const currentFocus = [
  "Cybersecurity operations, threat detection and incident response",
  "Criminological analysis of crime, harm and public safety",
  "Cybercrime, digital evidence and technology-enabled offending",
  "Justice systems, investigation, prevention and enforcement",
  "Risk management across technical, legal, ethical and social contexts",
];

const skillGroups = [
  {
    title: "Cybersecurity",
    icon: "shield",
    items: ["Threat Detection", "Endpoint Security", "Network Defence", "Incident Response", "SIEM Fundamentals"],
  },
  {
    title: "Criminology",
    icon: "scale",
    items: ["Crime Analysis", "Justice Systems", "Public Safety", "Crime Prevention", "Digital Crime"],
  },
  {
    title: "Programming & Data",
    icon: "code",
    items: ["Python", "Java", "HTML", "CSS", "SQL Basics"],
  },
  {
    title: "Systems & Tools",
    icon: "server",
    items: ["Linux", "Windows", "Wireshark", "VirtualBox", "VMware"],
  },
  {
    title: "Research & Investigation",
    icon: "eye",
    items: ["Digital Evidence", "Case Analysis", "Risk Assessment", "Report Writing", "Ethical Reasoning"],
  },
];

const labNodes = [
  "Internet",
  "Router",
  "Firewall Rules",
  "DNS Server",
  "NAS Storage",
  "Ubuntu VM",
  "Windows VM",
  "Security Testing",
];

const projects = [
  {
    title: "Microsoft Defender Hardening",
    category: "Cybersecurity",
    icon: "shield",
    description: "Configured Defender settings and endpoint protection controls to strengthen host security and improve threat visibility.",
    skills: ["Endpoint Security", "Windows Security", "Threat Defence"],
  },
  {
    title: "Cybercrime Case Analysis Portfolio",
    category: "Criminology",
    icon: "scale",
    description: "A planned portfolio stream analysing technology-enabled offending, victim impact, investigative challenges and prevention strategies.",
    skills: ["Cybercrime", "Victim Impact", "Prevention"],
  },
  {
    title: "Windows Firewall Configuration",
    category: "Cybersecurity",
    icon: "lock",
    description: "Created and tested firewall rules to understand host-level traffic filtering, inbound controls and access restrictions.",
    skills: ["Firewall Rules", "Access Control", "Traffic Filtering"],
  },
  {
    title: "Crime, Risk & Public Safety Notes",
    category: "Criminology",
    icon: "book",
    description: "A structured research and notes section for policing, courts, corrections, risk, prevention and the social effects of crime.",
    skills: ["Crime Analysis", "Justice", "Public Safety"],
  },
  {
    title: "DNS Server Deployment",
    category: "Cybersecurity Infrastructure",
    icon: "network",
    description: "Configured DNS infrastructure in a controlled lab environment to practise networking, naming and system administration.",
    skills: ["DNS", "Networking", "Linux"],
  },
  {
    title: "Digital Evidence Learning Track",
    category: "Cybersecurity + Criminology",
    icon: "eye",
    description: "A future learning track connecting technical evidence, system activity, digital traces, investigation and criminological context.",
    skills: ["Digital Evidence", "Investigation", "Cybercrime"],
  },
  {
    title: "Home NAS Server",
    category: "Systems Administration",
    icon: "server",
    description: "Built and maintained a NAS environment for file storage, backups, home cloud usage and VM hosting.",
    skills: ["Storage", "Backups", "Virtual Machines"],
  },
  {
    title: "Virtualisation Environment",
    category: "Cyber Lab Engineering",
    icon: "terminal",
    description: "Created isolated Windows and Linux environments using VirtualBox and VMware for cybersecurity experimentation.",
    skills: ["VirtualBox", "VMware", "Ubuntu"],
  },
  {
    title: "Cyber Learning Platforms",
    category: "Hands-On Practice",
    icon: "target",
    description: "Practising enumeration, vulnerability assessment, privilege escalation and defensive security through guided labs.",
    skills: ["TryHackMe", "HackTheBox", "Problem Solving"],
  },
];

const platforms = [
  {
    name: "TryHackMe",
    icon: "target",
    status: "Cybersecurity practice",
    description: "Hands-on cybersecurity training across Pre Security, SOC Level 1, Linux, Windows, networking and threat detection.",
    metrics: ["SOC Level 1", "Pre Security", "Windows Fundamentals", "Linux Fundamentals"],
    link: profile.tryHackMe,
  },
  {
    name: "HackTheBox",
    icon: "terminal",
    status: "Technical security labs",
    description: "Focused practice in enumeration, privilege escalation, web security, vulnerability assessment and network security.",
    metrics: ["Enumeration", "Privilege Escalation", "Web Security", "Network Security"],
    link: profile.hackTheBox,
  },
  {
    name: "Criminology Research",
    icon: "scale",
    status: "Academic and applied analysis",
    description: "A dedicated space for crime analysis, justice issues, cybercrime research, public safety topics and investigation-focused writing.",
    metrics: ["Cybercrime", "Justice Systems", "Public Safety", "Crime Prevention"],
    link: "#blog",
  },
  {
    name: "GitHub",
    icon: "github",
    status: "Repository showcase placeholder",
    description: "A future home for Python security scripts, lab documentation, networking utilities and technical writeups.",
    metrics: ["Python Scripts", "Lab Notes", "Network Tools", "Security Docs"],
    link: profile.github,
  },
];

const certifications = [
  {
    title: "Google Cybersecurity Professional Certificate",
    status: "Completed",
    topics: ["Linux", "Python", "SQL", "SIEM", "Incident Response", "Security Operations"],
  },
  {
    title: "CompTIA Security+",
    status: "In Progress",
    topics: ["Threat Management", "Cryptography", "Access Control", "Governance", "Enterprise Security"],
  },
  {
    title: "CPP20218 Certificate II in Security Operations",
    status: "Completed",
    topics: ["Security Operations", "Access Control", "Observation", "Incident Reporting"],
  },
  {
    title: "Additional Licences & Training",
    status: "Completed",
    topics: ["CPR & First Aid", "White Card", "Blue Card", "Yellow Card"],
  },
];

const blogPosts = [
  {
    title: "Cybercrime and Digital Harm",
    tag: "Criminology",
    readTime: "6 min read",
    summary: "A criminological discussion of how online offending affects victims, communities, institutions and public safety.",
  },
  {
    title: "Building a Home Cybersecurity Lab",
    tag: "Cybersecurity",
    readTime: "6 min read",
    summary: "A beginner-friendly breakdown of how a home lab can support Linux practice, virtual machines, DNS, NAS storage and safe security testing.",
  },
  {
    title: "Digital Evidence and Investigation Basics",
    tag: "Cyber + Crim",
    readTime: "7 min read",
    summary: "A conceptual writeup connecting digital traces, system activity, investigative thinking and evidentiary awareness.",
  },
  {
    title: "Microsoft Defender Hardening Notes",
    tag: "Cybersecurity",
    readTime: "5 min read",
    summary: "A practical note set covering Defender configuration, host protection and security visibility for Windows environments.",
  },
  {
    title: "Crime Prevention in Digital Environments",
    tag: "Criminology",
    readTime: "5 min read",
    summary: "A short analysis of prevention, guardianship, target hardening and risk reduction in technology-enabled crime contexts.",
  },
  {
    title: "Wireshark Traffic Analysis Basics",
    tag: "Cybersecurity",
    readTime: "7 min read",
    summary: "An introductory packet-analysis workflow for understanding network traffic, protocol behaviour and suspicious connections.",
  },
  {
    title: "Justice, Policing and Cybercrime",
    tag: "Criminology",
    readTime: "6 min read",
    summary: "A future article examining how policing, legal processes and enforcement adapt to digital and transnational crime.",
  },
  {
    title: "TryHackMe Learning Journey",
    tag: "Training",
    readTime: "4 min read",
    summary: "A reflection on practical learning paths, rooms completed and the skills developed through cyber training platforms.",
  },
];

const experience = [
  {
    role: "Security Guard",
    company: "Sentinal Security Pty Ltd",
    period: "2025 - Present",
    description: "Maintaining site safety, monitoring access, observing suspicious activity, reporting incidents and protecting people and assets.",
  },
  {
    role: "Barista",
    company: "Gloria Jeans, Greenacre",
    period: "2024 - 2025",
    description: "Prepared beverages, handled transactions, followed quality guidelines and operated effectively in a fast-paced environment.",
  },
  {
    role: "Electronic Salesman",
    company: "Harvey Norman @ Domayne",
    period: "2024",
    description: "Advised customers on technology products, managed stock and price tags, maintained electronics displays and achieved strong early sales results.",
  },
  {
    role: "Customer Support & Coordinator",
    company: "Clicktime Pty",
    period: "2022 - 2023",
    description: "Classified support emails by urgency, handled customer calls, coordinated paperwork and supported meeting arrangements.",
  },
];

const achievements = [
  "Rank 1 in Year 11 Arabic",
  "Rank 1 in Year 12 Arabic HSC",
  "Rank 1 in Year 12 Society and Culture HSC",
  "Most Improved in Year 12 HSC",
];

const allowedIconNames = new Set([
  "shield",
  "lock",
  "terminal",
  "server",
  "code",
  "network",
  "scale",
  "award",
  "mail",
  "linkedin",
  "github",
  "external",
  "document",
  "eye",
  "target",
  "book",
  "chevronRight",
]);

function assertPortfolioData() {
  const collections = {
    stats,
    currentFocus,
    skillGroups,
    projects,
    platforms,
    certifications,
    blogPosts,
    experience,
    achievements,
  };

  Object.entries(collections).forEach(([name, value]) => {
    if (!Array.isArray(value) || value.length === 0) {
      throw new Error(`Portfolio data check failed: ${name} must contain at least one item.`);
    }
  });

  projects.forEach((project) => {
    if (!project.title || !project.description || !allowedIconNames.has(project.icon)) {
      throw new Error(`Portfolio data check failed: invalid project entry for ${project.title || "untitled project"}.`);
    }
  });

  platforms.forEach((platform) => {
    if (!platform.name || !platform.description || !allowedIconNames.has(platform.icon)) {
      throw new Error(`Portfolio data check failed: invalid platform entry for ${platform.name || "untitled platform"}.`);
    }
  });

  skillGroups.forEach((group) => {
    if (!group.title || !allowedIconNames.has(group.icon) || !Array.isArray(group.items) || group.items.length === 0) {
      throw new Error(`Portfolio data check failed: invalid skill group entry for ${group.title || "untitled group"}.`);
    }
  });
}

function runPortfolioDataTests() {
  assertPortfolioData();

  const hasCybersecuritySpecialisation = skillGroups.some((group) => group.title === "Cybersecurity");
  const hasCriminologySpecialisation = skillGroups.some((group) => group.title === "Criminology");
  const hasCybersecurityProject = projects.some((project) => project.category.includes("Cybersecurity"));
  const hasCriminologyProject = projects.some((project) => project.category.includes("Criminology"));
  const hasCybersecurityBlogPost = blogPosts.some((post) => post.tag.includes("Cybersecurity"));
  const hasCriminologyBlogPost = blogPosts.some((post) => post.tag.includes("Criminology"));

  if (!hasCybersecuritySpecialisation || !hasCriminologySpecialisation) {
    throw new Error("Portfolio data test failed: both cybersecurity and criminology skill groups are required.");
  }

  if (!hasCybersecurityProject || !hasCriminologyProject) {
    throw new Error("Portfolio data test failed: both cybersecurity and criminology projects are required.");
  }

  if (!hasCybersecurityBlogPost || !hasCriminologyBlogPost) {
    throw new Error("Portfolio data test failed: both cybersecurity and criminology blog posts are required.");
  }
}

runPortfolioDataTests();

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function SectionHeader({ eyebrow, title, children, align = "center" }) {
  const alignment = align === "left" ? "text-left mx-0" : "text-center mx-auto";
  return (
    <div className={`mb-12 max-w-3xl ${alignment}`}>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">{title}</h2>
      {children && <p className="mt-5 text-base leading-7 text-slate-300 md:text-lg">{children}</p>}
    </div>
  );
}

function Pill({ children }) {
  return <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-100">{children}</span>;
}

function CyberGridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.18),transparent_32%),radial-gradient(circle_at_80%_30%,rgba(99,102,241,0.18),transparent_28%),linear-gradient(135deg,rgba(2,6,23,1),rgba(15,23,42,0.97))]" />
      <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(34,211,238,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.35)_1px,transparent_1px)] [background-size:44px_44px]" />
      <motion.div
        className="absolute left-0 top-0 h-px w-full bg-cyan-300/70 shadow-[0_0_25px_rgba(34,211,238,0.9)]"
        animate={{ y: [0, 820, 0], opacity: [0, 1, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950 to-transparent" />
    </div>
  );
}

function SocialButton({ href, icon, children }) {
  return (
    <a
      href={href}
      target={href === "#" ? undefined : "_blank"}
      rel={href === "#" ? undefined : "noreferrer"}
      className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-medium text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-100"
    >
      <Icon name={icon} className="h-4 w-4" />
      {children}
    </a>
  );
}

function MetricCard({ stat }) {
  return (
    <Card className="rounded-3xl border-white/10 bg-white/[0.05] backdrop-blur">
      <CardContent className="p-5">
        <p className="text-xs uppercase tracking-[0.25em] text-slate-500">{stat.label}</p>
        <p className="mt-2 text-2xl font-black text-white">{stat.value}</p>
        <p className="mt-1 text-sm text-slate-400">{stat.detail}</p>
      </CardContent>
    </Card>
  );
}

function ProjectCard({ project }) {
  return (
    <Card className="group rounded-3xl border-white/10 bg-slate-950/70 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-slate-900/90">
      <CardContent className="p-7">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 ring-1 ring-cyan-300/20">
            <Icon name={project.icon} className="h-6 w-6 text-cyan-300" />
          </div>
          <span className="rounded-full bg-white/[0.05] px-3 py-1 text-xs text-slate-400">{project.category}</span>
        </div>
        <h3 className="text-xl font-bold text-white">{project.title}</h3>
        <p className="mt-4 min-h-24 leading-7 text-slate-300">{project.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.skills.map((skill) => (
            <Pill key={skill}>{skill}</Pill>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function PlatformCard({ platform }) {
  return (
    <Card className="rounded-3xl border-white/10 bg-white/[0.04]">
      <CardContent className="p-7">
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 ring-1 ring-cyan-300/20">
            <Icon name={platform.icon} className="h-6 w-6 text-cyan-300" />
          </div>
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">{platform.status}</span>
        </div>
        <h3 className="mt-6 text-2xl font-bold text-white">{platform.name}</h3>
        <p className="mt-4 leading-7 text-slate-300">{platform.description}</p>
        <div className="mt-6 grid gap-2">
          {platform.metrics.map((metric) => (
            <div key={metric} className="flex items-center gap-3 rounded-2xl bg-slate-950/70 p-3 text-sm text-slate-200 ring-1 ring-white/10">
              <Icon name="chevronRight" className="h-4 w-4 text-cyan-300" />
              {metric}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function LabDiagram() {
  return (
    <div className="rounded-[2rem] border border-cyan-300/20 bg-slate-950/80 p-6 shadow-2xl shadow-cyan-950/30">
      <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">Network Map</p>
          <h3 className="mt-2 text-2xl font-bold text-white">Home Lab Topology</h3>
        </div>
        <Icon name="network" className="h-9 w-9 text-cyan-300" />
      </div>
      <div className="grid gap-3">
        {labNodes.map((node, index) => (
          <div key={node} className="relative">
            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-cyan-300/10 text-xs font-bold text-cyan-200 ring-1 ring-cyan-300/20">
                {String(index + 1).padStart(2, "0")}
              </div>
              <span className="font-medium text-slate-200">{node}</span>
            </div>
            {index < labNodes.length - 1 && <div className="mx-8 h-3 w-px bg-cyan-300/30" />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SalahCyberCriminologyPortfolio() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative min-h-screen overflow-hidden border-b border-white/10">
        <CyberGridBackground />
        <div className="relative mx-auto max-w-7xl px-6 py-7 lg:px-8">
          <nav className="flex items-center justify-between">
            <a href="#top" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-300/10 ring-1 ring-cyan-300/30">
                <Icon name="shield" className="h-6 w-6 text-cyan-300" />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-white">Salah Qaraeen</p>
                <p className="text-xs text-slate-500">Cybersecurity · Criminology · Cybercrime · Public Safety</p>
              </div>
            </a>
            <div className="hidden items-center gap-6 text-sm text-slate-300 lg:flex">
              {navItems.map(([label, href]) => (
                <a key={label} href={href} className="transition hover:text-cyan-300">
                  {label}
                </a>
              ))}
            </div>
          </nav>

          <div id="top" className="grid items-center gap-12 py-20 md:py-28 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7 }}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-300" />
                </span>
                Open to cybersecurity, criminology, cybercrime and public safety opportunities
              </div>

              <h1 className="max-w-5xl text-5xl font-black tracking-tight text-white md:text-7xl">{profile.name}</h1>
              <p className="mt-4 text-2xl font-semibold text-cyan-200 md:text-3xl">{profile.title}</p>

              <div className="mt-5 grid max-w-2xl gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4">
                  <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Specialisation 01</p>
                  <p className="mt-2 text-xl font-bold text-white">Cybersecurity</p>
                </div>
                <div className="rounded-2xl border border-purple-300/20 bg-purple-300/10 p-4">
                  <p className="text-sm uppercase tracking-[0.2em] text-purple-200">Specialisation 02</p>
                  <p className="mt-2 text-xl font-bold text-white">Criminology</p>
                </div>
              </div>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">{profile.tagline}</p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="rounded-2xl bg-cyan-300 px-6 py-6 text-base font-bold text-slate-950 hover:bg-cyan-200">
                  <a href="#projects">
                    <Icon name="terminal" className="mr-2 h-5 w-5" /> View Projects
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-2xl border-white/15 bg-white/5 px-6 py-6 text-base text-white hover:bg-white/10">
                  <a href={profile.resume}>
                    <Icon name="document" className="mr-2 h-5 w-5" /> Download Resume
                  </a>
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <SocialButton href={profile.linkedin} icon="linkedin">LinkedIn</SocialButton>
                <SocialButton href={profile.github} icon="github">GitHub</SocialButton>
                <SocialButton href={profile.tryHackMe} icon="target">TryHackMe</SocialButton>
                <SocialButton href={profile.hackTheBox} icon="terminal">HackTheBox</SocialButton>
                <SocialButton href={`mailto:${profile.email}`} icon="mail">Email</SocialButton>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }}>
              <Card className="rounded-[2rem] border-white/10 bg-white/[0.06] shadow-2xl shadow-cyan-950/40 backdrop-blur">
                <CardContent className="p-6 md:p-8">
                  <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-6">
                    <div className="flex items-center justify-between border-b border-white/10 pb-5">
                      <div>
                        <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Mission Console</p>
                        <h2 className="mt-2 text-2xl font-bold text-white">Cybersecurity + Criminology</h2>
                      </div>
                      <Icon name="eye" className="h-9 w-9 text-cyan-300" />
                    </div>
                    <div className="mt-6 space-y-3">
                      {currentFocus.map((focus) => (
                        <div key={focus} className="flex items-center gap-3 rounded-2xl bg-white/[0.04] p-4 ring-1 ring-white/10">
                          <Icon name="chevronRight" className="h-5 w-5 text-cyan-300" />
                          <span className="text-slate-200">{focus}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="grid gap-4 pb-16 md:grid-cols-4">
            {stats.map((stat) => (
              <MetricCard key={stat.label} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader eyebrow="About" title="Two equal specialisations: cybersecurity and criminology." align="left">
            Salah is building a dual-specialisation profile around technical cyber defence and criminological analysis of crime, harm, justice and public safety.
          </SectionHeader>
          <div className="space-y-6 text-lg leading-8 text-slate-300">
            <p>
              I am currently studying a Bachelor of Cybersecurity and Bachelor of Criminology at the University of Technology Sydney. My academic pathway is not one main area with a secondary interest; it is a combined profile across two major fields: cybersecurity and criminology.
            </p>
            <p>
              On the cybersecurity side, I am interested in security operations, threat detection, incident response, networks, systems and vulnerability assessment. On the criminology side, I am interested in cybercrime, crime prevention, justice systems, policing, digital evidence, victim impact and public safety. The aim is to understand both the technical mechanisms of digital threats and the social, legal and investigative contexts around crime.
            </p>
            <div className="grid gap-4 pt-4 sm:grid-cols-2">
              {[profile.degree, profile.university, "Google Cybersecurity Certified", "CompTIA Security+ In Progress"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-base font-medium text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Technical + Analytical Stack" title="Cybersecurity tools and criminological analysis.">
            A balanced capability base across cybersecurity tools, criminological analysis, research, investigation, systems and technical problem-solving.
          </SectionHeader>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {skillGroups.map((group) => (
              <Card key={group.title} className="rounded-3xl border-white/10 bg-slate-950/70">
                <CardContent className="p-6">
                  <Icon name={group.icon} className="mb-5 h-8 w-8 text-cyan-300" />
                  <h3 className="text-xl font-bold text-white">{group.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Pill key={item}>{item}</Pill>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="lab" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeader eyebrow="Home Lab" title="Cybersecurity lab with criminology-informed investigation focus." align="left">
              A controlled technical lab used for networking, system administration, Linux practice, endpoint security, storage and virtualisation, with future writeups connecting technical findings to cybercrime, digital evidence and investigation.
            </SectionHeader>
            <div className="grid gap-3">
              {[
                "Ubuntu and Windows virtual machines",
                "DNS server and router configuration",
                "NAS storage used for backups and VM hosting",
                "Microsoft Defender and firewall hardening",
                "Network monitoring and traffic analysis practice",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-slate-200">
                  <Icon name="chevronRight" className="h-5 w-5 text-cyan-300" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <LabDiagram />
        </div>
      </section>

      <section id="projects" className="border-y border-white/10 bg-slate-900/60 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Projects" title="Cybersecurity and criminology evidence side by side.">
            These cards present both technical security work and criminology-focused analysis so the portfolio reflects two main specialisations rather than a single cyber-only identity.
          </SectionHeader>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section id="platforms" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionHeader eyebrow="Platforms & Research" title="Technical labs plus criminology analysis.">
          Add real profile links and badges once available. The layout supports TryHackMe, HackTheBox, GitHub and a criminology research stream.
        </SectionHeader>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {platforms.map((platform) => (
            <PlatformCard key={platform.name} platform={platform} />
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Certifications" title="Credentials and structured learning.">
            A dashboard-style certification section showing completed credentials, current study and supporting licences.
          </SectionHeader>
          <div className="grid gap-6 md:grid-cols-2">
            {certifications.map((cert) => (
              <Card key={cert.title} className="rounded-3xl border-white/10 bg-slate-950/70">
                <CardContent className="p-7">
                  <div className="flex items-start justify-between gap-4">
                    <Icon name="award" className="h-8 w-8 text-cyan-300" />
                    <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-100">{cert.status}</span>
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-white">{cert.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {cert.topics.map((topic) => (
                      <Pill key={topic}>{topic}</Pill>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionHeader eyebrow="Blog & Analysis" title="Cybersecurity writeups and criminology analysis.">
          This section should publish both technical cyber notes and criminology-focused analysis of cybercrime, justice, public safety and digital harm.
        </SectionHeader>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((post) => (
            <Card key={post.title} className="rounded-3xl border-white/10 bg-white/[0.04] transition hover:-translate-y-1 hover:border-cyan-300/30">
              <CardContent className="p-6">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <Pill>{post.tag}</Pill>
                  <span className="text-xs text-slate-500">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-white">{post.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{post.summary}</p>
                <a href="#" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-cyan-200">
                  Read writeup <Icon name="external" className="h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/60 px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader eyebrow="Recruiter Snapshot" title="Seeking cybersecurity and criminology-aligned opportunities." align="left">
              Suitable for cybersecurity internships, SOC exposure, criminology-related research, cybercrime analysis, digital forensics exposure, public safety work and graduate pathways.
            </SectionHeader>
            <div className="rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-6">
              <p className="text-lg font-semibold text-white">Target pathways</p>
              <div className="mt-5 grid gap-3">
                {[
                  "SOC Analyst",
                  "Cybersecurity Intern",
                  "Criminology Research",
                  "Cybercrime Analysis",
                  "Digital Forensics",
                  "Public Safety / Justice Pathways",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-slate-200">
                    <Icon name="target" className="h-4 w-4 text-cyan-300" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-5">
            {experience.map((job) => (
              <Card key={`${job.role}-${job.company}`} className="rounded-3xl border-white/10 bg-white/[0.04]">
                <CardContent className="p-6">
                  <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
                    <div>
                      <h3 className="text-xl font-bold text-white">{job.role}</h3>
                      <p className="mt-1 text-cyan-300">{job.company}</p>
                    </div>
                    <span className="w-fit rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">{job.period}</span>
                  </div>
                  <p className="mt-4 leading-7 text-slate-300">{job.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionHeader eyebrow="Achievements" title="Academic recognition and personal discipline." />
        <div className="grid gap-4 md:grid-cols-4">
          {achievements.map((achievement) => (
            <Card key={achievement} className="rounded-3xl border-white/10 bg-white/[0.04]">
              <CardContent className="p-6 text-center">
                <Icon name="award" className="mx-auto mb-4 h-7 w-7 text-cyan-300" />
                <p className="font-semibold text-white">{achievement}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden border-t border-white/10 px-6 py-24 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_35%)]" />
        <div className="relative mx-auto max-w-5xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Contact</p>
          <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">Let&apos;s connect.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Open to cybersecurity internships, criminology-related opportunities, cybercrime analysis, digital forensics learning, public safety pathways, security projects and professional networking.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild className="rounded-2xl bg-cyan-300 px-6 py-6 text-base font-bold text-slate-950 hover:bg-cyan-200">
              <a href={`mailto:${profile.email}`}>
                <Icon name="mail" className="mr-2 h-5 w-5" /> {profile.email}
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-2xl border-white/15 bg-white/5 px-6 py-6 text-base text-white hover:bg-white/10">
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <Icon name="linkedin" className="mr-2 h-5 w-5" /> LinkedIn Profile
              </a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
        <p className="font-semibold text-slate-400">{profile.name}</p>
        <p className="mt-1">Cybersecurity · Criminology · Cybercrime · Public Safety</p>
        <p className="mt-3">Built with React, Tailwind CSS and Framer Motion. © {new Date().getFullYear()} All rights reserved.</p>
      </footer>
    </main>
  );
}
