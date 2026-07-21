"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
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

function ServiceTile({ service, delay }: { service: (typeof SERVICES)[number]; delay: number }) {
  const [open, setOpen] = useState(false);

  return (
    <Reveal delay={delay}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full rounded-lg border border-line p-8 text-left transition-colors duration-300 hover:border-line-strong"
      >
        <div className="flex items-start justify-between">
          <div>
            <span className="font-mono text-xs text-fg-faint">{service.number}</span>
            <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-accent">
              {service.label}
            </p>
          </div>
          <Plus
            size={18}
            className={`shrink-0 text-fg-faint transition-transform duration-300 ${
              open ? "rotate-45" : ""
            }`}
          />
        </div>

        <p className="mt-8 text-xl font-bold leading-snug text-fg">{service.headline}</p>

        <div className="expand-rows" data-open={open}>
          <div>
            <p className="mt-4 pt-4 text-sm leading-relaxed text-fg-muted border-t border-line">
              {service.detail}
            </p>
          </div>
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
          <h2 className="text-giant max-w-2xl text-fg">Trzy rzeczy, które robimy.</h2>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <ServiceTile key={service.number} service={service} delay={i * 90} />
          ))}
        </div>
      </div>
    </section>
  );
}
