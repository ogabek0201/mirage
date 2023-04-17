import React from "react";
import styled from "styled-components";

const StyledSections = styled.div`
  background-image: url(${(props) => props.bgi});
  background-color: ${(props) => props.bg};
  background-size: cover;
  background-repeat: no-repeat;
  height: ${(props) => props.h || "auto"};
  margin: ${({ m }) => m || "0"};
  padding:${({p})=>p||'0'};

  @media (min-width: 768px) {
    height: auto;
  }

  @media 
`;

const StyledContainer = styled.div`
  max-width: 1150px;
  padding: 0 25px;
  margin: 0 auto;

  @media (max-width: 1050px) {
    overflow: hidden;
  }
`;

const Container = ({ children, ...p }) => {
  return (
    <StyledSections {...p}>
      <StyledContainer>{children}</StyledContainer>
    </StyledSections>
  );
};

export default Container;
