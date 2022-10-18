import styled from "styled-components"
import Logo from "../../assets/Logo.jpg"
export default function Login(){
    return(
        <Body>
        <Img src={Logo} />
        <input></input>
        </Body>
    )
}
const Body = styled.div`
width: 100vw;
min-height: 100vh;
flex-direction: column;
align-items: center;

`
const Img = styled.img`
width: 180px;
height: 178.38px;
padding-bottom: 200px;

`