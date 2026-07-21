import { Reveal } from "@/components/Reveal";
import { LeadForm } from "@/components/landing/LeadForm";

export function CTA() {
  return (
    <section id="kontakt" className="border-t border-border px-6 py-24 sm:py-32">
      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div>
          <Reveal>
            <p className="text-sm font-semibold text-accent">Zacznij tutaj</p>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="text-display-sm mt-3">Ile czasu tracicie w tym tygodniu?</h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-muted">
              Krótki formularz, konkretna rozmowa. Bez prezentacji
              sprzedażowych i bez zobowiązań.
            </p>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-8 space-y-3">
              {[
                "15 minut rozmowy, nie godzina prezentacji",
                "Wychodzisz z konkretną rekomendacją",
                "Zero presji, zero umów na siłę",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <p className="text-sm text-ink-muted">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="rounded-lg border border-border bg-surface p-8">
            <LeadForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
