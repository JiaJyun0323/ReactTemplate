import React, { useState } from "react";

import TodoItem from "./TodoItem.jsx";

export default function TodoList({ todoList, completeTodo, removeTodo }) {
  const [editingId, setEditingId] = useState(null);

  const editTodo = (id) => {
    setEditingId(id);
  };

  return (
    <div>
      <ul className="todo-list">
        {todoList.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            editTodo={editTodo}
            editingId={editingId}
          />
        ))}
      </ul>
    </div>
  );
}
