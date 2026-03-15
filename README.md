# ask

Ask to AI by [ollama](https://ollama.com/) API using [Deno](https://deno.com/).

## Features
- Connect to the ollama API to ask questions
- Display the response as a streaming output
- Generate images

## Requirements
- [ollama](https://ollama.com/download) installation
- Deno

## Usage

### Ask a question
```sh
deno --env-file --allow-env --allow-net --allow-run ask.js "What is your name?"
```

#### Change the model
```sh
export AI_HOST=http://localhost:11434
export AI_MODEL=qwen3.5:0.8b
deno --env-file --allow-env --allow-net ask.js "What is your name?"
```

### Generate an image
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