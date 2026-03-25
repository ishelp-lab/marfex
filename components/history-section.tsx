import Image from "next/image"
import { Award, Calendar, Users } from "lucide-react"

export function HistorySection() {
  return (
    <section className="bg-muted/30 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Imagem */}
          <div className="relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/images/history.jpg"
                alt="Tradição familiar da Marfex desde 1998"
                width={900}
                height={700}
                className="h-full w-full object-cover"
              />
              
              <div className="absolute -bottom-6 -right-6 rounded-2xl bg-primary p-6 text-primary-foreground shadow-xl md:-right-8">
              <p className="text-4xl font-bold">500+</p>
              <p className="text-sm font-medium text-primary-foreground/80" >Projetos realizados</p>
            </div>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="order-1 lg:order-2">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Nossa história
            </p>

            <h2 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-5xl">
              Tradição familiar desde 1998
            </h2>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Nossa história começou em 1998, quando o fundador iniciou sua jornada no mercado
              de mármores e granitos. Em 2011, demos continuidade a essa tradição familiar,
              estabelecendo-nos em Araxá com o compromisso de oferecer excelência em cada projeto.
            </p>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Ao longo dos anos, conquistamos a confiança de clientes exigentes por meio de
              indicações e de um trabalho pautado em precisão, acabamento e atendimento próximo.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm">
                <Calendar className="mx-auto mb-3 h-6 w-6 text-primary" />
                <div className="text-3xl font-bold text-foreground">27+</div>
                <div className="mt-2 text-sm text-muted-foreground">Anos de tradição</div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm">
                <Users className="mx-auto mb-3 h-6 w-6 text-primary" />
                <div className="text-3xl font-bold text-foreground">1000+</div>
                <div className="mt-2 text-sm text-muted-foreground">Clientes satisfeitos</div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm">
                <Award className="mx-auto mb-3 h-6 w-6 text-primary" />
                <div className="text-3xl font-bold text-foreground">100%</div>
                <div className="mt-2 text-sm text-muted-foreground">Qualidade garantida</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}