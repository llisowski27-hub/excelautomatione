import { Reveal } from "@/components/Reveal";
import { LeadForm } from "@/components/landing/LeadForm";

export function CTA() {
  return (
    <section id="kontakt" className="px-6 py-32">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="text-giant text-fg">
            Jaki proces w Twojej firmie
            <br />
            najbardziej Cię irytuje?
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-14">
            <LeadForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
