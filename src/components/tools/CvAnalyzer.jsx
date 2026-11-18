import { useState } from "react";
import { CheckCircle, Upload } from "lucide-react";
import FormField, { inputClass } from "../ui/FormField";
import Button from "../ui/Button";

const ROLES = {
  "Desarrollador Web": ["react", "javascript", "html", "css", "git", "api"],
  "Analista de Datos": ["sql", "python", "excel", "power bi", "estadística"],
  "Gestor de Proyectos": [
    "scrum",
    "liderazgo",
    "jira",
    "presupuesto",
    "comunicación",
  ],
};

function validate({ name, role, skills }) {
  const errors = {};
  if (name.trim().length < 3)
    errors.name = "Ingresa tu nombre (mínimo 3 caracteres).";
  if (!role) errors.role = "Selecciona el puesto al que postulas.";
  if (skills.split(",").filter((s) => s.trim()).length < 2)
    errors.skills = "Escribe al menos 2 habilidades separadas por comas.";
  return errors;
}

function analyze({ name, role, skills }) {
  const given = skills
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);
  const keywords = ROLES[role];
  const matched = keywords.filter((k) => given.includes(k));
  const missing = keywords.filter((k) => !given.includes(k));
  const score = Math.min(
    98,
    55 +
      Math.round((matched.length / keywords.length) * 40) +
      Math.min(given.length, 3),
  );
  return { name: name.trim(), role, score, matched, missing };
}

export default function CvAnalyzer() {
  const [values, setValues] = useState({ name: "", role: "", skills: "" });
  const [errors, setErrors] = useState({});
  const [report, setReport] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    setReport(Object.keys(found).length ? null : analyze(values));
  };

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <FormField id="name" label="Nombre completo" error={errors.name}>
          <input
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder="Ej. Juan Carlos Pérez"
            className={inputClass(errors.name)}
          />
        </FormField>
        <FormField id="role" label="Puesto al que postulas" error={errors.role}>
          <select
            id="role"
            name="role"
            value={values.role}
            onChange={handleChange}
            className={inputClass(errors.role)}
          >
            <option value="">Selecciona una opción…</option>
            {Object.keys(ROLES).map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
        </FormField>
        <FormField
          id="skills"
          label="Habilidades de tu CV"
          error={errors.skills}
          hint="Sepáralas con comas. Ej: React, JavaScript, Git"
        >
          <textarea
            id="skills"
            name="skills"
            rows={3}
            value={values.skills}
            onChange={handleChange}
            className={inputClass(errors.skills)}
          />
        </FormField>
        <Button type="submit">
          <Upload className="w-4 h-4" /> Analizar CV
        </Button>
      </form>

      {report && (
        <div
          className="mt-8 bg-white border border-green-300 rounded-2xl p-6 space-y-3"
          role="status"
        >
          <div className="flex items-center gap-2 text-green-600 font-bold">
            <CheckCircle className="w-5 h-5" /> ¡CV escaneado exitosamente!
          </div>
          <p className="text-sm">
            {report.name}, tu score de empleabilidad para <b>{report.role}</b>:{" "}
            <b className="text-blue-600 text-lg">{report.score}/100</b>
          </p>
          <ul className="text-sm text-slate-600 list-disc pl-5 space-y-1">
            <li>
              Palabras clave detectadas:{" "}
              {report.matched.length ? report.matched.join(", ") : "ninguna"}.
            </li>
            <li>
              Palabras clave sugeridas para agregar:{" "}
              {report.missing.length
                ? report.missing.join(", ")
                : "¡tienes todas!"}
              .
            </li>
            <li>Agrega métricas de impacto en tus logros anteriores.</li>
          </ul>
        </div>
      )}
    </div>
  );
}
