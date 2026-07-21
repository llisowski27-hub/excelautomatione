import { Reveal } from "@/components/Reveal";

const PEOPLE = [
  { initials: "—", name: "Imię Nazwisko", role: "Automatyzacje" },
  { initials: "—", name: "Imię Nazwisko", role: "Dashboardy i dane" },
  { initials: "—", name: "Imię Nazwisko", role: "Kontakt z klientem" },
];

export function Team() {
  return (
    <section id="zespol" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex items-baseline justify-between border-b border-line pb-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-fg-faint">
              Zespół
            </p>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-fg-faint">
              ludzie, nie system
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="text-giant mt-12 max-w-2xl text-fg">
            Przychodzimy i&nbsp;znika
            <span className="text-accent"> najgorsza robota.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-line sm:grid-cols-3">
          {PEOPLE.map((person, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="h-full bg-surface p-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-line-strong text-lg text-fg-faint">
                  {person.initials}
                </div>
                <p className="mt-6 text-lg font-semibold text-fg">{person.name}</p>
                <p className="mt-1 text-sm text-fg-muted">{person.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
