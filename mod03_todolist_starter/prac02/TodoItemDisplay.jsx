import React from "react";

export default function TodoItemDisplay({ todo }) {
  return (
    <>
      <div className="todo-content">
        <input type="checkbox" className="todo-checkbox" />
        <span className="todo-id">{todo.id}</span>
        <span className={`todo-text${todo.completed ? " todo-text-done" : ""}`}>
          {todo.text}
        </span>
      </div>
    </>
  );
}
