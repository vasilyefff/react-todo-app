import TodoItem from "./TodoItem";
import styles from './TodoList.module.css';

export default function TodoList({ todos, filteredTodos, filter, onToggle, onDelete, onUpdate }) {

	if (todos.length === 0) {
		return <p className={styles.emptyMessage}>Список задач пуст. Добавьте первую задачу!</p>
	}

	if (filteredTodos.length === 0 && filter === "completed") {
		return <p className={styles.emptyMessage}>Нет завершённых задач</p>;
	}

	return (
		<div className={styles.container}>
			{filteredTodos.map((todo) => (
				<TodoItem
					key={todo.id}
					todo={todo}
					onToggle={onToggle}
					onDelete={onDelete}
					onUpdate={onUpdate}
				/>
			))}
		</div>
	);
}
