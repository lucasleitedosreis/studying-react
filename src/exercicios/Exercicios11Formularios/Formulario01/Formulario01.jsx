import React, { useState } from "react";

export default function Formulario01() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3>Formulário</h3>
      <label htmlFor="name">Nome</label>
      <input
        id="name"
        type="text"
        value={nome}
        onChange={({ target }) => setNome(target.value)}
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <button>Enviar</button>
    </form>
  );
}
