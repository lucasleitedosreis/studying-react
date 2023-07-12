import React from "react";
import styles from "./Produto.module.css";

export default function Produto() {
  return (
    <div>
      <h1 className={styles.titulo}>Notebook</h1>
      <p className={styles.preco}>Preço: 2.000</p>
    </div>
  );
}
