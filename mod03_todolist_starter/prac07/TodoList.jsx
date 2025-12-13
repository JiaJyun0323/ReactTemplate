import React, { useState } from "react";

import TodoItem from "./TodoItem.jsx";

export default function TodoList({
  todoList,
  completeTodo,
  removeTodo,
  saveTodo,
}) {
  const [editingId, setEditingId] = useState(null);

  const editTodo = (id) => {
    setEditingId(id);
  };

  const cancelEdit = () => {
    setEditingId(null);
  };

  const handleSaveTodo = (id, newText) => {
    saveTodo(id, newText);
    setEditingId(null);
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
            cancelEdit={cancelEdit}
            saveTodo={handleSaveTodo}
          />
        ))}
      </ul>
    </div>
  );
}
