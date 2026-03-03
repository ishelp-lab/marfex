export interface Stone {
  id: string
  name: string
  category: "Marmore" | "Granito" | "Quartzo" | "Quartzito"
  color: string
  image: string
  description: string
  applications: string[]
}

export const stones: Stone[] = [
  {
    id: "quartzo-branco",
    name: "Quartzo Branco",
    category: "Quartzo",
    color: "Branco",
    image: "/images/stones/quartzo-branco.jpg",
    description:
      "Superficie uniforme e clean, ideal para ambientes modernos e minimalistas.",
    applications: ["Bancadas", "Banheiros", "Cozinhas"],
  },
  {
    id: "sky-white",
    name: "Sky White",
    category: "Quartzo",
    color: "Branco",
    image: "/images/stones/sky-white.jpg",
    description:
      "Branco puro e radiante, perfeito para ambientes que pedem luminosidade e sofisticacao.",
    applications: ["Bancadas", "Lavabos", "Ilhas"],
  },
  {
    id: "taj-mahal",
    name: "Taj Mahal",
    category: "Quartzito",
    color: "Bege",
    image: "/images/stones/taj-mahal.jpg",
    description:
      "Tons quentes de bege e dourado com veios sutis, evocando elegancia atemporal.",
    applications: ["Bancadas", "Revestimentos", "Banheiros"],
  },
  {
    id: "mont-blanc",
    name: "Mont Blanc",
    category: "Quartzito",
    color: "Branco",
    image: "/images/stones/mont-blanc.jpg",
    description:
      "Creme suave com delicados veios dourados e cinza, visual refinado e acolhedor.",
    applications: ["Ilhas", "Cozinhas", "Banheiros"],
  },
  {
    id: "cristallo",
    name: "Cristallo",
    category: "Quartzito",
    color: "Cinza",
    image: "/images/stones/cristallo.jpg",
    description:
      "Textura cristalina em tons de cinza claro, trazendo modernidade e leveza.",
    applications: ["Revestimentos", "Bancadas", "Lavabos"],
  },
  {
    id: "quartzo-calacata",
    name: "Quartzo Calacata",
    category: "Quartzo",
    color: "Branco",
    image: "/images/stones/calacata.jpg",
    description:
      "Inspirado no marmore Calacatta, com veios dramaticos em cinza e dourado sobre fundo branco.",
    applications: ["Cozinhas", "Ilhas", "Bancadas"],
  },
  {
    id: "super-nanoglass",
    name: "Super Nanoglass",
    category: "Quartzo",
    color: "Cinza",
    image: "/images/stones/super-nanoglass.jpg",
    description:
      "Superficie escura e cristalina com brilho intenso, ideal para ambientes ousados.",
    applications: ["Bancadas", "Areas Gourmet", "Revestimentos"],
  },
  {
    id: "donatello",
    name: "Donatello",
    category: "Marmore",
    color: "Cinza",
    image: "/images/stones/donatello.jpg",
    description:
      "Cinza profundo com veios brancos dramaticos, uma peca de arte natural.",
    applications: ["Lavabos", "Revestimentos", "Banheiros"],
  },
  {
    id: "siena",
    name: "Siena",
    category: "Granito",
    color: "Bege",
    image: "/images/stones/siena.jpg",
    description:
      "Tons terrosos e quentes com flecks minerais, resistente e elegante.",
    applications: ["Cozinhas", "Areas Gourmet", "Escadas"],
  },
  {
    id: "super-white",
    name: "Super White",
    category: "Quartzito",
    color: "Branco",
    image: "/images/stones/super-white.jpg",
    description:
      "Branco sofisticado com sutis veios cinza, aparencia semelhante ao marmore premium.",
    applications: ["Ilhas", "Banheiros", "Bancadas"],
  },
  {
    id: "quartizito-gaya",
    name: "Quartizito Gaya",
    category: "Quartzito",
    color: "Verde",
    image: "/images/stones/quartizito-gaya.jpg",
    description:
      "Exotico com tons de verde e turquesa, uma escolha marcante para ambientes unicos.",
    applications: ["Revestimentos", "Lavabos", "Bancadas"],
  },
  {
    id: "quartizito-da-vinci",
    name: "Quartizito Da Vinci",
    category: "Quartzito",
    color: "Verde",
    image: "/images/stones/quartizito-da-vinci.jpg",
    description:
      "Mistura de azul turquesa e marrom com movimentos dramaticos, uma obra-prima natural.",
    applications: ["Revestimentos", "Lavabos", "Bancadas"],
  },
  {
    id: "branco-parana",
    name: "Branco Parana",
    category: "Granito",
    color: "Branco",
    image: "/images/stones/branco-parana.jpg",
    description:
      "Granito brasileiro classico, branco com sutis veios cinza e bege, custo-beneficio excelente.",
    applications: ["Cozinhas", "Banheiros", "Escadas"],
  },
  {
    id: "granito-preto-sao-gabriel",
    name: "Granito Preto Sao Gabriel",
    category: "Granito",
    color: "Preto",
    image: "/images/stones/granito-preto.jpg",
    description:
      "Preto profundo com sutis flecks minerais, resistencia maxima e beleza classica.",
    applications: ["Escadas", "Areas Gourmet", "Cozinhas"],
  },
]

export const categories = ["Todos", "Marmore", "Granito", "Quartzo", "Quartzito"] as const
export const colors = ["Todos", "Branco", "Bege", "Cinza", "Preto", "Verde"] as const
