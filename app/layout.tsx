import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const _playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Marmoraria Marfex | Marmores, Granitos e Quartzitos Premium',
  description:
    'Especialistas em marmores, granitos e quartzitos sob medida. Transforme seus ambientes com acabamento premium e instalacao profissional. Peca seu orcamento.',
  keywords: [
    'marmoraria',
    'marmore',
    'granito',
    'quartzito',
    'bancada',
    'cozinha',
    'banheiro',
    'Marfex',
  ],
}

export const viewport: Viewport = {
  themeColor: '#1B7FC3',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
