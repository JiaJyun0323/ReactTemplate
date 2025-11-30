import React from "react";

export default function Demo09_Child({ func1 }) {
  return (
    <div>
      <h2>Demo09_Child</h2>

      <button onClick={() => func1("來自Demo09_Child的訊息")}>
        影響父組件
      </button>
    </div>
  );
}
