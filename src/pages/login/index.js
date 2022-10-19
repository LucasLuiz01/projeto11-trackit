import { Button, Column, Input, Logo, Link, Padding } from "../../components";

export default function Login() {
  return (
    <Column>
      <Padding size="huge" />
      <Logo width={"180px"} height={"178.38px"} />
      <Padding size="big" />
      <Input placeholder="email" type="email" />
      <Padding />
      <Input placeholder="senha" type="password" />
      <Padding />
      <Button text="Entrar" />
      <Padding size="big" />
      <Link text="Não tem uma conta? Cadastre-se!" />
    </Column>
  );
}