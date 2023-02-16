import styled from "styled-components";

export const StyledSessionsTimePage = styled.div`
	h1 {
		text-align: center;
		font-family: "Roboto";
		font-size: 24px;
		line-height: 28px;
		letter-spacing: 0.04em;
		color: ${(props) => (props.brightness ? "#ffffff" : "#293845")};
	}
`;
export const PageTitle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	height: 90px;
	width: 100%;

	@media (max-width: 600px) {
		height: 110px;
	}
`;
export const AvalableSessions = styled.div`
	height: 100%;
	margin: 0 24px 70px 24px;
	overflow: scroll;
	@media (max-width: 600px) {
		margin: 0 24px 117px 24px;
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
export const PlayTime = styled.div`
	h1 {
		text-align: start;
		text-decoration: none;
		margin-bottom: 25px;
	}
	button {
		width: 83px;
		height: 43px;
		background: #e8833a;
		border-radius: 3px;
		border: none;
		margin: 0 5px 25px 0;
		color: white;
	}
`;
