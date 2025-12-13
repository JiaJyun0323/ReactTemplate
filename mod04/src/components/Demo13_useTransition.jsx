import React, { useState, useTransition } from "react";
import Demo13_Child from "./Demo13_Child.jsx";

export default function Demo13_useTransition() {
  const [isPending, startTransition] = useTransition();
  const [isShow, setIsShow] = React.useState(false);
  const [count, setCount] = useState(0);

  // 使用 useTransition 來處理狀態更新
  // 當 isShow 狀態改變時，使用 startTransition 包裹
  const handleShow = () => {
    startTransition(() => {
      setIsShow(true);
    });
  };

  const handleNotShow = () => {
    setIsShow(false);
  };

  return (
    <>
      <h1>Demo13_useTransition</h1>
      <button onClick={() => setCount((c) => c + 1)}>count+1</button>
      <span>count : {count}</span>
      <hr />
      <button onClick={handleShow}>Show</button>
      <button onClick={handleNotShow}>Hide</button>
      {isPending && <h2>Loading...</h2>}
      {isShow && <Demo13_Child />}
    </>
  );
}
