import styled from "styled-components"
import React from 'react';

export default function SeatsPage(){
    return (
        <StyledSeatsPage>
            <PageTitle>
                <h1> Selecione o(s) assentos(s) </h1>
            </PageTitle>
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