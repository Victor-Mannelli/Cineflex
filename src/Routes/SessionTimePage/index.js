import { AvalableSessions, Loading, MoviePoster, PlayTime, SessionsFooter, StyledSessionsTimePage } from "./style";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { PageTitle } from "../../App";
import loading from "../../files/loading.gif";
import React from "react";
import axios from "axios";

export default function SessionsTimePage({ brightness }) {
  let { id } = useParams();
  const [apiMovieData, setApiMovieData] = useState("");
  const [apiDaysData, setApiDaysData] = useState([]);
  useEffect(() => {
    const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${id}/showtimes`);
    promise.then((answer) => {
      setApiMovieData(answer.data);
      setApiDaysData(answer.data.days);
    });
  }, [id]);

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
          <Session key={e.id} weekday={e.weekday} date={e.date} showtimes={e.showtimes} />
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
