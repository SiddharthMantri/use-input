import { useState, useCallback, ChangeEvent } from "react";

const useInput = <T>(initialValue: T | (() => T), targetValue: string = 'value'): [T, (e: ChangeEvent<HTMLInputElement>) => void] => {
	const [state, setState] = useState(initialValue);
	const onChange = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
		setState(e.target[targetValue]);
	}, []);
	return [state, onChange];
}
export default useInput;