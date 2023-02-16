import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { DarkmodeButton, GoBackArrow, StyledHeader } from "./style";

export default function Header({ brightness, setBrightness }) {
	const navigate = useNavigate();
	const location = useLocation();

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
			{location.pathname !== "/" && (
				<GoBackArrow onClick={() => navigate(-1)}>
					{brightness ? (
						<ion-icon name="arrow-undo"></ion-icon>
					) : (
						<ion-icon name="arrow-undo-outline"></ion-icon>
					)}
				</GoBackArrow>
			)}
		</StyledHeader>
	);
}
