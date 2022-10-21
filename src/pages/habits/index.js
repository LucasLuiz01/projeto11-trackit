import Navbar from "../../components/Navbar";
import { Padding, Footer, NenhumHabito, TextHH, Input } from "../../components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styled from "styled-components";
import { useState } from "react";

export default function Habits({login}) {
  const [display, setDisplay] = useState("none");
  console.log("login", login)
  
  function add() {
    setDisplay("");
  }
  return (
    <div style={{ background: "#E5E5E5", height: "100vh" }}>
      <Navbar
        img={
          "https://almeidajunior-prod1.s3.amazonaws.com/prod/uploads/news/5d81505ac6770.jpg"
        }
        text={"TrackIt"}
      />
      <Padding size={"huge"} />

      <StyledAdd>
        <span>Meus hábitos</span> <button onClick={add}>+</button>{" "}
      </StyledAdd>
      <StyledBox display={display}><Input /></StyledBox>
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
