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
			<DarkmodeButton onClick={() => setBrightness((prevState) => !prevState)}>
				{brightness ? (
					<ion-icon name="moon" />
				) : (
					<ion-icon name="sunny" />
				)}
			</DarkmodeButton>
			{location.pathname !== "/" && (
				<GoBackArrow onClick={() => navigate(-1)}>
					{brightness ? (
						<ion-icon name="arrow-undo" />
					) : (
						<ion-icon name="arrow-undo-outline" />
					)}
				</GoBackArrow>
			)}
		</StyledHeader>
	);
}
