import React from "react";
import Input from "../Form2/Input";
import Button from "../Form2/Button";

export default function Form2() {
  return (
    <form>
      <Input id="user" label="Usuário" required />
      <Input id="senha" type="password" label="Senha" />
      <Button />
    </form>
  );
}
