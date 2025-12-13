import React from "react";

export default function TodoItemDisplay({ todo, completeTodo }) {
  return (
    <>
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          className="todo-checkbox"
          onChange={() => completeTodo(todo.id, !todo.completed)}
        />
        <span className="todo-id">{todo.id}</span>
        <span className={`todo-text${todo.completed ? " todo-text-done" : ""}`}>
          {todo.text}
        </span>
      </div>
    </>
  );
}
