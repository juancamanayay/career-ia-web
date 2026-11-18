import { Loader2 } from "lucide-react";

export default function Spinner({ label = "Cargando..." }) {
  return (
    <div
      className="flex flex-col items-center justify-center gap-3 py-16 text-slate-500"
      role="status"
    >
      <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      <span className="text-sm">{label}</span>
    </div>
  );
}
