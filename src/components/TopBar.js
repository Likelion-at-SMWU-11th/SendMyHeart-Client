import React from 'react';
import styled from 'styled-components';

const TopBar = (props) => {
  return <Container>{props.children}</Container>;
};

const Container = styled.div`
  border: 0.5px solid #e1e1e1;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(225, 225, 225, 0.25);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  font-size: 1.4rem;
  font-weight: 500;

  width: 100%;
  height: 3.75rem;
  padding: 1rem 0;
  box-sizing: border-box;

  form {
    color: #d9d9d9;
    font-size: 18px;
    color: #d9d9d9;

    font-family: Pretendard Variable;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    position: absolute;
    right: 15px;
    line-height: 100%;
  }
`;

export default TopBar;
