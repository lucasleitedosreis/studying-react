import React from "react";

export default function Produto({ nome, propriedades }) {
  return (
    <div>
      <h3>{nome}</h3>
      <ul>
        {propriedades.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
