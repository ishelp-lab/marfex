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
  metadataBase: new URL('https://www.marmorariamarfex.com.br'), 
  
  title: 'Marmoraria Marfex',
  description: 'pedras únicas e atemporais para quem valoriza a precisão em cada detalhe.'
,

  // Configurações para Facebook, LinkedIn, WhatsApp (Open Graph)
  openGraph: {
    title: 'Marmoraria Marfex',
    description: 'Conheça nossa marmoraria, onde a excelência em pedras naturais se encontra com a arte da precisão. Oferecemos uma variedade de mármores e granitos exclusivos, perfeitos para transformar seus projetos em obras-primas atemporais.',
    url: 'https://www.marmorariamarfex.com.br', // URL do seu site
    siteName: 'Marmoraria Marfex',
    images: [
      {
        url: '/images/opengraph-image.jpg', // Caminho na pasta /public or URL completa
        width: 1200,
        height: 630,
        alt: 'Imagem com várias pedras de mármore e granito, destacando a variedade e qualidade dos materiais oferecidos pela Marmoraria Marfex.',
      },
    ],
    locale: 'pt_PT',
    type: 'website',
  },

  // Configurações para Twitter (Twitter Card)
  twitter: {
    card: 'summary_large_image',
    title: 'Marmoraria Marfex',
      description: 'pedras únicas e atemporais para quem valoriza a precisão em cada detalhe.',
    images: ['https://www.marmorariamarfex.com.br/images/opengraph-image.jpg'],
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
