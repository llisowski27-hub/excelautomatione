import { Reveal } from "@/components/Reveal";

const STEPS = [
  {
    number: "01",
    title: "Rozmowa",
    description: "15–30 minut. Mówisz co Was męczy, my słuchamy i zadajemy pytania.",
  },
  {
    number: "02",
    title: "Wycena i plan",
    description: "Dostajesz konkretną propozycję i zakres — bez zaskoczeń po drodze.",
  },
  {
    number: "03",
    title: "Wdrożenie",
    description: "Zwykle dni, nie miesiące. Pracujemy na Waszych realnych danych.",
  },
  {
    number: "04",
    title: "Działa samo",
    description: "Wracacie do pracy nad firmą. My pilnujemy, żeby proces działał.",
  },
];

export function Process() {
  return (
    <section id="proces" className="border-y border-border bg-surface px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-semibold text-accent">Jak pracujemy</p>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="text-display-sm mt-3 max-w-xl">
            Od rozmowy do działającej automatyzacji.
          </h2>
        </Reveal>

        <div className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div
            className="pointer-events-none absolute top-6 left-0 hidden h-px w-full bg-border lg:block"
            aria-hidden="true"
          />
          {STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 100} className="relative">
              <div className="relative">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-border-strong bg-paper font-mono text-sm font-bold text-ink">
                  {step.number}
                </div>
                <h3 className="mt-5 text-base font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
