const initialTodos = [
  { id: 1, text: "待辦事項1", completed: false },
  { id: 2, text: "待辦事項2", completed: false },
  { id: 3, text: "待辦事項3", completed: false },
];

function TodoListReducer(state, action) {
  // 更新 localStorage, init與 GET_LAST_ID 不需要
  if (action.type !== "INIT" && action.type !== "GET_LAST_ID") {
    localStorage.setItem("todoList", JSON.stringify(state));
  }

  switch (action.type) {
    case "INIT":
      return action.payload;
    case "ADD":
      return [...state, action.payload];
    case "COMPLETE":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: action.payload.completed }
          : todo
      );
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.payload.id);
    case "SAVE":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
    case "COMPLETE_ALL":
      return state.map((todo) => ({ ...todo, completed: true }));
    // case "GET_LAST_ID":
    //   return Math.max(0, ...state.map((todo) => todo.id));
    default:
      return state;
  }
}

export { initialTodos, TodoListReducer };
