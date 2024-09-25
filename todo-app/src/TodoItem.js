import React, { useState } from 'react';

function TodoItem({ todo, index, onComplete, onEdit, onSave, onRemove }) {
  const [editText, setEditText] = useState(todo.text);

  return (
    <li className={`todo-item ${todo.isComplete ? 'completed' : ''}`}>
      {todo.isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={() => onSave(index, editText)}>Save</button>
        </>
      ) : (
        <>
          <span>{todo.text}</span>
          <button onClick={() => onComplete(index)}>
            {todo.isComplete ? 'Undo' : 'Complete'}
          </button>
          <button
            onClick={() => onEdit(index)}
            disabled={todo.isComplete || todo.isEditing}
          >
            Edit
          </button>
          <button
            onClick={() => onRemove(index)}
            disabled={todo.isComplete || todo.isEditing}
          >
            Remove
          </button>
        </>
      )}
    </li>
  );
}

export default TodoItem;
