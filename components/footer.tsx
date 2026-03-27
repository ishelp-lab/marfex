import Link from "next/link"
import { Instagram, Phone, MapPin, Mail } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-foreground text-card">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Image
              src="/images/logo-marfex-invertido.png"
              alt="Marfex"
              width={180}
              height={60}
              className="h-auto w-[160px]"
            />
            <p className="text-sm leading-relaxed text-card/70">
              Especialistas em mármores, granitos e quartzitos.
              Transformando ambientes com acabamento premium desde 2018.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
              Navegação
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/" className="text-sm text-card/70 transition-colors hover:text-primary">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/materiais" className="text-sm text-card/70 transition-colors hover:text-primary">
                  Materiais
                </Link>
              </li>
              <li>
                <Link href="/#servicos" className="text-sm text-card/70 transition-colors hover:text-primary">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/#sobre" className="text-sm text-card/70 transition-colors hover:text-primary">
                  Sobre nós
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
              Serviços
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="text-sm text-card/70">Bancadas sob medida</li>
              <li className="text-sm text-card/70">Revestimentos</li>
              <li className="text-sm text-card/70">Escadas e soleiras</li>
              <li className="text-sm text-card/70">Lavabos e banheiros</li>
              <li className="text-sm text-card/70">Áreas gourmet</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
              Contato
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm text-card/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Av. Dr. Danilo Cunha, 125 - Bom Jesus, Araxá - MG
              </li>
              <li className="flex items-center gap-3 text-sm text-card/70">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                (34) 98864-7571
              </li>
              <li className="flex items-center gap-3 text-sm text-card/70">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                f.bvasconcelos@hotmail.com
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://www.instagram.com/marmoraria_marfexofc/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-card/10 text-card/70 transition-all hover:bg-primary hover:text-primary-foreground"
                aria-label="Instagram da Marmoraria Marfex"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-card/10 pt-8 text-center">
          <p className="text-xs text-card/50">
            {'© 2026 Marmoraria Marfex. Todos os direitos reservados.'}
          </p>
        </div>
      </div>
    </footer>
  )
}
