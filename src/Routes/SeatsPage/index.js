import { InputsDiv, Loading, Main, MoviePoster, SeatReservation, SessionsFooter, StyledSeatsPage } from "./style";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { PageTitle } from "../../App";
import loading from "../../files/loading.gif";
import Seats from "../Components/Seats";
import React from "react";
import axios from "axios";

export default function SeatsPage({ brightness }) {
  let { id } = useParams();
  const [seatsApi, setSeatsApi] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [cpfInput, setCpfInput] = useState("");
  const [selectedSeats, setSelectedSeats] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${id}/seats`).then((answer) => setSeatsApi(answer.data));
  }, [id]);

  function HandleSubmit(element) {
    element.preventDefault();
    if (selectedSeats.length === 0) return;

    const reservation = { ids: selectedSeats, name: nameInput, cpf: cpfInput };
    axios
      .post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", reservation)
      .then(
        navigate("/receipt", {
          state: { seatsApi, nameInput, cpfInput, selectedSeats },
        })
      )
      .catch((error) => console.log(error.response.data));
  }

  if (seatsApi.length === 0) {
    return (
      <Loading>
        <img src={loading} alt="loading" />
      </Loading>
    );
  }
  return (
    <StyledSeatsPage brightness={brightness}>
      <PageTitle>
        <h1> Selecione o(s) assento(s) </h1>
      </PageTitle>
      <Main>
        <Seats brightness={brightness} seatsApi={seatsApi} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} />
        <form onSubmit={HandleSubmit}>
          <InputsDiv brightness={brightness}>
            <div>
              <label htmlFor="name"> Nome do comprador: </label>
              <input required name="name" type="text" onChange={(e) => setNameInput(e.target.value)} placeholder="Digite seu nome..."></input>
            </div>
            <div>
              <label htmlFor="CPF"> CPF do comprador: </label>
              <input required name="CPF" type="number" onChange={(e) => setCpfInput(e.target.value)} placeholder="Digite seu CPF..."></input>
            </div>
          </InputsDiv>
          <SeatReservation>
            <button type="submit"> Reservar assento(s) </button>
          </SeatReservation>
        </form>
      </Main>
      <SessionsFooter>
        <MoviePoster>
          <img src={seatsApi.movie.posterURL} alt="Poster" />
        </MoviePoster>
        <div>
          <h1> {seatsApi.movie.title} </h1>
          <h1>
            {" "}
            {seatsApi.day.weekday} - {seatsApi.name}{" "}
          </h1>
        </div>
      </SessionsFooter>
    </StyledSeatsPage>
  );
}
