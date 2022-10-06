import Header from "./Header";
import GlobalStyles from "./GlobalStyles";
import MoviesPage from "./MoviesPage";
import SessionsTimePage from "./SessionsTimePage";
import SeatsPage from "./SeatsPage";
import ReceiptPage from "./ReceiptPage";

import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={< MoviesPage/>} />
          <Route path="/sessions/:id" element={< SessionsTimePage/>} />
          <Route path="/seats/:id" element={< SeatsPage/>} />
          <Route path="/receipt" element={< ReceiptPage/>} />
          <Route path="/*" element={<h1> ERRO 404 </h1>} />
        </Routes>
      </Main>
        <GlobalStyles />
    </BrowserRouter>
  );
}
const Main = styled.div `
  margin-top: 67px;
`