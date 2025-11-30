import React, { useState } from "react";
import Demo10_2 from "./Demo10_Child.jsx";
import completeImg from "../assets/complete.jpg";

export default function Demo10_Children() {
  var [isShow404, setIsShow404] = useState(false);
  var [isShowComplete, setIsShowComplete] = useState(false);

  return (
    <>
      <h1>Demo10</h1>
      <button onClick={() => setIsShow404(!isShow404)}>
        {isShow404 ? "隱藏" : "顯示"}404
      </button>
      {isShow404 && (
        <Demo10_2>
          <h1>錯誤,找不到檔案.</h1>
        </Demo10_2>
      )}
      <button onClick={() => setIsShowComplete(!isShowComplete)}>
        {isShowComplete ? "隱藏" : "顯示"}完成
      </button>
      {isShowComplete && (
        <Demo10_2>
          <h2>操作已完成.</h2>
          <img
            src={completeImg}
            alt="完成"
            style={{ width: "30%", borderRadius: "8px" }}
          />
          <h3>系統時間: {new Date().toLocaleString()} </h3>
        </Demo10_2>
      )}
    </>
  );
}
