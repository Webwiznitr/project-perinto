import React from "react";
import styled from "styled-components";


const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoText = styled.h2`
  font-size: 18px;
  margin: 0;
  margin-left: 4px;
  color: royalblue;
  font-weight: 500;

`;

export function Logo(props) {
  return (
    <LogoWrapper>
      <LogoText>Webwiz</LogoText>
    </LogoWrapper>
  );
}
