import { Reveal } from "@/components/Reveal";

const ENTRIES = [
  {
    index: "001",
    term: "Raport zarządczy buduje się sam",
    definition:
      "Sprzedaż z 20 plików Excel scala się w jeden raport i trafia do zarządu o 7:00. Nikt niczego nie otwiera.",
  },
  {
    index: "002",
    term: "Faktury bez ręcznego przepisywania",
    definition:
      "Dane z faktur PDF przenoszą się prosto do systemu księgowego. Zero wklepywania, zero literówek.",
  },
  {
    index: "003",
    term: "Magazyn i sprzedaż w jednym widoku",
    definition:
      "Stany, zamówienia i e-commerce z kilku systemów aktualizują się same w jednym dashboardzie.",
  },
  {
    index: "004",
    term: "Wycena dla klienta w minutę",
    definition:
      "Cenniki dostawców porównują się automatycznie — oferta gotowa od ręki, nie po godzinie liczenia.",
  },
];

export function Transformations() {
  return (
    <section id="transformacje" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex items-baseline justify-between border-b border-line pb-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-fg-faint">
              Index
            </p>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-fg-faint">
              przykładowe wdrożenia
            </p>
          </div>
        </Reveal>

        <div>
          {ENTRIES.map((entry, i) => (
            <Reveal key={entry.index} delay={i * 60}>
              <div className="group grid grid-cols-[auto_1fr] items-baseline gap-6 border-b border-line py-8 transition-colors duration-300 hover:bg-white/[0.02] sm:grid-cols-[auto_1fr_1fr] sm:gap-10">
                <span className="font-mono text-xs text-fg-faint">{entry.index}</span>
                <h3 className="text-big text-fg transition-colors duration-300 group-hover:text-accent">
                  {entry.term}
                </h3>
                <p className="col-start-2 max-w-md text-base leading-relaxed text-fg-muted sm:col-start-3 sm:self-center">
                  {entry.definition}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
