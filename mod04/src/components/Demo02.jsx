import React from "react";
import { MyProvider } from "./Demo02_Provider.jsx";
import Demo02_Child from "./Demo02_Child.jsx";

//設計一個Provider組件
export default function Demo02() {
  return (
    <MyProvider>
      <h1>Demo02</h1>
      <Demo02_Child />
    </MyProvider>
  );
}
