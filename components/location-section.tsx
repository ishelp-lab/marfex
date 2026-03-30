import { Clock, MapPin, Navigation, Phone } from "lucide-react"

export function LocationSection() {
  const address = "Av. Dr. Danilo Cunha, 125 - Bom Jesus, Araxá - MG, 38181-001"
  const encodedAddress = encodeURIComponent(address)

  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Localização
          </p>

          <h2 className="font-serif text-3xl font-bold leading-tight text-transparent bg-clip-text md:text-5xl" style={{ backgroundImage: "url('/images/bg.jpg')" }}>
            Venha nos visitar
          </h2>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Estamos localizados em Araxá, Minas Gerais, prontos para atender você.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
          <div className="space-y-6">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Endereço</h3>
              </div>

              <p className="mb-5 leading-relaxed text-muted-foreground">
                {address}
              </p>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:opacity-80"
              >
                <Navigation className="h-4 w-4" />
                Abrir no Google Maps
              </a>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">
                  Horário de funcionamento
                </h3>
              </div>

              <div className="space-y-2 text-muted-foreground">
                <p>Segunda a Sexta: 7:30 - 11:30 | 13:00 - 18:00</p>
                <p>Sábado: 8:00 - 12:00</p>
                <p>Domingo: Fechado</p>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">
                  Agende sua visita
                </h3>
              </div>

              <p className="mb-5 leading-relaxed text-muted-foreground">
                Venha conhecer nosso showroom e veja de perto a qualidade dos nossos
                materiais e maquinário de ponta.
              </p>

              <a
                href="https://wa.me/5534988647571"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
              >
                <Phone className="h-4 w-4" />
                Agendar pelo WhatsApp
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm min-h-[520px]">
            <iframe
              title="Mapa da Marfex"
              src={`https://www.google.com/maps?q=${encodedAddress}&output=embed`}
              className="h-full min-h-[520px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}