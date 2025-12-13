import React, { useState } from "react";

export default function Demo16_textarea() {
  const [text, setText] = useState("");

  //使用value 屬性取代 HTML 的 children
  return (
    <div>
      <h3>Textarea</h3>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        cols="30"
        rows="10"
      />
      <br />
      輸入內容：
      <p style={{ whiteSpace: "pre-wrap" }}>{text}</p>
    </div>
  );
}
