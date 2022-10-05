import styled from "styled-components";
import {Link} from "react-router-dom";
import React from 'react';

export default function Header(){
    return (
        <Link to="/" >
            <StyledHeader>
                <h1> CINEFLEX </h1>
            </StyledHeader>
        </Link>
    )
}
const StyledHeader = styled.div `
    position: fixed;
    left: 0px;
    top: 0px;

    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 100vw;
    min-height: 67px;
    background: #C3CFD9;

    h1 {
        color: #E8833A;
        font-family: 'Roboto';
        font-size: 34px;
        line-height: 40px;
    }
`