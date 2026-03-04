import { askImage } from "./askImage.js";

const model = Deno.env.get("AI_MODEL");
const fn = Deno.args[0];

const prompt = `この画像に写っているものを、日本語のキーワードと、写っている人数、動物の数だけで返してください。
出力は必ず JSON で、次の形式にしてください：
{ "keywords": ["...","...","..."] }, "human_count": n, "animal_count": m }
"keywords は重複なし、できれば 5〜12 個。固有名詞より一般名詞を優先。`

const bin = await Deno.readFile(fn);
const res = await askImage(bin, prompt, model);
console.log(res);
