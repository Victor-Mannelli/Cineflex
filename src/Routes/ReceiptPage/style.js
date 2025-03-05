import styled from "styled-components";

export const StyledReceiptPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 48px);

  h1 {
    text-align: center;
    font-family: "Roboto";
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;
    color: "#293845";
  }
`;
export const StyledReceipt = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => (props.darkmode ? "#d0d2d3" : "#ffffff")};
  border-radius: 3px;
  gap: 15px;
`;

export const InfoDiv = styled.div`
  padding: 0 15px;
  h1 {
    text-align: center;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;
    margin-bottom: 10px;
  }
  div {
    p {
      text-align: center;
      font-family: "Roboto";
      font-size: 22px;
      line-height: 26px;
      letter-spacing: 0.04em;
      color: "#293845";
    }
  }
  @media (max-width: 600px) {
    h1 {
      text-align: start;
    }
    div {
      p {
        text-align: start;
      }
    }
  }
`;
export const HomeButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 102px;
  padding-bottom: 10px;

  button {
    width: 225px;
    height: 42px;

    background: #e8833a;
    border: none;
    border-radius: 3px;

    font-family: "Roboto";
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.04em;
    color: #ffffff;
  }
  @media (max-width: 600px) {
    button {
      width: 50vw;
    }
  }
`;
