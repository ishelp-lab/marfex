import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { QuartzitoSection } from "@/components/quartzito-section"
import { HistorySection } from "@/components/history-section"
import { MaterialsPreview } from "@/components/materials-preview"
import { AboutSection } from "@/components/about-section"
import { TipsSection } from "@/components/tips-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { LocationSection } from "@/components/location-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <QuartzitoSection />
        <HistorySection />
        <MaterialsPreview />
        <AboutSection />
        <TipsSection />
        <TestimonialsSection />
        <LocationSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
