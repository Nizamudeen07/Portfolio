"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
