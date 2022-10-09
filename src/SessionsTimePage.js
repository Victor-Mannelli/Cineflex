import styled from "styled-components";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import loading from "./files/loading.gif";

export default function SessionsTimePage({ brightness }) {
	let { id } = useParams();
	const [apiMovieData, setApiMovieData] = useState("");
	const [apiDaysData, setApiDaysData] = useState([]);
	useEffect(() => {
		const promise = axios.get(
			`https://mock-api.driven.com.br/api/v5/cineflex/movies/${id}/showtimes`
		);
		promise.then((answer) => {
			setApiMovieData(answer.data);
			setApiDaysData(answer.data.days);
		});
	}, []);

	if (apiDaysData.length === 0)
		return (
			<Loading>
				{" "}
				<img src={loading} alt="loading" />{" "}
			</Loading>
		);
	return (
		<StyledSessionsTimePage brightness={brightness}>
			<PageTitle>
				<h1> Selecione o horário </h1>
			</PageTitle>
			<AvalableSessions>
				{apiDaysData.map((e) => (
					<Session
						key={e.id}
						weekday={e.weekday}
						date={e.date}
						showtimes={e.showtimes}
					/>
				))}
			</AvalableSessions>
			<SessionsFooter>
				<MoviePoster>
					<img src={apiMovieData.posterURL} alt="Poster" />
				</MoviePoster>
				<h1> {apiMovieData.title}</h1>
			</SessionsFooter>
		</StyledSessionsTimePage>
	);
}

function Session({ weekday, date, showtimes }) {
	return (
		<PlayTime>
			<h1>
				{weekday} - {date}{" "}
			</h1>
			{showtimes.map((e) => (
				<Link key={e.id} to={`/seats/${e.id}`}>
					<button> {e.name} </button>
				</Link>
			))}
		</PlayTime>
	);
}
const StyledSessionsTimePage = styled.div`
	h1 {
		text-align: center;
		font-family: "Roboto";
		font-size: 24px;
		line-height: 28px;
		letter-spacing: 0.04em;
		color: ${(props) => (props.brightness ? "#ffffff" : "#293845")};
	}
`;
const PageTitle = styled.div`
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
const AvalableSessions = styled.div`
	height: 100%;
	margin: 0 0 117px 24px;
	overflow: scroll;
`;
const SessionsFooter = styled.div`
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
const MoviePoster = styled.div`
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
const Loading = styled.div`
	width: 100vw;
	height: 600px;
	display: flex;
	justify-content: center;
	align-items: center;

	img {
		height: 100px;
	}
`;
const PlayTime = styled.div`
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
