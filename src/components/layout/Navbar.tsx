import Link from "next/link";

const NAV_LINKS = [
  { label: "Usługi", href: "#uslugi" },
  { label: "Zespół", href: "#zespol" },
  { label: "Kontakt", href: "#kontakt" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full bg-bg/70 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span className="text-[15px] font-semibold tracking-tight text-fg">
            Odzyskany Czas
          </span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm text-fg-muted transition-colors hover:text-fg"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
