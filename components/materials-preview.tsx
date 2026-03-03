"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const featuredStones = [
  { name: "Quartzo Branco", image: "/images/stones/quartzo-branco.jpg", category: "Quartzo" },
  { name: "Taj Mahal", image: "/images/stones/taj-mahal.jpg", category: "Quartzito" },
  { name: "Mont Blanc", image: "/images/stones/mont-blanc.jpg", category: "Quartzito" },
  { name: "Calacata", image: "/images/stones/calacata.jpg", category: "Quartzo" },
  { name: "Super White", image: "/images/stones/super-white.jpg", category: "Quartzito" },
  { name: "Donatello", image: "/images/stones/donatello.jpg", category: "Marmore" },
]

export function MaterialsPreview() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Nosso acervo
            </p>
            <h2 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-5xl text-balance">
              Materiais selecionados
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
              Cada pedra e escolhida com criterio para entregar beleza, durabilidade
              e sofisticacao ao seu projeto.
            </p>
          </div>
          <Link
            href="/materiais"
            className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-primary transition-colors hover:text-accent"
          >
            Ver todos os materiais
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Stones grid */}
        <div className="mt-12 grid gap-4 grid-cols-2 md:grid-cols-3">
          {featuredStones.map((stone) => (
            <Link
              key={stone.name}
              href="/materiais"
              className="group relative aspect-square overflow-hidden rounded-2xl"
            >
              <Image
                src={stone.image}
                alt={`Pedra ${stone.name}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/30 transition-all group-hover:bg-foreground/50" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="mb-1 block text-[10px] font-semibold uppercase tracking-widest text-primary">
                  {stone.category}
                </span>
                <h3 className="text-lg font-bold text-card">{stone.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
