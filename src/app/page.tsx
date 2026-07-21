import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/landing/Hero";
import { Transformations } from "@/components/landing/Transformations";
import { Services } from "@/components/landing/Services";
import { Team } from "@/components/landing/Team";
import { CTA } from "@/components/landing/CTA";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Transformations />
        <Services />
        <Team />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
