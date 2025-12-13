import React from "react";

export default function TodoProgress({ todoList }) {
  const total = todoList.length;
  const completed = todoList.filter((todo) => todo.completed).length;

  return (
    <div className="todo-progress">
      <progress value={completed} max={total} />
      <span className="progress-text">
        {completed} / {total} 完成
      </span>
    </div>
  );
}
