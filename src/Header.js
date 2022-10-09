import styled from "styled-components";
import React from "react";
import { Link, useLocation, useNavigate} from "react-router-dom";

export default function Header({brightness, setBrightness}) {
	const navigate = useNavigate()
	const location = useLocation()

	return (
		<StyledHeader>
			<Link to="/">
				<h1> CINEFLEX </h1>
			</Link>
			<DarkmodeButton>
				{brightness ? (
					<ion-icon
						onClick={() => setBrightness(false)}
						name="radio-button-on-outline"
					></ion-icon>
				) : (
					<ion-icon
						onClick={() => setBrightness(true)}
						name="radio-button-off-outline"
					></ion-icon>
				)}
				<p> Tema </p>
			</DarkmodeButton>
			{location.pathname !== "/" && 
				<GoBackArrow onClick={() => navigate(-1)}>
					{brightness ? (
							<ion-icon name="arrow-undo"></ion-icon>
						) : (
							<ion-icon name="arrow-undo-outline"></ion-icon>
						)}
				</GoBackArrow>
			}
		</StyledHeader>
	);
}
const StyledHeader = styled.div`
	position: fixed;
	left: 0px;
	top: 0px;

	display: flex;
	justify-content: center;
	align-items: center;

	width: 100%;
	height: 37px;
	background: #d0d2d3;
	box-shadow: 0 0 10px 10px rgba(50, 50, 93, 0.25);

	h1 {
		color: #293845;
		font-family: "Roboto";
		font-size: 18px;
		line-height: 40px;
	}
	@media (max-width: 600px) {
		height: 67px;
		h1 {
			font-size: 34px;
		}
	}
`;
const DarkmodeButton = styled.div`
	position: fixed;
	right: 10px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 17px;
    padding-top: 4px;
	cursor: pointer;

	p {
		color: #293845;
		font-family: "Roboto";
		padding-top: 2px;
		font-size: 10px;
	}

	@media (max-width: 600px) {
		font-size: 30px;
		
		p {
			font-size: 15px;
		}
	}
`;
const GoBackArrow = styled.div `
    position: fixed;
    left: 10px;
    font-size: 23px;
    padding-top: 4px;
	cursor: pointer;
	@media (max-width: 600px) {
		font-size: 30px;
	}
`
