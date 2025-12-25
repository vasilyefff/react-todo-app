import { useState } from "react";

function TodoItem({ todo, onDelete, onToggle, onEdit }) {
	const [isEditing, setIsEditing] = useState(false);
	const [editText, setEditText] = useState(todo.text);

	function handleSave() {
		if (editText.trim() === "") return;

		onEdit(todo.id, editText);
		setIsEditing(false);
	}

	function handleCancel() {
		setEditText(todo.text);
		setIsEditing(false);
	}

	return (
		<li className={`todo-item ${todo.completed ? 'completed' : ''}`} key={todo.id}>
			{isEditing ? (
				<div className="edit-form">
					<input
						type="text"
						value={editText}
						onChange={(e) => setEditText(e.target.value)}
						onKeyDown={(e) => {
							if (e.key === 'Enter') handleSave();
							if (e.key === 'Escape') handleCancel();
						}}
						autoFocus
					/>
					<button onClick={handleSave}>Сохранить</button>
					<button onClick={handleCancel}>Отмена</button>
				</div>
			) : (
				<>
					<input
						type="checkbox"
						checked={todo.completed}
						onChange={() => onToggle(todo.id)}
					/>
					<span className="todo-text">{todo.text}</span>
					<div className="todo-actions">
						<button onClick={() => setIsEditing(true)}>Редактировать</button>
						<button onClick={() => onDelete(todo.id)}>🗑️</button>
					</div>
				</>
			)}
		</li>
	);
}

export default TodoItem;