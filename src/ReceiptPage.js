import styled from "styled-components";
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function ReceiptPage({brightness}) {
	const { state } = useLocation();

	return (
		<StyledReceiptPage brightness={brightness}>
			<PageTitle>
				<h1> Pedido feito com sucesso </h1>
			</PageTitle>
			<InfoDiv brightness={brightness}>
				<h1> Filme e sessão </h1>
				<div>
					<p>{state.seatsApi.movie.title}</p>
					<p>
						{state.seatsApi.day.weekday} - {state.seatsApi.name}
					</p>
				</div>
			</InfoDiv>
			<InfoDiv brightness={brightness}>
				<h1> Ingressos </h1>
				<div>
					{state.selectedSeats.map((e) => (
						<p key={e}> Assento {e} </p>
					))}
				</div>
			</InfoDiv>
			<InfoDiv brightness={brightness}>
				<h1> Comprador </h1>
				<div>
					{<p> Nome: {state.nameInput} </p>}
					{<p> CPF: {state.cpfInput} </p>}
				</div>
			</InfoDiv>
			<HomeButtonDiv>
				<Link to="/">
					<button> Voltar para Home </button>
				</Link>
			</HomeButtonDiv>
		</StyledReceiptPage>
	);
}
const StyledReceiptPage = styled.div`
	margin: 0 24px;
	height: 100vh;

	h1 {
		text-align: center;
		font-family: "Roboto";
		font-weight: 700;
		font-size: 24px;
		line-height: 28px;
		letter-spacing: 0.04em;
		color: ${props => props.brightness ? "#ffffff" : "#293845"};
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
const InfoDiv = styled.div`
	h1 {
		text-align: start;
		font-weight: 700;
		font-size: 24px;
		line-height: 28px;
		letter-spacing: 0.04em;
		color: ${props => props.brightness ? "#ffffff" : "#293845"};
		margin-bottom: 10px;
	}
	div {
		margin-bottom: 40px;

		p {
			font-family: "Roboto";
			font-size: 22px;
			line-height: 26px;
			letter-spacing: 0.04em;
			color: ${props => props.brightness ? "#ffffff" : "#293845"};
		}
	}
`;
const HomeButtonDiv = styled.div`
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
