import { askImage } from "./askImage.js";

const model = Deno.env.get("AI_MODEL");
const fn = Deno.args[0];

const bin = await Deno.readFile(fn);
const res = await askImage(bin, model);
console.log(res);
