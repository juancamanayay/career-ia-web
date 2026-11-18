import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useCareers from "../hooks/useCareers";
import PageSection from "../components/ui/PageSection";
import Spinner from "../components/ui/Spinner";
import ErrorMessage from "../components/ui/ErrorMessage";
import CareerCard from "../components/careers/CareerCard";
import CareerFilters from "../components/careers/CareerFilters";

export default function CareersPage() {
  const { careers, loading, error, retry } = useCareers();
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(
    searchParams.get("categoria") || "Todas",
  );
  const [favorites, setFavorites] = useState([]);
  const [onlyFavorites, setOnlyFavorites] = useState(false);

  const categories = useMemo(
    () => [...new Set(careers.map((c) => c.category))],
    [careers],
  );

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    return careers.filter((c) => {
      const matchesText =
        !term ||
        c.name.toLowerCase().includes(term) ||
        c.skills.some((s) => s.toLowerCase().includes(term));
      const matchesCategory = category === "Todas" || c.category === category;
      const matchesFavorite = !onlyFavorites || favorites.includes(c.id);
      return matchesText && matchesCategory && matchesFavorite;
    });
  }, [careers, search, category, onlyFavorites, favorites]);

  const toggleFavorite = (id) =>
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id],
    );

  return (
    <PageSection
      title="Explora Carreras"
      subtitle="Busca por nombre o habilidad, filtra por área y guarda tus favoritas."
      maxWidth="max-w-7xl"
      bg="bg-slate-50"
    >
      {loading && <Spinner label="Cargando carreras..." />}
      {error && <ErrorMessage message={error} onRetry={retry} />}
      {!loading && !error && (
        <>
          <CareerFilters
            search={search}
            onSearchChange={setSearch}
            categories={categories}
            category={category}
            onCategoryChange={setCategory}
            onlyFavorites={onlyFavorites}
            onToggleFavorites={() => setOnlyFavorites((v) => !v)}
            favoritesCount={favorites.length}
          />
          <p className="text-sm text-slate-500 mb-4" aria-live="polite">
            Mostrando {filtered.length} de {careers.length} carreras
          </p>
          {filtered.length ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((career) => (
                <CareerCard
                  key={career.id}
                  career={career}
                  isFavorite={favorites.includes(career.id)}
                  onToggleFavorite={toggleFavorite}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-slate-500 py-12">
              No encontramos carreras con esos criterios.
            </p>
          )}
        </>
      )}
    </PageSection>
  );
}
