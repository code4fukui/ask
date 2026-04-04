import { showChat } from "./showChat.js";

const q = Deno.args[0];
const model = Deno.args[1] || "gemma3:4b";

await showChat(q, model);
