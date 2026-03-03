"use client"

import Image from "next/image"
import { Droplets, Ban, Shield } from "lucide-react"

const tips = [
  {
    icon: Ban,
    title: "Evite produtos abrasivos",
    description: "Use apenas detergente neutro e pano macio para a limpeza diaria.",
  },
  {
    icon: Droplets,
    title: "Limpe liquidos imediatamente",
    description: "Quanto mais rapido limpar, menor o risco de manchas na pedra.",
  },
  {
    icon: Shield,
    title: "Faca impermeabilizacao periodica",
    description: "Ela ajuda a preservar a durabilidade e beleza da pedra por muito mais tempo.",
  },
]

export function TipsSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Quer%20manter%20o%20m%C3%A1rmore%20sempre%20bonito%20%E2%9C%A8%F0%9F%AA%A8Com%20alguns%20cuidados%20simples%20no%20dia%20a%20dia%2C%20sua%20pedra%20perma%20%281%29-n6hL3j16tLf14YrP6HSwq8UCzjXqZG.jpg"
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
            Quer manter o marmore sempre bonito?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-card/70">
            Com alguns cuidados simples no dia a dia, sua pedra permanece impecavel.
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
