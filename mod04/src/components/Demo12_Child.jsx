import React, { use } from "react";

export default function Demo12_Child({ promise }) {
  const data = use(promise);

  return (
    <div>
      <h2>Demo12_Child API 回應</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
