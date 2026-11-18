import { Search, Heart } from "lucide-react";

export default function CareerFilters({
  search,
  onSearchChange,
  categories,
  category,
  onCategoryChange,
  onlyFavorites,
  onToggleFavorites,
  favoritesCount,
}) {
  const chip = (active) =>
    `px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
      active
        ? "bg-blue-600 text-white border-blue-600"
        : "bg-white text-slate-600 border-slate-300 hover:border-blue-400"
    }`;

  return (
    <div className="space-y-4 mb-8">
      <div className="relative max-w-xl mx-auto">
        <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="search"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Buscar por carrera o habilidad (ej. SQL, Figma)…"
          aria-label="Buscar carreras"
          className="w-full bg-white border border-slate-300 rounded-xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {["Todas", ...categories].map((c) => (
          <button
            key={c}
            onClick={() => onCategoryChange(c)}
            className={chip(category === c)}
            aria-pressed={category === c}
          >
            {c}
          </button>
        ))}
        <button
          onClick={onToggleFavorites}
          className={`${chip(onlyFavorites)} flex items-center gap-1.5`}
          aria-pressed={onlyFavorites}
        >
          <Heart className="w-4 h-4" /> Favoritos ({favoritesCount})
        </button>
      </div>
    </div>
  );
}
