import { useEffect, useRef, useState } from "react";
import { Send, RotateCcw } from "lucide-react";
import Button from "../ui/Button";

const QUESTIONS = [
  "Hola, soy tu entrevistador virtual. ¿Podrías contarme sobre tu experiencia trabajando en equipo?",
  "Muy bien. ¿Cuál consideras que es tu mayor fortaleza profesional y por qué?",
  "Interesante. Cuéntame de un error que cometiste en un proyecto y qué aprendiste.",
  "¿Cómo manejas los plazos ajustados o la presión en el trabajo?",
  "Última pregunta: ¿dónde te ves profesionalmente en 3 años?",
];
const FEEDBACK = [
  "Buena respuesta: das un ejemplo concreto. Intenta agregar un resultado medible.",
  "Claro y seguro. Conecta tu fortaleza con el puesto al que postulas.",
  "Excelente: reconocer errores muestra madurez profesional.",
  "Buena estrategia. Menciona herramientas o hábitos que usas para organizarte.",
  "¡Entrevista completada! Demuestras claridad y metas definidas.",
];

export default function InterviewChat() {
  const [log, setLog] = useState([{ sender: "ai", text: QUESTIONS[0] }]);
  const [step, setStep] = useState(0);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const bottomRef = useRef(null);
  const finished = step >= QUESTIONS.length;

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [log]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim().length < 10) {
      setError("Desarrolla un poco más tu respuesta (mínimo 10 caracteres).");
      return;
    }
    const current = step;
    setLog((prev) => [...prev, { sender: "user", text: message.trim() }]);
    setMessage("");
    setError("");
    setStep(current + 1);
    setTimeout(() => {
      setLog((prev) => {
        const next = [...prev, { sender: "ai", text: FEEDBACK[current] }];
        if (current + 1 < QUESTIONS.length)
          next.push({ sender: "ai", text: QUESTIONS[current + 1] });
        return next;
      });
    }, 800);
  };

  const handleReset = () => {
    setLog([{ sender: "ai", text: QUESTIONS[0] }]);
    setStep(0);
    setMessage("");
    setError("");
  };

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
      <div
        className="bg-white border border-slate-200 rounded-xl p-4 h-80 overflow-y-auto flex flex-col gap-3 mb-4"
        aria-live="polite"
      >
        {log.map((m, i) => (
          <div
            key={i}
            className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm ${m.sender === "user" ? "self-end bg-blue-600 text-white" : "self-start bg-slate-100 text-slate-800"}`}
          >
            {m.text}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {finished ? (
        <Button variant="secondary" onClick={handleReset}>
          <RotateCcw className="w-4 h-4" /> Repetir entrevista
        </Button>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-2">
          <div className="flex gap-2">
            <input
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                setError("");
              }}
              placeholder="Escribe tu respuesta aquí…"
              aria-label="Tu respuesta"
              className="flex-1 bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button
              type="submit"
              aria-label="Enviar respuesta"
              className="px-4"
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
          {error && (
            <p role="alert" className="text-xs text-red-600">
              {error}
            </p>
          )}
          <p className="text-xs text-slate-500">
            Pregunta {Math.min(step + 1, QUESTIONS.length)} de{" "}
            {QUESTIONS.length}
          </p>
        </form>
      )}
    </div>
  );
}
