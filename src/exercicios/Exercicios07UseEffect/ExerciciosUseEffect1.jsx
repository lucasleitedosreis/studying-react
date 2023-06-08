import React from "react";

export default function ExerciciosUseEffect1() {
  const [contador, setContador] = React.useState(0);
  
  React.useEffect(() => {
    console.log("Com useEffect");
  }, []);

  React.useEffect(() => {
    document.title = "Total " + contador;
  }, [contador]);

  console.log("Sem useEffect");

  return <button onClick={() => setContador(contador + 1)}>{contador}</button>;
}
