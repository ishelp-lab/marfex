"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowDown, Phone } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-marble.jpg"
          alt="Cozinha com bancada de marmore premium"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-start px-6 py-32 md:py-40">
        <div
          className={`max-w-3xl transition-all duration-1000 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Marmoraria Marfex
          </p>
          <h1 className="font-serif text-4xl font-bold leading-tight text-card md:text-6xl lg:text-6xl text-balance">
            A assinatura de luxo que o seu projeto merece.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-card/80">
            Espaços atemporais projetados para quem valoriza a precisão em cada detalhe.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-all hover:bg-accent hover:scale-105"
            >
              <Phone className="h-4 w-4" />
              Peca seu orcamento
            </a>
            <Link
              href="/materiais"
              className="inline-flex items-center gap-2 rounded-full border-2 border-card/30 px-8 py-4 text-sm font-bold uppercase tracking-wide text-card transition-all hover:border-primary hover:text-primary"
            >
              CONHEÇA NOSSOS MATERIAIS
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <a
            href="#servicos"
            className="flex flex-col items-center gap-2 text-card/60 transition-colors hover:text-primary"
            aria-label="Rolar para baixo"
          >
            <span className="text-xs font-medium uppercase tracking-widest">Descubra</span>
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}
