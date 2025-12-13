import React, { useState, useMemo } from "react";

export default function Demo05_expensiveCalculation() {
  const [count, setCount] = useState(1);
  const [other, setOther] = useState(1);

  function expensiveCalculation(num) {
    console.log("expensiveCalculation called");
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += num;
    }
    return result;
  }

  const result = expensiveCalculation(count);

  return (
    <>
      <h2>未使用useMemo 範例</h2>
      <div>
        <button onClick={() => setCount(count + 1)}>count +1</button>
        <span> count: {count}</span>
      </div>
      <div>
        <button onClick={() => setOther(other + 1)}>other +1</button>
        <span> other: {other}</span>
      </div>
      <div>
        (count與other改變都會重新計算):<br></br> {result}
      </div>
    </>
  );
}
