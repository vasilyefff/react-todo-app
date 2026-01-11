import { useState } from "react"
import styles from './TodoItem.module.css';

export default function TodoItem({ todo, onToggle, onDelete, onUpdate }) {

	const [isEditing, setIsEditing] = useState(false)
	const [editText, setEditText] = useState(todo.title);
	const [isDeleting, setIsDeleting] = useState(false);


	function handleSave() {
		const trimmed = editText.trim();
		if (trimmed === "") return;

		onUpdate(todo.id, trimmed);
		setIsEditing(false);
	}

	function handleCancel() {
		setEditText(todo.title);
		setIsEditing(false);
	}

	function handleDelete() {
		setIsDeleting(true);
		setTimeout(() => {
			onDelete(todo.id);
		}, 400);
	}

	return (
		<div className={`${styles.item} ${todo.completed ? styles.completed : ''} ${isDeleting ? styles.deleting : ''}`}>
			<input
				type="checkbox"
				checked={todo.completed}
				onChange={() => onToggle(todo.id)}
				className={styles.checkbox}
			/>

			{isEditing ? (
				<input
					value={editText}
					onChange={(e) => setEditText(e.target.value)}
					className={styles.editInput}
					autoFocus
					onKeyDown={(e) => {
						if (e.key === "Enter") handleSave();
						if (e.key === "Escape") handleCancel();
					}}
				/>
			) : (
				<span className={`${styles.text} ${todo.completed ? styles.completed : ''}`}>
					<span className={styles.textContent}>{todo.title}</span>
				</span>
			)}

			<div className={styles.buttonGroup}>
				{isEditing ? (
					<>
						<button onClick={handleSave} className={`${styles.button} ${styles.save}`}>💾</button>
						<button onClick={handleCancel} className={`${styles.button} ${styles.cancel}`}>❌</button>
					</>
				) : (
					<>
						<button onClick={() => setIsEditing(true)} className={styles.button}>✏️</button>
						<button onClick={handleDelete} className={styles.button}>🗑️</button>
					</>
				)}
			</div>
		</div>
	);
}
