import React from "react";
import { InfoDiv, StyledReceiptPage, HomeButtonDiv, StyledReceipt } from "./style";
import { Link, useLocation } from "react-router-dom";
import { PageTitle } from "../../App"

export default function ReceiptPage({ darkmode }) {
	const { state } = useLocation();

	return (
		<StyledReceiptPage darkmode={darkmode}>
			<StyledReceipt darkmode={darkmode}>
				<PageTitle>
					<h1> Pedido feito com sucesso </h1>
				</PageTitle>
				<InfoDiv darkmode={darkmode}>
					<h1> Filme e sessão </h1>
					<div>
						<p>{state.seatsApi.movie.title}</p>
						<p>
							{state.seatsApi.day.weekday} - {state.seatsApi.name}
						</p>
					</div>
				</InfoDiv>
				<InfoDiv darkmode={darkmode}>
					<h1> Ingressos </h1>
					<div>
						{state.selectedSeats.map((e) => (
							<p key={e}> Assento {e} </p>
						))}
					</div>
				</InfoDiv>
				<InfoDiv darkmode={darkmode}>
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
			</StyledReceipt>
		</StyledReceiptPage>
	);
}
