import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.div`
  background-color: #ffcc70;
  color: #ffffff;
  width: 350px;
  height: 45px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4vh auto;
  cursor: pointer;
`;
const Button = (props) => {
  const { title, onClick } = props;
  return <StyledButton onClick={onClick}>{title || '버튼'}</StyledButton>;
};

export default Button;
