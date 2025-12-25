import TodoItem from "./TodoItem";

function TodoList({ todos, onDelete, onToggle, onEdit }) {
	return (
		<div>
			{todos.map(elem => (
				<TodoItem key={elem.id} elem={elem} onDelete={onDelete} onToggle={onToggle} onEdit={onEdit} />
			))}
		</div>
	);
}

export default TodoList;
