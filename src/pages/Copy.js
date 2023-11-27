import React, { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { TopBar, BottomNav, DropdownExtended, Dropdown } from '../components';
import logo from '../assets/logo.svg';
import { styled } from 'styled-components';
import { UserContext } from '../App';

const Copy = () => {
  
  const location=useLocation();
  const {user, setUser}=useContext(UserContext);

  const dataText=`${location.state.friendName} 저 ${user.userName}예요~\n${location.state.text}`;

  const handleCopyBtnClick=()=>{
    const txtarea=document.getElementById('txtArea');

    try {
      navigator.clipboard.writeText(txtarea.value)
        .then(() => {
          console.log(txtarea.value);
        })
        .catch((err) => {
          console.error('Clipboard write failed:', err);
        });
    } catch (err) {
      console.error('Clipboard API not available:', err);
    }
  }

  return (
    <div className='container'>
      <TopBar>
        <img src={logo}/>
      </TopBar>
      <div className='content-div' 
        style={{padding: "2.5rem 1.25rem", alignItems:'flex-start'}}>
        <div style={{fontSize:'1.44rem', fontWeight:'500'}}>
          <DropdownExtended categoryKR={location.state.category}/>
        </div>
        <TxtDiv id="txtArea">{dataText}</TxtDiv>
        <CopyBtn onClick={handleCopyBtnClick}>복사하기</CopyBtn>
      </div>
      <BottomNav/>
    </div>
  );
};

const TxtDiv=styled.textarea`
  width: 100%;
  background: #FFF;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  border: none;

  flex: 1; 
  margin: 1.875rem 0;

  padding: 1.25rem;
  box-sizing: border-box;
  color: #000;
  font-size: 1.25rem;
  font-weight: 500;
`;

const CopyBtn=styled.button`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 10px;
  background: #FFCC70;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);

  color: #3E3E3E;
  font-size: 1.25rem;
  font-weight: 300;

  padding: 0.69rem 0;
`;

export default Copy;