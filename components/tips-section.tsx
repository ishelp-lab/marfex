"use client"

import Image from "next/image"
import { Droplets, Ban, Shield } from "lucide-react"

const tips = [
  {
    icon: Ban,
    title: "Evite produtos abrasivos",
    description: "Use apenas detergente neutro e pano macio para a limpeza diária.",
  },
  {
    icon: Droplets,
    title: "Limpe líquidos imediatamente",
    description: "Quanto mais rápido limpar, menor o risco de absorção na pedra, evitando ocasionar em manchas.",
  },
  {
    icon: Shield,
    title: "Faça impermeabilização periférica",
    description: "Ela ajuda a preservar a durabilidade e beleza da pedra por muito mais tempo.",
  },
]

export function TipsSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://c.pxhere.com/photos/ac/37/marble_background_backdrop_marble_background_surface_gray_stone_texture-1062793.jpg!d"
          alt="Interior de cozinha sofisticada"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-foreground/75" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Dicas de cuidado
          </p>
          <h2 className="font-serif text-3xl font-bold leading-tight text-card md:text-5xl text-balance">
            Quer preservar a sua pedra por mais tempo?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-card/70">
            Com alguns cuidados simples no dia a dia, sua pedra permanece impecável.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {tips.map((tip) => (
            <div
              key={tip.title}
              className="rounded-2xl border border-card/10 bg-card/5 p-8 backdrop-blur-sm transition-all hover:bg-card/10 hover:border-primary/30"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <tip.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-lg font-bold text-card">{tip.title}</h3>
              <p className="text-sm leading-relaxed text-card/70">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}