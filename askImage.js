import { Base64 } from "https://code4fukui.github.io/Base64/Base64.js";

export const askImage = async (img, prompt, model = "gemma3:4b") => {
  const b64 = Base64.encode(img);

  const body = {
    model,
    stream: false,
    format: "json",
    prompt,
    images: [b64],
  };

  const res = await fetch("http://localhost:11434/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (res.status != 200) throw new Error(res);
  const json = await res.json();
  return JSON.parse(json.response); //.keywords;
};
