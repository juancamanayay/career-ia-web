import { AlertTriangle } from "lucide-react";
import Button from "./Button";

export default function ErrorMessage({ message, onRetry }) {
  return (
    <div
      className="max-w-xl mx-auto bg-red-50 border border-red-200 rounded-2xl p-6 text-center space-y-4"
      role="alert"
    >
      <AlertTriangle className="w-8 h-8 text-red-500 mx-auto" />
      <p className="text-sm text-red-700">{message}</p>
      {onRetry && (
        <Button variant="secondary" onClick={onRetry} className="py-2 text-sm">
          Reintentar
        </Button>
      )}
    </div>
  );
}
