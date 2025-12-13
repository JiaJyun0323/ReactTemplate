import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { TodoListProvider } from "./TodoListProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TodoListProvider>
      <App />
    </TodoListProvider>
  </StrictMode>
);
