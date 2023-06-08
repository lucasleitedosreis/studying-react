import React from "react";
import Produto from "./Produto";

export default function ExerciciosUseEffect2() {
  const [ativo, setAtivo] = React.useState();
  return (
    <>
      <div>useEffect em eventos</div>
      <button onClick={() => setAtivo(!ativo)}>Ativar</button>
      {ativo && <Produto />}
    </>
  );
}
