import type { Variants } from 'framer-motion';

// Physical stagger animation variants
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      mass: 1,
    },
  },
};

// Spring physics variants
export const springFadeIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 12,
      mass: 1,
    },
  },
};

export const springSlideUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      mass: 1.2,
    },
  },
};

export const springScaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 18,
      mass: 1,
    },
  },
};

// Text reveal variants
export const textReveal: Variants = {
  hidden: { opacity: 0, y: '100%' },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
};

export const textRevealDelay = (index: number): Variants => ({
  hidden: { opacity: 0, y: '100%' },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      delay: index * 0.08,
    },
  },
});

// Image reveal variants
export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.1, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 15,
    },
  },
};

// Floating animation
export const floatVariants: Variants = {
  animate: {
    y: [-10, 10, -10],
    x: [-5, 5, -5],
    rotate: [-1, 1, -1],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Pulse glow
export const pulseGlowVariants: Variants = {
  animate: {
    boxShadow: [
      '0 0 20px rgba(183, 216, 148, 0.3)',
      '0 0 40px rgba(183, 216, 148, 0.6)',
      '0 0 20px rgba(183, 216, 148, 0.3)',
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Page transition variants
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
  exit: { opacity: 0, y: -20 },
};

// Scratch reveal variants
export const scratchVariants: Variants = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

// Section heading variants
export const sectionHeadingVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      delay: 0.1,
    },
  },
};

// Card hover variants
export const cardHoverVariants = {
  rest: { y: 0, rotateX: 0, rotateY: 0, scale: 1 },
  hover: {
    y: -10,
    rotateX: 5,
    rotateY: -5,
    scale: 1.02,
    transition: { type: 'spring', stiffness: 200, damping: 20 },
  },
  tap: { scale: 0.98 },
};

// Button variants
export const buttonVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

// Navigation link variants
export const navLinkVariants = {
  rest: { opacity: 0.7 },
  hover: { opacity: 1, x: 5 },
};

// Floating elements for background
export const generateFloatingVariants = (index: number): Variants => ({
  animate: {
    y: [0, -30 * (index % 3 + 1), 0],
    x: [0, 20 * ((index + 1) % 3 - 1), 0],
    rotate: [0, 5 * (index % 2 === 0 ? 1 : -1), 0],
    transition: {
      duration: 8 + index * 2,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: index * 0.5,
    },
  },
});

// Macaroni floating variants
export const macaroniFloatVariants: Variants = {
  animate: {
    y: [0, -20, 0],
    x: [0, 15, 0],
    rotate: [0, 10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Entrance animation for sections
export const sectionEntrance: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 60,
      damping: 15,
    },
  },
};

// Hero variants
export const heroVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

export const heroTitleVariants: Variants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 12,
    },
  },
};

export const heroSubtitleVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 15,
      delay: 0.2,
    },
  },
};

export const heroImageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, rotate: -5 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 60,
      damping: 12,
      delay: 0.4,
    },
  },
};