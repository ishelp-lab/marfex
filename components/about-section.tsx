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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Confie%20em%20quem%20entende%20de%20perfei%C3%A7%C3%A3o%21%E2%9C%A8Cada%20detalhe%20do%20m%C3%A1rmore%20revela%20brilho%2C%20eleg%C3%A2ncia%20e%20acabamen-9wRjR5A2bNaiwD41IpiW4hVLBVHRPI.jpg"
                alt="Marmoraria Marfex - Confie em quem entende de perfeicao"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-6 rounded-2xl bg-primary p-6 text-primary-foreground shadow-xl md:-right-8">
              <p className="text-4xl font-bold">500+</p>
              <p className="text-sm font-medium text-primary-foreground/80">Projetos realizados</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Sobre nos
            </p>
            <h2 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-5xl text-balance">
              Confie em quem entende de perfeicao
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              A Marmoraria Marfex e especializada em projetos sob medida com marmore,
              granito e quartzito para ambientes sofisticados. Unimos qualidade superior
              e um acabamento impecavel para valorizar sua casa ou comercio.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Seu projeto merece o brilho e a elegancia que impressionam. Cada detalhe do
              marmore revela sofisticacao, e nossa equipe cuida de tudo para voce.
            </p>

            <ul className="mt-8 flex flex-col gap-4">
              {[
                "Equipe especializada e experiente",
                "Materiais selecionados com criterio",
                "Medicoes e cortes de alta precisao",
                "Instalacao profissional no capricho",
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
