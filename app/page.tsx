import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { MaterialsShowcaseSection } from "@/components/materials-showcase-section"
import { QuartzitoSection } from "@/components/quartzito-section"
import { HistorySection } from "@/components/history-section"
import { MaterialsPreview } from "@/components/materials-preview"
import { AboutSection } from "@/components/about-section"
import { TipsSection } from "@/components/tips-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { LocationSection } from "@/components/location-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  // Define o URL base para resolver caminhos de imagens relativos
  metadataBase: new URL('https://www.marmorariamarfex.com.br/'), 
  
  title: 'Título da Página',
  description: 'Descrição para SEO',

  // Configurações para Facebook, LinkedIn, WhatsApp (Open Graph)
  openGraph: {
    title: 'Título do Card Social',
    description: 'Breve descrição que aparece abaixo do título no card.',
    url: 'https://seu-site.com',
    siteName: 'Nome do Meu Projeto',
    images: [
      {
        url: '/og-image.png', // Caminho na pasta /public ou URL completa
        width: 1200,
        height: 630,
        alt: 'Descrição da imagem para acessibilidade',
      },
    ],
    locale: 'pt_PT',
    type: 'website',
  },

  // Configurações para Twitter (Twitter Card)
  twitter: {
    card: 'summary_large_image',
    title: 'Título do Card Social',
    description: 'Breve descrição que aparece abaixo do título no card.',
    images: ['/og-image.png'],
  },
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <QuartzitoSection />
        <HistorySection />
        <MaterialsShowcaseSection />
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
