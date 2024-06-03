import React, { useRef } from "react";
import { useTodo } from "../../context";

import styles from "./styles.module.css";

export default function Input() {
	const { dispatch } = useTodo();
	const inputRef = useRef<HTMLInputElement>(null);

	const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
		const value = inputRef?.current?.value;

		if (e.key === "Enter") {
			if (value) {
				dispatch({ type: "add", payload: { title: value } });
				inputRef.current.value = "";
			}
		}
	};

	return (
		<input
			data-testid="textbox"
			className={styles.textbox}
			ref={inputRef}
			type="text"
			placeholder="What needs to accomplish?"
			onKeyDown={onKeyDown}
		/>
	);
}
