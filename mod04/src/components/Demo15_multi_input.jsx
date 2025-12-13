import React, { useState } from "react";

export default function Demo15_multi_input() {
  const [form, setForm] = useState({ name: "", email: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div>
      <h3>多個輸入欄位</h3>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="姓名"
      />
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <p>
        姓名 : {form.name} | Email : {form.email}
      </p>
    </div>
  );
}
