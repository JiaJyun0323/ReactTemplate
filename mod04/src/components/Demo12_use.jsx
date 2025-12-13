import { Suspense } from "react";
import Demo12_Child from "./Demo12_Child.jsx";

// 主組件
export default function Demo12_use() {
  const promise = fetch("https://fakeresponder.com?sleep=2000").then((res) =>
    res.json()
  );

  return (
    <div>
      <h1>Demo12_use</h1>
      <Suspense fallback={<p>載入中...</p>}>
        <Demo12_Child promise={promise} />
      </Suspense>
    </div>
  );
}
