import { Reveal } from "@/components/Reveal";

const ROWS = [
  { index: "001", before: "20 Exceli", after: "1 dashboard" },
  { index: "002", before: "5 godzin pracy", after: "30 sekund" },
  { index: "003", before: "Każdy piątek", after: "40 sekund" },
  { index: "004", before: "Klikasz codziennie", after: "Od jutra nie" },
];

export function Transformations() {
  return (
    <section id="transformacje" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex items-baseline justify-between border-b border-line pb-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-fg-faint">
              Zmiana
            </p>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-fg-faint">
              przed / po
            </p>
          </div>
        </Reveal>

        <div>
          {ROWS.map((row, i) => (
            <Reveal key={row.index} delay={i * 60}>
              <div className="group grid grid-cols-[auto_1fr_auto_1fr] items-baseline gap-4 border-b border-line py-7 transition-colors duration-300 hover:bg-white/[0.02] sm:gap-8">
                <span className="font-mono text-xs text-fg-faint">{row.index}</span>
                <span className="text-big text-fg-faint">{row.before}</span>
                <span className="font-mono text-sm text-accent">→</span>
                <span className="text-big text-right text-fg sm:text-left">
                  {row.after}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
