import React, { useState } from "react";
import { useTodoList } from "../TodoListProvider.jsx";

import TodoItem from "./TodoItem.jsx";

export default function TodoList({}) {
  const { state: todoList, dispatch } = useTodoList();

  const [editingId, setEditingId] = useState(null);

  const editTodo = (id) => {
    setEditingId(id);
  };

  const cancelEdit = () => {
    setEditingId(null);
  };

  const completeEdit = () => {
    setEditingId(null);
  };

  // const handleSaveTodo = (id, newText) => {
  //   dispatch({ type: "SAVE", payload: { id, text: newText } });
  //   setEditingId(null);
  // };

  return (
    <div>
      <ul className="todo-list">
        {todoList.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            // completeTodo={completeTodo}
            // removeTodo={removeTodo}
            editTodo={editTodo}
            editingId={editingId}
            cancelEdit={cancelEdit}
            completeEdit={completeEdit}
            // saveTodo={handleSaveTodo}
          />
        ))}
      </ul>
    </div>
  );
}
