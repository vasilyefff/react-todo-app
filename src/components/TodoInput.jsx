import { useState } from "react";

function TodoInput({ addTodo }) {
	const [text, setText] = useState("");

	function handleAdd() {
		if (text.trim() === "") return;

		addTodo(text);
		setText("");
	}

	function handleKeyPress(e) {
		if (e.key === 'Enter') {
			handleAdd();
		}
	}

	return (
		<div className="todo-input-container">
			<input
				type="text"
				value={text}
				onChange={(e) => setText(e.target.value)}
				onKeyDown={handleKeyPress}
				placeholder="Введите задачу"
			/>
			<button onClick={handleAdd}>Добавить</button>
		</div>
	);
}

export default TodoInput;
