import { ArrowRight } from "lucide-react";
import useCareers from "../../hooks/useCareers";
import SectionTitle from "../ui/SectionTitle";
import Spinner from "../ui/Spinner";
import ErrorMessage from "../ui/ErrorMessage";
import Button from "../ui/Button";
import CareerCard from "./CareerCard";

// Sección del Home: muestra 3 carreras traídas de la API y reutiliza CareerCard.
export default function FeaturedCareers() {
  const { careers, loading, error, retry } = useCareers();

  return (
    <section className="py-20 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Carreras con mayor demanda"
          subtitle="Explora algunas de las rutas profesionales que hoy buscan las empresas."
        />
        {loading && <Spinner label="Cargando carreras..." />}
        {error && <ErrorMessage message={error} onRetry={retry} />}
        {!loading && !error && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {careers
                .filter((c) => c.demand === "Alta")
                .slice(0, 3)
                .map((career) => (
                  <CareerCard key={career.id} career={career} />
                ))}
            </div>
            <div className="text-center mt-10">
              <Button to="/carreras" variant="secondary">
                <span>Ver todas las carreras</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
