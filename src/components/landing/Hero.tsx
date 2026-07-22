import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";

const STATS = [
  { value: 12, suffix: "h", label: "odzyskane tygodniowo" },
  { value: 3, suffix: " dni", label: "do pierwszej automatyzacji" },
  { value: 0, suffix: "", label: "kopiuj-wklej" },
  { value: 100, suffix: "%", label: "automatycznie" },
];

const SLOGANS = ["Widzisz każdy krok.", "Gotowe w dni, nie miesiące.", "Bez znikania na miesiąc."];

export function Hero() {
  return (
    <section className="flex min-h-screen flex-col justify-center px-6 pt-28 pb-16">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
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
                  <Link href="#uslugi">Co robimy</Link>
                </Button>
                <Button asChild size="lg" variant="primary">
                  <Link href="#kontakt">Umów rozmowę</Link>
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={260}>
            <div className="rounded-lg bg-accent p-8 sm:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-bg/60">
                // jak pracujemy
              </p>
              <div className="mt-6 space-y-2">
                {SLOGANS.map((slogan) => (
                  <p
                    key={slogan}
                    className="font-mono text-2xl font-bold uppercase leading-tight tracking-tight text-bg sm:text-3xl"
                  >
                    {slogan}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={340}>
          <div
            id="rezultaty"
            className="mt-20 grid gap-10 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-4"
          >
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="text-big tabular-nums text-fg">
                  <CountUp to={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-1.5 text-sm text-fg-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
