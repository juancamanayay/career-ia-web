import PageSection from "../components/ui/PageSection";
import ContactForm from "../components/tools/ContactForm";

export default function ContactPage() {
  return (
    <PageSection
      title="Contacto y Soporte"
      subtitle="¿Tienes dudas o sugerencias? Escríbenos y te responderemos pronto."
      maxWidth="max-w-2xl"
    >
      <ContactForm />
    </PageSection>
  );
}
