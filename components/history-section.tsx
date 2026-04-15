import Image from "next/image"
import { Award, Calendar, Leaf, Droplets, Sun } from "lucide-react"

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
                <p className="text-4xl font-bold text-transparent bg-clip-text" style={{ backgroundImage: "url('/images/marble-texture.jpg')" }}>500+</p>
                <p className="text-sm font-medium text-primary-foreground/80 text-transparent bg-clip-text" style={{ backgroundImage: "url('/images/marble-texture.jpg')" }}>
                  Projetos realizados
                </p>
              </div>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="order-1 lg:order-2">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Nossa história
            </p>

            <h2 className="font-serif text-3xl font-bold leading-tight md:text-5xl text-transparent bg-clip-text" style={{ backgroundImage: "url('/images/bg.jpg')" }}>
              Tradição familiar desde 1998
            </h2>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Nossa história começou em 1998, quando o fundador iniciou sua jornada no mercado com vendas de pedras decorativas e revestimentos. Em 2011, demos continuidade a essa tradição familiar,
              estabelecendo-nos em Araxá com o compromisso de oferecer excelência em cada projeto.
            </p>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Ao longo dos anos, conquistamos a confiança de clientes, fornecedores e profissionais da área, apostamos em tecnologia com equipamentos avançados e capacitação de pessoas. Sendo assim, a qualidade, compromisso e transparência, move a Marfex desde a sua fundação.
            </p>

            {/* Selinhos */}
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-xs text-muted-foreground">
                <Droplets className="h-4 w-4 text-primary" />
                Reaproveitamento de água no processo produtivo
              </div>

              <div className="flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-xs text-muted-foreground">
                <Sun className="h-4 w-4 text-primary" />
                Uso de energia fotovoltaica nas operações
              </div>
            </div>

            {/* Cards */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">

              {/* Card 1 */}
              <div className="relative overflow-hidden rounded-2xl border border-border p-6 text-center shadow-sm">

                {/* Textura */}
                <div className="absolute inset-0 bg-[url('/images/mont-blanc.jpg')] bg-cover bg-center opacity-80" />

                {/* Overlay */}
                <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />

                {/* Conteúdo */}
                <div className="relative z-10">
                  <Calendar className="mx-auto mb-3 h-6 w-6 text-primary" />
                  <div className="text-3xl font-bold text-foreground">27+</div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    Anos de tradição
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="relative overflow-hidden rounded-2xl border border-border p-6 text-center shadow-sm">

                <div className="absolute inset-0 bg-[url('/images/mont-blanc.jpg')] bg-cover bg-center opacity-80" />
                <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />

                <div className="relative z-10">
                  <Award className="mx-auto mb-3 h-6 w-6 text-primary" />
                  <div className="text-3xl font-bold text-foreground">100%</div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    Qualidade garantida
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="relative overflow-hidden rounded-2xl border border-border p-6 text-center shadow-sm">

                <div className="absolute inset-0 bg-[url('/images/mont-blanc.jpg')] bg-cover bg-center opacity-80" />
                <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />

                <div className="relative z-10">
                  <Leaf className="mx-auto mb-3 h-6 w-6 text-primary" />
                  <div className="text-3xl font-bold text-foreground">100%</div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    Energia renovável e reaproveitamento hídrico
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}