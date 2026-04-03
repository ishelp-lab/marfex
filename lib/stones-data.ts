export interface Stone {
  id: string
  name: string
  category:
    | "Marmore"
    | "Quartzo"
    | "Quartzito"
    | "Dolomitico"
    | "Supernanoglass"
    | "Laminas"
  color: string
  image: string
  description: string
  applications: string[]
}

export const stones: Stone[] = [
  // MÁRMORES
  {
    id: "travertino-romano",
    name: "Travertino Romano",
    category: "Marmore",
    color: "Bege",
    image: "/images/stones/travertino-romano.jpg",
    description:
      "Clássico atemporal com textura natural e elegância suave.",
    applications: ["Bancadas", "Revestimentos", "Lavabos"],
  },
  {
    id: "bege-bahia",
    name: "Travertino Brasileiro (Bege Bahia)",
    category: "Marmore",
    color: "Bege",
    image: "/images/stones/bege-bahia.jpg",
    description:
      "Material nacional com tonalidade quente e excelente custo-benefício.",
    applications: ["Bancadas", "Banheiros", "Revestimentos"],
  },
  {
    id: "crema-marfil",
    name: "Mármore Crema Marfil",
    category: "Marmore",
    color: "Bege",
    image: "/images/stones/crema-marfil.jpg",
    description:
      "Elegância europeia com veios sutis e acabamento sofisticado.",
    applications: ["Lavabos", "Revestimentos", "Bancadas"],
  },

  // QUARTZOS
  {
    id: "branco-zeus",
    name: "Quartzo Branco Zeus",
    category: "Quartzo",
    color: "Branco",
    image: "/images/stones/branco-zeus.jpg",
    description:
      "Branco puro com acabamento uniforme para projetos modernos.",
    applications: ["Cozinhas", "Bancadas", "Ilhas"],
  },
  {
    id: "branco-estelar",
    name: "Quartzo Branco Estelar",
    category: "Quartzo",
    color: "Branco",
    image: "/images/stones/branco-estelar.jpg",
    description:
      "Superfície clara com pontos de brilho que trazem sofisticação.",
    applications: ["Cozinhas", "Lavabos", "Bancadas"],
  },
  {
    id: "preto-estelar",
    name: "Quartzo Preto Estelar",
    category: "Quartzo",
    color: "Preto",
    image: "/images/stones/preto-estelar.jpg",
    description:
      "Fundo escuro com brilho elegante para ambientes modernos.",
    applications: ["Bancadas", "Áreas Gourmet", "Cozinhas"],
  },
  {
    id: "sky-white",
    name: "Quartzo Sky White",
    category: "Quartzo",
    color: "Branco",
    image: "/images/stones/sky-white.jpg",
    description:
      "Visual clean e sofisticado, ideal para ambientes claros.",
    applications: ["Bancadas", "Lavabos", "Cozinhas"],
  },
  {
    id: "cinza-queixo",
    name: "Quartzo Cinza Queixo",
    category: "Quartzo",
    color: "Cinza",
    image: "/images/stones/cinza-queixo.jpg",
    description:
      "Tonalidade neutra e versátil para projetos contemporâneos.",
    applications: ["Bancadas", "Cozinhas", "Ilhas"],
  },
  {
    id: "cinza-vulcano",
    name: "Quartzo Cinza Vulcano",
    category: "Quartzo",
    color: "Cinza",
    image: "/images/stones/cinza-vulcano.jpg",
    description:
      "Cinza profundo com presença marcante e acabamento moderno.",
    applications: ["Bancadas", "Áreas Gourmet", "Cozinhas"],
  },
  {
    id: "calacata",
    name: "Quartzo Calacata",
    category: "Quartzo",
    color: "Branco",
    image: "/images/stones/calacata.jpg",
    description:
      "Inspirado no mármore, com veios marcantes e elegância premium.",
    applications: ["Ilhas", "Cozinhas", "Bancadas"],
  },

  // QUARTZITOS
  {
    id: "verde-gaia",
    name: "Quartzito Verde Gaia",
    category: "Quartzito",
    color: "Verde",
    image: "/images/stones/verde-gaia.jpg",
    description:
      "Visual exótico com tonalidades verdes intensas.",
    applications: ["Lavabos", "Revestimentos", "Bancadas"],
  },
  {
    id: "emerald-green",
    name: "Quartzito Emerald Green",
    category: "Quartzito",
    color: "Verde",
    image: "/images/stones/emerald-green.jpg",
    description:
      "Pedra premium com forte presença e elegância natural.",
    applications: ["Bancadas", "Ilhas", "Revestimentos"],
  },
  {
    id: "taj-mahal",
    name: "Quartzito Taj Mahal",
    category: "Quartzito",
    color: "Bege",
    image: "/images/stones/taj-mahal.jpg",
    description:
      "Clássico sofisticado com tons suaves e alta durabilidade.",
    applications: ["Cozinhas", "Bancadas", "Banheiros"],
  },
  {
    id: "perla-venata",
    name: "Quartzito Perla Venata",
    category: "Quartzito",
    color: "Bege",
    image: "/images/stones/perla-venata.jpg",
    description:
      "Elegância com veios delicados e acabamento refinado.",
    applications: ["Bancadas", "Lavabos", "Revestimentos"],
  },

  // DOLOMÍTICOS
  {
    id: "branco-parana",
    name: "Branco Paraná",
    category: "Dolomitico",
    color: "Branco",
    image: "/images/stones/branco-parana.jpg",
    description:
      "Dolomítico brasileiro com excelente estética e resistência.",
    applications: ["Bancadas", "Cozinhas", "Banheiros"],
  },
  {
    id: "donatelo",
    name: "Donatelo",
    category: "Dolomitico",
    color: "Cinza",
    image: "/images/stones/donatelo.jpg",
    description:
      "Tonalidade sofisticada com veios marcantes.",
    applications: ["Lavabos", "Revestimentos", "Bancadas"],
  },
  {
    id: "verde-guatemala",
    name: "Verde Guatemala",
    category: "Dolomitico",
    color: "Verde",
    image: "/images/stones/verde-guatemala.jpg",
    description:
      "Verde profundo com presença forte e elegante.",
    applications: ["Bancadas", "Revestimentos", "Lavabos"],
  },

  // SUPERNANOGLASS
  {
    id: "super-nanoglass",
    name: "Supernanoglass",
    category: "Supernanoglass",
    color: "Branco",
    image: "/images/stones/super-nanoglass.jpg",
    description:
      "Superfície uniforme e moderna com alto brilho.",
    applications: ["Bancadas", "Cozinhas", "Lavabos"],
  },

  // LÂMINAS
  {
    id: "laminas-ultracompactas",
    name: "Lâminas Ultracompactas",
    category: "Laminas",
    color: "Cinza",
    image: "/images/stones/laminas.jpg",
    description:
      "Material tecnológico com alta resistência e design contemporâneo.",
    applications: ["Revestimentos", "Bancadas", "Fachadas"],
  },
]

export const categories = [
  "Todos",
  "Marmore",
  "Quartzo",
  "Quartzito",
  "Dolomitico",
  "Supernanoglass",
  "Laminas",
] as const

export const colors = [
  "Todos",
  "Branco",
  "Bege",
  "Cinza",
  "Preto",
  "Verde",
] as const