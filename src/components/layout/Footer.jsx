import { Link } from "react-router-dom";
import { Bot, Heart } from "lucide-react";

const LINKS = [
  { to: "/carreras", label: "Carreras" },
  { to: "/test", label: "Test Vocacional" },
  { to: "/contacto", label: "Soporte" },
  { to: "/contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 p-2 rounded-xl text-white">
              <Bot className="w-5 h-5" />
            </div>
            <span className="text-lg font-bold text-white">CareerAI</span>
          </div>

          <nav
            aria-label="Enlaces del pie de página"
            className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm"
          >
            {LINKS.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className="hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <p className="text-xs text-slate-500 flex items-center space-x-1">
            <span>© 2026 CareerAI. Hecho con</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>para orientación profesional.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
