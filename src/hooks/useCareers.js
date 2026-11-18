import { useCallback, useEffect, useState } from "react";
import { getCareers } from "../services/api";

// Hook que consume la API y expone los estados de carga y error.
export default function useCareers() {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(null);

    getCareers(controller.signal)
      .then(setCareers)
      .catch((err) => {
        if (err.name !== "AbortError") {
          setError(err.message || "Ocurrió un error inesperado.");
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });

    return () => controller.abort();
  }, [attempt]);

  const retry = useCallback(() => setAttempt((n) => n + 1), []);

  return { careers, loading, error, retry };
}
