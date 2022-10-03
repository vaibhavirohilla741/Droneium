import AnimatedNumber from "animated-number-react";
import "./NumberAnimation.css";
import styled from "styled-components";

import React, { useState } from "react";

function NumberAnimation(props) {
  const NumberContainer = styled.div`
    height: 25vh;
    background-color: ${props.color};
    color: ${props.textColor};
    margin: 3px;
  `;

  const [value, setValue] = useState(props.value);
  let formatValue = (value) => `${value.toFixed(0)}K`;
  return (
    <NumberContainer>
      <center>
        <AnimatedNumber
          value={value}
          formatValue={formatValue}
          duration={3000}
          easing={"linear"}
          className={"numberAnimation"}
        ></AnimatedNumber><center><p style={{margin:"none",fontWeight:"500"}}>{props.para}</p></center>
      </center>
    </NumberContainer>
  );
}

export default NumberAnimation;
