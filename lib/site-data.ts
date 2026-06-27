import type { LucideIcon } from "lucide-react";
import {
  AtSign,
  Atom,
  BrainCircuit,
  Braces,
  Camera,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Hexagon,
  Link2,
  Mail,
  MonitorCog,
  Sparkles,
} from "lucide-react";

export const RESUME_URL = "/resume.pdf"; // Edit resume file/link here.
export const CONTACT_EMAIL = "mukund@example.com"; // Edit email here.

// Edit social links here.
export const SOCIAL_LINKS = {
  github: "https://github.com/mukund",
  linkedin: "https://www.linkedin.com/in/mukund",
  instagram: "https://instagram.com/mukund",
  twitter: "https://x.com/mukund",
  email: `mailto:${CONTACT_EMAIL}`,
} as const;

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export const heroTechIcons = [
  { label: "React", Icon: Atom, className: "left-[4%] top-[15%]" },
  { label: "Next.js", Icon: Cpu, className: "right-[4%] top-[20%]" },
  { label: "Node.js", Icon: Hexagon, className: "left-[10%] bottom-[13%]" },
  { label: "TypeScript", Icon: Braces, className: "right-[11%] bottom-[8%]" },
  { label: "JavaScript", Icon: Code2, className: "right-[45%] -top-[2%]" },
] as const;

export const aboutFeatures = [
  {
    title: "Software Development",
    Icon: MonitorCog,
  },
  {
    title: "Problem Solving",
    Icon: Sparkles,
  },
  {
    title: "Machine Learning",
    Icon: BrainCircuit,
  },
] as const;

// Edit skill ratings here. Rating is out of 10 and automatically updates bulbs.
export const skills = [
  { name: "React", rating: 7, Icon: Atom },
  { name: "Node.js", rating: 6, Icon: Hexagon },
  { name: "Python", rating: 8, Icon: Database },
  { name: "C++", rating: 7, Icon: Code2 },
  { name: "TypeScript", rating: 6, Icon: Braces },
  { name: "HTML", rating: 9, Icon: Code2 },
  { name: "CSS", rating: 7, Icon: Sparkles },
  { name: "JavaScript", rating: 8, Icon: Code2 },
] satisfies Array<{
  name: string;
  rating: number;
  Icon: LucideIcon;
}>;

export const projects = [
  {
    title: "AI Research Dashboard", // Replace project title here.
    description:
      "A polished analytics workspace for tracking experiments, model metrics, and research progress with a clear visual hierarchy.", // Replace project description here.
    imageAlt: "AI Research Dashboard screenshot",
    githubUrl: SOCIAL_LINKS.github, // Replace GitHub link here.
    demoUrl: "#", // Replace Demo link here.
  },
  {
    title: "Campus Connect Platform", // Replace project title here.
    description:
      "A full-stack platform for student communities with event discovery, member tools, and fast responsive interactions.", // Replace project description here.
    imageAlt: "Campus Connect Platform screenshot",
    githubUrl: SOCIAL_LINKS.github, // Replace GitHub link here.
    demoUrl: "#", // Replace Demo link here.
  },
  {
    title: "ML Vision Toolkit", // Replace project title here.
    description:
      "A computer vision toolkit that streamlines image preprocessing, inference workflows, and result visualization.", // Replace project description here.
    imageAlt: "ML Vision Toolkit screenshot",
    githubUrl: SOCIAL_LINKS.github, // Replace GitHub link here.
    demoUrl: "#", // Replace Demo link here.
  },
] as const;

export const socialItems = [
  { label: "GitHub", href: SOCIAL_LINKS.github, Icon: GitBranch },
  { label: "LinkedIn", href: SOCIAL_LINKS.linkedin, Icon: Link2 },
  { label: "Instagram", href: SOCIAL_LINKS.instagram, Icon: Camera },
  { label: "Twitter/X", href: SOCIAL_LINKS.twitter, Icon: AtSign },
  { label: "Email", href: SOCIAL_LINKS.email, Icon: Mail },
] as const;
