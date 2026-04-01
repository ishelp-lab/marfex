"use client"

import { useMemo, useState } from "react"
import Image from "next/image"

const materials = [
  {
    name: "Mármores",
    image: "/images/showcase/marmores.jpg",
    description:
      "Materiais naturais com elegância clássica e desenho único para projetos de alto padrão.",
  },
  {
    name: "Dolomíticos",
    image: "/images/showcase/dolomiticos.jpg",
    description:
      "Visual refinado e presença sofisticada para ambientes que pedem exclusividade.",
  },
  {
    name: "Quartzo",
    image: "/images/showcase/quartzo.jpg",
    description:
      "Superfícies de alta performance com excelente acabamento e grande versatilidade.",
  },
  {
    name: "Quartzito",
    image: "/images/showcase/quartzito.jpg",
    description:
      "Material premium de alta resistência, ideal para projetos exigentes e sofisticados.",
  },
  {
    name: "Supernanoglass",
    image: "/images/showcase/supernanoglass.jpg",
    description:
      "Estética contemporânea, visual uniforme e resultado marcante para propostas modernas.",
  },
  {
    name: "Lâminas",
    image: "/images/showcase/laminas.jpg",
    description:
      "Soluções versáteis para composições amplas, leves e com grande impacto visual.",
  },
]

const sinkFinishes = [
  "Rebaixo Italiano",
  "Rebaixo Americano",
  "Área Molhada tradicional",
]

export function MaterialsShowcaseSection() {
  const firstMaterial = useMemo(() => materials[0], [])
  const [activeMaterial, setActiveMaterial] = useState(firstMaterial)

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/bg.jpg"
          alt="Textura de fundo"
          fill
          className="object-cover"
          priority={false}
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Personalização
          </p>

          <h2 className="font-serif text-3xl font-bold leading-tight text-transparent md:text-5xl bg-clip-text" style={{ backgroundImage: "url('/images/marble-texture.jpg')" }}>
            Materiais e acabamentos para composições únicas
          </h2>

          <p className="mt-4 text-base leading-relaxed text-white/75">
            Escolha o material ideal para o seu projeto e conheça acabamentos que
            valorizam tanto a estética quanto a funcionalidade.
          </p>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Imagem */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
            <div className="relative aspect-[4/5] w-full md:aspect-[16/10] lg:aspect-[4/5]">
              <Image
                src={activeMaterial.image}
                alt={activeMaterial.name}
                fill
                className="object-cover transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-black/80 backdrop-blur-sm">
                  {activeMaterial.name}
                </div>

                <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/90 md:text-base">
                  {activeMaterial.description}
                </p>
              </div>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="space-y-10">

            <div className="pt-4">
              <a
                href="/materiais"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-primary/90            px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-all           hover:border-primary hover:bg-white hover:text-primary-foreground"
              >
                Ver todos os materiais
              </a>
            </div>
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Materiais
              </p>

              <div className="space-y-2">
                {materials.map((material) => {
                  const isActive = activeMaterial.name === material.name

                  return (
                    <button
                      key={material.name}
                      type="button"
                      onMouseEnter={() => setActiveMaterial(material)}
                      onFocus={() => setActiveMaterial(material)}
                      onClick={() => setActiveMaterial(material)}
                      className={`group flex w-full items-center justify-between rounded-2xl border px-4 py-4 text-left transition-all duration-300 ${
                        isActive
                          ? "border-primary/40 bg-white/10 shadow-sm"
                          : "border-white/10 bg-white/5 hover:border-primary/30 hover:bg-white/10"
                      }`}
                    >
                      <span
                        className={`text-base font-semibold transition-colors ${
                          isActive
                            ? "text-white"
                            : "text-white/70 group-hover:text-white"
                        }`}
                      >
                        {material.name}
                      </span>

                      <span
                        className={`ml-4 h-2.5 w-2.5 rounded-full transition-all ${
                          isActive
                            ? "scale-100 bg-primary opacity-100"
                            : "scale-75 bg-white/30 opacity-70 group-hover:scale-100 group-hover:bg-primary/60"
                        }`}
                      />
                    </button>
                  )
                })}
              </div>
            </div>
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Acabamentos para pias
              </p>

              <div className="grid gap-3 sm:grid-cols-1">
                {sinkFinishes.map((finish) => (
                  <div
                    key={finish}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-white/80 backdrop-blur-sm"
                  >
                    {finish}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">
    Observação importante
  </p>
              <p className="text-sm leading-relaxed text-white/70">
                Por se tratarem de materiais naturais, cores, veios e nuances podem
                variar de uma peça para outra, tornando cada projeto único.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}