import React, {
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useReducer,
} from "react";
import { initializer, initialState, reducer } from "./reducer";

const TodoContext = createContext<ContextType | undefined>(undefined);

const TodoProvider = ({ children }: { children: ReactNode }) => {
	const [state, dispatch] = useReducer(reducer, initialState, initializer);

	useEffect(() => {
		const newState = JSON.stringify(state);
		localStorage.setItem("localTodo", newState);
	}, [state]);

	return (
		<TodoContext.Provider value={{ state, dispatch }}>
			{children}
		</TodoContext.Provider>
	);
};

const useTodo = () => {
	const context = useContext(TodoContext);

	if (!context) {
		throw new Error("useTodo must be used within a TodoProvider");
	}

	return context;
};

export { TodoContext, TodoProvider, useTodo };
