import React from "react";
import Header from "./exercicios/exercicios03/Header";
import Home from "./exercicios/exercicios03/Home";
import Produtos from "./exercicios/exercicios03/Produtos";
// import Exercicios01Jsx from "./assets/exercicios/Exercicios01Jsx";
// import Exercicios02Arrays from "./assets/exercicios/Exercicios02Arrays";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Form from "./components/Form/Form";
// import Titulo from "./components/Titulo";
// import Form2 from "./components/Form2/Form2";

function App() {
  let Pagina = Home;
  const { pathname } = window.location;
  if (pathname === "/produtos") {
    Pagina = Produtos;
  } else {
    Pagina === Home;
  }
  return (
    <>
      {/* <Exercicios01Jsx /> */}
      {/* <Exercicios02Arrays /> */}

      {/* components , propriedades*/}
      {/* --------------------------------------------------------- */}
      {/* <Header />
      <Titulo texto="Seja Bem Vindo" />
      <Titulo cor="red" texto="Seja Bem Vindo" />
      <Titulo cor="green">Children</Titulo>
      <Form />
      <Form2 />
      <Footer /> */}
      {/* --------------------------------------------------------- */}
      {/* Exercício 3 */}
      <Header />
      <Pagina />
    </>
  );
}
export default App;
