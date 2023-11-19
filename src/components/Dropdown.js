import React, { useState } from 'react';
import { DropdownItems } from '.';
import useDropDown from '../hooks/useDropDown';
import down from '../assets/downpoly.svg';
import up from '../assets/uppoly.svg';

const Dropdown = ({ onChangeCategory }) => {
  const [isOpen, ref, onClickHandler] = useDropDown(false);

  const [title, setTitle] = useState('');
  const handleItemClick = (itemText, category) => {
    setTitle(itemText);
    onChangeCategory(category);
  };

  return (
    <div style={{ width: '100%', textAlign: 'center', position: 'relative' }}>
      <div
        ref={ref}
        onClick={onClickHandler}
        style={{
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {title || 'Dropdown'}
        &ensp;{isOpen ? <img src={up} /> : <img src={down} />}
      </div>
      {isOpen && <DropdownItems onItemClick={handleItemClick} />}
    </div>
  );
};

export default Dropdown;
