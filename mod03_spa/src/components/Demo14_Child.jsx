import React, { useState, useEffect } from "react";

export default function Demo14_Child({ userId }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // useEffect(() => {
  //   setName("");
  //   setEmail("");
  // }, [userId]);

  return (
    <>
      User ID: {userId}
      <br />
      Name:
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      Email:
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </>
  );
}
