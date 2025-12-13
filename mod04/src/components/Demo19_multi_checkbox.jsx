import React, { useState } from "react";

export default function Demo19_multi_checkbox() {
  const [options, setOptions] = useState([
    { city: "台北", code: "taipei" },
    { city: "高雄", code: "kaohsiung" },
    { city: "台中", code: "taichung" },
  ]);

  const [selectedOptions, setSelectedOptions] = useState([]);

  function handleSelectChange(e) {
    const code = e.target.value;
    if (selectedOptions.includes(code)) {
      setSelectedOptions((prev) => prev.filter((opt) => opt !== code));
    } else {
      setSelectedOptions((prev) => [...prev, code]);
    }
  }

  return (
    <div>
      <h3>Demo19_multi_checkbox</h3>
      {options.map((option) => (
        <label key={option.code}>
          <input
            type="checkbox"
            value={option.code}
            onChange={handleSelectChange}
          />
          {option.city}
        </label>
      ))}
      <p>選擇的選項：</p>
      {selectedOptions.join(", ")}
    </div>
  );
}
