import { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFilters from "./components/TodoFilters";
import TodoStats from "./components/TodoStats";

function App() {
	const [todos, setTodos] = useState([]);
	const [filter, setFilter] = useState('all');

	function addTodo(text) {
		// Проверка на пустой текст перед добавлением
		if (!text.trim()) {
			return;
		}

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

	function editTodo(id, newText) {
		setTodos(prev =>
			prev.map(todo =>
				todo.id === id ? { ...todo, text: newText } : todo
			)
		);
	}

	function clearCompleted() {
		setTodos(prev => prev.filter(item => !item.completed));
	}

	const filteredTodos = todos.filter(todo => {
		if (filter === 'all') return true;
		if (filter === 'active') return !todo.completed;
		if (filter === 'completed') return todo.completed;
		return true;
	});

	return (
		<div className="app">
			<h1>Todo App</h1>

			<TodoInput addTodo={addTodo} />
			<TodoFilters onFilterChange={setFilter} currentFilter={filter} />
			<TodoList todos={filteredTodos} onDelete={deleteItem} onToggle={toggleItem} onEdit={editTodo} />
			<TodoStats todos={todos} onClear={clearCompleted} />
		</div>
	);
}


export default App;

//Данный проект написан через QWEN Code