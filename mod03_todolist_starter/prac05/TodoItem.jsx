import React from "react";

import TodoDisplay from "./TodoItemDisplay.jsx";

export default function TodoItem({ todo, completeTodo, removeTodo }) {
  return (
    <li className="todo-item">
      <TodoDisplay
        todo={todo}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
      />
    </li>
  );
}
