"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, Sparkles, X } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

const links = [
  { label: "Why Us", href: "#why-tappit" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQs", href: "#faq" },
];

const leftLinks = links.slice(0, 2);
const rightLinks = links.slice(2);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastY = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 60);

    const delta = latest - lastY.current;

    if (latest < 40) {
      setHidden(false);
    } else if (delta > 6) {
      setHidden(true);
    } else if (delta < -6) {
      setHidden(false);
    }

    lastY.current = latest;
  });

  return (
    <motion.header
      animate={{ y: hidden ? -110 : 0 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 py-5 sm:px-8"
    >
      <motion.nav
        animate={{
          backgroundColor: scrolled ? "rgba(255,255,255,0.38)" : "rgba(255,255,255,0.22)",
          borderColor: scrolled ? "rgba(148,223,255,0.55)" : "rgba(148,223,255,0.35)",
        }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto flex w-full max-w-5xl items-center justify-between overflow-hidden rounded-full border px-7 py-4 shadow-[0_14px_44px_rgba(2,132,199,0.2)] backdrop-blur-xl backdrop-saturate-150 md:px-10"
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.55),rgba(224,247,255,0.15)_38%,rgba(2,132,199,0.12)_100%)]" />
        <div className="pointer-events-none absolute inset-x-8 top-0 h-1/2 rounded-full bg-gradient-to-b from-white/60 to-transparent" />
        <div className="pointer-events-none absolute -left-10 top-1/2 h-20 w-28 -translate-y-1/2 rounded-full bg-sky-200/30 blur-2xl" />

        <Link href="#" className="relative z-10 flex items-center gap-2 text-xl font-black text-brand-dark sm:text-2xl md:hidden">
          <Sparkles className="h-6 w-6 text-brand-primary" />
          <span className="font-display tracking-tight">Tappit</span>
        </Link>

        <div className="relative z-10 hidden w-full items-center md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-4">
          <div className="flex items-center justify-end gap-8 pr-7">
            {leftLinks.map((item) => (
              <a key={item.label} href={item.href} className="text-base font-semibold text-brand-text transition hover:text-brand-primary-dark">
                {item.label}
              </a>
            ))}
          </div>

          <Link href="#" className="inline-flex items-center gap-2 text-4xl font-black leading-none tracking-tight text-brand-primary-dark">
            <Sparkles className="h-5 w-5 text-brand-primary" />
            <span className="font-display">Tappit</span>
          </Link>

          <div className="flex items-center justify-start gap-8 pl-7">
            {rightLinks.map((item) => (
              <a key={item.label} href={item.href} className="text-base font-semibold text-brand-text transition hover:text-brand-primary-dark">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <button
          aria-label="Toggle menu"
          className="relative z-10 inline-flex text-brand-dark md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-2 max-w-6xl rounded-3xl border border-sky-100 bg-white/95 p-4 shadow-lg backdrop-blur"
          >
            <div className="flex flex-col gap-3">
              {links.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-brand-text transition hover:bg-sky-50"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#download"
                className="rounded-xl bg-sky-500 px-4 py-3 text-center text-sm font-semibold text-white"
                onClick={() => setIsOpen(false)}
              >
                Download App
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
