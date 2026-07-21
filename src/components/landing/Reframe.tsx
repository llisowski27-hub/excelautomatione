import { Reveal } from "@/components/Reveal";

export function Reframe() {
  return (
    <section className="border-y border-border bg-surface px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="text-display-sm text-ink">
            Nie jesteśmy software housem.
            <br />
            Nie budujemy Wam systemu na pół roku.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
            Bierzemy to, co już robicie ręcznie, i sprawiamy, że dzieje się
            samo. Szybko, konkretnie, bez wdrożeń trwających kwartałami.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
