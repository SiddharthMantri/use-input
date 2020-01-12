import { useState, useCallback } from "react";

const useInput = (initialValue: any, targetValue: string = 'value'): [any, any] => {
	const [state, setState] = useState(initialValue);
	const onChange = useCallback((e): void => {
		setState(e.target[targetValue]);
	}, []);
	return [state, onChange];
}
export default useInput;