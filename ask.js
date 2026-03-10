import { showChat } from "./showChat.js";

const model = Deno.env.get("AI_MODEL");
const host = Deno.env.get("AI_HOST");

const q = Deno.args[0];

await showChat(q, model, host);
