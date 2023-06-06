import React from "react";

export default function Produtos({ dados }) {
  return (
    <>
      <h1>{dados.nome}</h1>
      <p>R$ {dados.preco}</p>
      <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
    </>
  );
}
