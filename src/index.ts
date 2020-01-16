import { useState, useCallback, ChangeEvent } from "react";

const useInput = (initialValue: <T>(args: any) => T, targetValue: string = 'value'): [any, (e: ChangeEvent<HTMLInputElement>) => void] => {
	const [state, setState] = useState(initialValue);
	const onChange = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
		setState(e.target[targetValue]);
	}, []);
	return [state, onChange];
}
export default useInput;