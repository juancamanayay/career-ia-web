// Por defecto lee /db.json (archivo estático, funciona al desplegar en Vercel o Netlify).
// Con JSON Server activo (npm run api) define VITE_API_URL=http://localhost:3001/careers en un archivo .env
const API_URL =
  import.meta.env.VITE_API_URL || `${import.meta.env.BASE_URL}db.json`;

export async function getCareers(signal) {
  const response = await fetch(API_URL, { signal });
  if (!response.ok) {
    throw new Error(
      `No se pudo cargar la información (error ${response.status}).`,
    );
  }
  const data = await response.json();
  return Array.isArray(data) ? data : data.careers;
}
