import React from "react";
import { GlobalContext } from "./GlobalContext";
export default function Produto() {
  const global = React.useContext(GlobalContext);

  console.log(global);

  return <div>Produto: {global.nome}</div>;
}
