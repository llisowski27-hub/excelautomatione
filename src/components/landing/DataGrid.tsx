const COLS = 6;
const ROWS = 5;
const HIGHLIGHTS = new Set([2, 7, 9, 14, 20, 23]);

function seededOffset(i: number) {
  // Deterministic pseudo-random scatter so server/client markup match.
  const a = Math.sin(i * 12.9898) * 43758.5453;
  const b = Math.sin(i * 78.233) * 12345.678;
  const dx = ((a - Math.floor(a)) - 0.5) * 64;
  const dy = ((b - Math.floor(b)) - 0.5) * 64;
  const rot = ((a - Math.floor(a)) - 0.5) * 40;
  return { dx, dy, rot };
}

export function DataGrid() {
  const cells = Array.from({ length: COLS * ROWS }, (_, i) => i);

  return (
    <div
      className="grid gap-2 sm:gap-2.5"
      style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` }}
      aria-hidden="true"
    >
      {cells.map((i) => {
        const { dx, dy, rot } = seededOffset(i);
        const isHighlight = HIGHLIGHTS.has(i);
        return (
          <div
            key={i}
            className="aspect-square rounded-[5px] data-cell"
            style={
              {
                "--dx": `${dx}px`,
                "--dy": `${dy}px`,
                "--rot": `${rot}deg`,
                animationDelay: `${(i % (COLS * ROWS)) * 45}ms`,
                background: isHighlight ? "var(--color-accent)" : "var(--color-border)",
              } as React.CSSProperties
            }
          />
        );
      })}
    </div>
  );
}
