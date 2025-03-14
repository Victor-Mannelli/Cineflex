import { Loading, MovieAdvertise, Movies, StyledMoviePage } from "./style";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PageTitle } from "../../App"
import loading from "../../files/loading.gif";
import React from "react";
import axios from "axios";

export default function MoviesPage({ darkmode }) {
  const [apiMovieList, setApiMovieList] = useState([]);

  useEffect(() => {
    const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
    promise.then((answer) => setApiMovieList(answer.data));
  }, []);

  if (apiMovieList.length === 0) {
    return (
      <Loading>
        <img src={loading} alt="loading" />
      </Loading>
    );
  }

  return (
    <StyledMoviePage darkmode={darkmode}>
      <PageTitle>
        <h1> Selecione o filme </h1>
      </PageTitle>
      <Movies darkmode={darkmode}>
        {apiMovieList.map((e) => (
          <Link key={e.id} to={`/sessions/${e.id}`}>
            <Movie image={e.posterURL} darkmode={darkmode} />
          </Link>
        ))}
      </Movies>
    </StyledMoviePage>
  );
}

function Movie({ image, darkmode }) {
  return (
    <MovieAdvertise darkmode={darkmode}>
      <img src={image} alt="" />
    </MovieAdvertise>
  );
}
