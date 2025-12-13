import React, { createContext, useContext, useReducer } from "react";
import { initialTodos, TodoListReducer } from "./TodoListReducer";

const TodoListContext = createContext();

export function TodoListProvider({ children }) {
  const [state, dispatch] = useReducer(
    TodoListReducer,
    initialTodos,
    (init) => {
      const saved = localStorage.getItem("todoList");
      return saved ? JSON.parse(saved) : init;
    }
  );

  return (
    <TodoListContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoListContext.Provider>
  );
}

export function useTodoList() {
  return useContext(TodoListContext);
}
