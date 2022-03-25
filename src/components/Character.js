// Write your Character component here
import React from "react";
import styled, { keyframes } from "styled-components";

//add styled components here

const kf = keyframes`
50% {
    transform: scale(0.8);
}
100% {
    opacity: 1;
    transform: scale(1) rotate(360deg);
};
`;

const Wrapper = styled.div`
  margin: 0 100px;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 5px dotted black;
  border-radius: 20px;
  color: orangered;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: purple;
  }

  transform: scale(2);
  opacity: 0;
  animation: ${kf} 2s ease-in-out forwards;
`;

const Character = (props) => {
  //   const { jedis } = props;

  return (
    <Wrapper className="characterContainer">
      <h2> Character Name: {props.info.name}</h2>
      <p> Height: {props.info.height}</p>
      <p>Mass: {props.info.mass}</p>
    </Wrapper>
  );
};

export default Character;
