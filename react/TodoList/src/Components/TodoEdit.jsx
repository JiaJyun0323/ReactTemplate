import React, { useState } from "react";

export default function TodoEdit({ todo, saveTodo, cancelEdit }) {
  const [newText, setNewText] = React.useState(todo.text);
  return (
    <>
      <div className="todo-content">
        <span className="todo-id">{todo.id}</span>
        <input
          type="text"
          className="todo-edit-input"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      </div>
      <div className="todo-actions">
        <button
          className="todo-btn save-btn"
          onClick={() => saveTodo(todo.id, newText)}
        >
          save
        </button>
        <button className="todo-btn cancel-btn" onClick={cancelEdit}>
          cancel
        </button>
      </div>
    </>
  );
}
