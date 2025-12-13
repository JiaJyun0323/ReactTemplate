import React, { useState } from "react";

export default function Demo17_select() {
  const [selectedOption, setSelectedOption] = useState("usa");

  function handleChange(e) {
    setSelectedOption(e.target.value);
  }

  //使用 value 控制選取項目
  return (
    <div>
      <h3>Select</h3>
      <select value={selectedOption} onChange={handleChange}>
        <option value="">請選擇</option>
        <option value="taiwan">台灣</option>
        <option value="japan">日本</option>
        <option value="usa">美國</option>
      </select>
      <br />
      <p>選擇的選項：{selectedOption}</p>
    </div>
  );
}
