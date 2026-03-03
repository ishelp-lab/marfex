"use client"

import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Beatriz Fernandes",
    location: "Projeto residencial",
    text: "Excelente atendimento, preco justo! A entrega foi super rapida, eu amei o resultado, as pedras ficaram perfeitas. Fez toda diferenca na minha cozinha e banheiros.",
    rating: 5,
  },
  {
    name: "Carlos Eduardo",
    location: "Area gourmet",
    text: "Profissionalismo do comeco ao fim. A equipe fez medicoes precisas e o acabamento ficou impecavel. Recomendo sem duvida a Marfex!",
    rating: 5,
  },
  {
    name: "Ana Paula Silva",
    location: "Projeto comercial",
    text: "Trabalho de excelencia! O atendimento consultivo nos ajudou a escolher a melhor pedra para nosso escritorio. O resultado superou nossas expectativas.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-muted py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Depoimentos
          </p>
          <h2 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-5xl text-balance">
            O que nossos clientes dizem
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Atendimento consultivo, acabamento impecavel e entrega no prazo.
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
      </div>
    </section>
  )
}
