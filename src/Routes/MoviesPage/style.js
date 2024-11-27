import styled from "styled-components";

export const StyledMoviePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  padding-bottom: 2rem;

  h1 {
    text-align: center;
    font-family: "Roboto";
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;
    color: ${(props) => (props.brightness ? "#ffffff" : "#293845")};
  }
`;
export const MovieAdvertise = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 9rem;
  height: 12.5rem;
  background: ${(props) => (props.brightness ? "#d0d2d3" : "#FFFFFF")};
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;

  &:hover {
    transform: scale(1.05);
    box-shadow: 1px 7px 7px 0px rgba(255, 255, 255, 0.5);
  }

  img {
    width: 8rem;
    height: 11.5rem;
    border-radius: 3px;
  }
`;
export const Movies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  width: 79rem;

  @media (max-width: 1280px) {
    width: 59rem;
  }
  @media (max-width: 980px) {
    width: 39rem;
  }
  @media (max-width: 680px) {
    width: 29rem;
  }
  @media (max-width: 500px) {
    width: 19rem;
  }
`;
export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: calc(100vh - 3rem);

  img {
    height: 100px;
  }
`;
