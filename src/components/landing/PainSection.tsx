import { Reveal } from "@/components/Reveal";

const PAINS = [
  "Co miesiąc ręcznie przeklejacie dane sprzedażowe do raportu dla zarządu.",
  "Macie dane w 3 systemach, które ze sobą nie rozmawiają.",
  "Ktoś w firmie spędza cały piątek na aktualizowaniu tego samego arkusza.",
  "Boicie się, że jak ta osoba pójdzie na urlop, nikt nie ogarnie procesu.",
  "Wysyłacie ten sam raport co tydzień, klikając dokładnie te same kroki.",
];

export function PainSection() {
  return (
    <section className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="text-sm font-semibold text-accent">Czy to brzmi znajomo?</p>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="text-display-sm mt-3">
            Rozpoznajesz swoją firmę w którymś punkcie?
          </h2>
        </Reveal>

        <div className="mt-12 space-y-0">
          {PAINS.map((pain, i) => (
            <Reveal key={pain} delay={i * 70}>
              <div className="flex items-start gap-4 border-t border-border py-6 last:border-b">
                <span className="mt-1 text-sm font-mono text-ink-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-lg leading-relaxed text-ink">{pain}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
