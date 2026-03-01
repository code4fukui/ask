import ollama from "npm:ollama";

const model = Deno.env.get("AI_MODEL");
if (!model) {
  throw new Error("set AI_MODEL");
}

const q = Deno.args[0];

const stream = await ollama.chat({
  model,
  messages: [{ role: "user", content: q }],
  stream: true,
})

let inThinking = false
let content = ""
let thinking = ""

for await (const chunk of stream) {
  if (chunk.message.thinking) {
    if (!inThinking) {
      inThinking = true
      process.stdout.write("Thinking:\n")
    }
    process.stdout.write(chunk.message.thinking)
    // accumulate the partial thinking
    thinking += chunk.message.thinking
  } else if (chunk.message.content) {
    if (inThinking) {
      inThinking = false
      process.stdout.write("\n\nAnswer:\n")
    }
    process.stdout.write(chunk.message.content)
    // accumulate the partial content
    content += chunk.message.content
  }
}
