import Header from "./Header";
import GlobalStyles from "./GlobalStyles";
import MoviesPage from "./MoviesPage";
import SessionTimePage from "./SessionTimePage";
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
          <Route path="/SessionTime" element={< SessionTimePage/>} />
          <Route path="/Seats" element={< SeatsPage/>} />
          <Route path="/Receipt" element={< ReceiptPage/>} />
        </Routes>
      </Main>
        <GlobalStyles />
    </BrowserRouter>
  );
}
const Main = styled.div `
  margin-top: 67px;
`