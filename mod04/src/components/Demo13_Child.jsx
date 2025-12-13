import React from "react";

export default function Demo13_Child() {
  const data = new Array(200000).fill(0).map((_, index) => `Item ${index}`);

  return (
    <>
      <h1>Demo13_Child</h1>
      <ul>
        {data.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
