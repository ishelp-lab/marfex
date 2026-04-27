export interface Stone {
  id: string
  name: string
  category:
    | "Granito"
    | "Marmore"
    | "Quartzito"
    | "Quartzo" 
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
    image: "/images/stones/pedras/Travertino Romano.png",
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

  // GRANITOS
  {
    id: "branco-siena",
    name: "Granito Branco Siena",
    category: "Granito",
    color: "Branco",
    image: "/images/stones/branco-siena.jpg",
    description:
      "Granito claro com ótima resistência e excelente custo-benefício para uso diário.",
    applications: ["Cozinhas", "Bancadas", "Áreas Gourmet"],
  },
  {
    id: "branco-itaunas",
    name: "Granito Branco Itaúnas",
    category: "Granito",
    color: "Branco",
    image: "/images/stones/branco-itaunas.jpg",
    description:
      "Tonalidade clara e uniforme, ideal para ambientes clean e funcionais.",
    applications: ["Cozinhas", "Bancadas", "Banheiros"],
  },
  {
    id: "preto-sao-gabriel",
    name: "Granito Preto São Gabriel",
    category: "Granito",
    color: "Preto",
    image: "/images/stones/preto-sao-gabriel.jpg",
    description:
      "Clássico preto profundo, extremamente resistente e versátil para diversos projetos.",
    applications: ["Escadas", "Bancadas", "Áreas externas"],
  },
  {
    id: "black-ferreiro",
    name: "Granito Black Ferreiro",
    category: "Granito",
    color: "Preto",
    image: "/images/stones/pedras/Black Ferreiro.png",
    description:
      "Elegância e imponência com alta resistência e um visual profundo.",
    applications: ["Cozinhas", "Bancadas", "Áreas Gourmet"],
  },
  {
    id: "cafe-imperial",
    name: "Granito Café Imperial",
    category: "Granito",
    color: "Bege",
    image: "/images/stones/pedras/Café Imperial.png",
    description:
      "Tonalidade marcante com extrema resistência, ideal para projetos sofisticados.",
    applications: ["Bancadas", "Banheiros", "Revestimentos"],
  },
  {
    id: "preto-indiano",
    name: "Granito Preto Indiano",
    category: "Granito",
    color: "Preto",
    image: "/images/stones/pedras/Preto Indiano.png",
    description:
      "Granito escuro com veios sutis que conferem movimento e elegância.",
    applications: ["Bancadas", "Cozinhas", "Áreas Gourmet"],
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
    id: "branco-stellar",
    name: "Quartzo Branco Stellar",
    category: "Quartzo",
    color: "Branco",
    image: "/images/stones/pedras/branco-stellar.png",
    description:
      "Superfície clara com pontos de brilho que trazem sofisticação.",
    applications: ["Cozinhas", "Lavabos", "Bancadas"],
  },
  {
    id: "preto-stellar",
    name: "Quartzo Preto Stellar",
    category: "Quartzo",
    color: "Preto",
    image: "/images/stones/pedras/Preto Stellar.png",
    description:
      "Fundo escuro com brilho elegante para ambientes modernos.",
    applications: ["Bancadas", "Áreas Gourmet", "Cozinhas"],
  },
  {
    id: "sky-white",
    name: "Quartzo Sky White",
    category: "Quartzo",
    color: "Branco",
    image: "/images/stones/pedras/Sky White.png",
    description:
      "Visual clean e sofisticado, ideal para ambientes claros.",
    applications: ["Bancadas", "Lavabos", "Cozinhas"],
  },
  {
    id: "cinza-kensho",
    name: "Quartzo Cinza Kensho",
    category: "Quartzo",
    color: "Cinza",
    image: "/images/stones/cinza-kensho.jpg",
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
    image: "/images/stones/pedras/Quartzo Calacata.png",
    description:
      "Inspirado no mármore, com veios marcantes e elegância premium.",
    applications: ["Ilhas", "Cozinhas", "Bancadas"],
  },
  {
    id: "quartzo-branco",
    name: "Quartzo Branco",
    category: "Quartzo",
    color: "Branco",
    image: "/images/stones/pedras/Quartzo Branco.png",
    description:
      "Superfície branca pura e uniforme, extremamente versátil.",
    applications: ["Cozinhas", "Bancadas", "Ilhas"],
  },
  {
    id: "quartzo-cinza",
    name: "Quartzo Cinza",
    category: "Quartzo",
    color: "Cinza",
    image: "/images/stones/pedras/Quartzo Cinza.png",
    description:
      "Tom cinza sofisticado para projetos com estilo industrial e moderno.",
    applications: ["Bancadas", "Lavabos", "Cozinhas"],
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
    image: "/images/stones/pedras/Taj Mahal.png",
    description:
      "Clássico sofisticado com tons suaves e alta durabilidade.",
    applications: ["Cozinhas", "Bancadas", "Banheiros"],
  },
  {
    id: "perla-venata-escovado",
    name: "Quartzito Perla Venata Escovado",
    category: "Quartzito",
    color: "Bege",
    image: "/images/stones/pedras/Perla Venata Escovado.png",
    description:
      "Elegância com veios delicados e acabamento refinado escovado.",
    applications: ["Bancadas", "Lavabos", "Revestimentos"],
  },
  {
    id: "cristallo",
    name: "Quartzito Cristallo",
    category: "Quartzito",
    color: "Branco",
    image: "/images/stones/pedras/Cristallo.png",
    description:
      "Pedra translúcida e deslumbrante, ideal para projetos iluminados e luxuosos.",
    applications: ["Bancadas", "Ilhas", "Revestimentos"],
  },
  {
    id: "da-vinci",
    name: "Quartzito Da Vinci",
    category: "Quartzito",
    color: "Verde",
    image: "/images/stones/pedras/Da Vinci.png",
    description:
      "Padrões complexos e tons ricos, trazendo personalidade e arte para o ambiente.",
    applications: ["Revestimentos", "Bancadas", "Ilhas"],
  },
  {
    id: "kouros",
    name: "Quartzito Kouros",
    category: "Quartzito",
    color: "Cinza",
    image: "/images/stones/pedras/Kouros.png",
    description:
      "Tonalidade neutra com veios exóticos e alta durabilidade.",
    applications: ["Bancadas", "Cozinhas", "Banheiros"],
  },
  {
    id: "maragoggi",
    name: "Quartzito Maragoggi",
    category: "Quartzito",
    color: "Branco",
    image: "/images/stones/pedras/Maragoggi.png",
    description:
      "Beleza suave e orgânica que remete às famosas praias brasileiras.",
    applications: ["Lavabos", "Revestimentos", "Bancadas"],
  },
  {
    id: "quartzito-maya",
    name: "Quartzito Maya",
    category: "Quartzito",
    color: "Cinza",
    image: "/images/stones/pedras/Quartzito Maya.png",
    description:
      "Elegância atemporal com padronagem única e tons sóbrios.",
    applications: ["Bancadas", "Ilhas", "Áreas Gourmet"],
  },
  {
    id: "verde-lake-tande",
    name: "Quartzito Verde Lake Tande",
    category: "Quartzito",
    color: "Verde",
    image: "/images/stones/pedras/Verde Lake Tande.png",
    description:
      "Tonalidade exótica e vibrante, perfeita para ambientes com design arrojado.",
    applications: ["Lavabos", "Revestimentos", "Bancadas"],
  },
  {
    id: "mont-blanc",
    name: "Quartzito Mont Blanc",
    category: "Quartzito",
    color: "Branco",
    image: "/images/stones/pedras/mont-blanc.png",
    description:
      "Clássico branco com veios sutis, combinando luxo e resistência.",
    applications: ["Cozinhas", "Bancadas", "Lavabos"],
  },

  // DOLOMÍTICOS
  {
    id: "branco-parana",
    name: "Branco Paraná",
    category: "Dolomitico",
    color: "Branco",
    image: "/images/stones/pedras/branco-parana.png",
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
    image: "/images/stones/pedras/Verde Guatemala.png",
    description:
      "Verde profundo com presença forte e elegante.",
    applications: ["Bancadas", "Revestimentos", "Lavabos"],
  },
  {
    id: "dolomitico-vasari",
    name: "Dolomítico Vasari",
    category: "Dolomitico",
    color: "Branco",
    image: "/images/stones/pedras/Dolomítico Vasari.png",
    description:
      "Exclusividade e brilho natural para ambientes sofisticados e contemporâneos.",
    applications: ["Lavabos", "Revestimentos", "Banheiros"],
  },
  {
    id: "super-white",
    name: "Super White",
    category: "Dolomitico",
    color: "Cinza",
    image: "/images/stones/pedras/Super White.png",
    description:
      "Nuances de cinza e branco formando um padrão visual marcante.",
    applications: ["Bancadas", "Cozinhas", "Ilhas"],
  },

  // SUPERNANOGLASS
  {
    id: "super-nanoglass",
    name: "Supernanoglass",
    category: "Supernanoglass",
    color: "Branco",
    image: "/images/stones/pedras/super-nanoglass.png",
    description:
      "Superfície uniforme e moderna com alto brilho.",
    applications: ["Bancadas", "Cozinhas", "Lavabos"],
  },

  // LÂMINAS
  {
    id: "laminas-ultracompactas",
    name: "Lâminas Ultracompactas",
    category: "Laminas",
    color: "Branco",
    image: "/images/stones/laminas.jpg",
    description:
      "Material tecnológico com alta resistência e design contemporâneo.",
    applications: ["Revestimentos", "Bancadas", "Fachadas"],
  },
]

export const categories = [
  "Todos",
  "Granito",
  "Marmore",
  "Quartzito",
  "Quartzo",
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