const url = Deno.env.get("AI_ENDPOINT");
const model = Deno.env.get("AI_MODEL");
if (!url || !model) {
  throw new Error("set AI_ENDPOINT and AI_MODEL");
}

const q = Deno.args[0];

const req = {
  model,
  messages: [{ role: "user", content: q }],
};
const json = await (await fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(req),
})).json();
//console.log(json);
console.log(json.choices[0].message.content);

/*
// streaming
const res = await fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(req),
});

const reader = res.body.getReader();
const decoder = new TextDecoder();

let buffer = "";

for (let i = 0;; i++) {
  const { value, done } = await reader.read();
  if (done) break;

  buffer += decoder.decode(value, { stream: true });

  // 受信した分をそのまま表示
  console.log(buffer);

  // 差分だけ表示したいならここで処理
}
*/
