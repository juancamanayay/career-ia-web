import { useState } from "react";
import { CheckCircle, Send } from "lucide-react";
import FormField, { inputClass } from "../ui/FormField";
import Button from "../ui/Button";

const EMPTY = { name: "", email: "", reason: "", message: "", terms: false };

function validate(v) {
  const e = {};
  if (v.name.trim().length < 3)
    e.name = "Ingresa tu nombre (mínimo 3 caracteres).";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email))
    e.email = "Ingresa un correo electrónico válido.";
  if (!v.reason) e.reason = "Selecciona un motivo.";
  if (v.message.trim().length < 20)
    e.message = "El mensaje debe tener al menos 20 caracteres.";
  if (!v.terms)
    e.terms = "Debes aceptar los términos y la política de privacidad.";
  return e;
}

export default function ContactForm() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [sentTo, setSentTo] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  // Valida el campo al salir de él
  const handleBlur = (e) => {
    const found = validate(values);
    setErrors((prev) => ({ ...prev, [e.target.name]: found[e.target.name] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) return;
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSentTo(values.name.trim());
      setValues(EMPTY);
    }, 800);
  };

  if (sentTo) {
    return (
      <div
        className="bg-white border border-green-300 rounded-2xl p-8 text-center space-y-4"
        role="status"
      >
        <CheckCircle className="w-10 h-10 text-green-600 mx-auto" />
        <h2 className="text-xl font-bold">¡Gracias, {sentTo}!</h2>
        <p className="text-sm text-slate-600">
          Recibimos tu mensaje y te responderemos en las próximas 24 horas.
        </p>
        <Button variant="secondary" onClick={() => setSentTo(null)}>
          Enviar otro mensaje
        </Button>
      </div>
    );
  }

  const field = { onChange: handleChange, onBlur: handleBlur };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-5"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <FormField id="c-name" label="Nombre" error={errors.name}>
          <input
            id="c-name"
            name="name"
            value={values.name}
            {...field}
            className={inputClass(errors.name)}
          />
        </FormField>
        <FormField id="c-email" label="Correo electrónico" error={errors.email}>
          <input
            id="c-email"
            name="email"
            type="email"
            value={values.email}
            {...field}
            className={inputClass(errors.email)}
          />
        </FormField>
      </div>
      <FormField id="c-reason" label="Motivo" error={errors.reason}>
        <select
          id="c-reason"
          name="reason"
          value={values.reason}
          {...field}
          className={inputClass(errors.reason)}
        >
          <option value="">Selecciona una opción…</option>
          <option>Soporte técnico</option>
          <option>Sugerencia</option>
          <option>Alianza o colaboración</option>
        </select>
      </FormField>
      <FormField
        id="c-message"
        label="Mensaje"
        error={errors.message}
        hint={`${values.message.trim().length}/20 caracteres mínimos`}
      >
        <textarea
          id="c-message"
          name="message"
          rows={4}
          value={values.message}
          {...field}
          className={inputClass(errors.message)}
        />
      </FormField>
      <div>
        <label className="flex items-start gap-2 text-sm text-slate-600">
          <input
            type="checkbox"
            name="terms"
            checked={values.terms}
            onChange={handleChange}
            className="mt-1 accent-blue-600"
          />
          Acepto los términos de uso y la política de privacidad.
        </label>
        {errors.terms && (
          <p role="alert" className="text-xs text-red-600 mt-1">
            {errors.terms}
          </p>
        )}
      </div>
      <Button type="submit" disabled={sending}>
        <Send className="w-4 h-4" />{" "}
        {sending ? "Enviando..." : "Enviar mensaje"}
      </Button>
    </form>
  );
}
