import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";

const STATS = [
  { value: 12, suffix: "h / tydzień", label: "średni czas odzyskany przez klienta" },
  { value: 0, suffix: " błędów", label: "kopiuj-wklej po wdrożeniu automatyzacji" },
  { value: 3, suffix: " dni", label: "średni czas wdrożenia pierwszej automatyzacji" },
  { value: 7, suffix: " branż", label: "od hurtowni po biura rachunkowe" },
];

export function Results() {
  return (
    <section id="efekty" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-semibold text-accent">Efekty</p>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="text-display-sm mt-3 max-w-xl">
            Liczby, nie obietnice.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 90}>
              <div className="border-t border-border pt-6">
                <p className="text-display-sm text-ink">
                  <CountUp to={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
