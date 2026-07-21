import Link from "next/link";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "Usługi", href: "#uslugi" },
  { label: "Jak pracujemy", href: "#proces" },
  { label: "Efekty", href: "#efekty" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-ink">
            <span className="h-2 w-2 rounded-[2px] bg-accent" />
          </span>
          <span className="text-[15px] font-semibold tracking-tight">
            Odzyskany Czas
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-sm px-3.5 py-2 text-sm text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button asChild size="sm" variant="dark">
          <Link href="#kontakt">Umów rozmowę</Link>
        </Button>
      </div>
    </header>
  );
}
