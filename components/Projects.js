"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import { PROJECTS } from "@/lib/constants";

export default function Projects() {
  return (
    <section id="projects" className="py-28 sm:py-32">
      <div className="max-w-[1120px] mx-auto px-8">
        <div className="flex items-baseline justify-between gap-6 flex-wrap mb-14">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Projects</h2>
          <p className="font-mono text-accent text-[12.5px]">Selected work</p>
        </div>

        <div className="space-y-6">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4, rotateX: 1, rotateY: -1 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className="group border border-line hover:border-accent/40 rounded-2xl p-8 sm:p-10 bg-gradient-to-b from-bg2 to-bg transition-colors"
                style={{ transformStyle: "preserve-3d" }}
              >
                <h3 className="text-2xl font-semibold">{p.title}</h3>
                <p className="font-mono text-accent text-[12px] mt-2">Challenge: {p.challenge}</p>
                <p className="text-muted mt-3 max-w-[60ch]">{p.description}</p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[12.5px] border border-line group-hover:border-accent/35 group-hover:text-fg text-muted px-3 py-1.5 rounded-full transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-8 flex-wrap mt-6">
                  {p.stats.map((s) => (
                    <div key={s.label} className="font-mono text-[13px] text-accent">
                      {s.value}
                      <span className="block text-muted text-[12px] mt-0.5">{s.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
