import {
  Compass,
  FileText,
  MessageSquareCode,
  ShieldCheck,
  Zap,
  TrendingUp,
} from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import FeatureCard from "../ui/FeatureCard";

const FEATURES = [
  {
    icon: Compass,
    title: "Test Vocacional Inteligente",
    description:
      "Cuestionario dinámico adaptado a tus fortalezas técnicas y blandas para sugerir tu ruta ideal.",
  },
  {
    icon: FileText,
    title: "Analizador de CV con IA",
    description:
      "Ingresa tu perfil y recibe recomendaciones automáticas de mejora y palabras clave.",
  },
  {
    icon: MessageSquareCode,
    title: "Simulador de Entrevistas",
    description:
      "Prueba preguntas técnicas y conductuales con retroalimentación instantánea del asistente.",
  },
  {
    icon: ShieldCheck,
    title: "Privacidad y Seguridad",
    description:
      "Tus datos profesionales e historiales de pruebas se encuentran cifrados y protegidos.",
  },
  {
    icon: Zap,
    title: "Respuestas Ultrarrápidas",
    description:
      "Diagnósticos y sugerencias generadas en menos de 4 segundos optimizando tu tiempo.",
  },
  {
    icon: TrendingUp,
    title: "Crecimiento Continuo",
    description:
      "Monitoreo constante de tendencias en el mercado laboral y demanda tecnológica.",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Pilares Tecnológicos de CareerAI"
          subtitle="Herramientas diseñadas para potenciar tu empleabilidad y guiarte en cada etapa de tu carrera profesional."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
