import styled from "styled-components";

export const StyledSeats = styled.div`
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
	gap: 14px 7px;
	margin-bottom: 15px;
`;
export const StyledSeat = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;

	background-color: ${(props) =>
		props.selectedSeats.includes(props.seatNumber)
			? "rgb(26, 174, 158)"
			: props.available
			? "rgb(195, 207, 217)"
			: "rgb(251, 225, 146)"};

	border: ${(props) =>
		props.selectedSeats.includes(props.seatNumber)
			? "rgb(26, 174, 158)"
			: props.available
			? "rgb(195, 207, 217)"
			: "rgb(251, 225, 146)"};

	width: 26px;
	height: 26px;
	border-radius: 12px;
`;
export const Models = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	margin-bottom: 30px;
`;
export const ModelsDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	div {
		width: 26px;
		height: 26px;
		border-radius: 17px;
		margin-bottom: 10px;
	}
	p {
		font-size: 13px;
		font-family: "Roboto";
		line-height: 15px;
		letter-spacing: -0.013em;
		color: ${(props) => (props.brightness ? "#ffffff" : "#293845")};
	}
`;
