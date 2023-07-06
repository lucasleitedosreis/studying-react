import React from "react";
import { GlobalStorage } from "./exercicios/Exercicios09createContext/Exercicios/GlobalContext";
import Produto from "./exercicios/Exercicios09createContext/Exercicios/Produto";

function App() {
  return (
    <>
      <GlobalStorage>
        <Produto />
      </GlobalStorage>
    </>
  );
}
export default App;
