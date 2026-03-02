import { showChat } from "./showChat.js";

const model = Deno.env.get("AI_MODEL");

const q = Deno.args[0];

await showChat(q, model);
