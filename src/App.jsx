import { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFilters from "./components/TodoFilters";
import TodoStats from "./components/TodoStats";

function App() {
	const [todos, setTodos] = useState([]);
	const [filter, setFilter] = useState("all");

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

	const editTodo = (id, newText) => {
		setTodos(todos.map(elem => {
			if (elem && elem.id === id) {
				return { ...elem, text: newText };
			}
			// elem.id === id ? { ...elem, text: newText } : elem
		}))
	}

	const filteredTodos = todos.filter(elem => {
		if (filter === "all") return true
		if (filter === "active") return !elem.completed
		if (filter === "completed") return elem.completed
	})

	return (
		<div className="app">
			<h1>Todo App</h1>

			<TodoInput addTodo={addTodo} />
			<TodoFilters />
			<TodoList todos={filteredTodos} onDelete={deleteItem} onToggle={toggleItem} onEdit={editTodo} />
			<TodoStats todos={todos} onClear={clearCompleted} />
		</div>
	);
}


export default App;

//Я ДОБАВИЛ ЭТОТ КОММЕНТАРИЙ ПРОСТО ЧТОБЫ ОТСЛЕДИТЬ РАБОТУ C GIT НА РАБОЧЕМ КОМПЕ