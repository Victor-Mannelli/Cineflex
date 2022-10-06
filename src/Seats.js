import styled from "styled-components"
import React from "react"
import { Link } from "react-router-dom"

export default function Seats({seatsApi}) {
    return (
        <>
            <StyledSeats>
                {seatsApi.seats.map(e => 
                    <Link 
                        style={{
                            textDecoration: 'none',
                            color: "inherit"
                        }}
                        key={e.id} 
                        to={`/receipt`}
                    >
                        <Seat seatNumber={e.name} available={e.isAvailable} />
                    </Link>
                )}
            </StyledSeats>
            <Models>
                <ModelsDiv>
                    <div style={{background: "#1AAE9E", border: "1px solid #0E7D71"}} > </div>
                    <p> Selecionado </p>
                </ModelsDiv> 
                <ModelsDiv>
                    <div style={{background: "#C3CFD9", border: "1px solid #7B8B99"}} > </div>
                    <p> Disponível </p>
                </ModelsDiv> 
                <ModelsDiv>
                    <div style={{background: "#FBE192", border: "1px solid #F7C52B"}} > </div>
                    <p> Indisponível </p>
                </ModelsDiv> 
            </Models>
        </>
    )
}
function Seat({seatNumber}){
    return (
        <StyledSeat>
            <p> {seatNumber}</p>
        </StyledSeat>
    )
}
const StyledSeats = styled.div `
    display: flex;
    justify-content:space-evenly;
    flex-wrap: wrap;
    gap: 14px 7px;
    margin-bottom: 15px;
`
const StyledSeat = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 26px;
    height: 26px;
    background-color: ${props => !props.available ? "#C3CFD9" : "#F7C52B"};
    border: ${props => !props.available ? "1px solid #808F9D" : "1px solid #F7C52B;"};
    border-radius: 12px;
`
const Models = styled.div `
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 30px;
`
const ModelsDiv = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div {
        width: 26px;
        height: 26px;
        border-radius: 17px;
        margin-bottom: 10px;
    }
    p {
        font-size: 13px;
        font-family: 'Roboto';
        line-height: 15px;
        letter-spacing: -0.013em;
        color: #4E5A65;
    }
`