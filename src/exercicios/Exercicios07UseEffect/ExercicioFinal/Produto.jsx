import React from "react";

export default function Produto({ produto }) {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    const fetchProduto = async () => {
      if (produto !== null) {
        const response = await fetch(
          `https://ranekapi.origamid.dev/json/api/produto/${produto}`
        );
        const json = await response.json();
        setDados(json);
      }
    };
    fetchProduto();
  }, [produto]);

  if (dados === null) return null;
  return (
    <div>
      <h1>{dados.nome}</h1>
      <p>{dados.preco}</p>
    </div>
  );
}
