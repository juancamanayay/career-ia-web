// Campo de formulario con etiqueta, ayuda y mensaje de error accesible.
export default function FormField({ id, label, error, hint, children }) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-medium text-slate-700">
        {label}
      </label>
      {children}
      {hint && !error && <p className="text-xs text-slate-500">{hint}</p>}
      {error && (
        <p id={`${id}-error`} role="alert" className="text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export const inputClass = (error) =>
  `w-full bg-white border rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
    error ? "border-red-400" : "border-slate-300"
  }`;
