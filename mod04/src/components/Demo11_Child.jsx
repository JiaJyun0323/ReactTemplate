import React from "react";

await new Promise((r) => setTimeout(r, 2000));

export default function Demo11_Child() {
  console.log("Demo11_Child loaded");
  return <div>Demo11_Child</div>;
}
