import React, { useState } from "react";
import Demo10_portal from "./Demo10_portal";

export default function Demo10() {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        width: 400,
        height: 200,
        overflow: "hidden", // 這裡的 overflow 會裁切子元素
        border: "2px solid red",
        margin: 40,
      }}
    >
      <h1>Demo28</h1>

      <button onClick={() => setShowOverlay(true)}>Show Overlay</button>

      <Demo10_portal show={showOverlay} onClose={() => setShowOverlay(false)}>
        <h2>這是 Portal Overlay!</h2>
        <button onClick={() => setShowOverlay(false)}>關閉</button>
      </Demo10_portal>
    </div>
  );
}
