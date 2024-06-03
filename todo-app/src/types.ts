type TodoFilterBy = "all" | "active" | "completed";

type TodoState = {
	todos: Todo[];
	filteredTodos: Todo[];
	activeFilter: TodoFilterBy;
};

type TodoAction =
	| { type: "add"; payload: { title: string } }
	| { type: "toggleComplete"; payload: { id: string } }
	| { type: "filter"; payload: { by: TodoFilterBy } };

type Todo = {
	id: string;
	title?: string;
	completed?: boolean;
};

type ContextType = {
	state: TodoState;
	dispatch: React.Dispatch<TodoAction>;
};
