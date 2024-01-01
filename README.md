### Installation

- win

```console
git clone https://github.com/shinich39/javascript-module-template.git && cd ./javascript-module-template && rm -r -Force .git
```

- osx

```console
git clone https://github.com/shinich39/javascript-module-template.git && cd ./javascript-module-template && rm -rf .git
```

```console
npm init
```

### Packaging

```js
// package.json
{
	// include module while "npm pack"
	"bundleDependencies": [
		"path",
		"moment"
	]
}
```

```console
npm pack
```

### Usage

```console
npm install my-module-1.0.0.tgz
```

```js
import myModule from 'my-module'; // AMD
const myModule = require('my-module'); // CommonJS
window.myModule; // Browser
```

```js
const { sum, test } = myModule;

sum(1, 2);
// 3

test(sum).exec(1, 2);

// function: sum
// arguments[0]: 1
// arguments[1]: 2
// result: 3 [0.00s]
```