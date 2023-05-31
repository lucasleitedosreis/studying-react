import React from "react";
// import Exercicios01Jsx from "./assets/exercicios/Exercicios01Jsx";
// import Exercicios02Arrays from "./assets/exercicios/Exercicios02Arrays";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form/Form";
import Titulo from "./components/Titulo";
import Form2 from "./components/Form2/Form2";

function App() {
  return (
    <>
      {/* <Exercicios01Jsx /> */}
      {/* <Exercicios02Arrays /> */}

      {/* components , propriedades*/}
      {/* --------------------------------------------------------- */}
      <Header />
      <Titulo texto="Seja Bem Vindo" />
      <Titulo cor="red" texto="Seja Bem Vindo" />
      <Titulo cor="green">Children</Titulo>
      <Form />
      <Form2 />
      <Footer />
    </>
  );
}
export default App;
