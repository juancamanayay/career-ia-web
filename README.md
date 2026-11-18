# CareerAI – Orientador Profesional Inteligente

Proyecto web con **React + Vite + Tailwind CSS + React Router**.

## Ejecutar en local

```bash
npm install
npm run dev        # http://localhost:5173
```

## API simulada (JSON Server)

Por defecto la app lee `public/db.json` con `fetch` (funciona también al desplegar).
Para usar JSON Server de verdad:

```bash
cp .env.example .env     # y descomenta VITE_API_URL
npm run api              # http://localhost:3001/careers
npm run dev              # en otra terminal
```

## Rutas

| Ruta | Página |
|---|---|
| `/` | Inicio |
| `/test` | Test vocacional |
| `/cv` | Analizador de CV |
| `/entrevista` | Simulador de entrevista |
| `/carreras` | Carreras (API, búsqueda y filtros) |
| `/contacto` | Formulario de contacto |
| `*` | Error 404 |

## Estructura

```
src/
├── components/
│   ├── layout/    Header, Navbar, Footer, Layout
│   ├── ui/        Button, SectionTitle, PageSection, FeatureCard, FormField, Spinner, ErrorMessage
│   ├── home/      Hero, Features, CtaSection
│   ├── careers/   CareerCard, CareerFilters, FeaturedCareers
│   └── tools/     QuizTool, CvAnalyzer, InterviewChat, ContactForm
├── pages/         una página por ruta
├── hooks/         useCareers (fetch + loading + error)
├── services/      api.js
└── data/          quizData.js
```

## Publicar en GitHub

```bash
git init
git add .
git commit -m "CareerAI - proyecto final"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/career-ai-web.git
git push -u origin main
```

## Desplegar

**Vercel:** vercel.com → *Add New Project* → importa el repositorio → *Deploy* (detecta Vite; `vercel.json` ya maneja las rutas).

**Netlify:** app.netlify.com → *Add new site → Import from Git* → Build command `npm run build`, Publish directory `dist` (`public/_redirects` ya maneja las rutas).
