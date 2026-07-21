# Odzyskany Czas

Strona marketingowa dla firmy automatyzującej powtarzalne zadania w małych
i średnich firmach: dashboardy Power BI, automatyzacje Python + Excel,
raporty które same się wysyłają.

## Stack

- Next.js (App Router) + TypeScript (strict)
- Tailwind CSS v4 — design tokeny w `src/app/globals.css`
- react-hook-form + zod (walidacja formularza leadowego przez Server Action)
- Radix UI (accordion, label) + lucide-react

## Rozwój

```bash
npm install
npm run dev
```

Otwórz [http://localhost:3000](http://localhost:3000).

```bash
npm run lint    # ESLint
npm run build   # build produkcyjny + typecheck
```

## Struktura

- `src/components/landing/` — sekcje strony głównej (Hero, Services, FAQ, CTA, ...)
- `src/components/ui/` — prymitywy (Button, Input, Accordion, ...)
- `src/lib/schemas/lead.ts` — schema formularza leadowego (zod)
- `src/app/actions/lead.ts` — Server Action obsługująca zgłoszenia
