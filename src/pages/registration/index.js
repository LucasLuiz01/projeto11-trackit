
import { Button, Column, Input, Logo, Link, Padding } from "../../components";

export default function Registration() {
  return (
    <Column>
      <Padding size="huge" />
      <Logo width={"180px"} height={"178.38px"} />
      <Padding size="big" />
      <Input placeholder="email" type="email" />
      <Padding />
      <Input placeholder="senha" type="password" />
      <Padding />
      <Input placeholder="nome" type="text" />
      <Padding />
      <Input placeholder="foto" type="text" />
      <Padding />
      <Button text="Cadastrar" />
      <Padding size="big" />
      <Link text="Já tem uma conta? Faça login!" />
    </Column>
  );
}