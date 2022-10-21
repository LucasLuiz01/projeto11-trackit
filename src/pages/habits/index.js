import Navbar from "../../components/Navbar";
import { AddHab, Padding, Footer, NenhumHabito, TextHH, Body } from "../../components";
import {
    CircularProgressbar,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";
export default function Habits() {
  return (

    <div style={{background: "#E5E5E5", height: "100vh"}} >
      <Navbar
        img={
          "https://almeidajunior-prod1.s3.amazonaws.com/prod/uploads/news/5d81505ac6770.jpg"
        }
        text={"TrackIt"}
      />
      <Padding size={"huge"} />
        
       
      <AddHab />
        <NenhumHabito />
        
       
      <Footer >
      <TextHH text={"Hábitos"} />
        <div style={{ width: 91, height: 91, position: "fixed", bottom: "10px" }}>
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
