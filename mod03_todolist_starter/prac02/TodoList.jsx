import React from "react";

import TodoItem from "./TodoItem.jsx";

export default function TodoList({ todoList }) {
  return (
    <div>
      <ul className="todo-list">
        {todoList.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}
