export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6 } },
};

export const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

export const heroItem = (delay = 0) => ({
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1], delay } },
});

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};
