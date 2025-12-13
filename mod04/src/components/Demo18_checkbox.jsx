import React, { useState } from "react";

export default function Demo18_checkbox() {
  //checked 屬性控制選取
  //onChange 更新布林值或選項
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div>
      <h3>Demo18_checkbox</h3>
      <h4>單選</h4>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        同意條款
      </label>
      <p>選擇的選項：{isChecked ? "已選擇" : "未選擇"}</p>
    </div>
  );
}
