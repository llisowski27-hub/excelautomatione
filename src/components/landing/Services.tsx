import { BarChart3, FileCode2, Send } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const SERVICES = [
  {
    icon: BarChart3,
    title: "Dashboardy i analiza danych",
    headline: "Masz dane. Nie masz czasu, żeby coś z nich odczytać.",
    promise:
      "Zamieniamy rozsypane Excele, eksporty i CSV w dashboard, który pokazuje najważniejsze liczby w kilka sekund.",
    rows: [
      { label: "Dajesz nam", value: "20 Exceli, eksport z ERP, pliki CSV" },
      { label: "Robimy", value: "czyścimy → modelujemy → Power BI → KPI" },
      { label: "Dostajesz", value: "jeden dashboard, aktualizowany automatycznie" },
    ],
    closing: "Zamiast pytać księgową o wynik miesiąca — patrzysz na ekran.",
  },
  {
    icon: FileCode2,
    title: "Python + Excel",
    headline: "15 plików. Jeden raport. Zero kopiuj-wklej.",
    promise:
      "Piszemy skrypty, które robią za Was robotę, którą teraz robicie ręcznie.",
    rows: [
      { label: "Dajesz nam", value: "wiele plików, powtarzalny ręczny proces" },
      { label: "Robimy", value: "łączenie → czyszczenie → raport → eksport PDF" },
      { label: "Dostajesz", value: "gotowy plik, wysłany mailem, bez Twojego udziału" },
    ],
    closing: "To, co robiła jedna osoba przez cały piątek — dzieje się w 40 sekund.",
  },
  {
    icon: Send,
    title: "Automatyczne raportowanie",
    headline: "Raport, który sam się robi i sam się wysyła.",
    promise:
      "Podpinamy się pod Wasz system i dostarczamy gotowy raport na maila o stałej porze — bez pilnowania.",
    flow: {
      before: "SAP → Excel → pivot → mail",
      after: "SAP export → Python → Power BI → mail o 8:00",
    },
    closing: "Wstajesz, a raport już czeka w skrzynce zarządu. Nikt nic nie klikał.",
  },
];

const EXTRA = [
  "Integracje API",
  "Web scraping",
  "Łączenie danych z różnych systemów",
  "Automatyzacja innych powtarzalnych zadań",
];

export function Services() {
  return (
    <section id="uslugi" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-semibold text-accent">Co robimy</p>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="text-display-sm mt-3 max-w-xl">
            Trzy rzeczy, które robimy najlepiej.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-4 max-w-xl text-lg text-ink-muted">
            Nie robimy wszystkiego. Robimy to, co realnie oddaje Wam czas —
            a robimy to dobrze.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 90}>
              <div className="flex h-full flex-col rounded-lg border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-[0_12px_32px_rgba(23,21,18,0.06)]">
                <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-accent-soft text-accent">
                  <service.icon size={19} strokeWidth={1.75} />
                </div>

                <h3 className="mt-5 text-lg font-bold leading-snug text-ink">
                  {service.headline}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">
                  {service.promise}
                </p>

                <div className="mt-6 space-y-3 border-t border-border pt-5">
                  {service.rows?.map((row) => (
                    <div key={row.label} className="text-xs">
                      <span className="font-semibold text-ink-faint">{row.label}: </span>
                      <span className="text-ink-muted">{row.value}</span>
                    </div>
                  ))}

                  {service.flow && (
                    <div className="space-y-2 font-mono text-[11px] leading-relaxed">
                      <p className="text-ink-faint line-through decoration-1">
                        {service.flow.before}
                      </p>
                      <p className="font-semibold text-sage">{service.flow.after}</p>
                    </div>
                  )}
                </div>

                <p className="mt-6 border-t border-border pt-5 text-sm font-medium italic text-ink">
                  “{service.closing}”
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={280}>
          <div className="mt-14 flex flex-wrap items-center gap-3 border-t border-border pt-10">
            <span className="text-sm text-ink-muted">
              Twój problem wygląda inaczej? To wciąż może być ten sam rodzaj roboty:
            </span>
            {EXTRA.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium text-ink-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
