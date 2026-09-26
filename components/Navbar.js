"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [shrink, setShrink] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setShrink(window.scrollY > 40);
      let current = "home";
      for (const link of NAV_LINKS) {
        const el = document.getElementById(link.id);
        if (el && window.scrollY + 120 >= el.offsetTop) current = link.id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        shrink ? "py-3 bg-bg/85 backdrop-blur-md border-b border-line" : "py-5"
      }`}
    >
      <div className="max-w-[1120px] mx-auto px-8 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 shrink-0" aria-label="Nizamudeen N — Home">
          <Image
            src="/images/nav-avatar.png"
            alt="Nizamudeen N"
            width={36}
            height={36}
            className="rounded-full border border-line object-cover"
            priority
          />
          <span className="hidden xs:inline font-mono text-[13.5px] text-muted">Nizamudeen N</span>
        </a>
        <div className="flex items-center gap-7">
          {NAV_LINKS.slice(0, -1).map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`hidden sm:inline text-[14.5px] relative pb-1 transition-colors ${
                active === link.id ? "text-fg" : "text-muted hover:text-fg"
              }`}
            >
              {link.label}
              {active === link.id && (
                <span className="absolute left-0 right-0 -bottom-0.5 h-px bg-accent" />
              )}
            </a>
          ))}
          <a
            href="#contact"
            className="font-mono text-[13px] border border-line hover:border-accent hover:text-accent px-4 py-2 rounded-full whitespace-nowrap transition-colors"
          >
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </nav>
  );
}
