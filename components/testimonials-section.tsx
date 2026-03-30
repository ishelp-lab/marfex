"use client"

import { Star, Quote, ExternalLink } from "lucide-react"

const testimonials = [
  {
    name: "Beatriz Fernandes",
    location: "Projeto residencial",
    text: "Excelente atendimento, preço justo! A entrega foi super rapida, eu amei o resultado, as pedras ficaram perfeitas. Fez toda diferença na minha cozinha e banheiros.",
    rating: 5,
  },
  {
    name: "Carlos Eduardo",
    location: "Área Gourmet",
    text: "Profissionalismo do começo ao fim. A equipe fez medições precisas e o acabamento ficou impecável. Recomendo sem dúvida a Marfex!",
    rating: 5,
  },
  {
    name: "Ana Paula Silva",
    location: "Projeto comercial",
    text: "Trabalho de excelência! O atendimento consultivo nos ajudou a escolher a melhor pedra para nosso escritório. O resultado superou nossas expectativas.",
    rating: 5,
  },
]

export function TestimonialsSection()
 {
  const googleReviewsUrl = "https://www.google.com/search?q=marmoraria+marfex&rlz=1C1ONGR_pt-PTBR1168BR1168&oq=marmoraria+marf&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIGCAEQRRg5MggIAhAAGBYYHjIICAMQABgWGB4yCAgEEAAYFhgeMggIBRAAGBYYHjIGCAYQRRg8MgYIBxBFGDzSAQgzMzUxajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x94b0372233ec74b3:0xca17ce57c2e968e8,3,,,,"
  return (
    <section className="bg-muted py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Depoimentos
          </p>
          <h2 className="font-serif text-3xl font-bold leading-tight text-transparent bg-clip-text md:text-5xl text-balance" style={{ backgroundImage: "url('/images/bg.jpg')" }}>
            O que nossos clientes dizem
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Atendimento consultivo, acabamento impecável e entrega no prazo.
          </p>
        </div>

        {/* Testimonials */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex flex-col rounded-2xl bg-card p-8 shadow-sm transition-all hover:shadow-lg"
            >
              <Quote className="mb-4 h-8 w-8 text-primary/20" />
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                {`"${testimonial.text}"`}
              </p>
              <div className="mt-6 flex items-center gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <div className="mt-4 border-t border-border pt-4">
                <p className="text-sm font-bold text-foreground">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
  <a
    href={googleReviewsUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-accent hover:text-accent-foreground"
  >
    Avaliar no Google
    <ExternalLink className="h-4 w-4" />
  </a>
</div>
      </div>
    </section>
  )
}
