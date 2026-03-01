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
deno --env-file --allow-env --allow-net ask.js あなたの名前は？
```

### askimg

```sh
deno --env-file --allow-env --allow-net askimg.js test3.png
```

### addembed

```sh
deno --env-file --allow-env --allow-net addembed.js data.txt
```

## Install

### ask

```sh
export AI_ENDPOINT=http://localhost:11434/v1/chat/completions
export AI_MODEL=gemma3:4b
deno install --global --allow-env --allow-net -f ask.js
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
