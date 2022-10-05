import styled from "styled-components";
import React from 'react';

export default function SessionTimePage(){
    return (
        <StyledSessionTimePage>
            <H1div>
                <h1> Selecione o horário </h1>
            </H1div>
            <AvalableSessions>

            </AvalableSessions>
        </StyledSessionTimePage>
    )
}
const StyledSessionTimePage = styled.div `
    h1 {
        text-align: center;
        font-family: 'Roboto';
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
        color: #293845;
    }
`
const H1div = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 110px;
    width: 100%;
`
const AvalableSessions = styled.div `
    height: 100%;
`