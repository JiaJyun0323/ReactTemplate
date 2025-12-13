import React, { useState, useDeferredValue, useMemo } from "react";
import Demo14_Child from "./Demo14_Child.jsx";

export default function Demo14_useDeferredValue() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  const data = useMemo(() => {
    return new Array(100).fill(0).map((_, index) => `Item ${index}`);
  }, []);

  const isStale = query !== deferredQuery;

  return (
    <div>
      <h2>Demo14_useDeferredValue</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {isStale && <p style={{ color: "orange" }}>更新中...</p>}
      <div style={isStale ? { opacity: 0.5 } : {}}>
        <Demo14_Child deferredQuery={deferredQuery} data={data} />
      </div>
    </div>
  );
}
