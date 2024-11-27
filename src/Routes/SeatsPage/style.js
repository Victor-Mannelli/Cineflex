import styled from "styled-components";

export const StyledSeatsPage = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h1 {
		text-align: center;
		font-family: "Roboto";
		font-size: 24px;
		line-height: 28px;
		letter-spacing: 0.04em;
		color: ${(props) => (props.brightness ? "#ffffff" : "#293845")};
	}
`;

export const Main = styled.div`

	width: 450px;
	height: 100%;
	margin: 0 24px 80px 24px;
	
	@media (max-width: 600px) {
		width: 80vw;
		margin: 0 24px 117px 24px;
	}
`;
export const InputsDiv = styled.div`
	input {
		width: 450px;
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
	div {
		display: flex;
		flex-direction: column;
	}
	label {
		color: ${(props) => (props.brightness ? "#ffffff" : "#293845")};
		text-align: start;
		font-size: 18px;
		line-height: 21px;
	}
	
	@media (max-width: 600px) {
		input {
			width: 80vw;
		}
	}
`;
export const SessionsFooter = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;

	display: flex;
	align-items: center;

	min-height: 70px;
	width: 100%;
	padding-left: 10px;
	border-top: 1px solid #9eadba;
	background: #d0d2d3;

	h1 {
		margin-left: 15px;
		text-align: start;
        font-size: 18px;
	}
	@media (max-width: 600px) {
		min-height: 117px;
        h1 {
            font-size: 24px;
        }
	}
`;
export const MoviePoster = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 44px;
	height: 59px;
	background: #ffffff;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
	border-radius: 2px;

	img {
		width: 38px;
		height: 52px;
	}
    
	@media (max-width: 600px) {
		width: 64px;
		height: 89px;

		img {
			width: 48px;
			height: 72px;
		}
	}
`;
export const Loading = styled.div`
	width: 100vw;
	height: 600px;
	display: flex;
	justify-content: center;
	align-items: center;

	img {
		height: 100px;
	}
`;
export const SeatReservation = styled.div`
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
