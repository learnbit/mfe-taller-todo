import React from "react";
import Input from "../input";
import List from "../list";
import Filter from "../filter";

import styles from "./styles.module.css";

import { TodoProvider } from "../../context";

export default function Todo() {
	return (
		<TodoProvider>
			<div className={styles.container}>
				<h3>Todo App</h3>
				<Input />
				<List />
				<Filter />
			</div>
		</TodoProvider>
	);
}
