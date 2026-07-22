import { Reveal } from "@/components/Reveal";

export function Team() {
  return (
    <section id="zespol" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex items-baseline justify-between border-b border-line pb-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-fg-faint">
              Kto za tym stoi
            </p>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-fg-faint">
              Bloomberg · Phinia
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <p className="text-big mt-12 max-w-3xl text-fg">
            Systemy danych i&nbsp;automatyzacje budowałem w&nbsp;Bloombergu
            i&nbsp;Phinii — dla instytucji operujących na&nbsp;
            <span className="text-accent">miliardach</span>. Teraz robię to samo
            dla firm, które nie mają własnego działu danych.
          </p>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-8 text-sm text-fg-muted">
            Łukasz Lisowski — założyciel
          </p>
        </Reveal>
      </div>
    </section>
  );
}
