import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import React from 'react';
import {Link} from "react-router-dom"

export default function MoviesPage({brightness}) {
    const [apiMovieList, setApiMovieList] = useState([])
    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promise.then(answer => setApiMovieList(answer.data))

    }, [])

    return (
        <StyledMoviePage brightness={brightness} >
            <PageTitle>
                <h1> Selecione o filme </h1>
            </PageTitle>
            <Movies brightness={brightness}>
                {apiMovieList.map(e => 
                <Link key={e.id} to={`/sessions/${e.id}`}>
                    < Movie image={e.posterURL} brightness={brightness} />
                </Link>
                )}
            </Movies>
        </StyledMoviePage>
    )
}
function Movie({ image, brightness }) {
    return (
        <MovieAdvertise brightness={brightness}>
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
        color: ${props => props.brightness ? "#ffffff" : "#293845"};
    }
`
const MovieAdvertise = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 145px;
    height: 209px;
    background: ${props => props.brightness ? "#d0d2d3" : "#FFFFFF"};
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