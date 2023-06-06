import React from "react";

export default function Button({ setModal }) {
  return <button onClick={() => setModal(true)}>Abrir</button>;
}
