import React from "react";

export default function ExerciciosUseState2() {
  const [items, setItems] = React.useState("teste");
  const [contar, setContar] = React.useState(1);
  const [objetos, setObjetos] = React.useState(["Item 1"]);
  function handleClick() {
    setItems("teste2");
  }
  function handleClickItens() {
    setContar(contar + 1);
    setObjetos([...objetos, "Item " + (contar + 1)]);
  }
  return (
    <>
      <h4>Reatividade - Exemplo 1</h4>
      <button onClick={handleClick}>Adicionar</button>
      <p>{items}</p>
      <h4>Reatividade - Exemplo 2</h4>
      <ul>
        {objetos.map((objeto) => (
          <li key={objeto}>{objeto}</li>
        ))}
      </ul>
      <button onClick={handleClickItens}>Adicionar itens</button>
    </>
  );
}
