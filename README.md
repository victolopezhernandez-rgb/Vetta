# Vetta

App web para el cuidado inteligente de plantas: registro de plantas, recordatorios de riego,
sensores (humedad de la tierra, temperatura y luz), asistente con IA y reconocimiento por foto.

## Estructura

- `app/index.html`: la app completa en un solo archivo (HTML, CSS y JavaScript).
- `servidor-ia/`: servidor opcional (Cloudflare Worker) que guarda la API key de OpenAI y hace las llamadas al modelo. Ver `servidor-ia/LEEME.md`.
- `resumen-proyecto-cuidado-inteligente-plantas.md`: resumen del proyecto.
- `Nombre y logo.jpeg`, `Paleta de colores.jpeg`: identidad visual.

## Versión publicada

- Página web (GitHub Pages): https://victolopezhernandez-rgb.github.io/Vetta/
- Artifact en claude.ai: https://claude.ai/artifact/Gb12CjCVxhUgHjr8vkuyxk

En la página web, el asistente y el reconocimiento por foto usan OpenAI (`gpt-5.6-luna`):
cada persona pega su API key en Ajustes → Inteligencia artificial y se guarda solo en su navegador.
