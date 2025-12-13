import React from "react";
import Demo22_useFormStatus from "./Demo22_useFormStatus";

export default function Demo22() {
  const saveForm = async (formData) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const allData = Object.fromEntries(formData.entries());
  };
  return (
    <>
      <h2>使用 useFormStatus</h2>

      <form action={saveForm}>
        <Demo22_useFormStatus />
      </form>
    </>
  );
}
