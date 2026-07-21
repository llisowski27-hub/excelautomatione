import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";

const STATS = [
  { value: 12, suffix: "h", label: "odzyskane tygodniowo" },
  { value: 3, suffix: " dni", label: "do pierwszej automatyzacji" },
  { value: 0, suffix: "", label: "kopiuj-wklej" },
  { value: 100, suffix: "%", label: "automatycznie" },
];

export function Stats() {
  return (
    <section id="rezultaty" className="px-6 py-28">
      <div className="mx-auto grid max-w-6xl gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 90}>
            <div className="text-center lg:text-left">
              <p className="text-giant tabular-nums text-fg">
                <CountUp to={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm text-fg-muted">{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
