import React from "react";
import { Link, useLocation } from "react-router-dom";
import { InfoDiv, StyledReceiptPage, HomeButtonDiv } from "./style";
import { PageTitle } from "../../App"

export default function ReceiptPage({ brightness }) {
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
