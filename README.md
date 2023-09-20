### Installation

```console
git clone https://github.com/shinich39/javascript-module-template.git && cd javascript-module-template && npm install && npm run unlink && && npm uninstall mkdirp rimraf
```

### Packaging

```js
// package.json
{
	// change module name
	"name": "my-module"
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

### Install

- In node project directory.
```console
npm install my-module-1.0.0.tgz
```

```js
import myModule from 'my-module';

// or

const myModule = require('my-module');
```

### Usage

```
const { sum, test } = myModule;

sum(1, 2);
// 3

test(sum).exec(1, 2);

// function: sum
// arguments[0]: 1
// arguments[1]: 2
// result: 3 [0.00s]
```