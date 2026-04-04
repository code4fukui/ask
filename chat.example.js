import { chat } from "./chat.js";

const q = Deno.args[0];
const model = Deno.args[1] || "gemma3:4b";

const res = await chat(q, model);
console.log(res);
