import React from "react";
import { useFormStatus } from "react-dom";

export default function Demo22_useFormStatus() {
  const { pending, data } = useFormStatus();
  const [inputValue, setInputValue] = React.useState("");

  return (
    <>
      <div>
        <label>產品編號：</label>
        <input
          type="text"
          name="productId"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <button type="submit" disabled={pending}>
        送出
      </button>
      {data && <p> 發送 {data.get("productId")} </p>}
    </>
  );
}
