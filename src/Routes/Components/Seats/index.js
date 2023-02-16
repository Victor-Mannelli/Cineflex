import React from "react";
import { Models, ModelsDiv, StyledSeat, StyledSeats } from "./style";

export default function Seats({
	seatsApi,
	selectedSeats,
	setSelectedSeats,
	brightness,
}) {
	return (
		<>
			<StyledSeats>
				{seatsApi.seats.map((e) => (
					<Seat
						key={e.id}
						seatNumber={e.name.toString()}
						available={e.isAvailable}
						setSelectedSeats={setSelectedSeats}
						selectedSeats={selectedSeats}
					/>
				))}
			</StyledSeats>
			<Models>
				<ModelsDiv brightness={brightness}>
					<div style={{ background: "#1AAE9E", border: "1px solid #0E7D71" }}>
						{" "}
					</div>
					<p> Selecionado </p>
				</ModelsDiv>
				<ModelsDiv brightness={brightness}>
					<div style={{ background: "#C3CFD9", border: "1px solid #7B8B99" }}>
						{" "}
					</div>
					<p> Disponível </p>
				</ModelsDiv>
				<ModelsDiv brightness={brightness}>
					<div style={{ background: "#FBE192", border: "1px solid #F7C52B" }}>
						{" "}
					</div>
					<p> Indisponível </p>
				</ModelsDiv>
			</Models>
		</>
	);
}
function Seat({ seatNumber, setSelectedSeats, selectedSeats, available }) {
	function handleClick() {
		if (!available) return;

		selectedSeats.includes(seatNumber)
			? setSelectedSeats(selectedSeats.filter((e) => e !== seatNumber))
			: setSelectedSeats([...selectedSeats, seatNumber]);
	}
	return (
		<StyledSeat
			available={available}
			seatNumber={seatNumber}
			selectedSeats={selectedSeats}
			onClick={handleClick}
		>
			<p> {seatNumber}</p>
		</StyledSeat>
	);
}
