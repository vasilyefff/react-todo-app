import { useState } from "react";
import styles from './TodoInput.module.css';

export default function TodoInput({ onAdd }) {
	const [text, setText] = useState("");
	const [hasError, setHasError] = useState(false);//состояние ошибки для проверки на добавление пустой задачи

	function handleAdd() {
		if (text.trim() === "") {
			setHasError(true);
			return;
		}

		onAdd(text);
		setText("");
		setHasError(false);
	}

	return (
		<div className={styles.container}>
			<div className={styles.inputContainer}>
				<input
					type="text"
					placeholder="Что нужно сделать?"
					value={text}
					onChange={(e) => setText(e.target.value)}
					onKeyDown={(e) => { if (e.key === "Enter") handleAdd() }}
					className={styles.input}
				/>
				<button onClick={handleAdd} className={styles.button}>Добавить</button>
			</div>

			{hasError && (
				<p className={styles.error}>
					Пожалуйста, введите задачу
				</p>
			)}

		</div>
	);
}
