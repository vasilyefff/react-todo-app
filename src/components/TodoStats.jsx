function TodoStats({ todos, onClear }) {
	const total = todos.length
	const active = todos.filter(item => !item.completed).length
	const completed = todos.filter(item => item.completed).length

	const hasCompleted = completed > 0;


	return (
		<div className="todo-stats">
			<span>Все: {total}</span>
			<span>Активные: {active}</span>
			<span>Завершённые: {completed}</span>
			{hasCompleted && (
				<button onClick={onClear}>Очистить выполненные</button>
			)}
		</div>
	);
}

export default TodoStats;
