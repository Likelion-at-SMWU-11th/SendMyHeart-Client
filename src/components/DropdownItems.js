import React from 'react';
import { styled } from 'styled-components';

const DropdownItems = ({ onItemClick }) => {
  
  return (
    <DropDownStyle>
      <li onClick={() => onItemClick('오늘의 안부','today')}>오늘의 안부</li>
      <li onClick={() => onItemClick('간단한 안부','simple')}>간단한 안부</li>
      <li onClick={() => onItemClick('특별한 안부','special')}>특별한 안부</li>
      <li onClick={() => onItemClick('귀여운 안부','cute')}>귀여운 안부</li>
    </DropDownStyle>
  );
};

const DropDownStyle=styled.ul`
  margin: 0px;
  width: 100%;

  position: absolute;
  top: 2.7rem;
  border-top: 1px solid #D9D9D9;
  border-radius: 0px 0px 15px 15px;
  
  overflow: hidden;
  background: #fff;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);

  li {
    padding: 0.7rem;
  }
  
  li:hover {
    cursor: pointer;
    background: #D9D9D9;
  }
`;

export default DropdownItems;
export {DropDownStyle}