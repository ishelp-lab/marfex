import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Política de Privacidade | Marmoraria Marfex",
  description:
    "Saiba como a Marmoraria Marfex coleta, utiliza e protege suas informações pessoais. Sua privacidade é nossa prioridade.",
}

const sections = [
  {
    id: "informacoes-coletadas",
    title: "1. Informações que Coletamos",
    content: [
      "A Marmoraria Marfex pode coletar as seguintes informações pessoais quando você utiliza nosso site ou entra em contato conosco:",
      "**Informações de contato:** nome, telefone, endereço de e-mail e endereço físico, fornecidos voluntariamente ao solicitar um orçamento ou enviar mensagens.",
      "**Dados de navegação:** endereço IP, tipo de navegador, páginas visitadas, tempo de permanência e outras informações coletadas automaticamente por meio de cookies e tecnologias similares.",
      "**Informações de projeto:** detalhes sobre o ambiente, material desejado e especificações técnicas fornecidas para elaboração de orçamentos.",
    ],
  },
  {
    id: "uso-de-informacoes",
    title: "2. Como Utilizamos suas Informações",
    content: [
      "As informações coletadas são utilizadas exclusivamente para:",
      "• Responder às suas solicitações de orçamento e atendimento ao cliente;",
      "• Enviar informações sobre nossos produtos, serviços e promoções, mediante seu consentimento;",
      "• Melhorar a experiência de navegação e o desempenho do nosso site;",
      "• Cumprir obrigações legais e regulatórias aplicáveis;",
      "• Proteger os interesses legítimos da empresa e de nossos clientes.",
    ],
  },
  {
    id: "compartilhamento",
    title: "3. Compartilhamento de Informações",
    content: [
      "A Marmoraria Marfex não vende, aluga ou compartilha suas informações pessoais com terceiros para fins comerciais.",
      "Suas informações poderão ser compartilhadas apenas nas seguintes situações:",
      "• Com prestadores de serviços essenciais ao funcionamento do site (hospedagem, análise de dados), sob acordos de confidencialidade;",
      "• Quando exigido por lei, ordem judicial ou autoridade competente;",
      "• Para proteger os direitos, propriedade ou segurança da Marfex, de nossos clientes ou do público.",
    ],
  },
  {
    id: "cookies",
    title: "4. Cookies e Tecnologias de Rastreamento",
    content: [
      "Nosso site utiliza cookies para melhorar sua experiência de navegação. Os cookies são pequenos arquivos de texto armazenados em seu dispositivo.",
      "**Cookies essenciais:** necessários para o funcionamento básico do site.",
      "**Cookies analíticos:** utilizados para entender como os visitantes interagem com o site (ex: Google Analytics).",
      "Você pode configurar seu navegador para recusar todos ou alguns cookies, ou para alertá-lo quando sites definem ou acessam cookies. Se você desativar ou recusar cookies, algumas partes do site podem se tornar inacessíveis ou não funcionar corretamente.",
    ],
  },
  {
    id: "seguranca",
    title: "5. Segurança dos Dados",
    content: [
      "Adotamos medidas técnicas e organizacionais adequadas para proteger suas informações pessoais contra acesso não autorizado, perda, destruição ou divulgação indevida.",
      "Embora nos esforcemos para proteger suas informações, nenhum método de transmissão ou armazenamento eletrônico é 100% seguro. Em caso de incidente de segurança que possa afetar seus dados, notificaremos as partes afetadas conforme exigido pela legislação aplicável.",
    ],
  },
  {
    id: "seus-direitos",
    title: "6. Seus Direitos (LGPD)",
    content: [
      "Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem os seguintes direitos em relação aos seus dados pessoais:",
      "• **Acesso:** solicitar confirmação e acesso aos seus dados pessoais que tratamos;",
      "• **Correção:** solicitar a correção de dados incompletos, inexatos ou desatualizados;",
      "• **Exclusão:** solicitar a eliminação de dados pessoais desnecessários ou tratados em desconformidade com a LGPD;",
      "• **Portabilidade:** solicitar a portabilidade dos seus dados a outro fornecedor de serviço;",
      "• **Revogação:** revogar o consentimento dado anteriormente.",
      "Para exercer qualquer um desses direitos, entre em contato conosco pelo e-mail: f.bvasconcelos@hotmail.com",
    ],
  },
  {
    id: "retencao",
    title: "7. Retenção de Dados",
    content: [
      "Mantemos seus dados pessoais pelo tempo necessário para cumprir as finalidades descritas nesta política, salvo quando um período de retenção mais longo for exigido ou permitido por lei.",
      "Os critérios utilizados para determinar o período de retenção incluem: a natureza dos dados, a finalidade do tratamento e as obrigações legais aplicáveis.",
    ],
  },
  {
    id: "alteracoes",
    title: "8. Alterações nesta Política",
    content: [
      "Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas práticas, tecnologias ou exigências legais.",
      "Quando realizarmos alterações relevantes, publicaremos a versão atualizada nesta página com a nova data de vigência. Recomendamos que você revise esta política periodicamente.",
      "O uso continuado do nosso site após a publicação de alterações implica na aceitação da política revisada.",
    ],
  },
  {
    id: "contato",
    title: "9. Contato",
    content: [
      "Se você tiver dúvidas, preocupações ou solicitações relacionadas a esta Política de Privacidade ou ao tratamento dos seus dados pessoais, entre em contato conosco:",
      "**Marmoraria Marfex**",
      "CNPJ: 57.054.460/0001-10",
      "Endereço: Av. Dr. Danilo Cunha, 125 - Bom Jesus, Araxá - MG",
      "Telefone: (34) 98864-7571",
      "E-mail: f.bvasconcelos@hotmail.com",
    ],
  },
]

function renderContent(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g)
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-foreground">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  )
}

export default function PoliticaPrivacidade() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative overflow-hidden bg-foreground py-24">
          <div className="pointer-events-none absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255,255,255,0.3) 60px, rgba(255,255,255,0.3) 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255,255,255,0.3) 60px, rgba(255,255,255,0.3) 61px)",
              }}
            />
          </div>
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <div className="mb-6 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20">
                <Shield className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="font-serif text-4xl font-bold text-white md:text-5xl">
              Política de Privacidade
            </h1>
            <p className="mt-4 text-lg text-white/60">
              Última atualização: abril de 2026
            </p>
            <p className="mt-6 text-base leading-relaxed text-white/70">
              A Marmoraria Marfex está comprometida com a proteção da sua
              privacidade. Esta política explica como coletamos, usamos e
              protegemos suas informações pessoais.
            </p>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="border-b border-border bg-card">
          <div className="mx-auto max-w-4xl px-6 py-3">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="transition-colors hover:text-primary">
                Início
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-foreground">Política de Privacidade</span>
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-4xl px-6 py-16">
          {/* Index */}
          <div className="mb-14 rounded-2xl border border-border bg-card p-8">
            <h2 className="mb-5 font-serif text-xl font-semibold text-foreground">
              Índice
            </h2>
            <ol className="flex flex-col gap-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <ChevronRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>

          {/* Sections */}
          <div className="flex flex-col gap-14">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-24">
                <h2 className="mb-5 font-serif text-2xl font-bold text-foreground">
                  {section.title}
                </h2>
                <div className="flex flex-col gap-4">
                  {section.content.map((paragraph, idx) => (
                    <p
                      key={idx}
                      className="text-base leading-relaxed text-muted-foreground"
                    >
                      {renderContent(paragraph)}
                    </p>
                  ))}
                </div>
                <div className="mt-8 h-px bg-border" />
              </section>
            ))}
          </div>

          {/* CTA bottom */}
          <div className="mt-16 rounded-2xl bg-primary/5 border border-primary/10 p-8 text-center">
            <Shield className="mx-auto mb-4 h-10 w-10 text-primary" />
            <h3 className="font-serif text-xl font-semibold text-foreground">
              Dúvidas sobre privacidade?
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Nossa equipe está pronta para esclarecer qualquer questão sobre o
              uso dos seus dados.
            </p>
            <a
              href="mailto:f.bvasconcelos@hotmail.com"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Falar com nossa equipe
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
