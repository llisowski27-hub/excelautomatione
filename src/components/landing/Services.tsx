"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";

const SERVICES = [
  {
    number: "01",
    label: "Dashboardy",
    headline: "Wiesz co dzieje się w firmie w 10 sekund.",
    detail:
      "Wszystkie dane w jednym miejscu — sprawdzasz wynik dnia, nie szukasz go w plikach.",
  },
  {
    number: "02",
    label: "Automatyzacje",
    headline: "Przestajesz robić nudną robotę.",
    detail:
      "To, co teraz robicie ręcznie każdego dnia, dzieje się samo — bez Waszego udziału.",
  },
  {
    number: "03",
    label: "Raporty",
    headline: "Raport sam trafia na Twoją skrzynkę.",
    detail:
      "Bez klikania, bez pilnowania terminu. Gotowy, o stałej porze, każdego dnia.",
  },
];

function ServiceRow({ service, delay }: { service: (typeof SERVICES)[number]; delay: number }) {
  const [open, setOpen] = useState(false);

  return (
    <Reveal delay={delay}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="group w-full border-b border-line py-8 text-left transition-colors duration-300 hover:bg-white/[0.02]"
      >
        <div className="grid grid-cols-[auto_1fr_auto] items-baseline gap-6 sm:gap-10">
          <span className="font-mono text-xs text-fg-faint">{service.number}</span>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              {service.label}
            </p>
            <p className="text-big mt-3 text-fg">{service.headline}</p>
            <div className="expand-rows" data-open={open}>
              <div>
                <p className="max-w-md pt-4 text-base leading-relaxed text-fg-muted">
                  {service.detail}
                </p>
              </div>
            </div>
          </div>
          <span
            className={`font-mono text-lg text-fg-faint transition-transform duration-300 ${
              open ? "rotate-45" : ""
            }`}
          >
            +
          </span>
        </div>
      </button>
    </Reveal>
  );
}

export function Services() {
  return (
    <section id="uslugi" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex items-baseline justify-between border-b border-line pb-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-fg-faint">
              Co robimy
            </p>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-fg-faint">
              03 / usługi
            </p>
          </div>
        </Reveal>

        <div>
          {SERVICES.map((service, i) => (
            <ServiceRow key={service.number} service={service} delay={i * 70} />
          ))}
        </div>
      </div>
    </section>
  );
}
