import React, { useState } from "react";
import { useTodoList } from "../TodoListProvider";

// export default function TodoEdit({ todo, saveTodo, cancelEdit }) {
export default function TodoEdit({ todo, cancelEdit, completeEdit }) {
  const { dispatch } = useTodoList();

  const [newText, setNewText] = React.useState(todo.text);

  const handleSave = () => {
    dispatch({ type: "SAVE", payload: { id: todo.id, text: newText } });
    completeEdit();
  };

  return (
    <>
      <div className="todo-content">
        <span className="todo-id">{todo.id}</span>
        <input
          type="text"
          className="todo-edit-input"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      </div>
      <div className="todo-actions">
        <button className="todo-btn save-btn" onClick={handleSave}>
          儲存
        </button>
        <button className="todo-btn cancel-btn" onClick={cancelEdit}>
          取消
        </button>
      </div>
    </>
  );
}
