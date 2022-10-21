import { Link } from "react-router-dom";
import { Button, Column, Input, Logo, Links, Padding } from "../../components";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Registration() {
  const [foto, setFoto] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const navigate = useNavigate();
  const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up" 
  function cadastro(e) {
    e.preventDefault();
    console.log("email", email);
   const promisse = axios.post(url,{
      email: `${email}`,
      name: `${nome}`,
      image: `${foto}`,
      password: `${senha}`,
    })
    promisse.then((resposta)=> {
      console.log("sucesso", resposta.data)
      navigate("/")
    })
    promisse.catch((err)=> {
      console.log(err.response.data)
    })
  }
  return (
    <Column>
      <Padding size="huge" />
      <Logo width={"180px"} height={"178.38px"} />
      <Padding size="big" />
      <form onSubmit={cadastro}>
        <Input
          placeholder="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Padding />
        <Input
          placeholder="senha"
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <Padding />
        <Input
          placeholder="nome"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <Padding />
        <Input
          placeholder="foto"
          type="text"
          value={foto}
          onChange={(e) => setFoto(e.target.value)}
        />
        <Padding />
        <Button type="submit" text="Cadastrar" />
      </form>
      <Padding size="big" />
      <Link to="/">
        <Links text="Já tem uma conta? Faça login!" />
      </Link>
    </Column>
  );
}

