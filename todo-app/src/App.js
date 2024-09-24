// App.js
import React, { useState } from 'react';
import './App.css'; // Styling included here for presentable UI

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, isComplete: false, isEditing: false }]);
      setNewTodo("");
    }
  };

  const handleComplete = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, isComplete: !todo.isComplete } : todo
    );
    setTodos(updatedTodos);
  };

  const handleEdit = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, isEditing: !todo.isEditing } : todo
    );
    setTodos(updatedTodos);
  };

  const handleSave = (index, newText) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, text: newText, isEditing: false } : todo
    );
    setTodos(updatedTodos);
  };

  const handleRemove = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a new todo"
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>

      {todos.length === 0 ? (
        <p>No todos available. Add a todo to get started!</p>
      ) : (
        <ul>
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              todo={todo}
              index={index}
              onComplete={handleComplete}
              onEdit={handleEdit}
              onSave={handleSave}
              onRemove={handleRemove}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

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
          <button
            onClick={() => onComplete(index)}
            disabled={todo.isComplete || todo.isEditing}
          >
            Complete
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

export default TodoApp;
