const ITEMS = [
  "EXCEL",
  "POWER BI",
  "PYTHON",
  "API",
  "RAPORTY",
  "SCRAPING",
  "DASHBOARDY",
  "AUTOMATYZACJA",
];

export function ServiceTicker() {
  const loop = [...ITEMS, ...ITEMS];

  return (
    <div className="overflow-hidden border-y border-border bg-ink py-4">
      <div className="flex w-max animate-marquee gap-10">
        {[...loop, ...loop].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 text-sm font-bold tracking-widest text-paper/90"
          >
            {item}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
