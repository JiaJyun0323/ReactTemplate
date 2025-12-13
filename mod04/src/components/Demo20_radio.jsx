import React, { useState } from "react";

export default function Demo20_radio() {
  const [options, setOptions] = useState([
    { name: "全端", code: "fullstack" },
    { name: "前端", code: "frontend" },
    { name: "後端", code: "backend" },
  ]);
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div>
      <h3>Demo20_radio</h3>
      {options.map((option) => (
        <label key={option.code}>
          <input
            type="radio"
            name="options"
            value={option.code}
            checked={selectedOption === option.code}
            onChange={() => setSelectedOption(option.code)}
          />
          {option.name}
        </label>
      ))}
      <p>選擇的選項：{selectedOption}</p>
    </div>
  );
}
