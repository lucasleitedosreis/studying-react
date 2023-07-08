import React, { useState } from "react";

export default function Formulario02() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
  });
  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }
  return (
    <form>
      <label htmlFor="name">Nome</label>
      <input
        id="name"
        type="text"
        name="name"
        value={form.nome}
        onChange={handleChange}
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
    </form>
  );
}
