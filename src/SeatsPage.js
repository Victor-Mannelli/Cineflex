import styled from "styled-components"
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";
import loading from "./files/loading.gif"
import Seats from "./Seats";

export default function SeatsPage(){
    let { id } = useParams()
    const [seatsApi, setSeatsApi] = useState("")
    useEffect(() => {
      
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${id}/seats`)
        promise.then((answer => setSeatsApi(answer.data)))
    
    }, [])
    
    if (seatsApi.length === 0) return <Loading> <img src={loading} alt="loading" /> </Loading>
    console.log(seatsApi)
    return (
        <StyledSeatsPage>
            <PageTitle>
                <h1> Selecione o(s) assento(s) </h1>
            </PageTitle>
            <Main>
                <Seats seatsApi={seatsApi}/>
                <InputsDiv>
                    <div>
                        <h1>Nome do comprador:</h1>
                        <input placeholder="Digite seu nome..."></input>
                    </div>
                    <div>
                        <h1>CPF do comprador:</h1>
                        <input placeholder="Digite seu CPF..."></input>
                    </div>
                </InputsDiv>
                <SeatReservation>
                    <button> Reservar assento(s) </button>
                </SeatReservation>
            </Main>
            <SessionsFooter>
                <MoviePoster>
                    <img src={seatsApi.movie.posterURL} alt="Poster"/>
                </MoviePoster>
                <div>
                    <h1> {seatsApi.movie.title} </h1>
                    <h1> {seatsApi.day.weekday} - {seatsApi.name} </h1>
                </div>
            </SessionsFooter>
        </StyledSeatsPage>
    )
}
const StyledSeatsPage = styled.div `
    h1 {
        text-align: center;
        font-family: 'Roboto';
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
        color: #293845;
    }
`
const PageTitle = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 110px;
    width: 100%;
`
const Main = styled.div `
    margin: 0 24px 117px 24px;
`
const InputsDiv = styled.div `
    input {
        width: 90vw;
        height: 51px;
        margin-bottom: 10px;
        padding: 0 18px;

        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        outline: none;

        font-family: 'Roboto';
        font-size: 18px;

        ::placeholder {
            font-style: italic;
            color: #AFAFAF;
        }
    }
    h1 {
        text-align: start;
        font-size: 18px;
        line-height: 21px;
    }
`
const SessionsFooter = styled.div `
    position: fixed;
    bottom: 0;
    left: 0;

    display: flex;
    align-items: center;

    min-height: 117px;
    width: 100%;
    padding-left: 10px;
    background-color: #dfe6ed;
    border-top: 1px solid #9EADBA;

    h1 {
        margin-left: 15px;
        text-align: start;
    }
`
const MoviePoster = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 64px;
    height: 89px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;

    img {
        width: 48px;
        height: 72px;
    }
`
const Loading = styled.div `
    width: 100vw;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        height: 100px;
    }
`
const SeatReservation = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 102px;
    padding-bottom: 10px;

    button {
        width: 225px;
        height: 42px;

        background: #E8833A;
        border: none;
        border-radius: 3px;
            
        font-family: 'Roboto';
        font-size: 18px;
        line-height: 21px;
        letter-spacing: 0.04em;
        color: #FFFFFF;
    }
`