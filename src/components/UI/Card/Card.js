import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  opacity: ${props => (props.disabled ? 0.4 : 1)};
  background: white;
  margin: 8px;
  border: 2px solid var(--primary);
  border-radius: 6px;
  min-height: 300px;
  min-width: 200px;
  color: var(--primary);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  transition: all 0.2s ease-in;

  &:hover {
    color: black;
    transform: scale(1.05);
    transition: all 0.1s ease-in;
  }
`;

const card = props => {
  return <StyledCard disabled={props.disabled}>{props.children}</StyledCard>;
};

export default card;
