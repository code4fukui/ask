import { chat } from "./chat.js";

const q = Deno.args[0];
const res = await chat(q);
console.log(res);
