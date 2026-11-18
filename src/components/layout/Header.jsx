import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bot, Menu, X, Sparkles } from "lucide-react";
import Navbar from "./Navbar";
import Button from "../ui/Button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  // Cierra el menú móvil al cambiar de ruta
  useEffect(() => setIsOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center space-x-2"
          aria-label="CareerAI - Inicio"
        >
          <div className="bg-blue-600 p-2 rounded-xl text-white shadow-md shadow-blue-200">
            <Bot className="w-6 h-6" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            CareerAI
          </span>
        </Link>

        <Navbar />

        <div className="hidden lg:block">
          <Button to="/test" variant="gradient" className="px-4 py-2 text-sm">
            <Sparkles className="w-4 h-4" />
            <span>Empezar Gratis</span>
          </Button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
          aria-label="Abrir menú"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4">
          <Navbar mobile />
        </div>
      )}
    </header>
  );
}
