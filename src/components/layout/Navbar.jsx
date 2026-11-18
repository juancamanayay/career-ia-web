import { NavLink } from "react-router-dom";

export const NAV_ITEMS = [
  { to: "/", label: "Inicio" },
  { to: "/test", label: "Test Vocacional" },
  { to: "/cv", label: "Analizador CV" },
  { to: "/entrevista", label: "Entrevistas" },
  { to: "/carreras", label: "Carreras" },
  { to: "/contacto", label: "Contacto" },
];

// Menú único para escritorio y celular (prop "mobile"), con NavLink para marcar la ruta activa.
export default function Navbar({ mobile = false, onItemClick }) {
  const linkClass = ({ isActive }) =>
    mobile
      ? `block px-3 py-2 rounded-lg text-base font-medium ${
          isActive
            ? "bg-blue-50 text-blue-600"
            : "text-slate-700 hover:bg-blue-50 hover:text-blue-600"
        }`
      : `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
          isActive
            ? "text-blue-600 bg-blue-50"
            : "text-slate-600 hover:text-blue-600 hover:bg-blue-50/50"
        }`;

  return (
    <nav
      aria-label={mobile ? "Menú móvil" : "Menú principal"}
      className={mobile ? "space-y-1" : "hidden lg:flex items-center space-x-1"}
    >
      {NAV_ITEMS.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.to === "/"}
          className={linkClass}
          onClick={onItemClick}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
