import React from 'react';
import { Link } from 'react-router-dom';
import { DropDownStyle } from './DropdownItems';


const DropDownItemsLinked = () => {
  return (
    <DropDownStyle>
      <li><Link to={'/category'} state={{category: 'today'}}>오늘의 안부</Link></li>
      <li><Link to={'/category'} state={{category: 'simple'}}>간단한 안부</Link></li>
      <li><Link to={'/category'} state={{category: 'special'}}>특별한 안부</Link></li>
      <li><Link to={'/category'} state={{category: 'cute'}}>귀여운 안부</Link></li>
    </DropDownStyle>
  );
};

export default DropDownItemsLinked;