import React from "react";

export default function TodoItemDisplay({
  todo,
  completeTodo,
  removeTodo,
  editTodo,
}) {
  const handleRemoveTodo = () => {
    confirm(`確定要刪除這個待辦事項 [${todo.text}] 嗎？`) &&
      removeTodo(todo.id);
  };

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
        <div className="todo-actions">
          <button
            className="todo-btn edit-btn"
            onClick={() => editTodo(todo.id)}
          >
            編輯
          </button>
          <button className="todo-btn delete-btn" onClick={handleRemoveTodo}>
            刪除
          </button>
        </div>
      </div>
    </>
  );
}
