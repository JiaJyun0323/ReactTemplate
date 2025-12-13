import React, { lazy, Suspense, useState } from "react";

const Demo11_Child = lazy(() => import("./Demo11_Child"));

export default function Demo11_lazy_suspense() {
  const [showChild, setShowChild] = useState(false);

  return (
    <div>
      <input
        type="checkbox"
        id="toggle"
        onChange={(e) => setShowChild(e.target.checked)}
      />
      <label htmlFor="toggle">切換顯示子組件</label>

      {showChild && (
        <Suspense fallback={<div>載入中...</div>}>
          <Demo11_Child />
        </Suspense>
      )}
    </div>
  );
}
