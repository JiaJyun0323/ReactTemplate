import React, { memo, useState } from "react";

function Demo09_useCallback_memo({ addUser }) {
  console.log("Demo09_useCallback_memo render");
  const [name, setName] = useState("");

  return (
    <>
      <div>Demo09_useCallback_memo</div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => addUser(name)}>Add User</button>
    </>
  );
}

export default memo(Demo09_useCallback_memo);
