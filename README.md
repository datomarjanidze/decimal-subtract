## decimal-subtract

### Description

Workaround for JavaScript's decimal numbers subtraction problem.

### Usage example

```js
// Node.js
const { decimalSubtract } = require("decimal-subtract");
// Browser
import { decimalSubtract } from ('decimal-subtract');

console.log(1 - 0.55); // 0.44999999999999996
console.log(decimalSubtract(1, 0.55)); // 0.45
```
