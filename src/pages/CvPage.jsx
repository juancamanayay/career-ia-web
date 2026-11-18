import PageSection from "../components/ui/PageSection";
import CvAnalyzer from "../components/tools/CvAnalyzer";

export default function CvPage() {
  return (
    <PageSection
      title="Analizador Inteligente de CV"
      subtitle="Compara las habilidades de tu CV con las palabras clave que buscan las empresas."
      maxWidth="max-w-3xl"
    >
      <CvAnalyzer />
    </PageSection>
  );
}
