import styled from "styled-components";
import React from "react";
import { Link, useNavigate} from "react-router-dom";

export default function Header({brightness, setBrightness}) {
	const navigate = useNavigate()
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
			</DarkmodeButton>
            <GoBackArrow onClick={() => navigate(-1)}>
                {brightness ? (
                        <ion-icon name="arrow-undo"></ion-icon>
                    ) : (
                        <ion-icon name="arrow-undo-outline"></ion-icon>
                    )}
            </GoBackArrow>
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

	width: 100vw;
	min-height: 67px;
	background: #d0d2d3;
	box-shadow: 0 0 10px 10px rgba(50, 50, 93, 0.25);

	h1 {
		color: #293845;
		font-family: "Roboto";
		font-size: 34px;
		line-height: 40px;
	}
`;
const DarkmodeButton = styled.div`
	position: fixed;
	right: 10px;
	font-size: 30px;
    padding-top: 4px;
	cursor: pointer;
`;
const GoBackArrow = styled.div `
    position: fixed;
    left: 10px;
    font-size: 30px;
    padding-top: 4px;
	cursor: pointer;
`
