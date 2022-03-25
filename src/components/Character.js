// Write your Character component here
import React from "react";
import styled from "styled-components";

//add styled components here

const Character = (props) => {
  //   const { jedis } = props;

  return (
    <div className="characterContainer">
      <h2>{props.info.name}</h2>
      {/* <p>{props.info.height}</p>
      <p>{props.info.mass}</p> */}
    </div>
  );
};

export default Character;
