# ask

[Deno](https://deno.com/) を使用して [ollama](https://ollama.com/) API 経由で AI に質問します。

## セットアップ

[ollama](https://ollama.com/) と [Deno](https://deno.com/) をセットアップします。

```sh
ollama run gemma3:4b
```

## 機能
- ollama API に接続して質問する
- 応答をストリーミング出力として表示する
- 画像から生成する

## 必要条件
- [ollama](https://ollama.com/download) のインストール
- Deno

## 使い方

### 質問する
```sh
deno --env-file --allow-env --allow-net --allow-run ask.js "What is your name?"
```

#### モデルを変更する
```sh
export AI_HOST=http://localhost:11434
export AI_MODEL=qwen3.5:0.8b
deno --env-file --allow-env --allow-net ask.js "What is your name?"
```

### 画像から生成する
```sh
deno --env-file --allow-env --allow-net askimg.js test3.png
```

## インストール

### ask
```sh
deno install --global --allow-env --allow-net --allow-import --allow-run ask.js
```

### askimg
```sh
deno install --global --allow-env --allow-net --allow-import --allow-read -f askimg.js
```

## アンインストール
```sh
deno uninstall --global ask
deno uninstall --global askimg
```

## ライブラリ
- [ollama/ollama-js: Ollama JavaScript library](https://github.com/ollama/ollama-js)

## ライセンス
MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
