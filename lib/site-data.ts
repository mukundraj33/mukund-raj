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
  Phone,
  Sparkles,
} from "lucide-react";

export const RESUME_URL = "/resume/Mukund_Raj_Resume.pdf";
export const CONTACT_EMAIL = "mukundraj01234@gmail.com";

export const aboutContent = [
  "I am a final year student at IIT Bombay and a software engineer focused on building dependable products across web, systems, and applied machine learning.",
  "I enjoy turning ambiguous problems into clean user experiences, scalable interfaces, and maintainable engineering systems.",
] as const;

export const SOCIAL_LINKS = {
  github: "https://github.com/mukundraj33",
  linkedin: "https://www.linkedin.com/in/mukundrajiitb",
  instagram: "https://www.instagram.com/mukund_raj_/",
  email: `mailto:${CONTACT_EMAIL}`,
  phone: "tel:+918102806533",
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

export const skills = [
  { name: "Python", rating: 9, Icon: Database },
  { name: "Machine Learning", rating: 8, Icon: BrainCircuit },
  { name: "Deep Learning", rating: 8, Icon: Cpu },
  { name: "TensorFlow / Keras", rating: 8, Icon: Braces },
  { name: "OpenCV", rating: 8, Icon: Camera },
  { name: "Computer Vision", rating: 8, Icon: MonitorCog },
  { name: "Natural Language Processing", rating: 8, Icon: Sparkles },
  { name: "PyTorch", rating: 7, Icon: Atom },
  { name: "AI Agents & LLMs", rating: 8, Icon: BrainCircuit },
  { name: "Streamlit", rating: 7, Icon: Code2 },
  { name: "C++", rating: 7, Icon: Code2 },
  { name: "Git & GitHub", rating: 7, Icon: GitBranch },
  { name: "SQL", rating: 7, Icon: Database },
  { name: "NumPy", rating: 8, Icon: Hexagon },
  { name: "Pandas", rating: 8, Icon: Database },
  { name: "Scikit-learn", rating: 8, Icon: Link2 },
  { name: "MediaPipe", rating: 7, Icon: Camera },
  { name: "YOLOv8", rating: 7, Icon: MonitorCog },
  { name: "Linux", rating: 7, Icon: Cpu },
  { name: "Problem Solving", rating: 9, Icon: Sparkles },
] satisfies Array<{
  name: string;
  rating: number;
  Icon: LucideIcon;
}>;

export const projects = [
  {
    title: "Hand Gesture Recognition",
    description:
      "Built a real-time hand gesture recognition system that interprets hand movements for intuitive human-computer interaction and accessibility-focused applications.",
    imageAlt: "Hand gesture recognition project screenshot",
    imageSrc: "/images/hand-gesture-recognition.png",
    githubUrl: SOCIAL_LINKS.github,
    demoUrl: "#",
  },
  {
    title: "Multilingual NLP",
    description:
      "Developed a multilingual NLP pipeline for processing and analyzing text across languages, enabling richer language understanding and downstream insights.",
    imageAlt: "Multilingual NLP project screenshot",
    imageSrc: "/images/multilingual-nlp-analysis.png",
    githubUrl: SOCIAL_LINKS.github,
    demoUrl: "#",
  },
  {
    title: "Agentic AI Tutor",
    description:
      "Created an agentic AI tutor that guides learners through complex topics with conversational assistance, adaptive feedback, and structured problem-solving support.",
    imageAlt: "Agentic AI tutor project screenshot",
    imageSrc: "/images/agentic-ai-tutor.png",
    githubUrl: SOCIAL_LINKS.github,
    demoUrl: "#",
  },
  {
    title: "Face Mask Detection",
    description:
      "Designed a computer vision solution for face mask detection that combines image preprocessing and classification for reliable real-world monitoring use cases.",
    imageAlt: "Face mask detection project screenshot",
    imageSrc: "/images/face-mask-detection.png",
    githubUrl: SOCIAL_LINKS.github,
    demoUrl: "#",
  },
  {
    title: "Agentic AI Trainer",
    description:
      "Implemented an agentic AI trainer to support interactive skill-building, workflow coaching, and intelligent practice sessions for learners and teams.",
    imageAlt: "Agentic AI trainer project screenshot",
    imageSrc: "/images/agentic-ai-trainer.png",
    githubUrl: SOCIAL_LINKS.github,
    demoUrl: "#",
  },
] as const;

export const socialItems = [
  { label: "LinkedIn", href: SOCIAL_LINKS.linkedin, Icon: Link2 },
  { label: "GitHub", href: SOCIAL_LINKS.github, Icon: GitBranch },
  { label: "Instagram", href: SOCIAL_LINKS.instagram, Icon: Camera },
  { label: "Email", href: SOCIAL_LINKS.email, Icon: Mail },
  { label: "Phone", href: SOCIAL_LINKS.phone, Icon: Phone },
] as const;
