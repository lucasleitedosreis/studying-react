import React, { useState } from "react";

export default function Formulario05() {
  const [produto, setProduto] = useState("");
  const [cor, setCor] = useState("");
  function handleChange({ target }) {
    setProduto(target.value);
  }
  return (
    <form>
      <h2>Cores</h2>
      <label>
        <input
          type="radio"
          value="azul"
          checked={cor === "azul"}
          onChange={({ target }) => setCor(target.value)}
        />
        Azul
      </label>
      <label>
        <input
          type="radio"
          value="vermelho"
          checked={cor === "vermelho"}
          onChange={({ target }) => setCor(target.value)}
        />
        Vermelho
      </label>
      <hr />
      {cor}
      <h2>Produtos</h2>
      <label>
        <input
          type="radio"
          value="smartphone"
          checked={produto === "smartphone"}
          onChange={handleChange}
        />
        Smartphone
      </label>
      <label>
        <input
          type="radio"
          value="notebook"
          checked={produto === "notebook"}
          onChange={handleChange}
        />
        Notebook
      </label>
      <hr />

      {produto}
    </form>
  );
}
