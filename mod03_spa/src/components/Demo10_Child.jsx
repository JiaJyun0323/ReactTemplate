import React from "react";

const messageBoxStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "#fff",
  border: "2px solid #2196f3",
  borderRadius: "10px",
  boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
  padding: "32px 48px",
  zIndex: 9999,
  minWidth: "240px",
  textAlign: "center",
};

//slot設計方式:插槽可以讓父組件在子組件中指定內容
//使用children屬性來實現
//在 React 中，children 是一個特殊的保留屬性名稱。
export default function Demo10_2({ children }) {
  console.log("Demo10_2 children:", children);
  return (
    <>
      <div style={messageBoxStyle}>{children}</div>
    </>
  );
}
