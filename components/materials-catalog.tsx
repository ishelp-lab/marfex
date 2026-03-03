"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { Search, X, SlidersHorizontal } from "lucide-react"
import { stones, categories, colors, type Stone } from "@/lib/stones-data"

function StoneCard({ stone }: { stone: Stone }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-card shadow-sm transition-all hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={stone.image}
          alt={`Pedra ${stone.name}`}
          fill
          className={`object-cover transition-transform duration-700 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        <div
          className={`absolute inset-0 bg-foreground/60 transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* Hover content */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center p-6 text-center transition-all duration-500 ${
            isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <p className="text-sm leading-relaxed text-card/90">{stone.description}</p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {stone.applications.map((app) => (
              <span
                key={app}
                className="rounded-full bg-primary/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground"
              >
                {app}
              </span>
            ))}
          </div>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center rounded-full bg-card px-5 py-2 text-xs font-bold text-primary transition-all hover:scale-105"
          >
            Pedir orcamento
          </a>
        </div>
      </div>
      {/* Card info */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-base font-bold text-foreground">{stone.name}</h3>
            <p className="mt-1 text-xs text-muted-foreground">{stone.category}</p>
          </div>
          <span
            className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary"
          >
            {stone.color}
          </span>
        </div>
      </div>
    </div>
  )
}

export function MaterialsCatalog() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState<string>("Todos")
  const [activeColor, setActiveColor] = useState<string>("Todos")
  const [showFilters, setShowFilters] = useState(false)

  const filteredStones = useMemo(() => {
    return stones.filter((stone) => {
      const matchesSearch =
        stone.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        stone.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory =
        activeCategory === "Todos" || stone.category === activeCategory
      const matchesColor =
        activeColor === "Todos" || stone.color === activeColor
      return matchesSearch && matchesCategory && matchesColor
    })
  }, [searchQuery, activeCategory, activeColor])

  const clearFilters = () => {
    setSearchQuery("")
    setActiveCategory("Todos")
    setActiveColor("Todos")
  }

  const hasActiveFilters =
    searchQuery !== "" || activeCategory !== "Todos" || activeColor !== "Todos"

  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      {/* Search & Filters bar */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Search */}
          <div className="relative flex-1 md:max-w-md">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar pedra por nome..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-border bg-card py-3 pl-12 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                aria-label="Limpar busca"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`inline-flex items-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium transition-colors md:hidden ${
                showFilters
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border bg-card text-foreground"
              }`}
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filtros
            </button>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-accent"
              >
                <X className="h-3 w-3" />
                Limpar filtros
              </button>
            )}
          </div>
        </div>

        {/* Filter chips - always visible on desktop, toggled on mobile */}
        <div className={`flex-col gap-4 md:flex md:flex-row md:flex-wrap ${showFilters ? "flex" : "hidden"}`}>
          {/* Category filter */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Tipo de pedra
            </span>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Color filter */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Cor predominante
            </span>
            <div className="flex flex-wrap gap-2">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setActiveColor(color)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                    activeColor === color
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results count */}
      <div className="mt-8 mb-6">
        <p className="text-sm text-muted-foreground">
          {filteredStones.length === 0
            ? "Nenhum material encontrado"
            : `Exibindo ${filteredStones.length} ${filteredStones.length === 1 ? "material" : "materiais"}`}
        </p>
      </div>

      {/* Grid */}
      {filteredStones.length > 0 ? (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredStones.map((stone) => (
            <StoneCard key={stone.id} stone={stone} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
            <Search className="h-7 w-7 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-bold text-foreground">Nenhum material encontrado</h3>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            Tente ajustar seus filtros ou buscar por outro termo.
          </p>
          <button
            onClick={clearFilters}
            className="mt-4 rounded-full bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground transition-all hover:bg-accent"
          >
            Limpar filtros
          </button>
        </div>
      )}
    </div>
  )
}
