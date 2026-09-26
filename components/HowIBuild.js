import Reveal from "@/components/ui/Reveal";
import { BUILD_STEPS, AI_TOOLS } from "@/lib/constants";

export default function HowIBuild() {
  return (
    <section id="how-i-build" className="py-28 sm:py-32">
      <div className="max-w-[1120px] mx-auto px-8">
        <div className="flex items-baseline justify-between gap-6 flex-wrap mb-14">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">How I Build</h2>
          <p className="font-mono text-accent text-[12.5px]">Modern engineering workflow</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line mb-9">
          {BUILD_STEPS.map((step, i) => (
            <Reveal key={step} delay={i * 0.05} className="bg-bg p-5">
              <div className="font-mono text-accent text-xs">{String(i + 1).padStart(2, "0")}</div>
              <div className="text-[14.5px] mt-1.5">{step}</div>
            </Reveal>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          {AI_TOOLS.map((tool) => (
            <span
              key={tool}
              className="font-mono text-[13px] border border-line hover:border-accent hover:text-fg text-muted px-3.5 py-2 rounded-full transition-colors"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
