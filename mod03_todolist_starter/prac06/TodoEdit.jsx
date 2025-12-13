import React, { useState } from "react";

export default function TodoEdit({ todo }) {
  const [newText, setNewText] = React.useState(todo.text);
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
        <button className="todo-btn save-btn">儲存</button>
        <button className="todo-btn cancel-btn">取消</button>
      </div>
    </>
  );
}
