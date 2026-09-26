import Reveal from "@/components/ui/Reveal";
import { ABOUT_STATS } from "@/lib/constants";

export default function About() {
  return (
    <section id="about" className="py-28 sm:py-32">
      <div className="max-w-[1120px] mx-auto px-8">
        <p className="font-mono text-accent text-[12.5px] mb-14">About</p>
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 items-start">
          <Reveal>
            <p className="text-muted text-[17px] max-w-[46ch]">
              I&apos;m a frontend-focused Full Stack Developer with nearly 3 years of production
              experience across React.js, Next.js, Node.js and TypeScript — from scalable component
              architecture and SSR/SSG performance to Node.js/REST API integration. Based in Dubai,
              UAE, and increasingly building alongside AI-assisted workflows (Claude, Cursor, GitHub
              Copilot, Antigravity) to ship faster without cutting corners.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-px bg-line border border-line">
              {ABOUT_STATS.map((s) => (
                <div key={s.label} className="bg-bg p-6">
                  <div className="text-[2.2rem] font-bold text-accent font-mono">{s.num}</div>
                  <div className="text-muted text-[13.5px] mt-1.5">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
