import React, { useState } from "react";

import "./Css/TodoList.css";

import TodoList from "./Components/TodoList";

export default function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, text: "待辦事項1", completed: false },
    { id: 2, text: "待辦事項2", completed: false },
    { id: 3, text: "待辦事項3", completed: false },
  ]);

  return (
    <div className="todo-container">
      <h1>My Todo List</h1>
      <TodoList todoList={todoList} />
    </div>
  );
}
