import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import React from 'react';
import {Link} from "react-router-dom"

export default function MoviesPage() {
    const [apiMovieList, setApiMovieList] = useState([])
    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promise.then(answer => setApiMovieList(answer.data))

    }, [])
    
    console.log(apiMovieList)

    return (
        <StyledMoviePage>
            <PageTitle>
                <h1> Selecione o filme </h1>
            </PageTitle>
            <Movies>
                {apiMovieList.map(e => 
                <Link key={e.id} to={`/sessions/${e.id}`}>
                    < Movie image={e.posterURL} />
                </Link>
                )}
            </Movies>
        </StyledMoviePage>
    )
}
function Movie({ image }) {
    return (
        <MovieAdvertise>
            <img src={image} alt="" />
        </MovieAdvertise>
    )
}

const PageTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 110px;
    width: 100%;
`
const StyledMoviePage = styled.div`
    h1 {
        text-align: center;
        font-family: 'Roboto';
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
        color: #293845;
    }
`
const MovieAdvertise = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 145px;
    height: 209px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    margin-bottom: 15px;

    img {
        width: 129px;
        height: 193px;
    }
`
const Movies = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`