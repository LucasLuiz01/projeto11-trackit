import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"
import { GlobalStyle } from "./assets/globalStyle"
import Habits from "./pages/habitos.js/habits"
import Historic from "./pages/habitos.js/historic"
import Today from "./pages/habitos.js/today"
import Registration from "./pages/login/registration"
import Login from "./pages/login/login"

export default function App (){
    return(
        <BrowserRouter>
        <GlobalStyle />
        <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/cadastro" element={<Registration/>} />
        <Route path="/habitos" element={<Habits/>} />
        <Route path="/hoje" element={<Today/>} />
        <Route path="/historico" element={<Historic/>} />


        </Routes>


        </BrowserRouter>
    )
}
const Teste = styled.div`
width: 100vh;
height: 100vw;
background-color: blue;
`