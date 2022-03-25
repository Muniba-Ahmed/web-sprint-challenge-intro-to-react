// Write your Character component here
import React from "react";
import styled from "styled-components";

//add styled components here

const Character = (props) => {
  const { info } = props;

  return (
    <div className="characterContainer">
      <div className="characters">
        <p>{info.name}</p>
      </div>
    </div>
  );
};

export default Character;
