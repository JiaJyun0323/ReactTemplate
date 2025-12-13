import React, { useState } from "react";

export default function TodoInput({ addTodo }) {
    
  const [inputValue, setInputValue] = useState("");
  const handleAddTodo = () => {
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="todo-input-row">
      <input
        type="text"
        placeholder="請輸入待辦事項"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddTodo}>add todo</button>
    </div>
  );
}
