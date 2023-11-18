import React from 'react';
import styled from 'styled-components';

const TopBar = (props) => {
  return (
    <Container>
      {props.children}
    </Container>
  );
};

const Container=styled.div`

border: 0.5px solid #E1E1E1;
background: #FFF;
box-shadow: 0px 4px 4px 0px rgba(225, 225, 225, 0.25);

display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

width: 100%;
position: fixed;
top: 0;

font-size: 1.4rem;
font-weight: 500;

padding: 1rem 0;
box-sizing: border-box;
`;

export default TopBar;