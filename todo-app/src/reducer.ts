export const initialState: TodoState = {
	todos: [],
	filteredTodos: [],
	activeFilter: "all",
};

export const temp: () => void | undefined = () => {};

export const initializer = (initialValue: TodoState) => {
	const localTodo = JSON.parse(
		localStorage.getItem("localTodo") || JSON.stringify(initialState)
	);

	return localTodo || initialValue;
};

export const reducer = (state: TodoState, action: TodoAction): TodoState => {
	switch (action.type) {
		case "add":
			const newTodo = {
				id: crypto.randomUUID(),
				title: action.payload.title,
				completed: false,
			};

			const todos = [...state.todos, newTodo];

			return {
				...state,
				todos,
				activeFilter: "all",
				filteredTodos: todos,
			};
		case "toggleComplete":
			const todoId = action.payload.id;

			const todosUpdated = state.todos.map((todo) => {
				if (todo.id === todoId) {
					todo.completed = !todo.completed;
				}

				return todo;
			});

			return {
				...state,
				todos: todosUpdated,
			};
		case "filter":
			return {
				...state,
				activeFilter: action.payload.by,
			};

		default:
			throw new Error("Unknown action");
	}
};
