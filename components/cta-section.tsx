"use client"

import { Phone, MessageCircle } from "lucide-react"

export function CtaSection() {
  return (
    <section id="contato" className="relative overflow-hidden py-24 md:py-32">
      {/* Subtle bg pattern */}
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('/images/marble-texture.jpg')", backgroundSize: "cover" }} />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground/70">
          Pronto para transformar?
        </p>
        <h2 className="font-serif text-3xl font-bold leading-tight text-transparent bg-clip-text md:text-5xl text-balance" style={{ backgroundImage: "url('/images/marble-texture.jpg')" }}>
          Transforme suas superficies com pedra natural
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/80">
          Envie uma mensagem no WhatsApp e receba um atendimento rapido para escolher a
          melhor pedra, entender medidas, prazo e ter um orcamento sob medida, sem compromisso.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://wa.me/5534988647571"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-card px-8 py-4 text-sm font-bold uppercase tracking-wide text-primary transition-all hover:scale-105 hover:shadow-lg"
          >
            <MessageCircle className="h-5 w-5" />
            Chamar no WhatsApp
          </a>
          <a
            href="tel:+5534988647571"
            className="inline-flex items-center gap-2 rounded-full border-2 border-primary-foreground/30 px-8 py-4 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-all hover:border-primary-foreground hover:bg-primary-foreground/10"
          >
            <Phone className="h-4 w-4" />
            Ligar agora
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-xs font-medium uppercase tracking-wider text-primary-foreground/60">
          <span>Orçamento sem compromisso</span>
          <span className="hidden sm:block">|</span>
          <span>Resposta rápida</span>
          <span className="hidden sm:block">|</span>
          <span>Acabamento premium</span>
        </div>
      </div>
    </section>
  )
}
