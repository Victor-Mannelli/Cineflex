import styled from "styled-components";

export const PageTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 90px;
	width: 100%;

	@media (max-width: 600px) {
		height: 110px;
	}
`
export const StyledMoviePage = styled.div`
    h1 {
        text-align: center;
        font-family: 'Roboto';
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
        color: ${props => props.brightness ? "#ffffff" : "#293845"};
    }
`
export const MovieAdvertise = styled.div`
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
export const Movies = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`
export const Loading = styled.div`
	width: 100vw;
	height: 600px;
	display: flex;
	justify-content: center;
	align-items: center;

	img {
		height: 100px;
	}
`;
