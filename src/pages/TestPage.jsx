import PageSection from "../components/ui/PageSection";
import QuizTool from "../components/tools/QuizTool";

export default function TestPage() {
  return (
    <PageSection
      title="Test Vocacional Inteligente"
      subtitle="Responde tres preguntas y descubre la ruta profesional que mejor se adapta a ti."
      maxWidth="max-w-3xl"
    >
      <QuizTool />
    </PageSection>
  );
}
