# use-input

> Stateful hook for input components

[![NPM](https://img.shields.io/npm/v/use-input.svg)](https://www.npmjs.com/package/use-input) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-input-hook
```

## Usage

```tsx
import * as React from 'react'

import useInput from 'use-input-hook';

const App = () => {
	const [inputValue, onInputChange] = useInput("");
	return (
    <input type='text' value={inputValue} onChange={onInputChange} />
	)
}
```

## License

MIT © [SiddharthMantri](https://github.com/SiddharthMantri)
