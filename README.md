# UUID

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A simple library for generating UUIDs.

## Features
- Uses `crypto.randomUUID()` if available, otherwise falls back to a random string generator
- Generates UUIDs in the standard format: `b9d3b3b4-7547-402a-ad57-0337e0e6ff36`

## Usage
Import and use the `UUID.create()` method:

```js
import { UUID } from "https://code4fukui.github.io/UUID/UUID.js";
console.log(UUID.create());
```

## License
This project is licensed under the MIT License.