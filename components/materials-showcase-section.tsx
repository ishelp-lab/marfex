"use client"

import { useEffect, useMemo, useState } from "react"
import Image from "next/image"

const materials = [
  {
    name: "Granitos",
    image: "/images/showcase/granito preto.png",
    description:
      "Materiais naturais com elegância clássica e desenho único para projetos de alto padrão.",
  },
  {
    name: "Mármores",
    image: "/images/showcase/Mármore Bege Bahia.jpg",
    description:
      "Materiais naturais com elegância clássica e desenho único para projetos de alto padrão.",
  },
  {
    name: "Dolomíticos",
    image: "/images/showcase/Dolomítico Branco Paraná.png",
    description:
      "Visual refinado e presença sofisticada para ambientes que pedem exclusividade.",
  },
  {
    name: "Quartzo",
    image: "/images/showcase/quartzo.png",
    description:
      "Superfícies de alta performance com excelente acabamento e grande versatilidade.",
  },
  {
    name: "Quartzito",
    image: "/images/showcase/Quartzito Emerald Green.png",
    description:
      "Material premium de alta resistência, ideal para projetos exigentes e sofisticados.",
  },
  {
    name: "Supernanoglass",
    image: "/images/showcase/Super NanoGlass.png",
    description:
      "Estética minimalista, visual uniforme e resultado marcante para propostas modernas.",
  },
  {
    name: "Lâminas",
    image: "/images/showcase/Lâminas.png",
    description:
      "Soluções versáteis para composições amplas, leves e com grande impacto visual.",
  },
]

const sinkFinishes = [
  {
    name: "Rebaixo Italiano",
    image: "/images/showcase/rebaixo-italiano.jpeg",
    description:
      "Acabamento sofisticado, com visual limpo e excelente escoamento para projetos de alto padrão.",
    interactive: true,
  },
  {
    name: "Rebaixo Americano",
    image: "/images/showcase/rebaixo-americano.jpeg",
    description:
      "Solução elegante e funcional, valorizando a estética da bancada com ótimo desempenho no uso diário.",
    interactive: true,
  },
  {
    name: "Área Molhada tradicional",
    interactive: false,
  },
] as const

type ActiveDisplay =
  | {
      type: "material"
      index: number
    }
  | {
      type: "finish"
      index: number
    }

export function MaterialsShowcaseSection() {
  const firstMaterial = useMemo(() => materials[0], [])
  const [activeMaterialIndex, setActiveMaterialIndex] = useState(0)
  const [activeDisplay, setActiveDisplay] = useState<ActiveDisplay>({
    type: "material",
    index: 0,
  })

  const activeMaterial = materials[activeMaterialIndex] ?? firstMaterial

  const activeContent =
    activeDisplay.type === "material"
      ? materials[activeDisplay.index]
      : sinkFinishes[activeDisplay.index]

  useEffect(() => {
    if (activeDisplay.type !== "material") return

    const interval = setInterval(() => {
      setActiveMaterialIndex((prev) => {
        const nextIndex = (prev + 1) % materials.length
        setActiveDisplay({ type: "material", index: nextIndex })
        return nextIndex
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [activeDisplay.type])

  const handleSelectMaterial = (index: number) => {
    setActiveMaterialIndex(index)
    setActiveDisplay({ type: "material", index })
  }

  const handleSelectFinish = (index: number) => {
    if (!sinkFinishes[index].interactive) return
    setActiveDisplay({ type: "finish", index })
  }

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

          <h2
            className="bg-clip-text font-serif text-3xl font-bold leading-tight text-transparent md:text-5xl"
            style={{ backgroundImage: "url('/images/marble-texture.jpg')" }}
          >
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
            <div className="relative mx-auto w-full max-w-[895px] aspect-[895/1200]">
              {"image" in activeContent && activeContent.image ? (
                <Image
                  key={`${activeDisplay.type}-${activeDisplay.index}-${activeContent.image}`}
                  src={activeContent.image}
                  alt={activeContent.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-white/5 px-8 text-center">
                  <p className="max-w-md text-sm leading-relaxed text-white/60 md:text-base">
                    Este acabamento não possui imagem de demonstração nesta seção.
                  </p>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-black/80 backdrop-blur-sm">
                  {activeContent.name}
                </div>

                {"description" in activeContent && activeContent.description && (
                  <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/90 md:text-base">
                    {activeContent.description}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="space-y-10">
            <div className="mb-4 flex items-center gap-3">
              <a
                href="/materiais"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-primary/90 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-all hover:border-primary hover:bg-chart-4 hover:text-primary-foreground"
              >
                Ver todos os materiais
              </a>
            </div>

            {/* Materiais */}
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Materiais
              </p>

              <div className="space-y-2">
                {materials.map((material, index) => {
                  const isActive =
                    activeDisplay.type === "material" && activeDisplay.index === index

                  return (
                    <button
                      key={material.name}
                      type="button"
                      onClick={() => handleSelectMaterial(index)}
                      onFocus={() => handleSelectMaterial(index)}
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

            {/* Acabamentos */}
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Acabamentos para pias
              </p>

              <div className="grid gap-3 sm:grid-cols-1">
                {sinkFinishes.map((finish, index) => {
                  const isInteractive = finish.interactive
                  const isActive =
                    activeDisplay.type === "finish" && activeDisplay.index === index

                  if (!isInteractive) {
                    return (
                      <div
                        key={finish.name}
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-white/80 backdrop-blur-sm"
                      >
                        {finish.name}
                      </div>
                    )
                  }

                  return (
                    <button
                      key={finish.name}
                      type="button"
                      onClick={() => handleSelectFinish(index)}
                      onFocus={() => handleSelectFinish(index)}
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
                        {finish.name}
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

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">
                Observação importante
              </p>
              <p className="text-sm leading-relaxed text-white/70">
                Por se tratarem de materiais naturais, cores, veios e tonalidades podem
                variar de uma pedra para outra, tornando cada projeto único.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}