import React, { Fragment } from 'react';
import useInput from 'use-input';

const App = () => {
	const [inputValue, onInputChange] = useInput("");
	const [checked, onCheckedChange] = useInput(true, 'checked');
	return (
		<Fragment>
			<div>
				<span>
					<input type='text' value={inputValue} onChange={onInputChange} />
				</span>
				<span>
					Value in input: {inputValue}
				</span>
			</div>
			<div>
				<span>
					<input type='checkbox' value={checked} checked={checked} onChange={onCheckedChange} />
				</span>
				<span>
					Checked: {JSON.stringify(checked)}
				</span>
			</div>
		</Fragment>

	)
}

export default App;