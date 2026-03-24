"use client"

import Image from "next/image"
import { Ruler, Sparkles, Truck, ShieldCheck, axis-3d } from "lucide-react"

const services = [
  {
    icon: Ruler,
    title: "Serra Ponte Automática",
    description:
      "Precisão de milímetros com calibração constante. Se detectar 1mm fora, desliga automaticamente. Alto padrão incomparável.",
  },
  {
    icon: Sparkles,
    title: "Poliborda Automática",
    description:
      "Precisão robótica garantindo o mesmo padrão exato em todas as unidades. Perfeito para projetos em série.",
  },
  {
    icon: Truck,
    title: "Máquina de 45°",
    description:
      "Cortes em 45 graus que ninguém mais consegue fazer. Acabamento premium em junções e cantos.",
  },
  {
    icon: ShieldCheck,
    title: "4 Tipos de Serras",
    description:
      "Extremamente mecanizado com equipamento específico para cada tipo de pedra e acabamento desejado.",
  },
  {
    icon: ShieldCheck,
    title: "Reaproveitamento de Água",
    description:
      "Sistema sustentável de reuso de água, demonstrando compromisso ambiental e eficiência operacional",
  },
  {
    icon: Axis-3d,
    title: "Modelagem 3D",
    description:
      "Visualize seu projeto antes da execução com desenhos em 3D precisos e realistas.",
  }
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
            Nossos servicos
          </p>
          <h2 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-5xl text-balance">
            Excelencia em pedra natural
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Do atendimento ao acabamento final, voce recebe um projeto sob medida com
            materiais selecionados e instalacao profissional.
          </p>
        </div>

        {/* Services grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl bg-card p-8 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
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
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Quando%20a%20cozinha%20fala%20por%20si.Pedra%2C%20corte%20e%20acabamento%20no%20m%C3%A1ximo.Marfex%20n%C3%A3o%20brinca%21%F0%9F%98%89..Por-%20%40is_-NfvoOqrJfp6hgpOiG3cMikQd1VPxgE.jpg"
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
