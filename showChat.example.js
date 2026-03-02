import { showChat } from "./showChat.js";

const q = Deno.args[0];
await showChat(q);
