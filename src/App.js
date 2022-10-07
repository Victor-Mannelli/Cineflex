import Header from "./Header";
import GlobalStyles from "./GlobalStyles";
import MoviesPage from "./MoviesPage";
import SessionsTimePage from "./SessionsTimePage";
import SeatsPage from "./SeatsPage";
import ReceiptPage from "./ReceiptPage";
import background from "./files/background.jpg"
import darkBG from "./files/darkmodeBackground.jpg"

import React, {useState} from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

export default function App() {
  const [brightness, setBrightness] = useState(false);

  return (
    <BrowserRouter>
      <Header brightness={brightness} setBrightness={setBrightness}/>
      <Main brightness={brightness}>
        <Routes>
          <Route path="/" element={< MoviesPage brightness={brightness} />} />
          <Route path="/sessions/:id" element={< SessionsTimePage brightness={brightness}/>} />
          <Route path="/seats/:id" element={< SeatsPage brightness={brightness}/>} />
          <Route path="/receipt" element={< ReceiptPage brightness={brightness}/>} />
          <Route path="/*" element={<h1> ERRO 404 </h1>} />
        </Routes>
      </Main>
        <GlobalStyles />
    </BrowserRouter>
  );
}
const Main = styled.div `
  margin-top: 67px;
  background: ${props => props.brightness ? `url(${darkBG})` : `url(${background})`} ;
  object-fit: fill;
`