import React from 'react';
import { Link } from 'react-router-dom';
import { DropDownStyle } from './DropdownItems';


const DropDownItemsLinked = ({ onItemClick }) => {

  return (
    <DropDownStyle style={{fontSize:'1.3rem'}}>
      <li onClick={() => onItemClick('today')}>오늘의 안부</li>
      <li onClick={() => onItemClick('simple')}>간단한 안부</li>
      <li onClick={() => onItemClick('special')}>특별한 안부</li>
      <li onClick={() => onItemClick('cute')}>귀여운 안부</li>
    </DropDownStyle>
  );
};

export default DropDownItemsLinked;