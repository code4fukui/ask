//import ollama from "npm:ollama";
import { Ollama } from "npm:ollama";
import { stopOllama } from "./stopOllama.js";

export const showChat = async (q, model = "gemma3:4b", host = "http://127.0.0.1:11434", stopollama = true) => {
  const ollama = new Ollama({ host });
  const stream = await ollama.chat({
    model,
    messages: [{ role: "user", content: q }],
    stream: true,
  });

  let inThinking = false;
  let content = "";
  let thinking = "";

  for await (const chunk of stream) {
    if (chunk.message.thinking) {
      if (!inThinking) {
        inThinking = true;
        process.stdout.write("Thinking:\n");
      }
      process.stdout.write(chunk.message.thinking);
      // accumulate the partial thinking
      thinking += chunk.message.thinking;
    } else if (chunk.message.content) {
      if (inThinking) {
        inThinking = false;
        process.stdout.write("\n\nAnswer:\n");
      }
      process.stdout.write(chunk.message.content);
      // accumulate the partial content
      content += chunk.message.content;
    }
  }
  if (stopollama) {
    await stopOllama(model);
  }
};
