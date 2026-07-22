"use client";

import { useState } from "react";
import Link from "next/link";

const LINKS = [
  { label: "Co robimy", href: "#uslugi" },
  { label: "Przykłady", href: "#transformacje" },
  { label: "Kontakt", href: "#kontakt" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Fullscreen menu overlay (outside blurred header so `fixed` resolves to viewport) */}
      <div
        className={`fixed inset-0 z-40 bg-bg transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-3 px-6 pt-40">
          {LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${i * 60 + 80}ms` : "0ms" }}
              className={`text-mega w-fit text-fg transition-all duration-500 hover:text-accent ${
                open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <header className="fixed top-0 z-50 w-full">
        <div
          className={`mx-auto grid h-20 max-w-6xl grid-cols-3 items-center px-6 ${
            open ? "" : "bg-bg/70 backdrop-blur-md"
          }`}
        >
          {/* Left: Menu */}
          <div className="flex justify-start">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className="flex items-center gap-2 text-sm text-fg-muted transition-colors hover:text-fg"
            >
              <span className="flex flex-col gap-[3px]">
                <span
                  className={`h-px w-4 bg-current transition-transform duration-300 ${
                    open ? "translate-y-[4px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-px w-4 bg-current transition-transform duration-300 ${
                    open ? "-translate-y-[3px] -rotate-45" : ""
                  }`}
                />
              </span>
              {open ? "Zamknij" : "Menu"}
            </button>
          </div>

          {/* Center: brand */}
          <div className="flex justify-center">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="text-[15px] font-semibold tracking-tight text-fg sm:text-base"
            >
              KillTheBoring
            </Link>
          </div>

          {/* Right: language + contact */}
          <div className="flex items-center justify-end gap-4">
            <div className="hidden items-center gap-1.5 font-mono text-xs text-fg-faint sm:flex">
              <span className="text-fg">PL</span>
              <span>/</span>
              <button type="button" className="transition-colors hover:text-fg">
                ENG
              </button>
            </div>
            <Link
              href="#kontakt"
              onClick={() => setOpen(false)}
              className="text-sm text-fg-muted transition-colors hover:text-fg"
            >
              Contact
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
