import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";

export default function CtaSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl px-6 py-14 sm:px-12 text-center text-white shadow-xl shadow-blue-200 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Da el primer paso hacia tu carrera ideal
          </h2>
          <p className="text-blue-50 max-w-2xl mx-auto">
            Haz el test vocacional, mejora tu CV y practica tu entrevista. Es
            gratis y toma solo unos minutos.
          </p>
          <Button to="/test" variant="light" className="py-3.5">
            <span>Empezar ahora</span>
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
