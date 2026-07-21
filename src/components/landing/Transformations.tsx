import { Reveal } from "@/components/Reveal";

const ITEMS = [
  { before: "20 Exceli", after: "1 Dashboard" },
  { before: "5 godzin pracy", after: "30 sekund" },
  { before: "Klikasz codziennie", after: "Od jutra nie." },
];

export function Transformations() {
  return (
    <section id="transformacje" className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        {ITEMS.map((item, i) => (
          <Reveal key={item.before} delay={i * 80}>
            <div
              className={`flex min-h-[46vh] flex-col items-center justify-center text-center ${
                i > 0 ? "border-t border-line" : ""
              }`}
            >
              <p className="text-giant text-fg-faint">{item.before}</p>
              <span className="my-2 text-2xl text-accent">↓</span>
              <p className="text-giant text-fg">{item.after}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
