import TodoItem from './TodoItem';

function TodoList({ todos, onDelete, onToggle, onEdit }) {
	return (
		<div>
			<h3>Список задач</h3>
			<ul>
				{todos.map(todo => (
					<TodoItem
						key={todo.id}
						todo={todo}
						onDelete={onDelete}
						onToggle={onToggle}
						onEdit={onEdit}
					/>
				))}
			</ul>
		</div>
	);
}

export default TodoList;
