# ask

ask to AI by ollama API with [ollama](https://ollama.com/) and [Deno](https://deno.com/).

## Setup

setup [ollama](https://ollama.com/download)

```sh
ollama run gemma3:4b
```

## Usage

### ask

```sh
deno --env-file --allow-env --allow-net --allow-run ask.js あなたの名前は？
```

#### ask with qwen3.5:0.8b

```sh
export AI_HOST=http://localhost:11434
export AI_MODEL=qwen3.5:0.8b
deno --env-file --allow-env --allow-net ask.js あなたの名前は？
```

```sh
export AI_HOST=http://localhost:1134
export AI_MODEL=qwen3.5:0.8b
deno --env-file --allow-env --allow-net ask_nostream.js あなたの名前は？
```

### askimg

```sh
deno --env-file --allow-env --allow-net askimg.js test3.png
```

## Install

### ask

```sh
deno install --global --allow-env --allow-net --allow-import --allow-run ask.js
```

### askimg

```sh
deno install --global --allow-env --allow-net --allow-import --allow-read -f askimg.js
```

## Uninstall

```sh
deno uninstall --global ask
deno uninstall --global askimg
```

## Library

- [ollama/ollama-js: Ollama JavaScript library](https://github.com/ollama/ollama-js)
