import Reveal from "@/components/ui/Reveal";
import { EXPERIENCE } from "@/lib/constants";

export default function Experience() {
  return (
    <section id="experience" className="py-28 sm:py-32">
      <div className="max-w-[1120px] mx-auto px-8">
        <div className="flex items-baseline justify-between gap-6 flex-wrap mb-4">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Experience</h2>
          <p className="font-mono text-accent text-[12.5px]">Nov 2023 — Aug 2026</p>
        </div>

        <Reveal className="mb-11">
          <span className="inline-flex items-center gap-2 font-mono text-[13px] text-muted border border-line px-4 py-2 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulseDot" />
            Currently based in Dubai, UAE · Open to opportunities
          </span>
        </Reveal>

        <div className="relative pl-7 border-l border-line">
          {EXPERIENCE.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.1} className="relative pb-14 last:pb-0">
              <span className="absolute -left-[33px] top-1.5 w-2.5 h-2.5 rounded-full bg-bg border-2 border-accent" />
              <div className="text-xl font-semibold">
                {job.role}, {job.company}
              </div>
              <div className="font-mono text-muted text-[13px] mt-1.5">{job.meta}</div>
              <ul className="mt-4 text-muted text-[15px] max-w-[62ch] space-y-2">
                {job.bullets.map((b) => (
                  <li key={b} className="pl-4 relative">
                    <span className="absolute left-0 text-accent">—</span>
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
