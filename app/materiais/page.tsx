import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MaterialsCatalog } from "@/components/materials-catalog"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Materiais | Marmoraria Marfex",
  description:
    "Explore nossa colecao completa de marmores, granitos, quartzos e quartzitos. Encontre o material perfeito para seu projeto.",
}

export default function MateriaisPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page Hero */}
        <section className="relative flex items-end overflow-hidden pb-16 pt-32 md:pt-40">
          <div className="absolute inset-0">
            <Image
              src="/images/cover-material.jpg"
              alt="Tipos de mármores disponíveis"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-foreground/70" />
          </div>
          <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Nosso acervo completo
            </p>
            <h1 className="font-serif text-4xl font-bold leading-tight text-card md:text-6xl text-balance">
              Materiais
            </h1>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-card/80">
              Explore nossa seleção exclusiva de mármores, granitos, quartzos e quartzitos.
              Filtre por tipo, cor e encontre a pedra perfeita para o seu projeto.
            </p>
          </div>
        </section>

        {/* Catalog */}
        <section className="py-12 md:py-16">
          <MaterialsCatalog />
          <div className="mt-16 max-w-2xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">
              Observação importante
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Cada pedra é única. Por se tratar de um material natural, variações de tonalidade e veios são características que tornam cada projeto exclusivo.
            </p>
          </div>
        </section>

        {/* CTA strip */}
        <section className="bg-primary py-12">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
            <div>
              <h3 className="text-xl font-bold text-primary-foreground">
                Não encontrou o que procura?
              </h3>
              <p className="mt-1 text-sm text-primary-foreground/80">
                Trabalhamos com dezenas de outras pedras. Entre em contato e nos conte seu projeto.
              </p>
            </div>
            <a
              href="https://wa.me/5534988647571"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center rounded-full bg-card px-8 py-3 text-sm font-bold uppercase tracking-wide text-primary transition-all hover:scale-105"
            >
              Falar com especialista
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
