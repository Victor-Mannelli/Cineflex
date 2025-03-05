import styled from "styled-components";

export const StyledSessionsTimePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding-bottom: 90px;

  h1 {
    text-align: center;
    font-family: "Roboto";
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;
    color: ${(props) => (props.darkmode ? "#ffffff" : "#293845")};
  }

  @media (max-width: 680px) {
    padding-bottom: 150px;
  }
`;

export const AvalableSessions = styled.div`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  gap: 1rem;

  width: 77rem;

  @media (max-width: 1280px) {
    width: 51rem;
  }
  @media (max-width: 980px) {
    width: 25rem;
  }
  @media (max-width: 680px) {
    justify-content: center;
    width: 100%;
  }
`;
export const SessionsFooter = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;

  display: flex;
  align-items: center;

  min-height: 70px;
  width: 100%;
  padding-left: 10px;
  border-top: 1px solid #9eadba;
  background: #d0d2d3;

  h1 {
    margin-left: 15px;
    text-align: start;
    font-size: 18px;
    color: #293845;
  }
  @media (max-width: 600px) {
    min-height: 117px;
    h1 {
      font-size: 24px;
      color: #293845;
    }
  }
`;
export const MoviePoster = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 44px;
  height: 59px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 2px;

  img {
    width: 38px;
    height: 52px;
  }

  @media (max-width: 600px) {
    width: 64px;
    height: 89px;

    img {
      width: 48px;
      height: 72px;
    }
  }
`;
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
export const PlayTime = styled.div`
  background: ${(props) => (props.darkmode ? "#d0d2d3" : "#ffffff")};
  width: 25rem;
  padding: 1rem;
  border-radius: 5px;

  h1 {
    text-align: start;
    text-decoration: none;
    margin-bottom: 25px;
    color: #293845;
  }
  button {
    width: 83px;
    height: 43px;
    background: #e8833a;
    border-radius: 3px;
    border: none;
    color: white;
  }

  @media (max-width: 680px) {
    width: 90%;
  }
`;

export const HourRappers = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;
