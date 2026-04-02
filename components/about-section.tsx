"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"

export function AboutSection() {
  return (
    <section id="sobre" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src="/images/trust-img.jpg"
                alt="Marmoraria Marfex - Confie em quem entende de perfeicao"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 rounded-2xl overflow-hidden shadow-xl">

  {/* Textura */}
  <div className="absolute inset-0 bg-[url('/images/bg.jpg')] bg-cover bg-center" />

  {/* Overlay escuro (ESSENCIAL) */}
  <div className="absolute inset-0 bg-black/50" />

  {/* Conteúdo */}
  <div className="relative z-10 p-6 text-white">
    <p className="text-4xl font-bold">0.1 mm</p>
    <p className="text-sm font-medium text-white/80">
      Precisão milimétrica
    </p>
  </div>

</div>
          </div>
          

          {/* Content */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Sobre nós
            </p>
            <h2 className="font-serif text-3xl font-bold leading-tight text-transparent bg-clip-text md:text-5xl text-balance" style={{ backgroundImage: "url('/images/bg.jpg')" }}>
              Confie em quem entende de perfeição
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              A Marmoraria Marfex é especializada em projetos sob medida em rochas ornamentais e rochas sintéticas. Unimos a experiência em qualidade e tecnologia em um acabamento único e impecável.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Seu projeto merece o brilho e a elegância que impressionam. Cada detalhe da rocha revela sua sofisticação e história nos seus veios marcantes. Sendo assim, somos responsáveis pela paginação e cuidado que sua pedra merece.
            </p>

            <ul className="mt-8 flex flex-col gap-4">
              {[
                "Equipe especializada e expêriente",
                "Materiais selecionados com critério",
                "Medições e cortes de alta precisão",
                "Instalação profissional no capricho",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
