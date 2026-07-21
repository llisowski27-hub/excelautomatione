import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";

export function Hero() {
  return (
    <section className="flex min-h-screen flex-col justify-center px-6 pt-28 pb-20">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <div>
          <Reveal>
            <h1 className="text-mega text-fg">
              Zabieramy firmom
              <br />
              <span className="text-accent">najbardziej znienawidzoną</span>
              <br />
              robotę.
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-8 max-w-md text-lg text-fg-muted">
              Automatyzujemy wszystko, co codziennie robicie metodą kopiuj → wklej.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" variant="outline">
                <Link href="#transformacje">Pokaż proces</Link>
              </Button>
              <Button asChild size="lg" variant="primary">
                <Link href="#kontakt">Umów rozmowę</Link>
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={260}>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-fg-faint">
              Zwykły dzień w biurze
            </p>
            <p className="text-giant mt-4 text-fg-faint line-through decoration-1">
              12 kliknięć
            </p>
            <span className="my-2 block text-2xl text-accent">↓</span>
            <p className="text-giant text-fg">1 klik</p>
            <Reveal
              delay={500}
              className="rule-draw mt-6 h-px w-full origin-left bg-accent/40"
            >
              <span />
            </Reveal>
            <p className="mt-4 text-sm text-fg-muted">żeby zobaczyć wynik dnia</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
