import { Reveal } from "@/components/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const QUESTIONS = [
  {
    q: "Czy muszę mieć dział IT?",
    a: "Nie. Większość naszych klientów nie ma i nie potrzebuje własnego działu IT — to jest dokładnie po to, żeby nie musieli go mieć.",
  },
  {
    q: "Ile to kosztuje?",
    a: "Zależy od zakresu — wycena zawsze jest konkretną kwotą po rozmowie, nie widełkami czy stawką godzinową bez końca.",
  },
  {
    q: "Co jeśli już mamy jakiś system (ERP, CRM)?",
    a: "Świetnie — zwykle właśnie stamtąd bierzemy dane. Nie każemy Wam niczego wymieniać.",
  },
  {
    q: "Jak długo trwa wdrożenie?",
    a: "Pierwsza automatyzacja zwykle powstaje w kilka dni, nie miesięcy. Zaczynamy od jednego, konkretnego procesu.",
  },
  {
    q: "Co z bezpieczeństwem naszych danych?",
    a: "Pracujemy wyłącznie na danych potrzebnych do konkretnego zadania i ustalamy zasady dostępu przed startem — to część rozmowy wstępnej.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <p className="text-sm font-semibold text-accent">Pytania</p>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="text-display-sm mt-3">Zanim napiszesz.</h2>
        </Reveal>

        <Reveal delay={120}>
          <Accordion type="single" collapsible className="mt-10">
            {QUESTIONS.map((item) => (
              <AccordionItem key={item.q} value={item.q}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
