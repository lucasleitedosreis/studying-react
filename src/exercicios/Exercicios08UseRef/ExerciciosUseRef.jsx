import React from "react";
// useRef
// Retorna um objeto com a propriedade current. Esse objeto pode ser utilizado para guardarmos valores que irão persistir durante todo o ciclo de vida do elemento. Geralmente usamos o mesmo para nos referirmos a um elemento do DOM, sem precisarmos utilizar o querySelector ou similar.

export default function ExerciciosUseRef() {
  const [comentarios, setComentarios] = React.useState([]);
  const [input, setInput] = React.useState("");
  const inputElement = React.useRef();

  function handleClick() {
    setComentarios([...comentarios, input]);
    setInput("");
    inputElement.current.focus();
  }
  {
    /* ==================================================================== */
  }
  const [carrinho, setCarrinho] = React.useState(0);
  const [notificacao, setNotificacao] = React.useState(null);
  const timeoutRef = React.useRef();

  function handleClickCompras() {
    setCarrinho(carrinho + 1);
    setNotificacao("Item adicionado ao carrinho!");
    clearTimeout(timeoutRef.current);
    //pega a referencia do item a ser limpo
    timeoutRef.current = setTimeout(() => {
      setNotificacao(null);
    }, 2000);
  }
  return (
    <div>
      {/* ==================================================================== */}
      <h1>Exemplo 1</h1>
      <ul>
        {comentarios.map((comentario) => (
          <li key={comentario}>{comentario}</li>
        ))}
      </ul>
      <input
        ref={inputElement}
        type="text"
        value={input}
        onChange={({ target }) => setInput(target.value)}
      />
      <br />
      <button onClick={handleClick}>Enviar</button>

      {/* ==================================================================== */}
      <h1>Exemplo 2</h1>
      <p>{notificacao}</p>
      <button onClick={handleClickCompras}>
        Adicionar ao carrinho {carrinho}
      </button>
    </div>
  );
}
