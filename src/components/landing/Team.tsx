import { Reveal } from "@/components/Reveal";

const TRACK_RECORD = [
  {
    index: "001",
    place: "Bloomberg, Londyn",
    detail:
      "Analiza danych finansowych i automatyzacje Python w globalnej infrastrukturze danych. Protokoły kontroli jakości dla systemów działających w czasie rzeczywistym.",
  },
  {
    index: "002",
    place: "Phinia, Warszawa",
    detail:
      "Modele analityczne wspierające decyzje na ponad $500M rocznej ekspozycji. Automatyczne dashboardy Power BI raportujące bezpośrednio do senior managementu.",
  },
  {
    index: "003",
    place: "Northumbria University",
    detail:
      "Finance and Investment Management (BA Hons, 1st Class). Praca dyplomowa: zastosowania machine learningu w handlu wysokich częstotliwości.",
  },
];

export function Team() {
  return (
    <section id="zespol" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex items-baseline justify-between border-b border-line pb-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-fg-faint">
              Założyciel
            </p>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-fg-faint">
              track record
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <Reveal delay={60}>
              <h2 className="text-giant text-fg">
                Łukasz
                <br />
                Lisowski
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-fg-muted">
                Systemy, które buduję dla firm, wcześniej budowałem dla jednej
                z największych instytucji finansowych świata. Ta sama
                dyscyplina pracy z danymi — w skali Twojej firmy.
              </p>
            </Reveal>
          </div>

          <div>
            {TRACK_RECORD.map((entry, i) => (
              <Reveal key={entry.index} delay={i * 80}>
                <div
                  className={`grid grid-cols-[auto_1fr] gap-6 py-6 ${
                    i > 0 ? "border-t border-line" : ""
                  }`}
                >
                  <span className="font-mono text-xs text-fg-faint">{entry.index}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-fg">{entry.place}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                      {entry.detail}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
