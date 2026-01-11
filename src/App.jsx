import { useEffect, useState } from "react";
import TodoInput from './components/TodoInput';
import TodoList from "./components/TodoList";
import TodoFilters from "./components/TodoFilters";
import TodoStats from "./components/TodoStats";
import styles from './App.module.css';



export default function App() {

	const [todos, setTodos] = useState([]);
	const [filter, setFilter] = useState("all"); //state фильтрации задач
	const [isLoaded, setIsLoaded] = useState(false);

	//Загрузка задач из localStorage
	useEffect(() => {
		const savedTodos = localStorage.getItem("todos")
		if (savedTodos) {
			setTodos(JSON.parse(savedTodos))
		}
		setIsLoaded(true)
	}, []);

	//Сохранение задач в localStorage
	useEffect(() => {
		if (!isLoaded) return;
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos, isLoaded]);


	const filteredTodos = todos.filter((todo) => {
		if (filter === "active") {
			return !todo.completed;
		}
		if (filter === "completed") {
			return todo.completed;
		}
		return true;
	});

	//Переменные статистики задач
	const totalCount = todos.length
	const completedCount = todos.filter(todo => todo.completed).length
	const activeCount = totalCount - completedCount

	//Функция добавления новых задач
	function addTodo(title) {
		const trimmed = title.trim();
		if (trimmed === "") return;

		const newTodo = {
			id: Date.now(),
			title: trimmed,
			completed: false,
		};

	setTodos((prev) => [newTodo, ...prev]);
	}

	function toggleTodo(id) {
		setTodos((prevTodos) =>
			prevTodos.map((todo) =>
				todo.id === id
					? { ...todo, completed: !todo.completed }
					: todo
			)
		);
	}

	function deleteTodo(id) {
		setTodos((prevTodos) =>
			prevTodos.filter((todo) => todo.id !== id)
		);
	}

	function updateTodo(id, newTitle) {
		setTodos(prevTodos =>
			prevTodos.map(todo =>
				todo.id === id
					? { ...todo, title: newTitle }
					: todo
			)
		);
	}

	function clearCompleted() {
		setTodos(prevTodos =>
			prevTodos.filter(todo => !todo.completed)
		);
	}


	return (
		<div className={styles.app}>
			<div className={styles.container}>
				<h1 className={styles.title}>Список дел</h1>
				<TodoInput onAdd={addTodo} />
				<TodoFilters filter={filter} setFilter={setFilter} />
				<TodoList todos={todos} filteredTodos={filteredTodos} filter={filter} onToggle={toggleTodo} onDelete={deleteTodo} onUpdate={updateTodo} />
				<TodoStats total={totalCount} active={activeCount} completed={completedCount} onClear={clearCompleted} />
			</div>
		</div>
	);
}
