import React, { useState } from 'react';

const EditTodo = ({ editedObj, saveEditedObj }) => {
    const [editedTodo, setEditedTodo] = useState(editedObj);

    function editTodo(e) {
        setEditedTodo({
            ...editedTodo,
            todo: e.target.value
        });
    };

    function saveChanges() {
        saveEditedObj(editedTodo);
    };

    return (
        <div>
            <h3>Edit Todo Component</h3>
            <input type="text" onChange={editTodo} value={editedTodo.todo} />
            <button onClick={saveChanges}>Save</button>
        </div>
    )
};

export default EditTodo;
