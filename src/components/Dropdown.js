import React, { useState } from 'react';
import { DropdownItems } from '.';
import useDropDown from '../hooks/useDropDown';
import down from '../assets/downpoly.svg';
import up from '../assets/uppoly.svg';
import { useLocation } from 'react-router-dom';

const Dropdown = ({ onChangeCategory, mapCategoryKR}) => {
  const [isOpen, ref, onClickHandler] = useDropDown(false);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const [title, setTitle]=useState(mapCategoryKR(queryParams.get('category')));

  const handleItemClick = (category) => {
    setTitle(mapCategoryKR(category));
    console.log(title);
    onChangeCategory(category);
  };

  

  return (
    <div style={{ width: '100%', textAlign: 'center', position: 'relative' }}>
      <div
        ref={ref}
        onClick={onClickHandler}
        style={{
          cursor:'pointer', 
          display: 'flex', 
          justifyContent:'center'}}>
          {title||'오늘의 안부'}
          &ensp;{isOpen ? <img src={up}/> : <img src={down}/>}
      </div>
      {isOpen && <DropdownItems onItemClick={handleItemClick} />}
    </div>
  );
};

export default Dropdown;