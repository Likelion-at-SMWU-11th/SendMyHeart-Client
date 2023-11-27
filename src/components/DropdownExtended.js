import React from 'react';
import { DropDownItemsLinked } from '.';
import down from '../assets/downpoly.svg';
import up from '../assets/uppoly.svg';
import useDropDown from '../hooks/useDropDown';
import { useNavigate } from 'react-router-dom';


const DropdownExtended = ({categoryKR}) => {

  const [isOpen, ref, onClickHandler]=useDropDown(false);
  const navigator=useNavigate();

  const handleItemClick = (category) => {
    navigator(`/category?category=${category}`);
  };

  return (
    <div style={{width:'100%', textAlign:'center', position:'relative'}}>
      <div
        ref={ref}
        onClick={onClickHandler}
        style={{
          cursor:'pointer', 
          display: 'flex', 
          justifyContent:'center'}}>
          {categoryKR}
          &ensp;{isOpen ? <img src={up}/> : <img src={down}/>}
      </div>
      {isOpen && <DropDownItemsLinked onItemClick={handleItemClick}/>}
    </div>
  );
};

export default DropdownExtended;