import Reveal from "@/components/ui/Reveal";
import { SKILL_FLOW, SKILL_GROUPS } from "@/lib/constants";

export default function Skills() {
  return (
    <section id="skills" className="py-28 sm:py-32">
      <div className="max-w-[1120px] mx-auto px-8">
        <div className="flex items-baseline justify-between gap-6 flex-wrap mb-14">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Skills</h2>
          <p className="font-mono text-accent text-[12.5px]">Frontend-focused, full stack</p>
        </div>

        <div className="flex flex-col mb-14">
          {SKILL_FLOW.map((tier, i) => (
            <div key={tier.tier}>
              <Reveal delay={i * 0.06} className={`border border-line ${i !== 0 ? "border-t-0" : ""} p-5`}>
                <div className="font-mono text-accent text-xs mb-2">{tier.tier}</div>
                <div className="text-muted text-[14.5px]">{tier.items}</div>
              </Reveal>
              {i < SKILL_FLOW.length - 1 && (
                <div className="text-center text-line text-sm py-0.5">↓</div>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
          {SKILL_GROUPS.map((group) => (
            <div key={group.name} className="bg-bg hover:bg-bg2 p-6 transition-colors">
              <h4 className="font-mono text-accent text-[13px] mb-3.5">{group.name}</h4>
              <ul className="text-muted text-[14.5px] space-y-0.5">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Reveal className="mt-7 border border-dashed border-line rounded-xl px-6 py-5 text-muted text-[14.5px]">
          <b className="text-fg">AI-Assisted Engineering:</b> Claude, ChatGPT, GitHub Copilot and
          Cursor are part of my day-to-day workflow for development, debugging,
          refactoring and exploring implementation approaches — a productivity layer on top of
          engineering judgment, not a replacement for it.
        </Reveal>
      </div>
    </section>
  );
}
