import React, { useEffect } from "react";

export default function Demo12_Child() {
  useEffect(() => {
    console.log("Demo12_Child掛載時執行");
    return () => {
      console.log("Demo12_Child卸載時執行");
    };
  }, []); // 空陣列只在掛載/卸載時執行

  return <div>Demo12_Child</div>;
}
