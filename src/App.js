import darkBG from "./files/darkmodeBackground.jpg"
import background from "./files/background.jpg"
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import React, {useState} from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Routes/Components/Header";
import MoviesPage from "./Routes/MoviesPage";
import SessionsTimePage from "./Routes/SessionTimePage";
import SeatsPage from "./Routes/SeatsPage";
import ReceiptPage from "./Routes/ReceiptPage";

export default function App() {
  const [darkmode, setDarkmode] = useState(false);

  return (
    <BrowserRouter>
      <Header darkmode={darkmode} setDarkmode={setDarkmode}/>
      <Main darkmode={darkmode}>
        <Routes>
          <Route path="/" element={< MoviesPage darkmode={darkmode} />} />
          <Route path="/sessions/:id" element={< SessionsTimePage darkmode={darkmode}/>} />
          <Route path="/seats/:id" element={< SeatsPage darkmode={darkmode}/>} />
          <Route path="/receipt" element={< ReceiptPage darkmode={darkmode}/>} />
          <Route path="/*" element={<h1> ERRO 404 </h1>} />
        </Routes>
      </Main>
      <GlobalStyles />
    </BrowserRouter>
  );
}
const Main = styled.div `
  min-height: calc(100vh - 3rem);
  margin-top: 3rem;
  background: ${props => props.darkmode ? `url(${darkBG})` : `url(${background})`} ;
  object-fit: fill;
`
export const PageTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1.5rem;
`;