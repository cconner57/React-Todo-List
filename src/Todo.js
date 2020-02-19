import React from 'react';

function Todo({ todo, index, removeTodo, completeTodo }) {
	return (
		<div className="list">
			<p style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>{todo.text}</p>
			<button onClick={() => removeTodo(index)}>X</button>
			<button onClick={() => completeTodo(index)}>✓</button>
		</div>
	);
}

export default Todo;
