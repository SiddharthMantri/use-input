# use-input

> Stateful hook for controlled input components

[![NPM](https://img.shields.io/npm/v/use-input.svg)](https://www.npmjs.com/package/use-input-hook) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

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
	const [textAreaValue, onTextAreaChange] = useInput("");
	const [checkBoxValue, onCheckboxChange] = useInput(false, 'checked');
	return (
		<>
			<div>
				Input: <input type='text' value={inputValue} onChange={onInputChange} />
			</div>
			<div>
				Textarea: <textarea value={textAreaValue} onChange={onTextAreaChange} />
			</div>
			<div>
				Checkbox: <input type="checkbox" value={checkBoxValue} onChange={onCheckboxChange} />
			</div>
		</>
	)
}
```

## License

MIT © [SiddharthMantri](https://github.com/SiddharthMantri)
