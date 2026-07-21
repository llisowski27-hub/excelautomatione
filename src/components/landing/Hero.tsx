import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { DataGrid } from "@/components/landing/DataGrid";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-16 sm:pb-28 sm:pt-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface px-3.5 py-1.5 text-xs font-medium text-ink-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Automatyzacja dla małych i średnich firm
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="text-display mt-6 text-ink">
              Przestań kopiować dane
              <br />
              między Excelami
              <br />
              <span className="text-accent">o 22:00.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-muted">
              Automatyzujemy powtarzalne zadania, łączymy dane i budujemy
              dashboardy — Wy zajmujecie się firmą, nie klejeniem
              arkuszy.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button asChild size="lg" variant="primary">
                <Link href="#kontakt">
                  Sprawdź ile czasu możesz odzyskać
                  <ArrowRight size={16} />
                </Link>
              </Button>
              <Link
                href="#uslugi"
                className="text-sm font-semibold text-ink-muted transition-colors hover:text-ink"
              >
                Zobacz co robimy →
              </Link>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-border pt-6">
              {[
                "Bez wdrożeń trwających kwartałami",
                "Bez działu IT po Waszej stronie",
                "Płacisz za rozwiązanie, nie za godziny",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-ink-muted">
                  <span className="h-1 w-1 rounded-full bg-sage" />
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="rounded-xl border border-border bg-surface p-6 shadow-[0_1px_2px_rgba(23,21,18,0.04)] sm:p-8">
            <p className="mb-5 text-xs font-medium uppercase tracking-wide text-ink-faint">
              Zanim
            </p>
            <DataGrid />
            <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
              <p className="text-xs text-ink-faint">20 plików · brak wspólnego widoku</p>
              <span className="rounded-full bg-sage-soft px-2.5 py-1 text-[11px] font-semibold text-sage">
                1 dashboard
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
