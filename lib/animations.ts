import type { Variants } from "framer-motion";

export const defaultTransition = {
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1],
} as const;

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: defaultTransition },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: defaultTransition },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: defaultTransition },
};

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

export const viewportOnce = {
  once: true,
  margin: "-80px",
} as const;
