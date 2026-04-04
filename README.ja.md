# ask

[ollama](https://ollama.com/) と [Deno](https://deno.com/) を使ってAIに質問できるツールです。

## 機能
- ollama APIに接続して質問できる
- 質問の結果をストリーミングで表示
- 画像生成も可能

## 必要環境
- [ollama](https://ollama.com/download) のインストール
- Deno

## 使い方

### 質問の実行
```sh
deno --env-file --allow-env --allow-net --allow-run ask.js "あなたの名前は?"
```

#### モデルの切り替え
```sh
export AI_HOST=http://localhost:11434
export AI_MODEL=qwen3.5:0.8b
deno --env-file --allow-env --allow-net ask.js "あなたの名前は?"
```

### 画像生成
```sh
deno --env-file --allow-env --allow-net askimg.js test3.png
```

## ライセンス
MIT