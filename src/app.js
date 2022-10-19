import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./assets/globalStyle";
import { Habits, Historic, Today, Registration, Login } from "./pages";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Registration />} />
        <Route path="/habitos" element={<Habits />} />
        <Route path="/hoje" element={<Today />} />
        <Route path="/historico" element={<Historic />} />
      </Routes>
    </BrowserRouter>
  );
}
