"use client"

import Image from "next/image"
import { Settings, Layers, Square, Grid, Ruler } from "lucide-react"

const services = [
  {
    icon: Ruler,
    title: "Experiência e profissionalismo na medição",
    description:
      "O texto virá aqui",
    featured: true,
  },
  {
    icon: Settings,
    title: "Serra Ponte Automática",
    description:
      "Precisão de milímetros com calibração constante. Alto padrão incomparável.",
  },
  {
    icon: Layers,
    title: "Poliborda Automática",
    description:
      "Precisão robótica garantindo o mesmo padrão exato em todas as unidades. Perfeito para projetos em série.",
  },
  {
    icon: Square,
    title: "Máquina de 45°",
    description:
      "Cortes em 45° altamente mecanizados, dando acabamento premium em junções e cantos.",
  },
  {
    icon: Grid,
    title: "Variedade em cortes",
    description:
      "Extremamente mecanizado com equipamento específico para cada tipo de projeto, pedra e acabamento único.",
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="relative overflow-hidden py-24 md:py-32">
      {/* Subtle texture bg */}
      <div className="absolute inset-0 bg-muted" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Nossos diferenciais
          </p>
          <h2 className="font-serif text-3xl font-bold leading-tight text-transparent bg-clip-text md:text-5xl text-balance" style={{ backgroundImage: "url('/images/bg.jpg')" }}>
            Tecnologia que ninguém pode competir
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Equipamentos de última geração garantem precisão milimétrica e acabamento incomparável em cada projeto.
          </p>
        </div>

        {/* Services grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            
            <div
  key={service.title}
  className={`group relative rounded-2xl p-8 transition-all hover:-translate-y-1 hover:shadow-lg ${
    service.featured
      ? "border border-primary/30 bg-primary/5 shadow-md"
      : "bg-card shadow-sm"
  }`}
>
  {service.featured && (
    <span className="absolute right-4 top-4 rounded-full border border-primary/20 bg-background/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary backdrop-blur-sm">
      Essencial
    </span>
  )}

  <div
    className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl transition-colors ${
      service.featured
        ? "bg-primary text-primary-foreground"
        : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
    }`}
  >
    <service.icon className="h-6 w-6" />
  </div>

  <h3 className="mb-3 text-lg font-bold text-foreground">
    {service.title}
  </h3>

  <p className="text-sm leading-relaxed text-muted-foreground">
    {service.description}
  </p>
</div>
          ))}
        </div>

        {/* Showcase images */}
        <div className="mt-20 grid gap-4 md:grid-cols-3">
          <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/kitchen-marble.jpg"
              alt="Cozinha com acabamento em marmore"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-foreground/20 transition-opacity group-hover:opacity-0" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="inline-block rounded-full bg-primary px-4 py-1.5 text-xs font-bold text-primary-foreground uppercase tracking-wide">
                Cozinhas
              </span>
            </div>
          </div>
          <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/bathroom-marble.jpg"
              alt="Banheiro com revestimento em marmore"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-foreground/20 transition-opacity group-hover:opacity-0" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="inline-block rounded-full bg-primary px-4 py-1.5 text-xs font-bold text-primary-foreground uppercase tracking-wide">
                Banheiros
              </span>
            </div>
          </div>
          <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/gourmet-area.jpg"
              alt="Area gourmet com bancada de marmore"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-foreground/20 transition-opacity group-hover:opacity-0" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="inline-block rounded-full bg-primary px-4 py-1.5 text-xs font-bold text-primary-foreground uppercase tracking-wide">
                Areas Gourmet
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
