import React, { useMemo } from "react";

export default function Demo14_Child({ deferredQuery, data }) {
  const filteredData = useMemo(() => {
    if (deferredQuery) {
      const startTime = Date.now();
      while (Date.now() - startTime < 2000) {}
    }
    return data.filter((item) => item.includes(deferredQuery));
  }, [data, deferredQuery]);

  return (
    <>
      查詢數 {filteredData.length}
      <ul>
        {filteredData.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
