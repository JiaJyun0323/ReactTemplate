import React, { memo } from "react";

function Demo08_useMemo_memo({ user }) {
  console.log("Demo08_useMemo_memo render");
  return (
    <>
      <h3>Demo08_useMemo_memo</h3>
      <h4>email : {user.email}</h4>
      <h4>name : {user.name}</h4>
    </>
  );
}

export default memo(Demo08_useMemo_memo);

//指定自訂比較函數
// 如果這樣做，
// 請使用瀏覽器開發者工具中的效能面板來確保你的比較函數實際上比重新渲染元件更快。
// 你可能會因此感到驚訝。
// export default memo(Demo08_useMemo_memo, (prevProps, nextProps) => {
//   return (
//     prevProps.user.email === nextProps.user.email &&
//     prevProps.user.name === nextProps.user.name
//   );
// });
