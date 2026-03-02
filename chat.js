const OLLAMA = "http://localhost:11434";

export const chat = async (prompt, model = "gemma3:4b") => {
  const res = await fetch(`${OLLAMA}/api/generate`, {
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
  return json.response ?? "";
};
