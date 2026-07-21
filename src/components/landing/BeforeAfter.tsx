import { Reveal } from "@/components/Reveal";

const ITEMS = [
  { before: "17 Exceli", after: "1 raport" },
  { before: "Każdy piątek", after: "40 sekund" },
  { before: "Codziennie klikasz", after: "Komputer robi to sam" },
];

export function BeforeAfter() {
  return (
    <section className="border-y border-line px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 sm:grid-cols-3 sm:gap-6">
        {ITEMS.map((item, i) => (
          <Reveal key={item.before} delay={i * 90}>
            <div className="text-center">
              <p className="text-lg text-fg-faint line-through decoration-1">{item.before}</p>
              <p className="mt-3 text-2xl font-bold text-fg">{item.after}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
