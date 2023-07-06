// Utilize o GlobalContext do exemplo anterior para puxar os dados da API abaixo:
// https://ranekapi.origamid.dev/json/api/produto/
// assim que o usuário acessar o app
// coloque os dados da API no contexto global, dando acesso aos dados da mesma
// defina uma função chamada limparDados que é responsável por zerar os dados de produto
// e exponha essa função no contexto global
import React from "react";
import { GlobalContext } from "./GlobalContext";

export default function Produto() {
  const global = React.useContext(GlobalContext);
  console.log(global);
  if (global.data === null) return null;
  return (
    <div>
      Produto:{" "}
      {global.data.map((produto) => (
        <li key={produto.id}>{produto.nome}</li>
      ))}
      <button onClick={global.cleanData}>Limpar Dados</button>
    </div>
  );
}
