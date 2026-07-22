import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/landing/Hero";
import { Transformations } from "@/components/landing/Transformations";
import { Services } from "@/components/landing/Services";
import { CTA } from "@/components/landing/CTA";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Transformations />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
