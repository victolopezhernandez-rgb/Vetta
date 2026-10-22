# Servidor de IA de Vetta

Guarda tu API key de OpenAI y hace las llamadas a `gpt-5.6-luna` por la app.
La key nunca va en la página ni en este código.

## Ponerlo en marcha (una sola vez)

Necesitas Node.js y una cuenta gratis de Cloudflare. En la terminal, dentro de esta carpeta:

1. Inicia sesión en Cloudflare (abre el navegador):
   `npx wrangler login`
2. Guarda tu API key como secreto (la pega la terminal, no se escribe en ningún archivo):
   `npx wrangler secret put OPENAI_API_KEY`
3. Publica el servidor:
   `npx wrangler deploy`
   Al final muestra una dirección como `https://vetta-ia.TU-USUARIO.workers.dev`.
4. Comprueba que funciona abriendo esa dirección en el navegador. Debe decir `"key":true`.
5. Pega esa dirección en `app/index.html`, en la línea `const AI_URL="";`.

## Cambiar algo después

- Otra key: repite el paso 2 (reemplaza la anterior).
- Otro modelo o tope de respuesta: edita `MODEL` o `MAX_TOKENS` en `wrangler.toml` y repite el paso 3.
- Pon un límite de gasto mensual en el panel de OpenAI (Settings → Limits).
