import Navbar from "../../components/Navbar";
import { Padding, Footer, NenhumHabito, TextHH } from "../../components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import Context from "../Context";
import { useContext, useEffect } from "react";
export default function Habits() {
  const { login } = useContext(Context);
  console.log("token", login.token)
  useEffect(()=>{
    
    const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
    const promisse = axios.get(url, {
      headers:{
        Authorization: `Bearer ${login.token}`
      }
    }) 
    promisse.then((sucess)=> {
      console.log("ooooooi", sucess.data)
    })
    promisse.catch((err)=> {
      console.log("ERRRRRR", err.response.data)
    })

  }, [])


  const dias = [
    { id: 0, dia: "D" },
    { id: 1, dia: "S" },
    { id: 2, dia: "T" },
    { id: 3, dia: "Q" },
    { id: 4, dia: "Q" },
    { id: 5, dia: "S" },
    { id: 6, dia: "S" },
  ];
  const [display, setDisplay] = useState("none");
  const [habito, setHabito] = useState("");
  const [diaSemana, setDiaSemana] = useState([]);
  console.log("login", login);

  function add() {
    setDisplay("");
  }
  return (
    <div style={{ background: "#E5E5E5", height: "100vh" }}>
      <Navbar
        img={
          login.image
        }
        text={"TrackIt"}
      />
      <Padding size={"huge"} />

      <StyledAdd>
        <span>Meus hábitos</span> <button onClick={add}>+</button>{" "}
      </StyledAdd>
      <StyledBox display={display}>
        <Padding size={"input"} />

        <StyledInput
          placeholder="nome do hábito"
          type="text"
          value={habito}
          onChange={(e) => setHabito(e.target.value)}
        />
        <Dias>
          {dias.map((d) => (
            <InputDay dias={d.dia} diaSemana={diaSemana} setDiaSemana={setDiaSemana}></InputDay>
          ))}
        </Dias>
        <Botoes>
          <Cancelar onClick={()=>setDisplay("none")}>Cancelar</Cancelar>
          <Confirma>Salvar</Confirma>
        </Botoes>
      </StyledBox>
  
      <NenhumHabito />
      
      <Footer>
        <TextHH text={"Hábitos"} />
        <div
          style={{ width: 91, height: 91, position: "fixed", bottom: "10px" }}
        >
          <CircularProgressbar
            value={60}
            text="Hoje"
            background
            backgroundPadding={6}
            styles={buildStyles({
              backgroundColor: "#3e98c7",
              textColor: "#fff",
              pathColor: "#fff",
              trailColor: "transparent",
            })}
          />
        </div>
        <TextHH />
        <TextHH text={"Histórico"} />
      </Footer>
    </div>
  );
}
function InputDay({ dias, setDiaSemana, diaSemana }) {
  const [selecionado, setSelecionado] = useState(false)
  if(selecionado === false){
    return (
      <InputCheck background={"#FFFFFF"} color={"#DBDBDB"} onClick={()=> {
        setSelecionado(true)
        setDiaSemana(diaSemana.splice(diaSemana.indexOf(dias.id), 1))
        setDiaSemana([...diaSemana])
      }}>{dias}</InputCheck>
    )
  }
if(selecionado === true){
  return (
    <InputCheck background={"#CFCFCF"} color={"#FFFFFF"} onClick={()=> {
      setSelecionado(false)
      setDiaSemana([...diaSemana, dias.id])
    }}>{dias}</InputCheck>
  )
}

  return <InputCheck>{dias}</InputCheck>;
}
const StyledBox = styled.div`
  width: 340px;
  height: 180px;
  background: #ffffff;
  border-radius: 5px;
  margin: auto;
  display: ${(props) => props.display};
`;
const StyledAdd = styled.div`
  height: 85px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126ba5;
    margin-left: 18px;
  }
  button {
    margin-right: 18px;
    width: 40px;
    height: 35px;
    background: #52b6ff;
    border-radius: 4.63636px;
    font-family: "Lexend Deca";
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: normal;
    font-weight: 400;
    font-size: 26.976px;
    color: #ffffff;
  }
`;
const StyledInput = styled.input`
  height: 45px;
  width: 292px;
  border-radius: 5px;
  color: #d4d4d4;
  border: 1px solid #d4d4d4;
  background-color: #ffffff;
  padding: 0px;
  padding-left: 11px;
  margin-left: 17px;

  ::placeholder {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;

    color: #dbdbdb;
  }
`;
const InputCheck = styled.div`
  width: 30px;
  height: 30px;
  background: ${(props) => props.background};
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  text-align: center;
  font-family: "Lexend Deca";
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;
  color: ${(props) => props.color};
  margin-left: 4px;
`;
const Dias = styled.div`
  display: flex;
  margin-left: 13px;
  margin-top: 8px;
`;
const Cancelar = styled.div`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 15.976px;
  line-height: 20px;
  text-align: center;
  color: #52b6ff;
  margin-right: 23px;
`;
const Confirma = styled.button`
  width: 84px;
  height: 35px;
  background: #52b6ff;
  border-radius: 4.63636px;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 15.976px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
`;
const Botoes = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 20px;
  margin-top: 26px;
`;
const Aparecer = styled.div`
display: "none";
`