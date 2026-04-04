import { stopOllama } from "./stopOllama.js";

export const HOST_OLLAMA = "http://localhost:11434";
export const HOST_TRANSFORMER = "http://localhost:8000";

export const chat = async (prompt, model = "gemma3:4b", host = HOST_OLLAMA, stopollama = true) => {
  const res = await fetch(`${host}/api/generate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model,
      prompt,
      stream: false,
      options: { num_ctx: 8192 },
    }),
  });
  const json = await res.json();
  if (stopollama) {
    await stopOllama(model);
  }
  return json.response ?? "";
};
