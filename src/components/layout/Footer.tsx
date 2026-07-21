import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-ink-faint">
          © {new Date().getFullYear()} Odzyskany Czas. Automatyzacja dla małych i średnich firm.
        </p>
        <div className="flex items-center gap-6">
          <Link href="#uslugi" className="text-sm text-ink-faint transition-colors hover:text-ink">
            Usługi
          </Link>
          <Link href="#faq" className="text-sm text-ink-faint transition-colors hover:text-ink">
            FAQ
          </Link>
          <Link href="#kontakt" className="text-sm text-ink-faint transition-colors hover:text-ink">
            Kontakt
          </Link>
        </div>
      </div>
    </footer>
  );
}
