import React, { useState } from "react";

import "./Css/TodoList.css";
import TodoList from "./Components/TodoList";
import TodoInput from "./Components/TodoInput";

export default function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, text: "待辦事項1", completed: false },
    { id: 2, text: "待辦事項2", completed: false },
    { id: 3, text: "待辦事項3", completed: false },
  ]);

  const [currentId, setCurrentId] = useState(3);
  const addTodo = (text) => {
    const newTodo = {
      id: currentId + 1,
      text,
      completed: false,
    };
    setTodoList([...todoList, newTodo]);
    setCurrentId(newTodo.id);
  };

  return (
    <div className="todo-container">
      <h1>My Todo List</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList todoList={todoList} />
    </div>
  );
}
