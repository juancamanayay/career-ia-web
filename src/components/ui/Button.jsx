import { Link } from "react-router-dom";

const VARIANTS = {
  primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-200",
  secondary:
    "bg-white hover:bg-slate-50 text-slate-700 border border-slate-300",
  gradient:
    "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-200 hover:opacity-95",
  light: "bg-white text-blue-700 hover:bg-blue-50 shadow-lg",
};

// Si recibe la prop "to" se comporta como enlace de React Router; si no, como botón.
export default function Button({
  to,
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed ${VARIANTS[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
