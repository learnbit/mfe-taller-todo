import React from "react";
import { useTodo } from "../../context";

import styles from "./styles.module.css";

export default function List() {
	const { state, dispatch } = useTodo();

	const onCheckboxChange = (todoId: string) => {
		dispatch({ type: "toggleComplete", payload: { id: todoId } });
	};

	const filteredTodos = state.todos.filter((todo) => {
		if (state.activeFilter === "completed") {
			return todo.completed;
		}

		if (state.activeFilter === "active") {
			return !todo.completed;
		}

		return todo;
	});

	return (
		<ul data-testid="todo-list" className={styles.list}>
			{filteredTodos.map((todo) => (
				<li data-testid="todo-list-item" key={todo.id}>
					<input
						type="checkbox"
						onChange={() => onCheckboxChange(todo.id)}
						checked={todo.completed ?? false}
					/>
					<span>{todo.title}</span>
				</li>
			))}
		</ul>
	);
}
