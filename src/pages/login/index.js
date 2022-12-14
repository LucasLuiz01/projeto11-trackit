import { Button, Column, Input, Logo, Links, Padding } from "../../components";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React from "react";
import Context from "../Context";



export default function Login() {
  const [password, setPassWord] = useState("");
  const [emai, setEmai] = useState("");
  const navigate = useNavigate();
  const { setLogin } = useContext(Context);
  const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"
  function login (e) {
    e.preventDefault()
    const promisse = axios.post(url, {
      email: `${emai}`,
      password: `${password}`,
    })
    promisse.then((dados)=>{
      console.log("sucesso", dados.data)
      setLogin(dados.data)
      navigate("/habitos")
    })
    promisse.catch((err)=>{
      console.log(err.response.data)
    })
  }
  return (
    <Column>
      <Padding size="huge" />
      <Logo width={"180px"} height={"178.38px"} />
      <Padding size="big" />
      <form onSubmit={login}>
      <Input placeholder="email" 
      type="email" 
      value={emai}
      onChange={(e) => setEmai(e.target.value)}
      />
      <Padding />
      <Input 
      placeholder="senha"
       type="password"
       value={password}
        onChange={(e) => setPassWord(e.target.value)}
       />
      <Padding />
      <Button text="Entrar" />
      </form>
      <Padding size="big" />
      <Link to="/cadastro"> 
     <Links text="Não tem uma conta? Cadastre-se!" />
     </Link>
    </Column>
  );
}