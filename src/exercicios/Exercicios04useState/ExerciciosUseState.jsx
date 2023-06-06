import React from "react";
import Button from "./Button";
import Modal from "./Modal";

export const ExerciciosUseState = () => {
  const [active, setActive] = React.useState(false);
  const [modal, setModal] = React.useState(false);

  return (
    <>
      <button onClick={() => setActive(!active)}>
        {active ? "Botão ativo" : "Botão inativo"}
      </button>
      <p></p>
      <div>
        <div>{modal ? "Modal Aberto" : "Modal Fechado"}</div>
        <Button setModal={setModal} />
        <Modal modal={modal} setModal={setModal} />
      </div>
    </>
  );
};
