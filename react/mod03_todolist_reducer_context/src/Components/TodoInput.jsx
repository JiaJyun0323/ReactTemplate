import React, { useState, useReducer } from "react";
import { useTodoList } from "../TodoListProvider.jsx";

export default function TodoInput({}) {
  const { state: todoList, dispatch } = useTodoList();

  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      const lastId = todoList.length
        ? Math.max(...todoList.map((t) => t.id))
        : 0;
      dispatch({
        type: "ADD",
        payload: { id: lastId + 1, text: inputValue, completed: false },
      });
      setInputValue("");
    }
  };

  return (
    <>
      <div className="todo-input-row">
        <input
          type="text"
          placeholder="請輸入待辦事項"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAddTodo}>新增</button>
      </div>
    </>
  );
}
