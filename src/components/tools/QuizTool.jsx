import { useState } from "react";
import { CheckCircle, RotateCcw } from "lucide-react";
import { QUESTIONS, PROFILES } from "../../data/quizData";
import Button from "../ui/Button";

function calculateResult(answers) {
  const counts = {};
  Object.values(answers).forEach((v) => (counts[v] = (counts[v] || 0) + 1));
  const [winner, votes] = Object.entries(counts).sort((a, b) => b[1] - a[1])[0];
  const match = votes === 3 ? 96 : votes === 2 ? 84 : 72;
  return { ...PROFILES[winner], match };
}

export default function QuizTool() {
  const [answers, setAnswers] = useState({});
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  const handleChange = (questionId, value) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(answers).length < QUESTIONS.length) {
      setError("Responde todas las preguntas para obtener tu diagnóstico.");
      return;
    }
    setResult(calculateResult(answers));
  };

  const handleReset = () => {
    setAnswers({});
    setResult(null);
    setError("");
  };

  const answered = Object.keys(answers).length;

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
      <form onSubmit={handleSubmit} className="space-y-8" noValidate>
        <div>
          <div className="flex justify-between text-xs font-medium text-slate-500 mb-2">
            <span>Progreso</span>
            <span>
              {answered} de {QUESTIONS.length}
            </span>
          </div>
          <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600 transition-all"
              style={{ width: `${(answered / QUESTIONS.length) * 100}%` }}
            />
          </div>
        </div>

        {QUESTIONS.map((q, i) => (
          <fieldset key={q.id} className="space-y-3">
            <legend className="font-semibold text-slate-900 mb-3">
              {i + 1}. {q.text}
            </legend>
            {q.options.map((opt) => (
              <label
                key={opt.value}
                className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer text-sm transition-colors ${
                  answers[q.id] === opt.value
                    ? "border-blue-500 bg-blue-50 text-blue-800"
                    : "border-slate-300 bg-white hover:border-blue-300"
                }`}
              >
                <input
                  type="radio"
                  name={q.id}
                  value={opt.value}
                  checked={answers[q.id] === opt.value}
                  onChange={() => handleChange(q.id, opt.value)}
                  className="accent-blue-600"
                />
                {opt.label}
              </label>
            ))}
          </fieldset>
        ))}

        {error && (
          <p role="alert" className="text-sm text-red-600">
            {error}
          </p>
        )}

        <div className="flex flex-wrap gap-3">
          <Button type="submit">Obtener Diagnóstico</Button>
          <Button variant="secondary" onClick={handleReset}>
            <RotateCcw className="w-4 h-4" /> Reiniciar
          </Button>
        </div>
      </form>

      {result && (
        <div
          className="mt-8 bg-white border border-blue-200 rounded-2xl p-6 space-y-3"
          role="status"
        >
          <div className="flex items-center gap-2 text-blue-600 font-bold">
            <CheckCircle className="w-5 h-5" />
            <span>Resultado generado ({result.match}% de afinidad)</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900">{result.career}</h2>
          <p className="text-sm text-slate-600">{result.reason}</p>
          <Button
            to={`/carreras?categoria=${encodeURIComponent(result.category)}`}
            className="mt-2"
          >
            Ver carreras de {result.category}
          </Button>
        </div>
      )}
    </div>
  );
}
