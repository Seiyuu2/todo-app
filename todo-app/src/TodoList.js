import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, handleComplete, handleEdit, handleSave, handleRemove }) {
  return (
    <>
      {todos.length === 0 ? (
        <p>Nothing on your todo list just yet, How about adding something?</p>
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
    </>
  );
}

export default TodoList;
