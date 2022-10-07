import styled from "styled-components";
import React from "react";

export default function Seats({ seatsApi, selectedSeats, setSelectedSeats, brightness}) {
  return (
    <>
      <StyledSeats>
        {seatsApi.seats.map((e) => (
          <Seat
            key={e.id}
            seatNumber={e.name.toString()}
            available={e.isAvailable}
            setSelectedSeats={setSelectedSeats}
            selectedSeats={selectedSeats}
          />
        ))}
      </StyledSeats>
      <Models>
        <ModelsDiv brightness={brightness}>
          <div style={{ background: "#1AAE9E", border: "1px solid #0E7D71" }}>
            {" "}
          </div>
          <p> Selecionado </p>
        </ModelsDiv>
        <ModelsDiv brightness={brightness}>
          <div style={{ background: "#C3CFD9", border: "1px solid #7B8B99" }}>
            {" "}
          </div>
          <p> Disponível </p>
        </ModelsDiv>
        <ModelsDiv brightness={brightness}>
          <div style={{ background: "#FBE192", border: "1px solid #F7C52B" }}>
            {" "}
          </div>
          <p> Indisponível </p>
        </ModelsDiv>
      </Models>
    </>
  );
}
function Seat({ seatNumber, setSelectedSeats, selectedSeats, available }) {

    function handleClick(){
        if (!available) return 
        
        selectedSeats.includes(seatNumber)
          ? setSelectedSeats(selectedSeats.filter((e) => e !== seatNumber))
          : setSelectedSeats([...selectedSeats, seatNumber]);
    }
    return (
    <StyledSeat
      available={available}
      seatNumber={seatNumber}
      selectedSeats={selectedSeats}
      onClick={handleClick}
    >
      <p> {seatNumber}</p>
    </StyledSeat>
  );
}
const StyledSeats = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 14px 7px;
  margin-bottom: 15px;
`;
const StyledSeat = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) =>
    props.selectedSeats.includes(props.seatNumber)
      ? "rgb(26, 174, 158)"
      : props.available
      ? "rgb(195, 207, 217)"
      : "rgb(251, 225, 146)"
    };

  border: ${(props) =>
    props.selectedSeats.includes(props.seatNumber)
      ? "rgb(26, 174, 158)"
      : props.available
      ? "rgb(195, 207, 217)"
      : "rgb(251, 225, 146)"
    };

  width: 26px;
  height: 26px;
  border-radius: 12px;
`;
const Models = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 30px;
`;
const ModelsDiv = styled.div`
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
    font-family: "Roboto";
    line-height: 15px;
    letter-spacing: -0.013em;
    color: ${(props) => (props.brightness ? "#ffffff" : "#293845")};
  }
`;
