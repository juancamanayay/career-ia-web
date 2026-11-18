import PageSection from "../components/ui/PageSection";
import InterviewChat from "../components/tools/InterviewChat";

export default function InterviewPage() {
  return (
    <PageSection
      title="Simulador de Entrevista Laboral"
      subtitle="Practica con cinco preguntas frecuentes y recibe retroalimentación en cada respuesta."
      maxWidth="max-w-3xl"
    >
      <InterviewChat />
    </PageSection>
  );
}
