import { Heart, TrendingUp, Wallet } from "lucide-react";

export default function CareerCard({
  career,
  isFavorite = false,
  onToggleFavorite,
}) {
  const { name, category, description, demand, salary, skills } = career;

  return (
    <article className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow flex flex-col">
      <div className="flex items-start justify-between gap-3 mb-3">
        <span className="text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full">
          {category}
        </span>
        {onToggleFavorite && (
          <button
            onClick={() => onToggleFavorite(career.id)}
            aria-pressed={isFavorite}
            aria-label={
              isFavorite
                ? `Quitar ${name} de favoritos`
                : `Guardar ${name} en favoritos`
            }
            className="p-1.5 rounded-full hover:bg-slate-100"
          >
            <Heart
              className={`w-5 h-5 ${isFavorite ? "fill-red-500 text-red-500" : "text-slate-400"}`}
            />
          </button>
        )}
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2">{name}</h3>
      <p className="text-sm text-slate-600 mb-4 flex-grow">{description}</p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-md"
          >
            {skill}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-100">
        <span className="flex items-center gap-1.5">
          <TrendingUp className="w-4 h-4 text-green-600" /> Demanda {demand}
        </span>
        <span className="flex items-center gap-1.5">
          <Wallet className="w-4 h-4 text-blue-600" /> {salary}
        </span>
      </div>
    </article>
  );
}
