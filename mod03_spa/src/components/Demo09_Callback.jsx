import React, { useState } from "react";
import Demo09_Child from "./Demo09_Child.jsx";

export default function Demo09_Callback() {
  const [data, setData] = useState("父組件訊息");

  return (
    <>
      <h1>Demo09</h1>
      <Demo09_Child func1={setData} />
      <hr />
      <h2>Data: {data}</h2>
    </>
  );
}
