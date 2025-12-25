import { useState } from "react";


function TodoItem({ elem, onDelete, onToggle, onEdit }) {

	const [editText, setEditText] = useState(elem.text);
	const [isEditing, setIsEditing] = useState(false)

	const handleSave = () => {
		if (editText.trim() === "") {
			alert("Задача не может быть пустой!")
			return
		}
		onEdit(elem.id, editText)
		setIsEditing(false)
	}

	const handleCancel = () => {
		setEditText(elem.text)
		setIsEditing(false)
	}

	if (isEditing) {
		return (
			<div>
				<input type="text" value={editText} onChange={(e) => { setEditText(e.target.value) }} />
				<button onClick={handleSave}>✅</button>
				<button onClick={handleCancel}>❌</button>
			</div>
		)
	}

	return (
		<div>
			<input
				type="checkbox"
				checked={elem.completed}
				onChange={() => onToggle(elem.id)}
			/>
			<span>{elem.text}</span>
			<button onClick={() => setIsEditing(true)}>📝</button>
			<button onClick={() => onDelete(elem.id)}>🗑️</button>
		</div>
	);
}

export default TodoItem;
