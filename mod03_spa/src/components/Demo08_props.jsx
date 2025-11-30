import React, { useState } from "react";
import Demo08_2 from "./Demo08_Child.jsx";

export default function Demo08_props() {
  const msg = "Hello from Demo08!";

  const [msg2, setMsg2] = useState("早上好");

  return (
    <>
      <h1>Demo08</h1>
      <button onClick={() => setMsg2("下午好!")}>Update Data 2</button>

      <Demo08_2 data1={msg} data2={msg2} />
      <hr />
      <Demo08_2 data1={"測試defaultProps"} />
    </>
  );
}
