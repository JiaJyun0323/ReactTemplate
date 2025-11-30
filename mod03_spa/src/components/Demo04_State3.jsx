import React, { useState } from "react";

export default function Demo04_State3() {
  const [obj, setObj] = useState({
    name: "mary",
    age: 18,
  });

  function changeEvent() {
    setObj({
      ...obj,
      name: "john",
    });
  }

  return (
    <>
      <div>Demo02_State</div>
      <p>name: {obj.name}</p>
      <p>age: {obj.age}</p>

      <button onClick={() => changeEvent()}>change</button>
    </>
  );
}
