import { Base64 } from "https://code4fukui.github.io/Base64/Base64.js";

export const askAudio = async (audio, prompt, model = "gemma3:4b") => {
  const b64 = Base64.encode(audio);

  const body = {
    model,
    stream: false,
    format: "json",
    prompt,
    audios: [b64], // NG
  };

  const res = await fetch("http://localhost:11434/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (res.status != 200) {
    console.log(res);
    throw new Error(res);
  }
  const json = await res.json();
  try {
    return JSON.parse(json.response);
  } catch (e) {
    return json.response;
  }
};
