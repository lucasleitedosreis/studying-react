import React from "react";
import Input from "./Input";
import Button from "./Button";

export default function Form() {
  return (
    <form>
      <p>
        <label htmlFor="nome">Nome</label>
        <Input />
      </p>
      <p>
        <label htmlFor="nome">Email</label>
        <Input />
      </p>
      <Button />
    </form>
  );
}
