## Decimal Subtract v1.3.1 documentation

<p align="center">
  <a href="https://www.npmjs.com/package/decimal-subtract" target="_blank"><img src="https://img.shields.io/npm/v/decimal-subtract.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/package/decimal-subtract" target="_blank"><img src="https://img.shields.io/npm/l/decimal-subtract.svg" alt="Package License" /></a>
  <a href="https://www.npmjs.com/package/decimal-subtract" target="_blank"><img src="https://img.shields.io/npm/dm/decimal-subtract.svg" alt="NPM Downloads" /></a>
</p>

### Table of contents

- [Description](#Description)
- [Installation](#Installation)
- [Usage example](#Usage-example)

### Description

Workaround for JavaScript's decimal numbers subtraction problem.

### Installation

For the usage in CJS or ESM run the following command:

```console
npm i decimal-subtract
```

For script tag usage include the following script:

```html
<!DOCTYPE html>
<html>
  <body>
    <script src="https://cdn.jsdelivr.net/npm/decimal-subtract@1.3.1/dist/decimal-subtract.min.js"></script>
  </body>
</html>
```

### Usage example

ESM:

```ts
import { decimalSubtract } from 'decimal-subtract'

console.log(1 - 0.55) // 0.44999999999999996
console.log(decimalSubtract(1, 0.55)) // 0.45
```

CJS:

```ts
const { decimalSubtract } = require('decimal-subtract')

console.log(1 - 0.55) // 0.44999999999999996
console.log(decimalSubtract(1, 0.55)) // 0.45
```

Classic:

```ts
console.log(1 - 0.55) // 0.44999999999999996
console.log(window.decimalSubtract.decimalSubtract(1, 0.55)) // 0.45
```
