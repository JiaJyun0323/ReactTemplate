import React from "react";

import TodoDisplay from "./TodoItemDisplay.jsx";

export default function TodoItem({ todo, completeTodo }) {
  return (
    <li className="todo-item">
      <TodoDisplay todo={todo} completeTodo={completeTodo} />
    </li>
  );
}
