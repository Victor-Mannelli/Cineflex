import styled from "styled-components";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import loading from "./files/loading.gif";
import Seats from "./Seats";

export default function SeatsPage({ brightness }) {
	let { id } = useParams();
	const [seatsApi, setSeatsApi] = useState("");
	const [nameInput, setNameInput] = useState("");
	const [cpfInput, setCpfInput] = useState("");
	const [selectedSeats, setSelectedSeats] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get(
				`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${id}/seats`
			)
			.then((answer) => setSeatsApi(answer.data));
	}, []);

	function HandleSubmit(element) {
		element.preventDefault();
		if (selectedSeats.length === 0) return

		const reservation = { ids: selectedSeats, name: nameInput, cpf: cpfInput };
		axios
			.post(
				"https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",
				reservation
			)
			.then(
				navigate("/receipt", {
					state: { seatsApi, nameInput, cpfInput, selectedSeats },
				})
			)
			.catch((error) => console.log(error.response.data));
	}

	if (seatsApi.length === 0)
		return (
			<Loading>
				{" "}
				<img src={loading} alt="loading" />{" "}
			</Loading>
		);
	return (
		<StyledSeatsPage brightness={brightness}>
			<PageTitle>
				<h1> Selecione o(s) assento(s) </h1>
			</PageTitle>
			<Main>
				<Seats
					brightness={brightness}
					seatsApi={seatsApi}
					selectedSeats={selectedSeats}
					setSelectedSeats={setSelectedSeats}
				/>
				<form onSubmit={HandleSubmit}>
					<InputsDiv brightness={brightness}>
						<div>
							<label htmlFor="name"> Nome do comprador: </label>
							<input
								required
								name="name"
								type="text"
								onChange={(e) => setNameInput(e.target.value)}
								placeholder="Digite seu nome..."
							></input>
						</div>
						<div>
							<label htmlFor="CPF"> CPF do comprador: </label>
							<input
								required
								name="CPF"
								type="number"
								onChange={(e) => setCpfInput(e.target.value)}
								placeholder="Digite seu CPF..."
							></input>
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
					<h1> {seatsApi.day.weekday} - {seatsApi.name} </h1>
				</div>
			</SessionsFooter>
		</StyledSeatsPage>
	);
}
const StyledSeatsPage = styled.div`
	h1 {
		text-align: center;
		font-family: "Roboto";
		font-size: 24px;
		line-height: 28px;
		letter-spacing: 0.04em;
		color: ${(props) => (props.brightness ? "#ffffff" : "#293845")};
	}
`;
const PageTitle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	height: 110px;
	width: 100%;
`;
const Main = styled.div`
	margin: 0 24px 117px 24px;
`;
const InputsDiv = styled.div`
	input {
		width: 90vw;
		height: 51px;
		margin: 5px 0 10px 0;
		padding: 0 18px;

		background: #ffffff;
		border: 1px solid #d5d5d5;
		border-radius: 3px;
		outline: none;

		font-family: "Roboto";
		font-size: 18px;

		::placeholder {
			font-style: italic;
			color: #afafaf;
		}
	}
	label {
		color: ${(props) => (props.brightness ? "#ffffff" : "#293845")};
		text-align: start;
		font-size: 18px;
		line-height: 21px;
	}
`;
const SessionsFooter = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;

	display: flex;
	align-items: center;

	min-height: 117px;
	width: 100%;
	padding-left: 10px;
	background-color: #d0d2d3;
	border-top: 1px solid #9eadba;

	h1 {
		margin-left: 15px;
		text-align: start;
	}
`;
const MoviePoster = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 64px;
	height: 89px;
	background: #ffffff;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
	border-radius: 2px;

	img {
		width: 48px;
		height: 72px;
	}
`;
const Loading = styled.div`
	width: 100vw;
	height: 600px;
	display: flex;
	justify-content: center;
	align-items: center;

	img {
		height: 100px;
	}
`;
const SeatReservation = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 102px;
	padding-bottom: 10px;

	button {
		width: 225px;
		height: 42px;

		background: #e8833a;
		border: none;
		border-radius: 3px;

		font-family: "Roboto";
		font-size: 18px;
		line-height: 21px;
		letter-spacing: 0.04em;
		color: #ffffff;
	}
`;
