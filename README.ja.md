# UUID

このJavaScriptライブラリはUUIDを簡単に生成するためのものです。`crypto.randomUUID()`が使える環境では、セキュアなUUIDを生成し、利用できないときはランダムな文字列を生成します。

## 機能
- `crypto.randomUUID()`を使用したセキュアなUUID生成
- `Math.random()`を使用した疑似乱数によるUUID生成

## 使い方
UUIDライブラリをインポートし、`UUID.create()`メソッドを呼び出すことでUUIDを生成できます。

```js
import { UUID } from "https://code4fukui.github.io/UUID/UUID.js";
console.log(UUID.create());
```

## ライセンス
このプロジェクトはMITライセンスの下で提供されています。