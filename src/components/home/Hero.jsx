import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-32 bg-gradient-to-b from-blue-50/50 via-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Orientación Profesional con IA</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Descubre tu futuro con{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                CareerAI
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0">
              Plataforma inteligente que evalúa tus habilidades, analiza tu CV y
              simula entrevistas laborales para potenciar tu empleabilidad al
              máximo nivel.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Button to="/test" className="w-full sm:w-auto py-3.5">
                <span>Probar Test Vocacional</span>
                <ArrowRight className="w-5 h-5" />
              </Button>

              <Button
                to="/cv"
                variant="secondary"
                className="w-full sm:w-auto py-3.5"
              >
                <span>Analizar mi CV</span>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-200 text-left">
              <div>
                <p className="text-2xl font-bold text-blue-600">95%</p>
                <p className="text-xs text-slate-500 font-medium">
                  Precisión en recomendaciones
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-600">+10k</p>
                <p className="text-xs text-slate-500 font-medium">
                  CVs analizados
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-600">24/7</p>
                <p className="text-xs text-slate-500 font-medium">
                  Asistencia inteligente
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative bg-gradient-to-tr from-blue-600 to-cyan-400 p-1 rounded-3xl shadow-2xl">
              <div className="bg-white p-6 sm:p-8 rounded-[22px] space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-xs font-mono text-slate-400 ml-2">
                    career-ai-engine.tsx
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-slate-800">
                        Análisis de Perfil Activo
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Sugerencia de ruta: Ingeniería de Software & Full-Stack
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                    <div className="flex justify-between text-xs font-semibold text-slate-700">
                      <span>Compatibilidad Laboral</span>
                      <span className="text-blue-600">94%</span>
                    </div>
                    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-blue-600 h-full w-[94%] rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <span className="text-xs text-slate-400">
                    Impulsado por algoritmos avanzados de IA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
