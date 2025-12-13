import React, { useReducer, useEffect, useState } from "react";

import { useTodoList } from "./TodoListProvider";

import "./TodoList.css";
import TodoList from "./Components/TodoList";
import TodoInput from "./Components/TodoInput";
import TodoProgress from "./Components/TodoProgress";

//此範例使用 Context + useReducer
//優點是可以跨元件使用 state 與 dispatch
//在main.js中使用provider包住App,所有子元件都可以使用
//子元件只要呼叫 useTodoList() 就可以取得 state 與 dispatch
export default function App() {
  const { state: todoList, dispatch } = useTodoList();

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const handleCompleteAll = () => {
    dispatch({ type: "COMPLETE_ALL" });
  };

  return (
    <div className="todo-container">
      <h1>My Todo List</h1>
      <TodoInput />
      <TodoList />
      <TodoProgress />
      <button className="complete-all-btn" onClick={handleCompleteAll}>
        全部完成
      </button>
    </div>
  );

  // const [todoList, dispatch] = useReducer(
  //   todoListReducer,
  //   initialTodos,
  //   (init) => {
  //     const saved = localStorage.getItem("todoList");
  //     return saved ? JSON.parse(saved) : init;
  //   }
  // );

  // const [currentId, setCurrentId] = useState(3);

  // const [currentId, setCurrentId] = useState(() => {
  //   const saved = localStorage.getItem("todoList");
  //   if (saved) {
  //     const list = JSON.parse(saved);
  //     return list.length ? Math.max(...list.map((t) => t.id)) : 0;
  //   }
  //   return 3;
  // });

  // //改為呼叫 dispatch來更新
  // const addTodo = (text) => {
  //   const newTodo = {
  //     id: currentId + 1,
  //     text,
  //     completed: false,
  //   };
  //   dispatch({ type: "ADD", payload: newTodo });
  //   setCurrentId(newTodo.id);
  // };

  // //改為呼叫 dispatch來更新
  // const completeTodo = (id, isCompleted) => {
  //   dispatch({ type: "COMPLETE", payload: { id, completed: isCompleted } });
  // };
  // //改為呼叫 dispatch來更新
  // const removeTodo = (id) => {
  //   dispatch({ type: "REMOVE", payload: id });
  // };
  // //改為呼叫 dispatch來更新
  // const saveTodo = (id, newText) => {
  //   dispatch({ type: "SAVE", payload: { id, text: newText } });
  // };
  // //改為呼叫 dispatch來更新
  // const handleCompleteAll = () => {
  //   dispatch({ type: "COMPLETE_ALL" });
  // };

  // return (
  //   <div className="todo-container">
  //     <h1>My Todo List</h1>
  //     <TodoInput addTodo={addTodo} />
  //     <TodoList
  //       todoList={todoList}
  //       completeTodo={completeTodo}
  //       removeTodo={removeTodo}
  //       saveTodo={saveTodo}
  //     />
  //     <TodoProgress todoList={todoList} />

  //     <button className="complete-all-btn" onClick={handleCompleteAll}>
  //       全部完成
  //     </button>
  //   </div>
  // );
}
