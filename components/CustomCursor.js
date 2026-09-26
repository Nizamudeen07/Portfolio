"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    if (reduced || isTouch) return;

    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0,
      raf;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = `${mx}px`;
        dotRef.current.style.top = `${my}px`;
      }
    };

    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.left = `${rx}px`;
        ringRef.current.style.top = `${ry}px`;
      }
      raf = requestAnimationFrame(loop);
    };

    const onEnter = () => ringRef.current?.classList.add("w-14", "h-14", "border-accent");
    const onLeave = () => ringRef.current?.classList.remove("w-14", "h-14", "border-accent");

    window.addEventListener("pointermove", onMove);
    raf = requestAnimationFrame(loop);

    const interactive = document.querySelectorAll("a, button");
    interactive.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
      interactive.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot fixed top-0 left-0 z-[999] w-1.5 h-1.5 rounded-full bg-accent pointer-events-none -translate-x-1/2 -translate-y-1/2"
      />
      <div
        ref={ringRef}
        className="cursor-ring fixed top-0 left-0 z-[999] w-9 h-9 rounded-full border border-accent/50 pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-[width,height,border-color] duration-200"
      />
    </>
  );
}
