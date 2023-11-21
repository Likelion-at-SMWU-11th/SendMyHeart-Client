import React from 'react';
import { DropDownItemsLinked } from '.';
import down from '../assets/downpoly.svg';
import up from '../assets/uppoly.svg';
import useDropDown from '../hooks/useDropDown';


const DropdownExtended = ({categoryKR}) => {

  const [isOpen, ref, onClickHandler]=useDropDown(false);

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
      {isOpen && <DropDownItemsLinked />}
    </div>
  );
};

export default DropdownExtended;