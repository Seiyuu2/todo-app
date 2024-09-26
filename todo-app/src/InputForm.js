import React from 'react';

function InputForm({ newTodo, setNewTodo, addTodo }) {
  return (
    <div className="input-container">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter a new todo"
      />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}

export default InputForm;
