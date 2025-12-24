import { useState } from "react";

function TodoInput({ addTodo }) {
	const [text, setText] = useState("");

	function handleAdd() {
		if (text.trim() === "") return;

		addTodo(text);
		setText("");
	}

	return (
		<div>
			<input
				type="text"
				value={text}
				onChange={(e) => setText(e.target.value)}
				placeholder="Введите задачу"
			/>
			<button onClick={handleAdd}>Добавить</button>
		</div>
	);
}

export default TodoInput;
