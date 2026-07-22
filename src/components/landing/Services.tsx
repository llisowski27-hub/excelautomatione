"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";

const SERVICES = [
  {
    number: "01",
    label: "Dashboardy zarządcze",
    headline: "Cała firma w jednym widoku, na żywo.",
    detail:
      "Sprzedaż, marża i przepływy z kilkudziesięciu plików i systemów konsolidują się w jeden dashboard, aktualizowany automatycznie.",
  },
  {
    number: "02",
    label: "Automatyzacja procesów",
    headline: "Powtarzalna robota dzieje się sama.",
    detail:
      "Obieg faktur i dokumentów, przenoszenie danych między systemami, czyszczenie — wykonywane codziennie, bez udziału zespołu.",
  },
  {
    number: "03",
    label: "Raportowanie",
    headline: "Raport gotowy, zanim ktokolwiek o niego zapyta.",
    detail:
      "Raporty budują się z danych źródłowych i trafiają do właściwych osób o stałej porze. Ten sam standard, zero opóźnień.",
  },
  {
    number: "04",
    label: "Wyceny i oferty",
    headline: "Wycena dla klienta w kilka minut.",
    detail:
      "Cenniki dostawców aktualizują się i porównują automatycznie — oferta gotowa od ręki, z pełną kontrolą marży.",
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
        className="group w-full border-b border-line py-7 text-left transition-colors duration-300 hover:bg-white/[0.02]"
      >
        <div className="grid grid-cols-[auto_1fr_auto] items-baseline gap-6 sm:gap-10">
          <span className="font-mono text-xs text-fg-faint">{service.number}</span>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              {service.label}
            </p>
            <p className="text-big mt-3 text-fg transition-colors duration-300 group-hover:text-accent">
              {service.headline}
            </p>
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
              usługi
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
