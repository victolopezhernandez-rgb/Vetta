// Servidor de IA de Vetta (Cloudflare Worker).
// Recibe la conversación desde la app, le agrega la API key y llama a OpenAI.
// La API key NUNCA se escribe en este archivo: se guarda como secreto con
//   npx wrangler secret put OPENAI_API_KEY

const OPENAI_URL = "https://api.openai.com/v1/chat/completions";
const MAX_MSGS = 30, MAX_CHARS = 40000, MAX_IMG = 2_000_000;

export default {
  async fetch(req, env) {
    const origin = req.headers.get("Origin") || "";
    const allowed = (env.ALLOWED_ORIGINS || "").split(",").map(s => s.trim()).filter(Boolean);
    const okOrigin = !allowed.length || allowed.includes(origin);
    const cors = {
      "Access-Control-Allow-Origin": allowed.length ? (okOrigin ? origin : "null") : "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Vary": "Origin",
    };
    const out = (status, body) => new Response(JSON.stringify(body), { status, headers: { ...cors, "Content-Type": "application/json" } });

    if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });
    if (req.method === "GET") return out(200, { ok: true, model: env.MODEL, key: !!env.OPENAI_API_KEY });
    if (req.method !== "POST") return out(405, { code: "method" });
    if (!okOrigin) return out(403, { code: "origin", error: "Origen no permitido." });
    if (!env.OPENAI_API_KEY) return out(500, { code: "no_key", error: "Falta la API key en el servidor." });

    let body;
    try { body = await req.json(); } catch { return out(400, { code: "bad_request" }); }

    // Solo se aceptan mensajes de texto de user/assistant, con límites de tamaño
    const msgs = Array.isArray(body.messages) ? body.messages.slice(-MAX_MSGS) : [];
    const messages = msgs
      .filter(m => m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
      .map(m => ({ role: m.role, content: m.content }));
    if (!messages.length || messages[messages.length - 1].role !== "user") return out(400, { code: "bad_request" });
    if (messages.reduce((n, m) => n + m.content.length, 0) > MAX_CHARS) return out(413, { code: "prompt_too_large" });

    // Fotos (opcional): se adjuntan al último mensaje de la persona
    const images = (Array.isArray(body.images) ? body.images : []).slice(0, 1)
      .filter(u => typeof u === "string" && /^data:image\/(jpeg|png|webp);base64,/.test(u));
    if (images.some(u => u.length > MAX_IMG)) return out(413, { code: "image_rejected" });
    if (images.length) {
      const last = messages[messages.length - 1];
      last.content = [{ type: "text", text: last.content }, ...images.map(url => ({ type: "image_url", image_url: { url } }))];
    }

    const payload = { model: env.MODEL || "gpt-5.6-luna", messages, max_completion_tokens: +env.MAX_TOKENS || 2000 };
    if (body.json) payload.response_format = { type: "json_object" };

    let r, d;
    try {
      r = await fetch(OPENAI_URL, {
        method: "POST",
        headers: { "Authorization": `Bearer ${env.OPENAI_API_KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      d = await r.json().catch(() => ({}));
    } catch {
      return out(502, { code: "upstream", error: "No se pudo contactar a OpenAI." });
    }
    if (!r.ok) {
      const code = r.status === 429 ? "rate_limited" : r.status === 401 ? "bad_key" : r.status === 404 ? "bad_model" : images.length && r.status === 400 ? "image_rejected" : "upstream";
      return out(r.status === 429 ? 429 : 502, { code, error: String(d?.error?.message || "").slice(0, 300) });
    }
    const c = d.choices?.[0];
    return out(200, { text: c?.message?.content || "", truncated: c?.finish_reason === "length" });
  },
};
