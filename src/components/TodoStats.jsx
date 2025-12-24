function TodoStats({ todos, onClear }) {
	const total = todos.length
	const active = todos.filter(item => !item.completed).length
	const completed = todos.filter(item => item.completed).length



	return (
		<div>
			<span>Все:{total}</span>
			<span>Активные:{active}</span>
			<span>Завершённые:{completed}</span>
			<button onClick={onClear}>Очистить выполненные</button>
		</div>
	);
}

export default TodoStats;
