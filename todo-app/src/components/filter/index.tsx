import React from "react";
import { useTodo } from "../../context";

import styles from "./styles.module.css";

export default function Filter() {
	const { dispatch, state } = useTodo();

	const onButtonClicked = (filterBy: TodoFilterBy) => {
		dispatch({ type: "filter", payload: { by: filterBy } });
	};

	if (state.todos.length === 0) {
		return <span>No items found</span>;
	}

	const isSelected = (current: TodoFilterBy) => current === state.activeFilter;

	return (
		<div className={styles.container}>
			<button
				className={isSelected("all") ? styles.selected : ""}
				onClick={() => onButtonClicked("all")}
			>
				All
			</button>
			<button
				className={isSelected("active") ? styles.selected : ""}
				onClick={() => onButtonClicked("active")}
			>
				Active
			</button>
			<button
				className={isSelected("completed") ? styles.selected : ""}
				onClick={() => onButtonClicked("completed")}
			>
				Completed
			</button>
		</div>
	);
}
