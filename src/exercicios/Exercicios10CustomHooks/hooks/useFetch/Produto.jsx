import React, { useEffect } from "react";
import useFetch from "./useFetch";

export default function Produto() {
  const { request, data, loading, error } = useFetch();

  useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(
        "https://ranekapi.origamid.dev/json/api/produto/"
      );
      console.log(response, json);
    }
    fetchData();
  }, [request]);

  if (error) return <p>{error}</p>;
  if (loading === true) return <p>Carregando...</p>;
  if (data)
    return (
      <div>
        <h3>Produtos</h3>
        {data.map((produto) => (
          <li key={produto.id}>{produto.nome}</li>
        ))}
      </div>
    );
  else {
    return null;
  }
}
