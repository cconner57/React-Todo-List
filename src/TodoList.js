import React, { useState } from 'react';

import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList() {
	const [ todos, setTodos ] = useState([
		{
			text: 'Feed cat',
			isCompleted: false
		},
		{
			text: 'Wash dishes',
			isCompleted: false
		},
		{
			text: 'Eat dinner',
			isCompleted: false
		}
	]);	
    
    const addTodo = (text) => {
        const newTodos = [ ...todos, { text } ];
		setTodos(newTodos);
	};
    
    const removeTodo = (index) => {
        const newTodos = [ ...todos ];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

	const completeTodo = (index) => {
		const newTodos = [ ...todos ];
		newTodos[index].isCompleted = true;
		setTodos(newTodos);
	};

	return (
		<div className="container">
            <h5>Todo List</h5>
            <TodoForm addTodo={addTodo} />
			{todos.map((todo, index) => (
				<Todo key={index} index={index} todo={todo} completeTodo={completeTodo} removeTodo={removeTodo} />
			))}
		</div>
	);
}

export default TodoList;
