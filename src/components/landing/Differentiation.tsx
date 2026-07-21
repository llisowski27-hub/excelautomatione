import { Wallet, MessagesSquare, Wrench } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const POINTS = [
  {
    icon: Wallet,
    heading: "Nie sprzedajemy Wam systemu za 100 tys. zł.",
    body: "Automatyzujemy to, co już macie — nie każemy Wam wymieniać narzędzi, w których pracujecie od lat.",
  },
  {
    icon: MessagesSquare,
    heading: "Mówimy ludzkim językiem.",
    body: "Zero żargonu IT, zero \"synergii procesów\". Tłumaczymy co robimy tak, żeby to miało sens.",
  },
  {
    icon: Wrench,
    heading: "Płacisz za rozwiązanie problemu.",
    body: "Nie za godziny w harmonogramie i nie za miesięczny abonament, którego nie rozumiesz.",
  },
];

export function Differentiation() {
  return (
    <section className="border-y border-border bg-surface px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-semibold text-accent">Dlaczego my</p>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="text-display-sm mt-3 max-w-xl">
            Nie jesteśmy tacy, jakich się spodziewasz.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {POINTS.map((point, i) => (
            <Reveal key={point.heading} delay={i * 90}>
              <div className="rounded-lg border border-border bg-paper p-7">
                <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-sage-soft text-sage">
                  <point.icon size={19} strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-base font-bold leading-snug text-ink">
                  {point.heading}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">{point.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
