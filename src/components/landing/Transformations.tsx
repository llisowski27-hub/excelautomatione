import { Reveal } from "@/components/Reveal";

const ENTRIES = [
  {
    index: "001",
    term: "Raportowanie zarządcze",
    definition:
      "Dane sprzedażowe z kilkudziesięciu plików konsolidują się automatycznie w jeden raport, dostarczany zarządowi codziennie o stałej porze.",
  },
  {
    index: "002",
    term: "Obieg dokumentów i faktur",
    definition:
      "Dane z faktur i dokumentów trafiają bezpośrednio do systemu księgowego, z automatyczną walidacją poprawności na każdym etapie.",
  },
  {
    index: "003",
    term: "Magazyn i sprzedaż w jednym widoku",
    definition:
      "Stany, zamówienia i sprzedaż z wielu systemów aktualizują się w jednym, stale aktualnym dashboardzie zarządczym.",
  },
  {
    index: "004",
    term: "Wyceny i oferty",
    definition:
      "Cenniki dostawców aktualizują się i porównują automatycznie — wycena dla klienta gotowa w kilka minut, z pełną kontrolą marży.",
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
