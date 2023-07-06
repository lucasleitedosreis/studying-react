import React from "react";
import useLocalStorage from "./useLocalStorage";

export default function Produto() {
  const [produto, setProduto] = useLocalStorage("produto", "");

  function handleclick({ target }) {
    setProduto(target.innerText);
  }

  return (
    <div>
      <h4>Produto preferido: {produto}</h4>
      <button onClick={handleclick}>mesa</button>
      <p></p>
      <button onClick={handleclick}>cadeira</button>
    </div>
  );
}
