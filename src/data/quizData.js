export const QUESTIONS = [
  {
    id: "q1",
    text: "¿Qué actividad disfrutas más en tu día a día profesional o académico?",
    options: [
      {
        value: "codigo",
        label: "Diseñar interfaces y programar aplicaciones web",
      },
      { value: "datos", label: "Analizar bases de datos y métricas" },
      { value: "gestion", label: "Coordinar equipos y liderar proyectos" },
    ],
  },
  {
    id: "q2",
    text: "¿Cómo prefieres resolver un problema?",
    options: [
      { value: "codigo", label: "Construyendo una solución paso a paso" },
      { value: "datos", label: "Investigando patrones en la información" },
      { value: "gestion", label: "Organizando personas y recursos" },
    ],
  },
  {
    id: "q3",
    text: "¿Qué resultado te motiva más?",
    options: [
      { value: "codigo", label: "Ver funcionando un producto que yo creé" },
      { value: "datos", label: "Descubrir una conclusión basada en evidencia" },
      { value: "gestion", label: "Lograr que el equipo cumpla sus metas" },
    ],
  },
];

export const PROFILES = {
  codigo: {
    career: "Ingeniería de Software / Full-Stack Development",
    category: "Tecnología",
    reason:
      "Tus respuestas reflejan afinidad por la lógica, el diseño web y la resolución de problemas técnicos complejos.",
  },
  datos: {
    career: "Ciencia de Datos / Análisis Financiero",
    category: "Datos",
    reason:
      "Disfrutas interpretar información y métricas para tomar decisiones basadas en evidencia.",
  },
  gestion: {
    career: "Gestión de Proyectos Tecnológicos / Liderazgo",
    category: "Gestión",
    reason:
      "Tu perfil muestra fortalezas en coordinación, comunicación y visión estratégica de equipos.",
  },
};
