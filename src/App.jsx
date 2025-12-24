import { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFilters from "./components/TodoFilters";
import TodoStats from "./components/TodoStats";

function App() {
	const [todos, setTodos] = useState([]);

	function addTodo(text) {
		const newTodo = {
			id: Date.now(),
			text,
			completed: false,
		};

		setTodos((prev) => [newTodo, ...prev]);
	}

	function deleteItem(id) {
		setTodos((prev) => prev.filter((item) => item.id !== id));
	}

	function toggleItem(id) {
		setTodos(prev =>
			prev.map(todo =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		);
	}



	function clearCompleted() {
		setTodos(prev => prev.filter(item => !item.completed));
	}


	return (
		<div className="app">
			<h1>Todo App</h1>

			<TodoInput addTodo={addTodo} />
			<TodoFilters />
			<TodoList todos={todos} onDelete={deleteItem} onToggle={toggleItem} />
			<TodoStats todos={todos} onClear={clearCompleted} />
		</div>
	);
}

export default App;
