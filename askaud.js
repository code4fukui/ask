import { askAudio } from "./askAudio.js";

const model = Deno.env.get("AI_MODEL") || "gemma4:e2b";
const fn = Deno.args[0];
const prompt = Deno.args[1] || "この音声を文字起こししてください。説明は不要で、文字起こし結果だけを返してください。";

if (!fn) {
  console.error("usage: deno --allow-env --allow-read --allow-write --allow-run askaud.js <audio-file> [prompt]");
  Deno.exit(1);
}

const suffix = fn.includes(".") ? `.${fn.split(".").pop()}` : ".wav";
const bin = await Deno.readFile(fn);
const res = await askAudio(bin, prompt, model, suffix);
console.log(res);
