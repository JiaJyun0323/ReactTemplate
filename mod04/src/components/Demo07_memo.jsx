import React, { memo } from "react";

function Demo07_memo({ msg }) {
  console.log("Demo07_memo render");
  return (
    <>
      <h3>Demo07_memo</h3>
      <h4>{msg}</h4>
    </>
  );
}

export default memo(Demo07_memo);
