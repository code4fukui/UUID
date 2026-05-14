# UUID

UUIDを生成するためのシンプルなライブラリです。

## 特徴
- 利用可能な場合は `crypto.randomUUID()` を使用し、そうでない場合はランダム文字列ジェネレーターにフォールバックします
- 標準フォーマットでUUIDを生成します: `b9d3b3b4-7547-402a-ad57-0337e0e6ff36`

## 使い方
`UUID.create()` メソッドをインポートして使用します:

```js
import { UUID } from "https://code4fukui.github.io/UUID/UUID.js";
console.log(UUID.create());
```

## ライセンス
MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
