import React from 'react';
import './TodoList.css';

const TodoList = ({ todos, changeStatus, getEditedObj }) => {

    let style = {
        color: 'red',
        listStyleType: 'none'
    };

    return (
        <div>
            <h3>Todo List</h3>
            <ul style={style}>
                {todos.map(item => (
                    <li key={item.id} className={item.status ? 'completed' : ''}>
                        <input type="checkbox" onChange={() => changeStatus(item.id)} />
                        {item.todo}
                        <button onClick={() => getEditedObj(item.id)}>Edit</button>
                        <button>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default TodoList;