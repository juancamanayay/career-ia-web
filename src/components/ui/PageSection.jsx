import SectionTitle from "./SectionTitle";

// Contenedor estándar de cada página: título + contenido centrado.
export default function PageSection({
  title,
  subtitle,
  maxWidth = "max-w-5xl",
  bg = "bg-white",
  children,
}) {
  return (
    <section className={`py-16 sm:py-20 ${bg}`}>
      <div className={`${maxWidth} mx-auto px-4 sm:px-6 lg:px-8`}>
        <SectionTitle as="h1" title={title} subtitle={subtitle} />
        {children}
      </div>
    </section>
  );
}
