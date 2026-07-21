import { Reveal } from "@/components/Reveal";

const SEGMENTS = [
  "Sklepy internetowe",
  "Hurtownie",
  "Biura rachunkowe",
  "Firmy usługowe",
  "Agencje",
  "Firmy produkcyjne",
];

export function Audience() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-center text-sm font-medium text-ink-faint">
            Pracujemy z firmami, które znają ten problem z autopsji
          </p>
        </Reveal>
        <Reveal delay={60}>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            {SEGMENTS.map((segment) => (
              <span
                key={segment}
                className="rounded-full border border-border px-4 py-2 text-sm text-ink-muted"
              >
                {segment}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
