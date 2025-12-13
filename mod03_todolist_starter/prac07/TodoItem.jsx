import React from "react";

import TodoDisplay from "./TodoItemDisplay.jsx";
import TodoEdit from "./TodoEdit.jsx";

export default function TodoItem({
  todo,
  completeTodo,
  removeTodo,
  editTodo,
  editingId,
  cancelEdit,
  saveTodo,
}) {
  return (
    <li className="todo-item">
      {editingId === todo.id ? (
        <TodoEdit todo={todo} saveTodo={saveTodo} cancelEdit={cancelEdit} />
      ) : (
        <TodoDisplay
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          editTodo={editTodo}
        />
      )}
    </li>
  );
}
