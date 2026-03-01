import { Base64 } from "https://code4fukui.github.io/Base64/Base64.js";

export const askImage = async (jpeg, model = "gemma3:4b") => {
  const b64 = Base64.encode(jpeg);

  const body = {
    model,
    stream: false,
    format: "json",
    prompt: [
      "この画像に写っているものを、日本語のキーワードと、写っている人数、動物の数だけで返してください。",
      "出力は必ず JSON で、次の形式にしてください：",
      '{ "keywords": ["...","...","..."] }, "human_count": n, "animal_count": m ',
      "keywords は重複なし、できれば 5〜12 個。固有名詞より一般名詞を優先。"
    ].join("\n"),
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
