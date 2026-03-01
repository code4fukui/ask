import { showChatStreaming } from "./showChatStreaming.js";

const model = Deno.env.get("AI_MODEL");

const q = Deno.args[0];

await showChatStreaming(q, model);
