import React from "react";
import styled from "styled-components";
import "./Box.css"


function Box(props) {
  const BoxContainer = styled.div`
    width: 230px;
    background-color: ${props.bgcolor};
    height: 70%;
    margin-left: 30px;
    margin-top: 7vh;
    font-family: "Roboto Slab", serif;
  `;
  return (
    <div>
      <BoxContainer>
        <center>
        <img className="iconBox" src={props.icon}/> 
          <h2 className="boxp">
            {props.heading}
          </h2>
          <p style={{color:"white"}}>{props.para}</p>
        </center>
      </BoxContainer>
      
    </div>
  );
}

export default Box;
