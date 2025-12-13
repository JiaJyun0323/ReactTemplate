import React, { useState } from "react";

import "./Css/TodoList.css";
import TodoList from "./Components/TodoList";
import TodoInput from "./Components/TodoInput";
import TodoProgress from "./Components/TodoProgress";

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

  const completeTodo = (id, isCompleted) => {
    const updatedTodos = todoList.map((todo) =>
      todo.id === id ? { ...todo, completed: isCompleted } : todo
    );
    setTodoList(updatedTodos);
  };

  const removeTodo = (id) => {
    const updatedTodos = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodos);
  };

  const saveTodo = (id, newText) => {
    const updatedTodos = todoList.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    setTodoList(updatedTodos);
  };

  const handleCompleteAll = () => {
    setTodoList((prev) => prev.map((todo) => ({ ...todo, completed: true })));
  };

  return (
    <div className="todo-container">
      <h1>My Todo List</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList
        todoList={todoList}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        saveTodo={saveTodo}
      />
      <TodoProgress todoList={todoList} />

      <button className="complete-all-btn" onClick={handleCompleteAll}>
        全部完成
      </button>
    </div>
  );
}
