import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/landing/Hero";
import { ServiceTicker } from "@/components/landing/ServiceTicker";
import { PainSection } from "@/components/landing/PainSection";
import { Reframe } from "@/components/landing/Reframe";
import { Services } from "@/components/landing/Services";
import { Process } from "@/components/landing/Process";
import { Results } from "@/components/landing/Results";
import { Differentiation } from "@/components/landing/Differentiation";
import { Audience } from "@/components/landing/Audience";
import { FAQ } from "@/components/landing/FAQ";
import { CTA } from "@/components/landing/CTA";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServiceTicker />
        <PainSection />
        <Reframe />
        <Services />
        <Process />
        <Results />
        <Differentiation />
        <Audience />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
