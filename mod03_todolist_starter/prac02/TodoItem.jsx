import React from "react";

import TodoDisplay from "./TodoItemDisplay.jsx";

export default function TodoItem({ todo }) {
  return (
    <li className="todo-item">
      <TodoDisplay todo={todo} />
    </li>
  );
}
