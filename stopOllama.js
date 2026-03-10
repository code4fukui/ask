import { run } from "./run.js";

export const stopOllama = async (model = "gemma3:4b") => {
  await run("ollama", ["stop", model]);
};
