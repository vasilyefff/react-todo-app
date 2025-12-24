function TodoList({ todos, onDelete, onToggle }) {
	return (
		<div>
			<h3>Список задач</h3>
			<ul>
				{todos.map(todo => (
					<li key={todo.id}>
						<input
							type="checkbox"
							checked={todo.completed}
							onChange={() => onToggle(todo.id)}
						/>
						{todo.text}
						<button onClick={() => onDelete(todo.id)}>🗑️</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default TodoList;
