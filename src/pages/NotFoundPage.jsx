import Button from "../components/ui/Button";

export default function NotFoundPage() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-xl mx-auto px-4 text-center space-y-6">
        <p className="text-7xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          404
        </p>
        <h1 className="text-3xl font-bold text-slate-900">
          Página no encontrada
        </h1>
        <p className="text-slate-600">
          La dirección que buscas no existe o fue movida.
        </p>
        <Button to="/">Volver al inicio</Button>
      </div>
    </section>
  );
}
