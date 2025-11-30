import React from "react";

export default function Demo02_State1() {
  var obj = {
    name: "mary",
    age: 18,
  };

  function changeEvent() {
    //直接修改 obj 對象的屬性
    //這樣不會觸發組件的重新渲染
    obj.name = "john";
    obj.age = 20;

    console.log("obj changed", obj);
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
