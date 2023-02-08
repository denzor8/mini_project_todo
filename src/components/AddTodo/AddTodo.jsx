import React, { useState } from 'react';

const AddTodo = ({ createTodo }) => {
    const [todoInp, setTodoInp] = useState('');

    function addTodo(e) {
        setTodoInp(e.target.value);
    };

    function saveTodo() {
        if(!todoInp) {
            alert('Input is empty!');
            return;
        };

        let newTodo = {
            todo: todoInp,
            status: false,
            id: Date.now()
        };

        createTodo(newTodo);

        setTodoInp('');
    };

    return (
        <div>
            <h3>Add TODO Component</h3>
            <input type="text" placeholder="Create TODO" onChange={addTodo} value={todoInp} />
            <button onClick={saveTodo}>Create</button>
        </div>
    )
};

export default AddTodo;