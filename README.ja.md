# UUID

UUIDを簡単に生成することができるJavaScriptのライブラリです。`crypto.randomUUID()`または`Math.random()`を使って一意のUUIDを生成します。

## 機能
- `crypto.randomUUID()`を使ったセキュアなUUID生成
- `Math.random()`を使った擬似乱数によるUUID生成

## 使い方
UUIDライブラリをインポートし、`UUID.create()`メソッドを呼び出すことで、UUIDを生成できます。

```js
import { UUID } from "https://code4fukui.github.io/UUID/UUID.js";
console.log(UUID.create());
```

## ライセンス
このプロジェクトはMITライセンスの下で提供されています。