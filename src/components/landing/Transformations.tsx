import { Reveal } from "@/components/Reveal";

const ENTRIES = [
  {
    index: "001",
    term: "Master Data Cleaning",
    definition:
      "Porządkujemy dane źródłowe — duplikaty, formaty, błędne rekordy. Jedna wersja prawdy.",
  },
  {
    index: "002",
    term: "Data Integration",
    definition:
      "Łączymy systemy, które dziś nie wymieniają między sobą danych. ERP, sprzedaż, magazyn — jeden przepływ.",
  },
  {
    index: "003",
    term: "Report Automation",
    definition:
      "Raporty generują się i dystrybuują bez udziału zespołu. O stałej porze, w stałym formacie.",
  },
  {
    index: "004",
    term: "Business Intelligence",
    definition:
      "Kluczowe wskaźniki firmy w czasie rzeczywistym, w jednym widoku. Decyzje na danych, nie na przeczuciu.",
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
              zakres prac
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
